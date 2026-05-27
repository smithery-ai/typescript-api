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
- <code><a href="./src/resources/servers/servers.ts">ServerTransferResponse</a></code>

Methods:

- <code title="put /servers/{qualifiedName}">client.servers.<a href="./src/resources/servers/servers.ts">create</a>(qualifiedName, { ...params }) -> ServerCreateResponse</code>
- <code title="patch /servers/{qualifiedName}">client.servers.<a href="./src/resources/servers/servers.ts">update</a>(qualifiedName, { ...params }) -> ServerUpdateResponse</code>
- <code title="get /servers">client.servers.<a href="./src/resources/servers/servers.ts">list</a>({ ...params }) -> ServerListResponsesSmitheryPage</code>
- <code title="delete /servers/{qualifiedName}">client.servers.<a href="./src/resources/servers/servers.ts">delete</a>(qualifiedName) -> ServerDeleteResponse</code>
- <code title="get /servers/{qualifiedName}/download">client.servers.<a href="./src/resources/servers/servers.ts">download</a>(qualifiedName) -> Response</code>
- <code title="get /servers/{qualifiedName}">client.servers.<a href="./src/resources/servers/servers.ts">get</a>(qualifiedName) -> ServerGetResponse</code>
- <code title="post /servers/{qualifiedName}/transfer">client.servers.<a href="./src/resources/servers/servers.ts">transfer</a>(qualifiedName, { ...params }) -> ServerTransferResponse</code>

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

# Skills

Types:

- <code><a href="./src/resources/skills.ts">SkillCreateResponse</a></code>
- <code><a href="./src/resources/skills.ts">SkillListResponse</a></code>
- <code><a href="./src/resources/skills.ts">SkillDeleteResponse</a></code>
- <code><a href="./src/resources/skills.ts">SkillGetResponse</a></code>
- <code><a href="./src/resources/skills.ts">SkillSetResponse</a></code>
- <code><a href="./src/resources/skills.ts">SkillSyncResponse</a></code>
- <code><a href="./src/resources/skills.ts">SkillUploadResponse</a></code>

Methods:

- <code title="post /skills">client.skills.<a href="./src/resources/skills.ts">create</a>({ ...params }) -> SkillCreateResponse</code>
- <code title="get /skills">client.skills.<a href="./src/resources/skills.ts">list</a>({ ...params }) -> SkillListResponsesSkillsPage</code>
- <code title="delete /skills/{namespace}/{slug}">client.skills.<a href="./src/resources/skills.ts">delete</a>(slug, { ...params }) -> SkillDeleteResponse</code>
- <code title="get /skills/{namespace}/{slug}/download">client.skills.<a href="./src/resources/skills.ts">download</a>(slug, { ...params }) -> Response</code>
- <code title="get /skills/{namespace}/{slug}">client.skills.<a href="./src/resources/skills.ts">get</a>(slug, { ...params }) -> SkillGetResponse</code>
- <code title="put /skills/{namespace}/{slug}">client.skills.<a href="./src/resources/skills.ts">set</a>(slug, { ...params }) -> SkillSetResponse</code>
- <code title="post /skills/{namespace}/{slug}/sync">client.skills.<a href="./src/resources/skills.ts">sync</a>(slug, { ...params }) -> SkillSyncResponse</code>
- <code title="put /skills/{namespace}/{slug}/upload">client.skills.<a href="./src/resources/skills.ts">upload</a>(slug, { ...params }) -> SkillUploadResponse</code>

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

# Organizations

## APIKeys

Types:

- <code><a href="./src/resources/organizations/api-keys.ts">APIKeyCreateResponse</a></code>
- <code><a href="./src/resources/organizations/api-keys.ts">APIKeyListResponse</a></code>
- <code><a href="./src/resources/organizations/api-keys.ts">APIKeyDeleteResponse</a></code>

Methods:

