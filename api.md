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
- <code><a href="./src/resources/servers/servers.ts">ServerCreateResponse</a></code>
- <code><a href="./src/resources/servers/servers.ts">ServerListResponse</a></code>
- <code><a href="./src/resources/servers/servers.ts">ServerDeleteResponse</a></code>
- <code><a href="./src/resources/servers/servers.ts">ServerCreateByNamespaceResponse</a></code>
- <code><a href="./src/resources/servers/servers.ts">ServerGetResponse</a></code>
- <code><a href="./src/resources/servers/servers.ts">ServerGetByNamespaceResponse</a></code>

Methods:

- <code title="put /servers/{namespace}/{server}">client.servers.<a href="./src/resources/servers/servers.ts">create</a>(server, { ...params }) -> ServerCreateResponse</code>
- <code title="get /servers">client.servers.<a href="./src/resources/servers/servers.ts">list</a>({ ...params }) -> ServerListResponsesSmitheryPage</code>
- <code title="delete /servers/{namespace}/{server}">client.servers.<a href="./src/resources/servers/servers.ts">delete</a>(server, { ...params }) -> ServerDeleteResponse</code>
- <code title="put /servers/{namespace}">client.servers.<a href="./src/resources/servers/servers.ts">createByNamespace</a>(namespace, { ...params }) -> ServerCreateByNamespaceResponse</code>
- <code title="get /servers/{namespace}/{server}/download">client.servers.<a href="./src/resources/servers/servers.ts">download</a>(server, { ...params }) -> Response</code>
- <code title="get /servers/{namespace}/{server}">client.servers.<a href="./src/resources/servers/servers.ts">get</a>(server, { ...params }) -> ServerGetResponse</code>
- <code title="get /servers/{namespace}">client.servers.<a href="./src/resources/servers/servers.ts">getByNamespace</a>(namespace) -> ServerGetByNamespaceResponse</code>

## Deployments

Types:

- <code><a href="./src/resources/servers/deployments.ts">DeployPayload</a></code>
- <code><a href="./src/resources/servers/deployments.ts">ExternalDeployPayload</a></code>
- <code><a href="./src/resources/servers/deployments.ts">HostedDeployPayload</a></code>
- <code><a href="./src/resources/servers/deployments.ts">ServerCard</a></code>
- <code><a href="./src/resources/servers/deployments.ts">StdioDeployPayload</a></code>
- <code><a href="./src/resources/servers/deployments.ts">DeploymentListResponse</a></code>
- <code><a href="./src/resources/servers/deployments.ts">DeploymentDeployResponse</a></code>
- <code><a href="./src/resources/servers/deployments.ts">DeploymentDeployByNamespaceResponse</a></code>
- <code><a href="./src/resources/servers/deployments.ts">DeploymentGetResponse</a></code>
- <code><a href="./src/resources/servers/deployments.ts">DeploymentGetByNamespaceResponse</a></code>
- <code><a href="./src/resources/servers/deployments.ts">DeploymentListByNamespaceResponse</a></code>
- <code><a href="./src/resources/servers/deployments.ts">DeploymentResumeResponse</a></code>
- <code><a href="./src/resources/servers/deployments.ts">DeploymentResumeByNamespaceResponse</a></code>
- <code><a href="./src/resources/servers/deployments.ts">DeploymentStreamResponse</a></code>
- <code><a href="./src/resources/servers/deployments.ts">DeploymentStreamByNamespaceResponse</a></code>

Methods:

- <code title="get /servers/{namespace}/{server}/deployments">client.servers.deployments.<a href="./src/resources/servers/deployments.ts">list</a>(server, { ...params }) -> DeploymentListResponse</code>
- <code title="put /servers/{namespace}/{server}/deployments">client.servers.deployments.<a href="./src/resources/servers/deployments.ts">deploy</a>(server, { ...params }) -> DeploymentDeployResponse</code>
- <code title="put /servers/{namespace}/deployments">client.servers.deployments.<a href="./src/resources/servers/deployments.ts">deployByNamespace</a>(namespace, { ...params }) -> DeploymentDeployByNamespaceResponse</code>
- <code title="get /servers/{namespace}/{server}/deployments/{id}">client.servers.deployments.<a href="./src/resources/servers/deployments.ts">get</a>(id, { ...params }) -> DeploymentGetResponse</code>
- <code title="get /servers/{namespace}/deployments/{id}">client.servers.deployments.<a href="./src/resources/servers/deployments.ts">getByNamespace</a>(id, { ...params }) -> DeploymentGetByNamespaceResponse</code>
- <code title="get /servers/{namespace}/deployments">client.servers.deployments.<a href="./src/resources/servers/deployments.ts">listByNamespace</a>(namespace) -> DeploymentListByNamespaceResponse</code>
- <code title="post /servers/{namespace}/{server}/deployments/{id}/resume">client.servers.deployments.<a href="./src/resources/servers/deployments.ts">resume</a>(id, { ...params }) -> DeploymentResumeResponse</code>
- <code title="post /servers/{namespace}/deployments/{id}/resume">client.servers.deployments.<a href="./src/resources/servers/deployments.ts">resumeByNamespace</a>(id, { ...params }) -> DeploymentResumeByNamespaceResponse</code>
- <code title="get /servers/{namespace}/{server}/deployments/{id}/stream">client.servers.deployments.<a href="./src/resources/servers/deployments.ts">stream</a>(id, { ...params }) -> string</code>
- <code title="get /servers/{namespace}/deployments/{id}/stream">client.servers.deployments.<a href="./src/resources/servers/deployments.ts">streamByNamespace</a>(id, { ...params }) -> string</code>

