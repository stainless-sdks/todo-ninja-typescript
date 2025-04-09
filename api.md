# Todos

Types:

- <code><a href="./src/resources/todos/todos.ts">Todo</a></code>
- <code><a href="./src/resources/todos/todos.ts">TodoListResponse</a></code>
- <code><a href="./src/resources/todos/todos.ts">TodoDeleteResponse</a></code>

Methods:

- <code title="post /v1/todos">client.todos.<a href="./src/resources/todos/todos.ts">create</a>({ ...params }) -> Todo</code>
- <code title="get /v1/todos/{id}">client.todos.<a href="./src/resources/todos/todos.ts">retrieve</a>(id) -> Todo</code>
- <code title="put /v1/todos/{id}">client.todos.<a href="./src/resources/todos/todos.ts">update</a>(id, { ...params }) -> Todo</code>
- <code title="get /v1/todos">client.todos.<a href="./src/resources/todos/todos.ts">list</a>({ ...params }) -> TodoListResponse</code>
- <code title="delete /v1/todos/{id}">client.todos.<a href="./src/resources/todos/todos.ts">delete</a>(id) -> TodoDeleteResponse</code>
- <code title="post /v1/todos/{id}/complete">client.todos.<a href="./src/resources/todos/todos.ts">complete</a>(id) -> Todo</code>

## Tags

Methods:

- <code title="post /v1/todos/{todoId}/tags/{tagId}">client.todos.tags.<a href="./src/resources/todos/tags.ts">add</a>(tagID, { ...params }) -> Todo</code>
- <code title="delete /v1/todos/{todoId}/tags/{tagId}">client.todos.tags.<a href="./src/resources/todos/tags.ts">remove</a>(tagID, { ...params }) -> Todo</code>

# Users

Types:

- <code><a href="./src/resources/users.ts">UserCreateResponse</a></code>
- <code><a href="./src/resources/users.ts">UserRetrieveMeResponse</a></code>

Methods:

- <code title="post /v1/users">client.users.<a href="./src/resources/users.ts">create</a>({ ...params }) -> UserCreateResponse</code>
- <code title="get /v1/users/me">client.users.<a href="./src/resources/users.ts">retrieveMe</a>() -> UserRetrieveMeResponse</code>

# Tags

Types:

- <code><a href="./src/resources/tags.ts">Tag</a></code>
- <code><a href="./src/resources/tags.ts">TagListResponse</a></code>
- <code><a href="./src/resources/tags.ts">TagDeleteResponse</a></code>

Methods:

- <code title="post /v1/tags">client.tags.<a href="./src/resources/tags.ts">create</a>({ ...params }) -> Tag</code>
- <code title="get /v1/tags/{id}">client.tags.<a href="./src/resources/tags.ts">retrieve</a>(id) -> Tag</code>
- <code title="get /v1/tags">client.tags.<a href="./src/resources/tags.ts">list</a>({ ...params }) -> TagListResponse</code>
- <code title="delete /v1/tags/{id}">client.tags.<a href="./src/resources/tags.ts">delete</a>(id) -> TagDeleteResponse</code>
