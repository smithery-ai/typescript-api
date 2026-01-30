# Health

Types:

- <code><a href="./src/resources/health.ts">HealthCheckResponse</a></code>

Methods:

- <code title="get /health">client.health.<a href="./src/resources/health.ts">check</a>() -> HealthCheckResponse</code>

# Servers

Types:

- <code><a href="./src/resources/servers/servers.ts">BuildConfig</a></code>
- <code><a href="./src/resources/servers/servers.ts">DeploymentTarget</a></code>
- <code><a href="./src/resources/servers/servers.ts">ProjectConfig</a></code>
- <code><a href="./src/resources/servers/servers.ts">ServerListResponse</a></code>
- <code><a href="./src/resources/servers/servers.ts">ServerDeleteResponse</a></code>
- <code><a href="./src/resources/servers/servers.ts">ServerGetResponse</a></code>

Methods:

- <code title="get /servers">client.servers.<a href="./src/resources/servers/servers.ts">list</a>({ ...params }) -> ServerListResponsesSmitheryPage</code>
- <code title="delete /servers/{namespace}/{server}">client.servers.<a href="./src/resources/servers/servers.ts">delete</a>(server, { ...params }) -> ServerDeleteResponse</code>
- <code title="get /servers/{namespace}/{server}/download">client.servers.<a href="./src/resources/servers/servers.ts">download</a>(server, { ...params }) -> Response</code>
- <code title="get /servers/{namespace}/{server}">client.servers.<a href="./src/resources/servers/servers.ts">get</a>(server, { ...params }) -> ServerGetResponse</code>

## Deployments

Types:

- <code><a href="./src/resources/servers/deployments.ts">DeployPayload</a></code>
- <code><a href="./src/resources/servers/deployments.ts">ExternalDeployPayload</a></code>
- <code><a href="./src/resources/servers/deployments.ts">HostedDeployPayload</a></code>
- <code><a href="./src/resources/servers/deployments.ts">ServerCard</a></code>
- <code><a href="./src/resources/servers/deployments.ts">StdioDeployPayload</a></code>
- <code><a href="./src/resources/servers/deployments.ts">DeploymentListResponse</a></code>
- <code><a href="./src/resources/servers/deployments.ts">DeploymentDeployResponse</a></code>
- <code><a href="./src/resources/servers/deployments.ts">DeploymentGetResponse</a></code>
- <code><a href="./src/resources/servers/deployments.ts">DeploymentResumeResponse</a></code>

Methods:

- <code title="get /servers/{namespace}/{server}/deployments">client.servers.deployments.<a href="./src/resources/servers/deployments.ts">list</a>(server, { ...params }) -> DeploymentListResponse</code>
- <code title="put /servers/{namespace}/{server}/deployments">client.servers.deployments.<a href="./src/resources/servers/deployments.ts">deploy</a>(server, { ...params }) -> DeploymentDeployResponse</code>
- <code title="get /servers/{namespace}/{server}/deployments/{id}">client.servers.deployments.<a href="./src/resources/servers/deployments.ts">get</a>(id, { ...params }) -> DeploymentGetResponse</code>
- <code title="post /servers/{namespace}/{server}/deployments/{id}/resume">client.servers.deployments.<a href="./src/resources/servers/deployments.ts">resume</a>(id, { ...params }) -> DeploymentResumeResponse</code>

## Logs

Types:

- <code><a href="./src/resources/servers/logs.ts">LogListResponse</a></code>

Methods:

- <code title="get /servers/{namespace}/{server}/logs">client.servers.logs.<a href="./src/resources/servers/logs.ts">list</a>(server, { ...params }) -> LogListResponse</code>

## Secrets

Types:

- <code><a href="./src/resources/servers/secrets.ts">SecretListResponse</a></code>
- <code><a href="./src/resources/servers/secrets.ts">SecretDeleteResponse</a></code>
- <code><a href="./src/resources/servers/secrets.ts">SecretSetResponse</a></code>

Methods:

- <code title="get /servers/{namespace}/{server}/secrets">client.servers.secrets.<a href="./src/resources/servers/secrets.ts">list</a>(server, { ...params }) -> SecretListResponse</code>
- <code title="delete /servers/{namespace}/{server}/secrets/{secretName}">client.servers.secrets.<a href="./src/resources/servers/secrets.ts">delete</a>(secretName, { ...params }) -> SecretDeleteResponse</code>
- <code title="put /servers/{namespace}/{server}/secrets">client.servers.secrets.<a href="./src/resources/servers/secrets.ts">set</a>(server, { ...params }) -> SecretSetResponse</code>

## Repo

Types:

- <code><a href="./src/resources/servers/repo.ts">RepoDeleteResponse</a></code>
- <code><a href="./src/resources/servers/repo.ts">RepoGetResponse</a></code>
- <code><a href="./src/resources/servers/repo.ts">RepoSetResponse</a></code>

Methods:

