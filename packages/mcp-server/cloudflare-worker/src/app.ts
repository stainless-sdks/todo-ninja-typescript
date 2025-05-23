import { Hono } from 'hono';
import {
  layout,
  homeContent,
  parseApproveFormBody,
  renderAuthorizationRejectedContent,
  renderAuthorizationApprovedContent,
  renderLoggedOutAuthorizeScreen,
} from './utils';
import type { OAuthHelpers } from '@cloudflare/workers-oauth-provider';
import { McpOptions, ServerConfig } from 'todo-ninja-mcp/server';

export type Bindings = Env & {
  OAUTH_PROVIDER: OAuthHelpers;
};

export function makeOAuthConsent(config: ServerConfig, defaultOptions?: Partial<McpOptions>) {
  const app = new Hono<{
    Bindings: Bindings;
  }>();

  // Render a basic homepage placeholder to make sure the app is up
  app.get('/', async (c) => {
    const content = await homeContent(c.req.raw);
    return c.html(layout(content, 'Home', config));
  });

  app.get('/demo', async (c) => {
    const content = await renderLoggedOutAuthorizeScreen(config, {} as any, defaultOptions);
    return c.html(layout(content, 'Authorization', config));
  });

  app.get('/authorize', async (c) => {
    console.log('authorize');
    const oauthReqInfo = await c.env.OAUTH_PROVIDER.parseAuthRequest(c.req.raw);

    const content = await renderLoggedOutAuthorizeScreen(config, oauthReqInfo, defaultOptions);
    return c.html(layout(content, 'Authorization', config));
  });

  // The /authorize page has a form that will POST to /approve
  // This endpoint is responsible for validating any login information and
  // then completing the authorization request with the OAUTH_PROVIDER
  app.post('/approve', async (c) => {
    console.log('approve');
    const { action, oauthReqInfo, clientProps, clientConfig } = await parseApproveFormBody(
      await c.req.parseBody(),
      config,
    );

    if (!oauthReqInfo || !clientProps || !clientConfig) {
      console.log('no oauthReqInfo, clientProps, or clientConfig');
      return c.html('INVALID LOGIN', 401);
    }

    // If the user needs to both login and approve, we should validate the login first
    if (action === 'login_approve') {
      // We'll allow any values for email and password for this demo
      // but you could validate them here
      // Ex:
      // if (email !== "user@example.com" || password !== "password") {
      // biome-ignore lint/correctness/noConstantCondition: This is a demo
      if (false) {
        return c.html(layout(await renderAuthorizationRejectedContent('/'), 'Authorization Status', config));
      }
    }

    // Generate a random user ID because we just have anonymous values
    const generatedUserId = Math.random().toString(36).substring(2);

    const { redirectTo } = await c.env.OAUTH_PROVIDER.completeAuthorization({
      request: oauthReqInfo,
      userId: generatedUserId,
      metadata: {},
      scope: oauthReqInfo.scope,
      props: {
        clientProps,
        clientConfig,
      },
    });

    return c.html(
      layout(await renderAuthorizationApprovedContent(redirectTo), 'Authorization Status', config),
    );
  });

  return app;
}