## Logs

Types:

- <code><a href="./src/resources/servers/logs.ts">LogListResponse</a></code>
- <code><a href="./src/resources/servers/logs.ts">LogListByNamespaceResponse</a></code>

Methods:

- <code title="get /servers/{namespace}/{server}/logs">client.servers.logs.<a href="./src/resources/servers/logs.ts">list</a>(server, { ...params }) -> LogListResponse</code>
- <code title="get /servers/{namespace}/logs">client.servers.logs.<a href="./src/resources/servers/logs.ts">listByNamespace</a>(namespace, { ...params }) -> LogListByNamespaceResponse</code>

## Secrets

Types:

- <code><a href="./src/resources/servers/secrets.ts">SecretListResponse</a></code>
- <code><a href="./src/resources/servers/secrets.ts">SecretDeleteResponse</a></code>
- <code><a href="./src/resources/servers/secrets.ts">SecretDeleteByNamespaceResponse</a></code>
- <code><a href="./src/resources/servers/secrets.ts">SecretListByNamespaceResponse</a></code>
- <code><a href="./src/resources/servers/secrets.ts">SecretSetResponse</a></code>
- <code><a href="./src/resources/servers/secrets.ts">SecretSetByNamespaceResponse</a></code>

Methods:

- <code title="get /servers/{namespace}/{server}/secrets">client.servers.secrets.<a href="./src/resources/servers/secrets.ts">list</a>(server, { ...params }) -> SecretListResponse</code>
- <code title="delete /servers/{namespace}/{server}/secrets/{secretName}">client.servers.secrets.<a href="./src/resources/servers/secrets.ts">delete</a>(secretName, { ...params }) -> SecretDeleteResponse</code>
- <code title="delete /servers/{namespace}/secrets/{secretName}">client.servers.secrets.<a href="./src/resources/servers/secrets.ts">deleteByNamespace</a>(secretName, { ...params }) -> SecretDeleteByNamespaceResponse</code>
- <code title="get /servers/{namespace}/secrets">client.servers.secrets.<a href="./src/resources/servers/secrets.ts">listByNamespace</a>(namespace) -> SecretListByNamespaceResponse</code>
- <code title="put /servers/{namespace}/{server}/secrets">client.servers.secrets.<a href="./src/resources/servers/secrets.ts">set</a>(server, { ...params }) -> SecretSetResponse</code>
- <code title="put /servers/{namespace}/secrets">client.servers.secrets.<a href="./src/resources/servers/secrets.ts">setByNamespace</a>(namespace, { ...params }) -> SecretSetByNamespaceResponse</code>

## Repo

Types:

- <code><a href="./src/resources/servers/repo.ts">RepoDeleteResponse</a></code>
- <code><a href="./src/resources/servers/repo.ts">RepoDeleteByNamespaceResponse</a></code>
- <code><a href="./src/resources/servers/repo.ts">RepoGetResponse</a></code>
- <code><a href="./src/resources/servers/repo.ts">RepoGetByNamespaceResponse</a></code>
- <code><a href="./src/resources/servers/repo.ts">RepoSetResponse</a></code>
- <code><a href="./src/resources/servers/repo.ts">RepoSetByNamespaceResponse</a></code>

Methods:

- <code title="delete /servers/{namespace}/{server}/repo">client.servers.repo.<a href="./src/resources/servers/repo.ts">delete</a>(server, { ...params }) -> RepoDeleteResponse</code>
- <code title="delete /servers/{namespace}/repo">client.servers.repo.<a href="./src/resources/servers/repo.ts">deleteByNamespace</a>(namespace) -> RepoDeleteByNamespaceResponse</code>
- <code title="get /servers/{namespace}/{server}/repo">client.servers.repo.<a href="./src/resources/servers/repo.ts">get</a>(server, { ...params }) -> RepoGetResponse</code>
- <code title="get /servers/{namespace}/repo">client.servers.repo.<a href="./src/resources/servers/repo.ts">getByNamespace</a>(namespace) -> RepoGetByNamespaceResponse</code>
- <code title="put /servers/{namespace}/{server}/repo">client.servers.repo.<a href="./src/resources/servers/repo.ts">set</a>(server, { ...params }) -> RepoSetResponse</code>
- <code title="put /servers/{namespace}/repo">client.servers.repo.<a href="./src/resources/servers/repo.ts">setByNamespace</a>(namespace, { ...params }) -> RepoSetByNamespaceResponse</code>