- <code title="delete /servers/{namespace}/{server}/repo">client.servers.repo.<a href="./src/resources/servers/repo.ts">delete</a>(server, { ...params }) -> RepoDeleteResponse</code>
- <code title="get /servers/{namespace}/{server}/repo">client.servers.repo.<a href="./src/resources/servers/repo.ts">get</a>(server, { ...params }) -> RepoGetResponse</code>
- <code title="put /servers/{namespace}/{server}/repo">client.servers.repo.<a href="./src/resources/servers/repo.ts">set</a>(server, { ...params }) -> RepoSetResponse</code>

# Uplink

Types:

- <code><a href="./src/resources/uplink.ts">UplinkCreateTokenResponse</a></code>

Methods:

- <code title="post /uplink/token">client.uplink.<a href="./src/resources/uplink.ts">createToken</a>() -> UplinkCreateTokenResponse</code>

# Skills

Types:

- <code><a href="./src/resources/skills.ts">SkillListResponse</a></code>

Methods:

- <code title="get /skills">client.skills.<a href="./src/resources/skills.ts">list</a>({ ...params }) -> SkillListResponsesSkillsPage</code>

# Namespaces

Types:

- <code><a href="./src/resources/namespaces/namespaces.ts">NamespaceCreateResponse</a></code>
- <code><a href="./src/resources/namespaces/namespaces.ts">NamespaceListResponse</a></code>
- <code><a href="./src/resources/namespaces/namespaces.ts">NamespaceSetResponse</a></code>

Methods:

- <code title="post /namespaces">client.namespaces.<a href="./src/resources/namespaces/namespaces.ts">create</a>() -> NamespaceCreateResponse</code>
- <code title="get /namespaces">client.namespaces.<a href="./src/resources/namespaces/namespaces.ts">list</a>() -> NamespaceListResponse</code>
- <code title="put /namespaces/{name}">client.namespaces.<a href="./src/resources/namespaces/namespaces.ts">set</a>(name) -> NamespaceSetResponse</code>

## Servers

Types:

- <code><a href="./src/resources/namespaces/servers.ts">ServerCreateResponse</a></code>

Methods:

- <code title="put /namespaces/{namespace}/servers/{server}">client.namespaces.servers.<a href="./src/resources/namespaces/servers.ts">create</a>(server, { ...params }) -> ServerCreateResponse</code>

# Tokens

Types:

- <code><a href="./src/resources/tokens.ts">Action</a></code>
- <code><a href="./src/resources/tokens.ts">Allow</a></code>
- <code><a href="./src/resources/tokens.ts">ConnectionScope</a></code>
- <code><a href="./src/resources/tokens.ts">CreateTokenRequest</a></code>
- <code><a href="./src/resources/tokens.ts">CreateTokenResponse</a></code>
- <code><a href="./src/resources/tokens.ts">McpScope</a></code>
- <code><a href="./src/resources/tokens.ts">ResourceScope</a></code>

Methods:

- <code title="post /tokens">client.tokens.<a href="./src/resources/tokens.ts">create</a>({ ...params }) -> CreateTokenResponse</code>

# Beta

## Agents

Types:

- <code><a href="./src/resources/beta/agents/agents.ts">CreateResponseRequest</a></code>
- <code><a href="./src/resources/beta/agents/agents.ts">ErrorResponse</a></code>
- <code><a href="./src/resources/beta/agents/agents.ts">Response</a></code>

### Responses

## Connect

### Connections

Types:

- <code><a href="./src/resources/beta/connect/connections.ts">Connection</a></code>
- <code><a href="./src/resources/beta/connect/connections.ts">ConnectionsListResponse</a></code>
- <code><a href="./src/resources/beta/connect/connections.ts">CreateConnectionRequest</a></code>
- <code><a href="./src/resources/beta/connect/connections.ts">ConnectionDeleteResponse</a></code>

Methods:

- <code title="post /connect/{namespace}">client.beta.connect.connections.<a href="./src/resources/beta/connect/connections.ts">create</a>(namespace, { ...params }) -> Connection</code>
- <code title="get /connect/{namespace}">client.beta.connect.connections.<a href="./src/resources/beta/connect/connections.ts">list</a>(namespace, { ...params }) -> ConnectionsListResponse</code>
- <code title="delete /connect/{namespace}/{connectionId}">client.beta.connect.connections.<a href="./src/resources/beta/connect/connections.ts">delete</a>(connectionID, { ...params }) -> ConnectionDeleteResponse</code>
- <code title="get /connect/{namespace}/{connectionId}">client.beta.connect.connections.<a href="./src/resources/beta/connect/connections.ts">get</a>(connectionID, { ...params }) -> Connection</code>
- <code title="put /connect/{namespace}/{connectionId}">client.beta.connect.connections.<a href="./src/resources/beta/connect/connections.ts">set</a>(connectionID, { ...params }) -> Connection</code>

### Mcp

Types:

- <code><a href="./src/resources/beta/connect/mcp.ts">JsonRpcRequest</a></code>
- <code><a href="./src/resources/beta/connect/mcp.ts">JsonRpcResponse</a></code>

Methods:

- <code title="post /connect/{namespace}/{connectionId}/mcp">client.beta.connect.mcp.<a href="./src/resources/beta/connect/mcp.ts">call</a>(connectionID, { ...params }) -> JsonRpcResponse</code>
