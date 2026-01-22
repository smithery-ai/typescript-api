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
- <code><a href="./src/resources/servers/servers.ts">ServerRetrieveResponse</a></code>
- <code><a href="./src/resources/servers/servers.ts">ServerListResponse</a></code>
- <code><a href="./src/resources/servers/servers.ts">ServerDeleteResponse</a></code>

Methods:

- <code title="get /servers/{qualifiedName}">client.servers.<a href="./src/resources/servers/servers.ts">retrieve</a>(qualifiedName) -> ServerRetrieveResponse</code>
- <code title="get /servers">client.servers.<a href="./src/resources/servers/servers.ts">list</a>({ ...params }) -> ServerListResponsesSmitheryPage</code>
- <code title="delete /servers/{qualifiedName}">client.servers.<a href="./src/resources/servers/servers.ts">delete</a>(qualifiedName) -> ServerDeleteResponse</code>
- <code title="get /servers/{qualifiedName}/download">client.servers.<a href="./src/resources/servers/servers.ts">download</a>(qualifiedName) -> Response</code>

## Deployments

Types:

- <code><a href="./src/resources/servers/deployments.ts">DeployPayload</a></code>
- <code><a href="./src/resources/servers/deployments.ts">ExternalDeployPayload</a></code>
- <code><a href="./src/resources/servers/deployments.ts">HostedDeployPayload</a></code>
- <code><a href="./src/resources/servers/deployments.ts">ServerCard</a></code>
- <code><a href="./src/resources/servers/deployments.ts">StdioDeployPayload</a></code>
- <code><a href="./src/resources/servers/deployments.ts">DeploymentRetrieveResponse</a></code>
- <code><a href="./src/resources/servers/deployments.ts">DeploymentListResponse</a></code>
- <code><a href="./src/resources/servers/deployments.ts">DeploymentDeployResponse</a></code>
- <code><a href="./src/resources/servers/deployments.ts">DeploymentResumeResponse</a></code>

Methods:

- <code title="get /servers/{qualifiedName}/deployments/{id}">client.servers.deployments.<a href="./src/resources/servers/deployments.ts">retrieve</a>(id, { ...params }) -> DeploymentRetrieveResponse</code>
- <code title="get /servers/{qualifiedName}/deployments">client.servers.deployments.<a href="./src/resources/servers/deployments.ts">list</a>(qualifiedName) -> DeploymentListResponse</code>
- <code title="put /servers/{qualifiedName}/deployments">client.servers.deployments.<a href="./src/resources/servers/deployments.ts">deploy</a>(qualifiedName, { ...params }) -> DeploymentDeployResponse</code>
- <code title="post /servers/{qualifiedName}/deployments/{id}/resume">client.servers.deployments.<a href="./src/resources/servers/deployments.ts">resume</a>(id, { ...params }) -> DeploymentResumeResponse</code>

## Logs

Types:

- <code><a href="./src/resources/servers/logs.ts">LogListResponse</a></code>

Methods:

- <code title="get /servers/{qualifiedName}/logs">client.servers.logs.<a href="./src/resources/servers/logs.ts">list</a>(qualifiedName, { ...params }) -> LogListResponse</code>

## Secrets

Types:

- <code><a href="./src/resources/servers/secrets.ts">SecretListResponse</a></code>
- <code><a href="./src/resources/servers/secrets.ts">SecretDeleteResponse</a></code>
- <code><a href="./src/resources/servers/secrets.ts">SecretSetResponse</a></code>

Methods:

- <code title="get /servers/{qualifiedName}/secrets">client.servers.secrets.<a href="./src/resources/servers/secrets.ts">list</a>(qualifiedName) -> SecretListResponse</code>
- <code title="delete /servers/{qualifiedName}/secrets/{secretName}">client.servers.secrets.<a href="./src/resources/servers/secrets.ts">delete</a>(secretName, { ...params }) -> SecretDeleteResponse</code>
- <code title="put /servers/{qualifiedName}/secrets">client.servers.secrets.<a href="./src/resources/servers/secrets.ts">set</a>(qualifiedName, { ...params }) -> SecretSetResponse</code>

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

- <code><a href="./src/resources/namespaces.ts">NamespaceCreateResponse</a></code>
- <code><a href="./src/resources/namespaces.ts">NamespaceListResponse</a></code>

Methods:

- <code title="put /namespaces">client.namespaces.<a href="./src/resources/namespaces.ts">create</a>({ ...params }) -> NamespaceCreateResponse</code>
- <code title="get /namespaces">client.namespaces.<a href="./src/resources/namespaces.ts">list</a>() -> NamespaceListResponse</code>

# Tokens

Types:

- <code><a href="./src/resources/tokens.ts">Action</a></code>
- <code><a href="./src/resources/tokens.ts">Allow</a></code>
- <code><a href="./src/resources/tokens.ts">ConnectionScope</a></code>
- <code><a href="./src/resources/tokens.ts">CreateTokenRequest</a></code>
- <code><a href="./src/resources/tokens.ts">CreateTokenResponse</a></code>
- <code><a href="./src/resources/tokens.ts">ResourceScope</a></code>
- <code><a href="./src/resources/tokens.ts">RpcScope</a></code>

Methods:

- <code title="post /tokens">client.tokens.<a href="./src/resources/tokens.ts">create</a>({ ...params }) -> CreateTokenResponse</code>

# Beta

## Tools

Types:

- <code><a href="./src/resources/beta/tools.ts">ToolListResponse</a></code>

Methods:

- <code title="get /tools">client.beta.tools.<a href="./src/resources/beta/tools.ts">list</a>({ ...params }) -> ToolListResponsesToolsPage</code>

## Connect

### Connections

Types:

- <code><a href="./src/resources/beta/connect/connections.ts">Connection</a></code>
- <code><a href="./src/resources/beta/connect/connections.ts">ConnectionsListResponse</a></code>
- <code><a href="./src/resources/beta/connect/connections.ts">CreateConnectionRequest</a></code>
- <code><a href="./src/resources/beta/connect/connections.ts">ConnectionDeleteResponse</a></code>

Methods:

- <code title="post /connect/{namespace}">client.beta.connect.connections.<a href="./src/resources/beta/connect/connections.ts">create</a>(namespace, { ...params }) -> Connection</code>
- <code title="get /connect/{namespace}/{connectionId}">client.beta.connect.connections.<a href="./src/resources/beta/connect/connections.ts">retrieve</a>(connectionID, { ...params }) -> Connection</code>
- <code title="get /connect/{namespace}">client.beta.connect.connections.<a href="./src/resources/beta/connect/connections.ts">list</a>(namespace, { ...params }) -> ConnectionsListResponse</code>
- <code title="delete /connect/{namespace}/{connectionId}">client.beta.connect.connections.<a href="./src/resources/beta/connect/connections.ts">delete</a>(connectionID, { ...params }) -> ConnectionDeleteResponse</code>
- <code title="put /connect/{namespace}/{connectionId}">client.beta.connect.connections.<a href="./src/resources/beta/connect/connections.ts">set</a>(connectionID, { ...params }) -> Connection</code>

### Rpc

Types:

- <code><a href="./src/resources/beta/connect/rpc.ts">JsonRpcRequest</a></code>
- <code><a href="./src/resources/beta/connect/rpc.ts">JsonRpcResponse</a></code>

Methods:

- <code title="post /connect/{namespace}/{connectionId}/rpc">client.beta.connect.rpc.<a href="./src/resources/beta/connect/rpc.ts">call</a>(connectionID, { ...params }) -> JsonRpcResponse</code>