# Uplink

Types:

- <code><a href="./src/resources/uplink.ts">UplinkCreateTokenResponse</a></code>

Methods:

- <code title="post /uplink/token">client.uplink.<a href="./src/resources/uplink.ts">createToken</a>() -> UplinkCreateTokenResponse</code>

# Skills

Types:

- <code><a href="./src/resources/skills/skills.ts">SkillListResponse</a></code>
- <code><a href="./src/resources/skills/skills.ts">SkillGetResponse</a></code>

Methods:

- <code title="get /skills">client.skills.<a href="./src/resources/skills/skills.ts">list</a>({ ...params }) -> SkillListResponsesSkillsPage</code>
- <code title="get /skills/{namespace}/{slug}">client.skills.<a href="./src/resources/skills/skills.ts">get</a>(slug, { ...params }) -> SkillGetResponse</code>

## Votes

Types:

- <code><a href="./src/resources/skills/votes.ts">SkillVoteCounts</a></code>
- <code><a href="./src/resources/skills/votes.ts">SkillVoteError</a></code>
- <code><a href="./src/resources/skills/votes.ts">SkillVoteRequest</a></code>
- <code><a href="./src/resources/skills/votes.ts">SkillVoteResponse</a></code>

Methods:

- <code title="post /skills/{namespace}/{slug}/vote">client.skills.votes.<a href="./src/resources/skills/votes.ts">create</a>(slug, { ...params }) -> SkillVoteResponse</code>
- <code title="delete /skills/{namespace}/{slug}/vote">client.skills.votes.<a href="./src/resources/skills/votes.ts">delete</a>(slug, { ...params }) -> void</code>
- <code title="get /skills/{namespace}/{slug}/vote">client.skills.votes.<a href="./src/resources/skills/votes.ts">get</a>(slug, { ...params }) -> SkillVoteCounts</code>

## Reviews

Types:

- <code><a href="./src/resources/skills/reviews.ts">CreateReviewRequest</a></code>
- <code><a href="./src/resources/skills/reviews.ts">CreateReviewResponse</a></code>
- <code><a href="./src/resources/skills/reviews.ts">ReviewError</a></code>
- <code><a href="./src/resources/skills/reviews.ts">ReviewItem</a></code>
- <code><a href="./src/resources/skills/reviews.ts">ReviewVoteRequest</a></code>
- <code><a href="./src/resources/skills/reviews.ts">ReviewVoteResponse</a></code>
- <code><a href="./src/resources/skills/reviews.ts">ReviewsListResponse</a></code>

Methods:

- <code title="post /skills/{namespace}/{slug}/reviews">client.skills.reviews.<a href="./src/resources/skills/reviews.ts">create</a>(slug, { ...params }) -> CreateReviewResponse</code>
- <code title="get /skills/{namespace}/{slug}/reviews">client.skills.reviews.<a href="./src/resources/skills/reviews.ts">list</a>(slug, { ...params }) -> ReviewItemsReviewsPage</code>
- <code title="delete /skills/{namespace}/{slug}/reviews">client.skills.reviews.<a href="./src/resources/skills/reviews.ts">delete</a>(slug, { ...params }) -> void</code>
- <code title="delete /skills/{namespace}/{slug}/reviews/{reviewId}/vote">client.skills.reviews.<a href="./src/resources/skills/reviews.ts">unvote</a>(reviewID, { ...params }) -> void</code>
- <code title="post /skills/{namespace}/{slug}/reviews/{reviewId}/vote">client.skills.reviews.<a href="./src/resources/skills/reviews.ts">vote</a>(reviewID, { ...params }) -> ReviewVoteResponse</code>

# Namespaces

Types:

- <code><a href="./src/resources/namespaces/namespaces.ts">NamespaceCreateResponse</a></code>
- <code><a href="./src/resources/namespaces/namespaces.ts">NamespaceListResponse</a></code>
- <code><a href="./src/resources/namespaces/namespaces.ts">NamespaceSetResponse</a></code>

Methods:

