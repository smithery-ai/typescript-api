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
- <code><a href="./src/resources/servers/servers.ts">ServerUpdateResponse</a></code>
- <code><a href="./src/resources/servers/servers.ts">ServerListResponse</a></code>
- <code><a href="./src/resources/servers/servers.ts">ServerDeleteResponse</a></code>
- <code><a href="./src/resources/servers/servers.ts">ServerGetResponse</a></code>

Methods:

- <code title="put /servers/{qualifiedName}">client.servers.<a href="./src/resources/servers/servers.ts">create</a>(qualifiedName, { ...params }) -> ServerCreateResponse</code>
- <code title="patch /servers/{qualifiedName}">client.servers.<a href="./src/resources/servers/servers.ts">update</a>(qualifiedName, { ...params }) -> ServerUpdateResponse</code>
- <code title="get /servers">client.servers.<a href="./src/resources/servers/servers.ts">list</a>({ ...params }) -> ServerListResponsesSmitheryPage</code>
- <code title="delete /servers/{qualifiedName}">client.servers.<a href="./src/resources/servers/servers.ts">delete</a>(qualifiedName) -> ServerDeleteResponse</code>
- <code title="get /servers/{qualifiedName}/download">client.servers.<a href="./src/resources/servers/servers.ts">download</a>(qualifiedName) -> Response</code>
- <code title="get /servers/{qualifiedName}">client.servers.<a href="./src/resources/servers/servers.ts">get</a>(qualifiedName) -> ServerGetResponse</code>

## Releases

Types:

- <code><a href="./src/resources/servers/releases.ts">DeployPayload</a></code>
- <code><a href="./src/resources/servers/releases.ts">ExternalDeployPayload</a></code>
- <code><a href="./src/resources/servers/releases.ts">HostedDeployPayload</a></code>
- <code><a href="./src/resources/servers/releases.ts">ServerCard</a></code>
- <code><a href="./src/resources/servers/releases.ts">ReleaseListResponse</a></code>
- <code><a href="./src/resources/servers/releases.ts">ReleaseDeployResponse</a></code>
- <code><a href="./src/resources/servers/releases.ts">ReleaseGetResponse</a></code>
- <code><a href="./src/resources/servers/releases.ts">ReleaseResumeResponse</a></code>
- <code><a href="./src/resources/servers/releases.ts">ReleaseStreamResponse</a></code>

Methods:

- <code title="get /servers/{qualifiedName}/releases">client.servers.releases.<a href="./src/resources/servers/releases.ts">list</a>(qualifiedName, { ...params }) -> ReleaseListResponsesReleasesPage</code>
- <code title="put /servers/{qualifiedName}/releases">client.servers.releases.<a href="./src/resources/servers/releases.ts">deploy</a>(qualifiedName, { ...params }) -> ReleaseDeployResponse</code>
- <code title="get /servers/{qualifiedName}/releases/{id}">client.servers.releases.<a href="./src/resources/servers/releases.ts">get</a>(id, { ...params }) -> ReleaseGetResponse</code>
- <code title="post /servers/{qualifiedName}/releases/{id}/resume">client.servers.releases.<a href="./src/resources/servers/releases.ts">resume</a>(id, { ...params }) -> ReleaseResumeResponse</code>
- <code title="get /servers/{qualifiedName}/releases/{id}/stream">client.servers.releases.<a href="./src/resources/servers/releases.ts">stream</a>(id, { ...params }) -> string</code>

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

## Repo

Types:

- <code><a href="./src/resources/servers/repo.ts">RepoUpdateResponse</a></code>
- <code><a href="./src/resources/servers/repo.ts">RepoDeleteResponse</a></code>
- <code><a href="./src/resources/servers/repo.ts">RepoGetResponse</a></code>
- <code><a href="./src/resources/servers/repo.ts">RepoSetResponse</a></code>

Methods:

- <code title="patch /servers/{qualifiedName}/repo">client.servers.repo.<a href="./src/resources/servers/repo.ts">update</a>(qualifiedName, { ...params }) -> RepoUpdateResponse</code>
- <code title="delete /servers/{qualifiedName}/repo">client.servers.repo.<a href="./src/resources/servers/repo.ts">delete</a>(qualifiedName) -> RepoDeleteResponse</code>
- <code title="get /servers/{qualifiedName}/repo">client.servers.repo.<a href="./src/resources/servers/repo.ts">get</a>(qualifiedName) -> RepoGetResponse</code>
- <code title="put /servers/{qualifiedName}/repo">client.servers.repo.<a href="./src/resources/servers/repo.ts">set</a>(qualifiedName, { ...params }) -> RepoSetResponse</code>

## Icon

Types:

- <code><a href="./src/resources/servers/icon.ts">IconDeleteResponse</a></code>
- <code><a href="./src/resources/servers/icon.ts">IconUploadResponse</a></code>

Methods:

- <code title="delete /servers/{qualifiedName}/icon">client.servers.icon.<a href="./src/resources/servers/icon.ts">delete</a>(qualifiedName) -> IconDeleteResponse</code>
- <code title="get /servers/{qualifiedName}/icon">client.servers.icon.<a href="./src/resources/servers/icon.ts">get</a>(qualifiedName) -> Response</code>
- <code title="put /servers/{qualifiedName}/icon">client.servers.icon.<a href="./src/resources/servers/icon.ts">upload</a>(qualifiedName) -> IconUploadResponse</code>

## Domains

Types:

- <code><a href="./src/resources/servers/domains.ts">DomainUpdateResponse</a></code>
- <code><a href="./src/resources/servers/domains.ts">DomainListResponse</a></code>

Methods:

- <code title="patch /servers/{qualifiedName}/domains/{domainId}">client.servers.domains.<a href="./src/resources/servers/domains.ts">update</a>(domainID, { ...params }) -> DomainUpdateResponse</code>
- <code title="get /servers/{qualifiedName}/domains">client.servers.domains.<a href="./src/resources/servers/domains.ts">list</a>(qualifiedName) -> DomainListResponse</code>

# Uplink

Types:

- <code><a href="./src/resources/uplink.ts">UplinkCreateTokenResponse</a></code>

Methods:

- <code title="post /uplink/token">client.uplink.<a href="./src/resources/uplink.ts">createToken</a>() -> UplinkCreateTokenResponse</code>

# Skills

Types:

- <code><a href="./src/resources/skills/skills.ts">SkillCreateResponse</a></code>
- <code><a href="./src/resources/skills/skills.ts">SkillListResponse</a></code>
- <code><a href="./src/resources/skills/skills.ts">SkillDeleteResponse</a></code>
- <code><a href="./src/resources/skills/skills.ts">SkillGetResponse</a></code>
- <code><a href="./src/resources/skills/skills.ts">SkillSetResponse</a></code>
- <code><a href="./src/resources/skills/skills.ts">SkillSyncResponse</a></code>
- <code><a href="./src/resources/skills/skills.ts">SkillUploadResponse</a></code>

Methods:

- <code title="post /skills">client.skills.<a href="./src/resources/skills/skills.ts">create</a>({ ...params }) -> SkillCreateResponse</code>
- <code title="get /skills">client.skills.<a href="./src/resources/skills/skills.ts">list</a>({ ...params }) -> SkillListResponsesSkillsPage</code>
- <code title="delete /skills/{namespace}/{slug}">client.skills.<a href="./src/resources/skills/skills.ts">delete</a>(slug, { ...params }) -> SkillDeleteResponse</code>
- <code title="get /skills/{namespace}/{slug}/download">client.skills.<a href="./src/resources/skills/skills.ts">download</a>(slug, { ...params }) -> Response</code>
- <code title="get /skills/{namespace}/{slug}">client.skills.<a href="./src/resources/skills/skills.ts">get</a>(slug, { ...params }) -> SkillGetResponse</code>
- <code title="put /skills/{namespace}/{slug}">client.skills.<a href="./src/resources/skills/skills.ts">set</a>(slug, { ...params }) -> SkillSetResponse</code>
- <code title="post /skills/{namespace}/{slug}/sync">client.skills.<a href="./src/resources/skills/skills.ts">sync</a>(slug, { ...params }) -> SkillSyncResponse</code>
- <code title="put /skills/{namespace}/{slug}/upload">client.skills.<a href="./src/resources/skills/skills.ts">upload</a>(slug, { ...params }) -> SkillUploadResponse</code>

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
- <code><a href="./src/resources/namespaces/namespaces.ts">NamespaceDeleteResponse</a></code>
- <code><a href="./src/resources/namespaces/namespaces.ts">NamespaceSetResponse</a></code>

Methods:

- <code title="post /namespaces">client.namespaces.<a href="./src/resources/namespaces/namespaces.ts">create</a>() -> NamespaceCreateResponse</code>
- <code title="get /namespaces">client.namespaces.<a href="./src/resources/namespaces/namespaces.ts">list</a>({ ...params }) -> NamespaceListResponsesNamespacesPage</code>
- <code title="delete /namespaces/{name}">client.namespaces.<a href="./src/resources/namespaces/namespaces.ts">delete</a>(name) -> NamespaceDeleteResponse</code>
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

# Connections

Types:

- <code><a href="./src/resources/connections/connections.ts">Connection</a></code>
- <code><a href="./src/resources/connections/connections.ts">ConnectionsListResponse</a></code>
- <code><a href="./src/resources/connections/connections.ts">CreateConnectionRequest</a></code>
- <code><a href="./src/resources/connections/connections.ts">ConnectionDeleteResponse</a></code>

Methods:

- <code title="post /connect/{namespace}">client.connections.<a href="./src/resources/connections/connections.ts">create</a>(namespace, { ...params }) -> Connection</code>
- <code title="get /connect/{namespace}">client.connections.<a href="./src/resources/connections/connections.ts">list</a>(namespace, { ...params }) -> ConnectionsListResponse</code>
- <code title="delete /connect/{namespace}/{connectionId}">client.connections.<a href="./src/resources/connections/connections.ts">delete</a>(connectionID, { ...params }) -> ConnectionDeleteResponse</code>
- <code title="get /connect/{namespace}/{connectionId}">client.connections.<a href="./src/resources/connections/connections.ts">get</a>(connectionID, { ...params }) -> Connection</code>
- <code title="put /connect/{namespace}/{connectionId}">client.connections.<a href="./src/resources/connections/connections.ts">set</a>(connectionID, { ...params }) -> Connection</code>

## Mcp

Types:

- <code><a href="./src/resources/connections/mcp.ts">JsonRpcRequest</a></code>
- <code><a href="./src/resources/connections/mcp.ts">JsonRpcResponse</a></code>

Methods:

- <code title="post /connect/{namespace}/{connectionId}/mcp">client.connections.mcp.<a href="./src/resources/connections/mcp.ts">call</a>(connectionID, { ...params }) -> JsonRpcResponse</code>