- <code title="post /organizations/{orgId}/api-keys">client.organizations.apiKeys.<a href="./src/resources/organizations/api-keys.ts">create</a>(orgID, { ...params }) -> APIKeyCreateResponse</code>
- <code title="get /organizations/{orgId}/api-keys">client.organizations.apiKeys.<a href="./src/resources/organizations/api-keys.ts">list</a>(orgID) -> APIKeyListResponse</code>
- <code title="delete /organizations/{orgId}/api-keys/{keyId}">client.organizations.apiKeys.<a href="./src/resources/organizations/api-keys.ts">delete</a>(keyID, { ...params }) -> APIKeyDeleteResponse</code>

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

- <code title="post /{namespace}">client.connections.<a href="./src/resources/connections/connections.ts">create</a>(namespace, { ...params }) -> Connection</code>
- <code title="get /{namespace}">client.connections.<a href="./src/resources/connections/connections.ts">list</a>(namespace, { ...params }) -> ConnectionsListResponse</code>
- <code title="delete /{namespace}/{connectionId}">client.connections.<a href="./src/resources/connections/connections.ts">delete</a>(connectionID, { ...params }) -> ConnectionDeleteResponse</code>
- <code title="get /{namespace}/{connectionId}">client.connections.<a href="./src/resources/connections/connections.ts">get</a>(connectionID, { ...params }) -> Connection</code>
- <code title="put /{namespace}/{connectionId}">client.connections.<a href="./src/resources/connections/connections.ts">set</a>(connectionID, { ...params }) -> Connection</code>

## Tools

Types:

- <code><a href="./src/resources/connections/tools.ts">Tool</a></code>
- <code><a href="./src/resources/connections/tools.ts">ToolList</a></code>
- <code><a href="./src/resources/connections/tools.ts">ToolResponse</a></code>
- <code><a href="./src/resources/connections/tools.ts">ToolCallResponse</a></code>

Methods:

- <code title="get /{namespace}/{connectionId}/.tools">client.connections.tools.<a href="./src/resources/connections/tools.ts">list</a>(connectionID, { ...params }) -> ToolList</code>
- <code title="post /{namespace}/{connectionId}/.tools/{toolPath}">client.connections.tools.<a href="./src/resources/connections/tools.ts">call</a>(toolPath, { ...params }) -> ToolCallResponse</code>
- <code title="get /{namespace}/{connectionId}/.tools/{toolPath}">client.connections.tools.<a href="./src/resources/connections/tools.ts">get</a>(toolPath, { ...params }) -> ToolResponse</code>

## Triggers

Types:

- <code><a href="./src/resources/connections/triggers.ts">CreateTriggerRequest</a></code>
- <code><a href="./src/resources/connections/triggers.ts">DeleteTriggerRequest</a></code>
- <code><a href="./src/resources/connections/triggers.ts">TriggerDefinition</a></code>
- <code><a href="./src/resources/connections/triggers.ts">TriggerDefinitionList</a></code>
- <code><a href="./src/resources/connections/triggers.ts">TriggerDelivery</a></code>
- <code><a href="./src/resources/connections/triggers.ts">TriggerSubscription</a></code>
- <code><a href="./src/resources/connections/triggers.ts">UnsubscribeDelivery</a></code>
- <code><a href="./src/resources/connections/triggers.ts">TriggerUnsubscribeResponse</a></code>

Methods:

- <code title="get /{namespace}/{connectionId}/.triggers">client.connections.triggers.<a href="./src/resources/connections/triggers.ts">list</a>(connectionID, { ...params }) -> TriggerDefinitionList</code>
- <code title="get /{namespace}/{connectionId}/.triggers/{triggerName}">client.connections.triggers.<a href="./src/resources/connections/triggers.ts">get</a>(triggerName, { ...params }) -> TriggerDefinition</code>
- <code title="post /{namespace}/{connectionId}/.triggers/{triggerName}">client.connections.triggers.<a href="./src/resources/connections/triggers.ts">subscribe</a>(triggerName, { ...params }) -> TriggerSubscription</code>
- <code title="delete /{namespace}/{connectionId}/.triggers/{triggerName}">client.connections.triggers.<a href="./src/resources/connections/triggers.ts">unsubscribe</a>(triggerName, { ...params }) -> TriggerUnsubscribeResponse</code>
