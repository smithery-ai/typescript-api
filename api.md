# Health

Types:

- <code><a href="./src/resources/health.ts">HealthCheckResponse</a></code>

Methods:

- <code title="get /health">client.health.<a href="./src/resources/health.ts">check</a>() -> HealthCheckResponse</code>

# Servers

Types:

- <code><a href="./src/resources/servers/servers.ts">ServerRetrieveResponse</a></code>
- <code><a href="./src/resources/servers/servers.ts">ServerListResponse</a></code>

Methods:

- <code title="get /servers/{qualifiedName}">client.servers.<a href="./src/resources/servers/servers.ts">retrieve</a>(qualifiedName) -> ServerRetrieveResponse</code>
- <code title="get /servers">client.servers.<a href="./src/resources/servers/servers.ts">list</a>({ ...params }) -> ServerListResponsesSmitheryPage</code>
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