- <code title="post /namespaces">client.namespaces.<a href="./src/resources/namespaces/namespaces.ts">create</a>() -> NamespaceCreateResponse</code>
- <code title="get /namespaces">client.namespaces.<a href="./src/resources/namespaces/namespaces.ts">list</a>({ ...params }) -> NamespaceListResponsesNamespacesPage</code>
- <code title="put /namespaces/{name}">client.namespaces.<a href="./src/resources/namespaces/namespaces.ts">set</a>(name) -> NamespaceSetResponse</code>

## Servers

Types:

- <code><a href="./src/resources/namespaces/servers.ts">ServerCreateResponse</a></code>

Methods:

- <code title="put /namespaces/{namespace}/servers/{server}">client.namespaces.servers.<a href="./src/resources/namespaces/servers.ts">create</a>(server, { ...params }) -> ServerCreateResponse</code>

# Tokens

Types:

- <code><a href="./src/resources/tokens.ts">Constraint</a></code>
- <code><a href="./src/resources/tokens.ts">CreateTokenRequest</a></code>
- <code><a href="./src/resources/tokens.ts">CreateTokenResponse</a></code>

Methods:

- <code title="post /tokens">client.tokens.<a href="./src/resources/tokens.ts">create</a>({ ...params }) -> CreateTokenResponse</code>

# Experimental

## Agents

Types:

- <code><a href="./src/resources/experimental/agents/agents.ts">AssistantMessage</a></code>
- <code><a href="./src/resources/experimental/agents/agents.ts">CreateResponseRequest</a></code>
- <code><a href="./src/resources/experimental/agents/agents.ts">ErrorResponse</a></code>
- <code><a href="./src/resources/experimental/agents/agents.ts">FunctionCall</a></code>
- <code><a href="./src/resources/experimental/agents/agents.ts">InputItem</a></code>
- <code><a href="./src/resources/experimental/agents/agents.ts">InputTextContent</a></code>
- <code><a href="./src/resources/experimental/agents/agents.ts">OutputItem</a></code>
- <code><a href="./src/resources/experimental/agents/agents.ts">OutputTextContent</a></code>
- <code><a href="./src/resources/experimental/agents/agents.ts">Response</a></code>
- <code><a href="./src/resources/experimental/agents/agents.ts">ResponseStatus</a></code>
- <code><a href="./src/resources/experimental/agents/agents.ts">StringContent</a></code>
- <code><a href="./src/resources/experimental/agents/agents.ts">SystemMessage</a></code>
- <code><a href="./src/resources/experimental/agents/agents.ts">Usage</a></code>
- <code><a href="./src/resources/experimental/agents/agents.ts">UserMessage</a></code>

### Responses

Methods:

- <code title="post /agents/responses">client.experimental.agents.responses.<a href="./src/resources/experimental/agents/responses.ts">create</a>({ ...params }) -> Response</code>
- <code title="get /agents/responses/{id}">client.experimental.agents.responses.<a href="./src/resources/experimental/agents/responses.ts">get</a>(id) -> Response</code>

## Connect

### Connections

Types:

- <code><a href="./src/resources/experimental/connect/connections.ts">Connection</a></code>
- <code><a href="./src/resources/experimental/connect/connections.ts">ConnectionsListResponse</a></code>
- <code><a href="./src/resources/experimental/connect/connections.ts">CreateConnectionRequest</a></code>
- <code><a href="./src/resources/experimental/connect/connections.ts">ConnectionDeleteResponse</a></code>

Methods:

- <code title="post /connect/{namespace}">client.experimental.connect.connections.<a href="./src/resources/experimental/connect/connections.ts">create</a>(namespace, { ...params }) -> Connection</code>
- <code title="get /connect/{namespace}">client.experimental.connect.connections.<a href="./src/resources/experimental/connect/connections.ts">list</a>(namespace, { ...params }) -> ConnectionsListResponse</code>
- <code title="delete /connect/{namespace}/{connectionId}">client.experimental.connect.connections.<a href="./src/resources/experimental/connect/connections.ts">delete</a>(connectionID, { ...params }) -> ConnectionDeleteResponse</code>
- <code title="get /connect/{namespace}/{connectionId}">client.experimental.connect.connections.<a href="./src/resources/experimental/connect/connections.ts">get</a>(connectionID, { ...params }) -> Connection</code>
- <code title="put /connect/{namespace}/{connectionId}">client.experimental.connect.connections.<a href="./src/resources/experimental/connect/connections.ts">set</a>(connectionID, { ...params }) -> Connection</code>

### Mcp

Types:

- <code><a href="./src/resources/experimental/connect/mcp.ts">JsonRpcRequest</a></code>
- <code><a href="./src/resources/experimental/connect/mcp.ts">JsonRpcResponse</a></code>

Methods:

- <code title="post /connect/{namespace}/{connectionId}/mcp">client.experimental.connect.mcp.<a href="./src/resources/experimental/connect/mcp.ts">call</a>(connectionID, { ...params }) -> JsonRpcResponse</code>
