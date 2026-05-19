# Changelog

## 0.65.1 (2026-05-19)

Full Changelog: [v0.65.0...v0.65.1](https://github.com/smithery-ai/typescript-api/compare/v0.65.0...v0.65.1)

### Bug Fixes

* **typescript:** upgrade tsc-multi so that it works with Node 26 ([03a4195](https://github.com/smithery-ai/typescript-api/commit/03a41957a2b6aff2f45b730e3365c6381684af72))


### Chores

* **tests:** remove redundant File import ([2b6cd5e](https://github.com/smithery-ai/typescript-api/commit/2b6cd5ef4cc3faf26b24b2484ce2f0ca3249b097))

## 0.65.0 (2026-05-16)

Full Changelog: [v0.64.3...v0.65.0](https://github.com/smithery-ai/typescript-api/compare/v0.64.3...v0.65.0)

### Features

* smithery managed filter ([#2433](https://github.com/smithery-ai/typescript-api/issues/2433)) ([8333593](https://github.com/smithery-ai/typescript-api/commit/83335935df51ea841c1b60438b324219975ac9e8))


### Bug Fixes

* **api:** classify OAuth abandonment as AUTH_TIMEOUT ([#2324](https://github.com/smithery-ai/typescript-api/issues/2324)) ([ef42845](https://github.com/smithery-ai/typescript-api/commit/ef42845948536e899e436f7e963e5790e8b66331))

## 0.64.3 (2026-05-08)

Full Changelog: [v0.64.2...v0.64.3](https://github.com/smithery-ai/typescript-api/compare/v0.64.2...v0.64.3)

### Bug Fixes

* **api:** cap legacy browse pagination LIMIT to bound PlanetScale egress ([#2203](https://github.com/smithery-ai/typescript-api/issues/2203)) ([ecf4b9b](https://github.com/smithery-ai/typescript-api/commit/ecf4b9b7fd9364ef0202b1cc58c9358f55c2ed80))


### Chores

* redact api-key headers in debug logs ([6dab2c8](https://github.com/smithery-ai/typescript-api/commit/6dab2c87cd90ae22c5501f9eac34f2e1adde14f4))

## 0.64.2 (2026-05-03)

Full Changelog: [v0.64.1...v0.64.2](https://github.com/smithery-ai/typescript-api/compare/v0.64.1...v0.64.2)

### Refactors

* **triggers:** align with the MCP Events spec proposal (breaking) ([#2201](https://github.com/smithery-ai/typescript-api/issues/2201)) ([ae9b669](https://github.com/smithery-ai/typescript-api/commit/ae9b669a64fddf136e4809818a576c12f85e2ee6))

## 0.64.1 (2026-04-30)

Full Changelog: [v0.64.0...v0.64.1](https://github.com/smithery-ai/typescript-api/compare/v0.64.0...v0.64.1)

### Bug Fixes

* **connect:** align triggers with Standard Webhooks ([#2177](https://github.com/smithery-ai/typescript-api/issues/2177)) ([3c7815d](https://github.com/smithery-ai/typescript-api/commit/3c7815d0e37b31f3ef33ed9a1dc8517eed3a26c7))
* move legacy connect compatibility to api ([#2165](https://github.com/smithery-ai/typescript-api/issues/2165)) ([cfe7ef4](https://github.com/smithery-ai/typescript-api/commit/cfe7ef4b7666777914781bab4b52f73d85a9b317))

## 0.64.0 (2026-04-29)

Full Changelog: [v0.63.1...v0.64.0](https://github.com/smithery-ai/typescript-api/compare/v0.63.1...v0.64.0)

### Features

* **SMI-1852:** publish generated TypeScript SDKs ([#2155](https://github.com/smithery-ai/typescript-api/issues/2155)) ([fcac7c8](https://github.com/smithery-ai/typescript-api/commit/fcac7c8c725ee667dc80815bd5b118655d4986c7))
* support setting headers via env ([96a0c4c](https://github.com/smithery-ai/typescript-api/commit/96a0c4c3e8d2868679f52cefd1bb9f82e89db7bd))


### Bug Fixes

* document Connect tools in SDK ([#2154](https://github.com/smithery-ai/typescript-api/issues/2154)) ([5fd3eee](https://github.com/smithery-ai/typescript-api/commit/5fd3eee77fa2e49661f33395f53039074d17f57f))
* normalize verification score checks ([#2153](https://github.com/smithery-ai/typescript-api/issues/2153)) ([f5223f0](https://github.com/smithery-ai/typescript-api/commit/f5223f06aafde2eb452d8c74a61f3a81be02b4bd))


### Chores

* **format:** run eslint and prettier separately ([7c537a8](https://github.com/smithery-ai/typescript-api/commit/7c537a82dded80c16e5a6b5190c1b2e135798f84))
* **internal:** codegen related update ([abe2faf](https://github.com/smithery-ai/typescript-api/commit/abe2faf1a9933516b9fe60d1ce6429f1bfda6a95))

## 0.63.1 (2026-04-28)

Full Changelog: [v0.63.0...v0.63.1](https://github.com/smithery-ai/typescript-api/compare/v0.63.0...v0.63.1)

### Bug Fixes

* use org id for Smithery badge ([#2102](https://github.com/smithery-ai/typescript-api/issues/2102)) ([f3f5695](https://github.com/smithery-ai/typescript-api/commit/f3f5695a2e466168b71e30a58794d31c927447d8))


### Chores

* consolidate server verification state into dedicated table ([#2111](https://github.com/smithery-ai/typescript-api/issues/2111)) ([abd51cf](https://github.com/smithery-ai/typescript-api/commit/abd51cf8b199cf0b543950c568209e9281a9461a))

## 0.63.0 (2026-04-27)

Full Changelog: [v0.62.0...v0.63.0](https://github.com/smithery-ai/typescript-api/compare/v0.62.0...v0.63.0)

### Features

* **api:** accept stdio .mcpb bundle uploads on publish ([#2058](https://github.com/smithery-ai/typescript-api/issues/2058)) ([ef9a503](https://github.com/smithery-ai/typescript-api/commit/ef9a503d872884144173077980296a85750212d5))


### Chores

* **SMI-1568:** remove GitHub deployments, keep repo links ([#2065](https://github.com/smithery-ai/typescript-api/issues/2065)) ([7ac6112](https://github.com/smithery-ai/typescript-api/commit/7ac6112d5d19f520e85121858b04fcba866d4de4))


### Refactors

* drop repo deploy payload and GitHub auto-deploy path ([#2060](https://github.com/smithery-ai/typescript-api/issues/2060)) ([d18fb9f](https://github.com/smithery-ai/typescript-api/commit/d18fb9fc172cc2aa0672455cd8121171f71d4df8))

## 0.62.0 (2026-04-24)

Full Changelog: [v0.61.0...v0.62.0](https://github.com/smithery-ai/typescript-api/compare/v0.61.0...v0.62.0)

### Features

* **connect:** v3 REST surface on smithery.tools; deprecate api.smithery.ai/connect ([#2032](https://github.com/smithery-ai/typescript-api/issues/2032)) ([95cb84d](https://github.com/smithery-ai/typescript-api/commit/95cb84d522d07e0273742348c88a57adbc55df60))


### Bug Fixes

* **api:** keep connect MCP out of stainless sdk ([#2055](https://github.com/smithery-ai/typescript-api/issues/2055)) ([4ac7d45](https://github.com/smithery-ai/typescript-api/commit/4ac7d455a7c5010d6f38e4f3da7bc71a0ae445a0))
* **connect:** restore connectionId in published OpenAPI ([#2042](https://github.com/smithery-ai/typescript-api/issues/2042)) ([3adfb97](https://github.com/smithery-ai/typescript-api/commit/3adfb97c928eb99bea36d92c3d20789ae9a3a866))


### Refactors

* **SMI-1825:** drop legacy stdioFunction support ([#2057](https://github.com/smithery-ai/typescript-api/issues/2057)) ([4c486b6](https://github.com/smithery-ai/typescript-api/commit/4c486b6860838e18795e8073d2af033347f9f733))

## 0.61.0 (2026-04-23)

Full Changelog: [v0.60.1...v0.61.0](https://github.com/smithery-ai/typescript-api/compare/v0.60.1...v0.61.0)

### Features

* **SMI-1826:** uplink transport for local MCP servers ([#2031](https://github.com/smithery-ai/typescript-api/issues/2031)) ([92b8fe1](https://github.com/smithery-ai/typescript-api/commit/92b8fe1b330c9211b210e72a8f72210f3b54d1eb))


### Chores

* **internal:** more robust bootstrap script ([06f6547](https://github.com/smithery-ai/typescript-api/commit/06f654762489a8e027e4663de1655b3edb8e8627))

## 0.60.1 (2026-04-21)

Full Changelog: [v0.60.0...v0.60.1](https://github.com/smithery-ai/typescript-api/compare/v0.60.0...v0.60.1)

### Bug Fixes

* **SMI-1801:** mock mode — transparent stateless + scenario seeding ([#2017](https://github.com/smithery-ai/typescript-api/issues/2017)) ([e564a9f](https://github.com/smithery-ai/typescript-api/commit/e564a9f46fcd39e0beb91845b5482fbe1263af60))

## 0.60.0 (2026-04-20)

Full Changelog: [v0.59.0...v0.60.0](https://github.com/smithery-ai/typescript-api/compare/v0.59.0...v0.60.0)

### Features

* **connect:** add LLM-simulated mock mode ([#2010](https://github.com/smithery-ai/typescript-api/issues/2010)) ([421730e](https://github.com/smithery-ai/typescript-api/commit/421730efb615dd3671dd82fde56256a908cf5ed1))

## 0.59.0 (2026-04-16)

Full Changelog: [v0.58.0...v0.59.0](https://github.com/smithery-ai/typescript-api/compare/v0.58.0...v0.59.0)

### Features

* REST surface + getPath host routing (SMI-1763) ([#1988](https://github.com/smithery-ai/typescript-api/issues/1988)) ([81883c0](https://github.com/smithery-ai/typescript-api/commit/81883c0203ca6350601a952368f52ef00e361b3c))
* **SMI-1774:** unify connect setup flow for input_required ([#1997](https://github.com/smithery-ai/typescript-api/issues/1997)) ([f5fc52b](https://github.com/smithery-ai/typescript-api/commit/f5fc52b9a8246e611892033fdc67dfe57359d09b))


### Bug Fixes

* strip internal host from connect openapi ([#2001](https://github.com/smithery-ai/typescript-api/issues/2001)) ([d9376d4](https://github.com/smithery-ai/typescript-api/commit/d9376d406990e7cd88c15aefd9ce21f27dc4e65b))

## 0.58.0 (2026-04-12)

Full Changelog: [v0.57.0...v0.58.0](https://github.com/smithery-ai/typescript-api/compare/v0.57.0...v0.58.0)

### Features

* **SMI-1688:** model literal HTTP inputs ([#1975](https://github.com/smithery-ai/typescript-api/issues/1975)) ([aafc73f](https://github.com/smithery-ai/typescript-api/commit/aafc73f79eb916880b4486c4a16050653063559f))


### Bug Fixes

* return real server homepage in registry api ([#1969](https://github.com/smithery-ai/typescript-api/issues/1969)) ([0db85d5](https://github.com/smithery-ai/typescript-api/commit/0db85d50907185206ed4306f4d2bd802202b9a7f))


### Chores

* drop reviews/votes tables ([#1965](https://github.com/smithery-ai/typescript-api/issues/1965)) ([f3b8742](https://github.com/smithery-ai/typescript-api/commit/f3b874286ff204fd1253e022652c3c21a75af5a4))
* **internal:** codegen related update ([c702989](https://github.com/smithery-ai/typescript-api/commit/c70298927281f4d14fd0eef28f3f164b8595444e))

## 0.57.0 (2026-04-06)

Full Changelog: [v0.56.2...v0.57.0](https://github.com/smithery-ai/typescript-api/compare/v0.56.2...v0.57.0)

### ⚠ BREAKING CHANGES

* update decorator api ([#182](https://github.com/smithery-ai/typescript-api/issues/182))

### Features

* add .well-known/mcp-config endpoint ([#186](https://github.com/smithery-ai/typescript-api/issues/186)) ([bb0dcff](https://github.com/smithery-ai/typescript-api/commit/bb0dcff2db6db4e127881e7adf1d3dc89c20d7e7))
* add better error messages and hot reload ([#183](https://github.com/smithery-ai/typescript-api/issues/183)) ([83056f7](https://github.com/smithery-ai/typescript-api/commit/83056f7f2dbfbb935a8c8e53a661fac9faf92231))
* add cli entrypoint ([f3df1d5](https://github.com/smithery-ai/typescript-api/commit/f3df1d5f9c66f9173d10530bb99d5105d98ed079))
* add decorator ([#180](https://github.com/smithery-ai/typescript-api/issues/180)) ([ef6731b](https://github.com/smithery-ai/typescript-api/commit/ef6731b012809a8bbd54ff854ccef06dde3a3787))
* add fastmcp patch for config/CORS handling ([#171](https://github.com/smithery-ai/typescript-api/issues/171)) ([b0dbf4e](https://github.com/smithery-ai/typescript-api/commit/b0dbf4eaa3aa33df8aaaaed53512c7e0dfb54715))
* add logging to servers ([#197](https://github.com/smithery-ai/typescript-api/issues/197)) ([d3b4fe8](https://github.com/smithery-ai/typescript-api/commit/d3b4fe866dc1ff9d4411bf2beb6e6e1d0f7b49e3))
* add Python 3.10 support with tomli fallback for tomllib ([#208](https://github.com/smithery-ai/typescript-api/issues/208)) ([4f23f10](https://github.com/smithery-ai/typescript-api/commit/4f23f10cdac5b3915049e31b87473137efb02191))
* add run, create commands to cli ([#174](https://github.com/smithery-ai/typescript-api/issues/174)) ([a7ce2c1](https://github.com/smithery-ai/typescript-api/commit/a7ce2c10ecb9b1efc38c796857fedf8bbe1693e0))
* add start command / fix: allow optional config ([#188](https://github.com/smithery-ai/typescript-api/issues/188)) ([1c7ba89](https://github.com/smithery-ai/typescript-api/commit/1c7ba89e0e997d33b6ffe5f9893c42ad63465749))
* add stateless support ([#169](https://github.com/smithery-ai/typescript-api/issues/169)) ([81898d5](https://github.com/smithery-ai/typescript-api/commit/81898d565315a823cfe108d5ad1cfeb21d78878d))
* allow connection for optional config ([7bf6a35](https://github.com/smithery-ai/typescript-api/commit/7bf6a3560e1e124ec9ff13357ffa7110edc6f745))
* **api:** api update ([7f9e8c3](https://github.com/smithery-ai/typescript-api/commit/7f9e8c30ab70197cf72680942dc3da020b84a9fa))
* **api:** api update ([1687a73](https://github.com/smithery-ai/typescript-api/commit/1687a7363a27c3158d44f2dd64b7bc47caa76faf))
* **api:** api update ([50dd444](https://github.com/smithery-ai/typescript-api/commit/50dd444416e5d7f8f656b828afab2fb1e542b062))
* **api:** api update ([cef976d](https://github.com/smithery-ai/typescript-api/commit/cef976d4dd0d30a506301e1ac1aebb1723fabeb2))
* **api:** api update ([7543511](https://github.com/smithery-ai/typescript-api/commit/75435110deb0c36c9de53103f1cc28e5d0c69513))
* **api:** api update ([f413791](https://github.com/smithery-ai/typescript-api/commit/f413791612e986032c5f054bc3f741f26b08b4a1))
* **api:** api update ([5ca806b](https://github.com/smithery-ai/typescript-api/commit/5ca806bbcc5ca063414a6f82a506ce06d74cddf4))
* **api:** api update ([3e05852](https://github.com/smithery-ai/typescript-api/commit/3e05852431c79eab1ac77b06c71a313c0a359320))
* **api:** api update ([63e4446](https://github.com/smithery-ai/typescript-api/commit/63e44463c7a586e0b631c8e16ba51d811ef52b63))
* **api:** api update ([113cdbb](https://github.com/smithery-ai/typescript-api/commit/113cdbbcdbf7665950a7c5ffff6c518c9856c698))
* **api:** api update ([2eb5f69](https://github.com/smithery-ai/typescript-api/commit/2eb5f696539a57d810c77704d2fd031a23c0efbe))
* **api:** api update ([7db449d](https://github.com/smithery-ai/typescript-api/commit/7db449d6b06349332e16cf4044e9dacdf85b39d3))
* **api:** api update ([7611d55](https://github.com/smithery-ai/typescript-api/commit/7611d55ed5cf057ad812f2d05512c4dfe767608c))
* **api:** api update ([e0f8939](https://github.com/smithery-ai/typescript-api/commit/e0f8939940c4e33f9f3e79003f6125618c7fdf1c))
* **api:** api update ([846428e](https://github.com/smithery-ai/typescript-api/commit/846428e404b6c264a652594bd13722c324f68666))
* **api:** api update ([f766e52](https://github.com/smithery-ai/typescript-api/commit/f766e52c953f70c00731703737b348de4f37a5bc))
* **api:** manual updates ([1a331df](https://github.com/smithery-ai/typescript-api/commit/1a331df49213d0620386c4f853a254a5e9f27a8c))
* **api:** manual updates ([4bd3f03](https://github.com/smithery-ai/typescript-api/commit/4bd3f032f8465cb48ac46bdff816e275152c5d63))
* **api:** manual updates ([f6cafa5](https://github.com/smithery-ai/typescript-api/commit/f6cafa5ee8f3cbee35722519aa6c8d4d2e15f146))
* **api:** manual updates ([dd905d7](https://github.com/smithery-ai/typescript-api/commit/dd905d7c83335b2c7537b8e783cfa9862141766c))
* **api:** manual updates ([62f3792](https://github.com/smithery-ai/typescript-api/commit/62f379254c99b65a900cead94d02650f32f9f516))
* **api:** manual updates ([b35fa53](https://github.com/smithery-ai/typescript-api/commit/b35fa5340127ec0d40ae51d0cd1ab30cf2dc515b))
* **api:** manual updates ([2b16516](https://github.com/smithery-ai/typescript-api/commit/2b16516b6ff07fadc641a3736327b7c8c0d942ff))
* **api:** manual updates ([a16427f](https://github.com/smithery-ai/typescript-api/commit/a16427f81ae95975d423bd2b04e62ef79ca5e953))
* **api:** manual updates ([0eea18d](https://github.com/smithery-ai/typescript-api/commit/0eea18d69afee254facad13ad25de88014a5641e))
* **api:** manual updates ([fe47c17](https://github.com/smithery-ai/typescript-api/commit/fe47c1731ddc868eb3fe861e93436477fd6feb11))
* **api:** manual updates ([dc395ba](https://github.com/smithery-ai/typescript-api/commit/dc395baa0a71cbd9c73a02e592e3fa3b36bfe1aa))
* **api:** manual updates ([d228365](https://github.com/smithery-ai/typescript-api/commit/d228365590ad093351ac29067a84ba5d7b49577d))
* **api:** manual updates ([9227f7c](https://github.com/smithery-ai/typescript-api/commit/9227f7cdde84df6e8851515bf9774fc5d7ef06ff))
* **api:** manual updates ([50d1fbc](https://github.com/smithery-ai/typescript-api/commit/50d1fbcaf1819b1a8b071df2680fd2fdc371bce6))
* **beta:** openai apps ([#200](https://github.com/smithery-ai/typescript-api/issues/200)) ([648a6f2](https://github.com/smithery-ai/typescript-api/commit/648a6f2560b63e06f0ef1b4f78a86d14d4f325b1))
* config flow in playground for python runtime ([#178](https://github.com/smithery-ai/typescript-api/issues/178)) ([c3c71d8](https://github.com/smithery-ai/typescript-api/commit/c3c71d8f9ece857f90f507389abcf594ef0a4837))
* improve fastmcp compatibility and add tests ([#192](https://github.com/smithery-ai/typescript-api/issues/192)) ([cb7594e](https://github.com/smithery-ai/typescript-api/commit/cb7594efb9ebb20406291445867cbdaeebd36dfa))
* improve python scaffold ([#184](https://github.com/smithery-ai/typescript-api/issues/184)) ([099afce](https://github.com/smithery-ai/typescript-api/commit/099afce49d165153e0cf7e4f99c7eb15056db70b))
* minor api update ([#205](https://github.com/smithery-ai/typescript-api/issues/205)) ([93930be](https://github.com/smithery-ai/typescript-api/commit/93930be501c87a9d6af520ceb08f3051d6ae7a0a))
* rename run to dev command ([#181](https://github.com/smithery-ai/typescript-api/issues/181)) ([56557fa](https://github.com/smithery-ai/typescript-api/commit/56557fab978fb40876125bbba225ba74c0e10c39))
* update decorator api ([#182](https://github.com/smithery-ai/typescript-api/issues/182)) ([e5829b6](https://github.com/smithery-ai/typescript-api/commit/e5829b6ff8b982c45093c8bca4197d170f7f09a3))
* update registry api to include icon url and verified ([#198](https://github.com/smithery-ai/typescript-api/issues/198)) ([a806149](https://github.com/smithery-ai/typescript-api/commit/a8061496cc055d0c819f25e8e6ba18bd4b3cb991))
* use better pattern for module import ([34a59df](https://github.com/smithery-ai/typescript-api/commit/34a59dfa1f20ca51a4d4b8e8be8c9a0fc85b2876))
* use cmd /c for windows command execution  ([#206](https://github.com/smithery-ai/typescript-api/issues/206)) ([0e46602](https://github.com/smithery-ai/typescript-api/commit/0e466024275496bc876031314c8c33ffd7565e96))
* use starlette for well-known response ([501fa0f](https://github.com/smithery-ai/typescript-api/commit/501fa0fdb04f276e444ca7a302ad0d03aca2d577))


### Bug Fixes

* .well-known with fastmcp 2.0 ([#190](https://github.com/smithery-ai/typescript-api/issues/190)) ([4a1e41d](https://github.com/smithery-ai/typescript-api/commit/4a1e41d357df98733eb6b8e771500a5863827d8e))
* add barrel index.ts to export SDK entry point ([#166](https://github.com/smithery-ai/typescript-api/issues/166)) ([962f16b](https://github.com/smithery-ai/typescript-api/commit/962f16b52ca69d3d9c8405b9182fdf163215ebf4))
* add biomejs platform binary to sdk publish workflow ([0026639](https://github.com/smithery-ai/typescript-api/commit/00266392560a81cf8a124d64f01a5e5b874a153e))
* add OPTIONS to CORS ([a1a6bc7](https://github.com/smithery-ai/typescript-api/commit/a1a6bc7d5d1dffca60411a27aab4bae6ccee40b6))
* attempt changing package dir ([cbcda60](https://github.com/smithery-ai/typescript-api/commit/cbcda6016a08a2d31f0b2dce6b950fd75aeb952a))
* cafe explorer package lock ([5c7fbec](https://github.com/smithery-ai/typescript-api/commit/5c7fbec69b785b9c31f89621730516dca0d536da))
* cli entrypoint ([c14e573](https://github.com/smithery-ai/typescript-api/commit/c14e573ad297b3233e442cf0323503c6424e0921))
* config access through middleware ([#194](https://github.com/smithery-ai/typescript-api/issues/194)) ([e3a9a15](https://github.com/smithery-ai/typescript-api/commit/e3a9a15102fc76990a3fcf72a1a28a4b923b99a8))
* dependency and style ([#175](https://github.com/smithery-ai/typescript-api/issues/175)) ([c5911dc](https://github.com/smithery-ai/typescript-api/commit/c5911dc2917fae8649d8d5abb6431c6670d21fce))
* guard orgId in releases query for pre-teams biscuit tokens ([b8834cd](https://github.com/smithery-ai/typescript-api/commit/b8834cdf29a0f9c83b425809b917e0429ebe42af))
* init command ([f0f97e4](https://github.com/smithery-ai/typescript-api/commit/f0f97e438e460a0a60fb6dfd74aef8916517fb7b))
* **internal:** gitignore generated `oidc` dir ([47f5e5c](https://github.com/smithery-ai/typescript-api/commit/47f5e5c0754bbe45cce113475fdea2ac8f91e2b9))
* module import during init ([#193](https://github.com/smithery-ai/typescript-api/issues/193)) ([9fcb6e7](https://github.com/smithery-ai/typescript-api/commit/9fcb6e74f555a8c69f5fd499942df91a3b1c2f9c))
* rm old dependency ([b2fbd81](https://github.com/smithery-ai/typescript-api/commit/b2fbd81f38a0234f20c4607daf11d9df6b2e42c0))
* update module path ([836c4d9](https://github.com/smithery-ai/typescript-api/commit/836c4d932fd4ba35d3eb03480e7e4d67b7464190))
* update speakeasy overlay to match current API structure ([#215](https://github.com/smithery-ai/typescript-api/issues/215)) ([9f06b11](https://github.com/smithery-ai/typescript-api/commit/9f06b11c1bd58df2c5bfe7557080a75147a73f60))
* well-known endpoint scope and host header ([#187](https://github.com/smithery-ai/typescript-api/issues/187)) ([a246d94](https://github.com/smithery-ai/typescript-api/commit/a246d943f6c1df0067debc6c505b17e77d0f9ce5))


### Chores

* 🐝 Update SDK - Generate SDK 0.4.0 ([#165](https://github.com/smithery-ai/typescript-api/issues/165)) ([25d09fe](https://github.com/smithery-ai/typescript-api/commit/25d09fe229c31a20d1b4f0f882c0a8ff2569e19a))
* 🐝 Update SDK - Generate SDK 0.4.1 ([#168](https://github.com/smithery-ai/typescript-api/issues/168)) ([bb51733](https://github.com/smithery-ai/typescript-api/commit/bb51733b8e3d99f0931f5f4176abd1f58cf7b37b))
* 🐝 Update SDK - Generate SDK 0.4.3 ([#196](https://github.com/smithery-ai/typescript-api/issues/196)) ([c68d222](https://github.com/smithery-ai/typescript-api/commit/c68d22272c6b951d54aac50010026a43d99571ed))
* 🐝 Update SDK - Generate SDK 0.4.4 ([#199](https://github.com/smithery-ai/typescript-api/issues/199)) ([341587f](https://github.com/smithery-ai/typescript-api/commit/341587fcb03f922cfdeaf0a470d7699269451c61))
* 🐝 Update SDK - Generate SDK 0.5.3 ([#209](https://github.com/smithery-ai/typescript-api/issues/209)) ([54303cd](https://github.com/smithery-ai/typescript-api/commit/54303cde77b5e48a0df398c88686cbe05528fc56))
* 🐝 Update SDK - Generate SDK 0.6.1 ([#210](https://github.com/smithery-ai/typescript-api/issues/210)) ([0b82a20](https://github.com/smithery-ai/typescript-api/commit/0b82a2016864c52ed4251d2be0aa00d6fa1e16ff))
* 🐝 Update SDK - Generate SDK 0.6.2 ([#212](https://github.com/smithery-ai/typescript-api/issues/212)) ([77e5945](https://github.com/smithery-ai/typescript-api/commit/77e5945e9add2f0ef6083671b16435f20462aa63))
* bump create-smithery version to 1.0.10 [skip ci] ([2d7f949](https://github.com/smithery-ai/typescript-api/commit/2d7f9497083ce1d93421ee10309d7a71f7a700db))
* bump create-smithery version to 1.0.11 [skip ci] ([a27a961](https://github.com/smithery-ai/typescript-api/commit/a27a961d71199f28b8261842be1e6ab6b19981a0))
* bump create-smithery version to 1.0.12 [skip ci] ([11dd332](https://github.com/smithery-ai/typescript-api/commit/11dd332e1aa6ca3760bfd62f3a9749baedfa7d71))
* bump v ([3a8ce3e](https://github.com/smithery-ai/typescript-api/commit/3a8ce3e05a22298667659fea8054eebba69ef4cb))
* bump version ([9df6b15](https://github.com/smithery-ai/typescript-api/commit/9df6b158b996b23c7c379e0ca7b8e616e28dbe61))
* bump version ([aebab69](https://github.com/smithery-ai/typescript-api/commit/aebab691b1b2d46021a7130e61ec5fd37fa20b6e))
* bump version ([d824e13](https://github.com/smithery-ai/typescript-api/commit/d824e13d9a435906626ce65154924cd1e9782708))
* bump version to 0.28.0 ([#48](https://github.com/smithery-ai/typescript-api/issues/48)) ([0147192](https://github.com/smithery-ai/typescript-api/commit/014719276450200969d9f46251cf495f0e73c9da))
* bump version to 1.5.10 [skip ci] ([31de6f6](https://github.com/smithery-ai/typescript-api/commit/31de6f67ac2bb22752b9160c0a2a6787e88c098c))
* bump version to 1.5.2 [skip ci] ([6603d7c](https://github.com/smithery-ai/typescript-api/commit/6603d7cb721d13a79080e0913d8ac08b7d92a043))
* bump version to 1.5.3 [skip ci] ([5086e56](https://github.com/smithery-ai/typescript-api/commit/5086e563e8e9565e2766802766c55b4d7353f4a2))
* bump version to 1.5.4 [skip ci] ([92f33e3](https://github.com/smithery-ai/typescript-api/commit/92f33e3fa9fc2e71120a9df5e5ef6849defe7920))
* bump version to 1.5.5 [skip ci] ([25c85eb](https://github.com/smithery-ai/typescript-api/commit/25c85ebfa8b6d347676ef50f48c5a50150f52a9d))
* bump version to 1.5.6 [skip ci] ([a2503ff](https://github.com/smithery-ai/typescript-api/commit/a2503ff10685e394eefa61eb285f2c63ae7632f0))
* bump version to 1.5.7 [skip ci] ([6d31023](https://github.com/smithery-ai/typescript-api/commit/6d310238c22abad104fb726f02dda2a70766e4ef))
* bump version to 1.5.8 [skip ci] ([7a0f90c](https://github.com/smithery-ai/typescript-api/commit/7a0f90c25abfedc99fc57078b989f53d02ee6878))
* bump version to 1.5.9 [skip ci] ([583bb34](https://github.com/smithery-ai/typescript-api/commit/583bb34f049b4362305b7c36ffe1207106dd6f57))
* bump version to 1.6.1 [skip ci] ([3f0243a](https://github.com/smithery-ai/typescript-api/commit/3f0243a255f2ebb9079f754c9f898cebf5ac2283))
* bump version to 1.6.2 [skip ci] ([d76af74](https://github.com/smithery-ai/typescript-api/commit/d76af740201e6c88d08b49d4e3ccbc4f7b678883))
* bump version to 1.6.3 [skip ci] ([25c7975](https://github.com/smithery-ai/typescript-api/commit/25c7975a3fbe8aedf444f01f163bb2c61b298372))
* bump version to 1.6.4 [skip ci] ([7301eaa](https://github.com/smithery-ai/typescript-api/commit/7301eaa0a44fbc82a3385aff251838aa2b4c6774))
* bump version to 1.6.5 [skip ci] ([4444739](https://github.com/smithery-ai/typescript-api/commit/44447399ce97979f7f82c84e7d83737d33eaa677))
* bump version to 1.6.6 [skip ci] ([d65d061](https://github.com/smithery-ai/typescript-api/commit/d65d0614ceddf191b97e1526eaad1d6bc45c11f0))
* bump version to 1.6.7 [skip ci] ([c289c99](https://github.com/smithery-ai/typescript-api/commit/c289c999008f22970d4a1dc2641921d62f3858e0))
* bump version to 1.6.8 [skip ci] ([a87dd54](https://github.com/smithery-ai/typescript-api/commit/a87dd546556b2e7a419885ebb61cecb2b0e97af8))
* bump version to 2.0.0 for breaking change ([62fbadd](https://github.com/smithery-ai/typescript-api/commit/62fbadd1abc88c37be6dce4333c9dc1aa9c1d8e3))
* cleanups and add solar system example ([#201](https://github.com/smithery-ai/typescript-api/issues/201)) ([0f7f34b](https://github.com/smithery-ai/typescript-api/commit/0f7f34b62ff2d6bc25562b844ee4f1a512e03a97))
* enforce zod version, bump TS sdk version and update example server ([8c8ed99](https://github.com/smithery-ai/typescript-api/commit/8c8ed99f0789a10f9c3a3187058a8d5563db5a71))
* fix folder org and pyproject ([0b3e0d4](https://github.com/smithery-ai/typescript-api/commit/0b3e0d42528326df4bc4817345d888205b88c32a))
* **internal:** update `actions/checkout` version ([18a1cd4](https://github.com/smithery-ai/typescript-api/commit/18a1cd43d9a46e071544befd53bce5430915031e))
* **internal:** update lock file ([c68f2a8](https://github.com/smithery-ai/typescript-api/commit/c68f2a8b545d3d875a54caef9ca256bd4b38626e))
* **internal:** upgrade brace-expansion and @babel/helpers ([44e1ea6](https://github.com/smithery-ai/typescript-api/commit/44e1ea6e63c6a0ba851dd7c9afd9bf010cd66eed))
* major version bump to 3.0.0 ([38803e7](https://github.com/smithery-ai/typescript-api/commit/38803e764c98713d48b1a383e5f58fa398ef3ba0))
* remove debug logs from well-known ([ab1a6e3](https://github.com/smithery-ai/typescript-api/commit/ab1a6e32cec8a528ae70ecd2bbaa093eecfd0144))
* simplify hello-server scaffold and update package versions ([27f0f62](https://github.com/smithery-ai/typescript-api/commit/27f0f622ba162c6708412d669fdbc6e54d5a8697))
* sync repo ([4415e47](https://github.com/smithery-ai/typescript-api/commit/4415e47fee2f5f258ea99ed8372a1ff0b0ccbd8d))
* update cli verison in examples ([4f1a3de](https://github.com/smithery-ai/typescript-api/commit/4f1a3deed339fb54065cef9de8615ac06cab444c))
* update deps ([d36615e](https://github.com/smithery-ai/typescript-api/commit/d36615e75abca6e351b6ed32f185f7f372ba3914))
* update example deps ([98da9c5](https://github.com/smithery-ai/typescript-api/commit/98da9c5f10bda61e51b98b93578ce4070fb6c2a3))
* update example server config ([216effd](https://github.com/smithery-ai/typescript-api/commit/216effdb987a110fa50a52ff716e6881972747e8))
* update example server version ([55fc508](https://github.com/smithery-ai/typescript-api/commit/55fc5083793b54cc0e1f06278b3d0ea2e0366ef2))
* update package deps and workflow ([4e81a08](https://github.com/smithery-ai/typescript-api/commit/4e81a08ca5e3c40af9134e863efac13ec72369dc))
* update package deps and workflow ([#173](https://github.com/smithery-ai/typescript-api/issues/173)) ([7d760dd](https://github.com/smithery-ai/typescript-api/commit/7d760ddff21db317357668651d07135f9ca253c9))
* update scaffold setup ([#172](https://github.com/smithery-ai/typescript-api/issues/172)) ([db7a594](https://github.com/smithery-ai/typescript-api/commit/db7a59440a13193e3d38271a12430142c4b464cb))
* update SDK settings ([42b2009](https://github.com/smithery-ai/typescript-api/commit/42b200976e4cfc0d04751d01b1030b0c98b5d1fe))
* update SDK settings ([471da61](https://github.com/smithery-ai/typescript-api/commit/471da61718c480de71b795f8ff7d1b4e1b9372a7))
* update SDK settings ([dbffd34](https://github.com/smithery-ai/typescript-api/commit/dbffd341d9f32d7aec33148de52b68bb4719166d))
* update SDK settings ([04175f6](https://github.com/smithery-ai/typescript-api/commit/04175f6d2323a337d0f81069d370c8f0113dce94))
* update SDK settings ([68d9c9a](https://github.com/smithery-ai/typescript-api/commit/68d9c9ae4adfb6fdb28876b0af19e69a571107a9))
* update SDK settings ([8be709d](https://github.com/smithery-ai/typescript-api/commit/8be709d379f1c8572d21d78eb99e1de5b780cf4a))
* update SDK settings ([5725105](https://github.com/smithery-ai/typescript-api/commit/57251052bd0fb90e14a70d229dacdefc7064986d))
* update smithery cli version ([#216](https://github.com/smithery-ai/typescript-api/issues/216)) ([c28a6bd](https://github.com/smithery-ai/typescript-api/commit/c28a6bdb8539c01a6e41e422874e2d103966a80d))
* update ts sdk version ([b673ca9](https://github.com/smithery-ai/typescript-api/commit/b673ca97408fd12e56c5c8a6e73b6a937a8aac2f))
* update version to 2.1.0, move zod to peer deps ([6627fb6](https://github.com/smithery-ai/typescript-api/commit/6627fb6c4c1b1bef6ca04f770f8479db150c9835))


### Documentation

* add basic server scaffold ([1c2d6b1](https://github.com/smithery-ai/typescript-api/commit/1c2d6b1c7bcd1d4567902361cabc8fa21869aadd))
* add local server example ([#204](https://github.com/smithery-ai/typescript-api/issues/204)) ([de3f2cd](https://github.com/smithery-ai/typescript-api/commit/de3f2cd975b456eb1e64c8c0da49de37b2e08324))
* improve examples ([#202](https://github.com/smithery-ai/typescript-api/issues/202)) ([186a38f](https://github.com/smithery-ai/typescript-api/commit/186a38ff4e4caee5343cf8e4fff42189b78ba538))
* update config use ([60f1021](https://github.com/smithery-ai/typescript-api/commit/60f10215a03106f2209b3bb6b1c1686b3f16b3ae))
* update scaffold ([bd356a4](https://github.com/smithery-ai/typescript-api/commit/bd356a45751923f6de0c1b24b23f1d3c01b8d943))
* update scaffold ([#189](https://github.com/smithery-ai/typescript-api/issues/189)) ([2c75a52](https://github.com/smithery-ai/typescript-api/commit/2c75a526d14f8862cc14604381ec4eedf0c6eb32))
* update scaffold ([#207](https://github.com/smithery-ai/typescript-api/issues/207)) ([5da1706](https://github.com/smithery-ai/typescript-api/commit/5da1706afc1abbed512e19fb2d4b83699d046665))
* update smithery cli version in examples ([47aea92](https://github.com/smithery-ai/typescript-api/commit/47aea929a65d300a1691f271b106106e7777d584))


### Refactors

* clean up exports in index.ts and streamline session request handling in createStatefulServer ([8e49aec](https://github.com/smithery-ai/typescript-api/commit/8e49aec20f583accb396bb169c61e720a7e1a049))
* move create smithery to sdk ([#185](https://github.com/smithery-ai/typescript-api/issues/185)) ([64cdc63](https://github.com/smithery-ai/typescript-api/commit/64cdc634a6ed6107a6b56bdee016b1e7d7cd5f26))
* remove chatgpt apps support ([#213](https://github.com/smithery-ai/typescript-api/issues/213)) ([4a99137](https://github.com/smithery-ai/typescript-api/commit/4a991372bc31f8ebf8a4dd0849d16b1ee9635dc8))
* remove connect event abstraction ([#1893](https://github.com/smithery-ai/typescript-api/issues/1893)) ([2d25b09](https://github.com/smithery-ai/typescript-api/commit/2d25b095e584bb31dd14d69bfe7f81eab9690608))

## 0.56.2 (2026-03-25)

Full Changelog: [v0.56.1...v0.56.2](https://github.com/smithery-ai/typescript-api/compare/v0.56.1...v0.56.2)

### Refactors

* **SMI-1697:** disable custom domain management ([#1879](https://github.com/smithery-ai/typescript-api/issues/1879)) ([80a7360](https://github.com/smithery-ai/typescript-api/commit/80a7360b666640b40c021df11f7b8127c1d372b7))

## 0.56.1 (2026-03-25)

Full Changelog: [v0.56.0...v0.56.1](https://github.com/smithery-ai/typescript-api/compare/v0.56.0...v0.56.1)

### Chores

* **ci:** skip lint on metadata-only changes ([829520b](https://github.com/smithery-ai/typescript-api/commit/829520b6f7905be8e8d7d01ece1afcd3a56d9b71))
* **internal:** tweak CI branches ([e5307bc](https://github.com/smithery-ai/typescript-api/commit/e5307bcf1aee11fc21251525ce530333e0a8dbdd))
* **internal:** update gitignore ([d35f546](https://github.com/smithery-ai/typescript-api/commit/d35f54655cd6fe22eecf427a67755195c0ab516d))
* strip stdio deployment code (SMI-1610) ([#1871](https://github.com/smithery-ai/typescript-api/issues/1871)) ([3b6e9a3](https://github.com/smithery-ai/typescript-api/commit/3b6e9a3f18bc13cafcca07f4b4daa07206282f3c))
* sunset reviews — deprecate API, remove UI (SMI-1505) ([#1843](https://github.com/smithery-ai/typescript-api/issues/1843)) ([98fe690](https://github.com/smithery-ai/typescript-api/commit/98fe6908ff4ea6fd9494464caeca1c7c94c31192))

## 0.56.0 (2026-03-13)

Full Changelog: [v0.55.0...v0.56.0](https://github.com/smithery-ai/typescript-api/compare/v0.55.0...v0.56.0)

### Features

* **SMI-1461:** support uploaded skill bundles ([#1786](https://github.com/smithery-ai/typescript-api/issues/1786)) ([3e01756](https://github.com/smithery-ai/typescript-api/commit/3e0175627acf6e10f161f812cdf0ed4eed7a74d5))

## 0.55.0 (2026-03-12)

Full Changelog: [v0.54.0...v0.55.0](https://github.com/smithery-ai/typescript-api/compare/v0.54.0...v0.55.0)

### Features

* sunset Smithery Chat/Playground (SMI-1579) ([4ff43f1](https://github.com/smithery-ai/typescript-api/commit/4ff43f15e02811fcce12acc1b893d4d8adc79eeb))


### Bug Fixes

* **api:** add seed param for duplicate-free browse pagination ([#1780](https://github.com/smithery-ai/typescript-api/issues/1780)) ([a3ce849](https://github.com/smithery-ai/typescript-api/commit/a3ce849c4a98f5cc197c8af5ea8019d1f050bced))
* **client:** preserve URL params already embedded in path ([b4bd0cf](https://github.com/smithery-ai/typescript-api/commit/b4bd0cf8c1a80846e9b90266c72ac367dddbfec3))


### Chores

* **ci:** skip uploading artifacts on stainless-internal branches ([0da884d](https://github.com/smithery-ai/typescript-api/commit/0da884d71a8735a1d7dc837e7617a0fc2f3a0f64))
* **internal:** codegen related update ([61589d3](https://github.com/smithery-ai/typescript-api/commit/61589d3e4268f14272015c71f4475cb7c59006fa))
* **internal:** update dependencies to address dependabot vulnerabilities ([5713407](https://github.com/smithery-ai/typescript-api/commit/57134075dc3f9b8a5d76c80fe5892abf86a07c9f))
* update placeholder string ([30712cf](https://github.com/smithery-ai/typescript-api/commit/30712cfa14cfa3fda5117d6915866f5148ef2e45))

## 0.54.0 (2026-03-03)

Full Changelog: [v0.53.0...v0.54.0](https://github.com/smithery-ai/typescript-api/compare/v0.53.0...v0.54.0)

### Features

* Add skill download endpoint to Stainless config ([#1676](https://github.com/smithery-ai/typescript-api/issues/1676)) ([2dd2241](https://github.com/smithery-ai/typescript-api/commit/2dd2241ac04c80d8c36d8e0ea3dab87dc5adf433))
* architecture specs and server page cleanup ([#1623](https://github.com/smithery-ai/typescript-api/issues/1623)) ([a979f87](https://github.com/smithery-ai/typescript-api/commit/a979f8711ca1c80d26f0aff37dc5edfaf59505f6))


### Chores

* **internal:** codegen related update ([95ebd12](https://github.com/smithery-ai/typescript-api/commit/95ebd12e866195635a3a7f6d5a5264dd67d6a176))
* **internal:** move stringifyQuery implementation to internal function ([4c09d67](https://github.com/smithery-ai/typescript-api/commit/4c09d678318af319842615e349086b59d28719f9))
* Remove unused authentication field from server cards ([#1625](https://github.com/smithery-ai/typescript-api/issues/1625)) ([d1a6ad1](https://github.com/smithery-ai/typescript-api/commit/d1a6ad105f5e8bb73d5e689b872f2e6ea41adfab))

## 0.53.0 (2026-02-26)

Full Changelog: [v0.52.0...v0.53.0](https://github.com/smithery-ai/typescript-api/compare/v0.52.0...v0.53.0)

### Features

* **SMI-1462:** MCP-level request matching (Phase 1) ([#1612](https://github.com/smithery-ai/typescript-api/issues/1612)) ([ee531f2](https://github.com/smithery-ai/typescript-api/commit/ee531f2a7f268b28d591d553a6d2dd7f924ea9a0))


### Chores

* **SMI-1462:** Export Constraint schema for Stainless SDK generation ([#1621](https://github.com/smithery-ai/typescript-api/issues/1621)) ([dcc3579](https://github.com/smithery-ai/typescript-api/commit/dcc357964db6ea3404dbe29530696bdc49237335))

## 0.52.0 (2026-02-25)

Full Changelog: [v0.51.0...v0.52.0](https://github.com/smithery-ai/typescript-api/compare/v0.51.0...v0.52.0)

### Features

* **SMI-1187:** add search param and lower default limit for logs ([#1591](https://github.com/smithery-ai/typescript-api/issues/1591)) ([d541d08](https://github.com/smithery-ai/typescript-api/commit/d541d0866cd6d06959e7057df625cdeff0c0d235))
* **SMI-1187:** replace mcp-tail with CF Observability API ([#1585](https://github.com/smithery-ai/typescript-api/issues/1585)) ([9925ee0](https://github.com/smithery-ai/typescript-api/commit/9925ee0c410da4c6493314e674e4c8e10d5469f6))
* **SMI-1540:** add eventTopics, resources, prompts to server API response ([#1587](https://github.com/smithery-ai/typescript-api/issues/1587)) ([8b74e92](https://github.com/smithery-ai/typescript-api/commit/8b74e92d4f526fca9e0e770edfd925109f346014))
* **SMI-1552:** support events polling in Connect API ([#1602](https://github.com/smithery-ai/typescript-api/issues/1602)) ([f4379cf](https://github.com/smithery-ai/typescript-api/commit/f4379cf1b2d15748a9c580985f3de349928d11c7))

## 0.51.0 (2026-02-24)

Full Changelog: [v0.50.0...v0.51.0](https://github.com/smithery-ai/typescript-api/compare/v0.50.0...v0.51.0)

### Features

* **api:** api update ([e2bd9eb](https://github.com/smithery-ai/typescript-api/commit/e2bd9eb4711cab148fb045ba7d56fbc3af89549a))


### Bug Fixes

* **docs/contributing:** correct pnpm link command ([f1596b4](https://github.com/smithery-ai/typescript-api/commit/f1596b4f8d38928b05177d42aa8e881e5d92a95b))


### Chores

* **internal:** upgrade pnpm version ([a44455d](https://github.com/smithery-ai/typescript-api/commit/a44455d1f4f673eada07a37c5b79e4e717f44516))

## 0.50.0 (2026-02-21)

Full Changelog: [v0.49.0...v0.50.0](https://github.com/smithery-ai/typescript-api/compare/v0.49.0...v0.50.0)

### Features

* **api:** api update ([1ff8762](https://github.com/smithery-ai/typescript-api/commit/1ff8762cfcdbcc3687dad50af6c675620bfc2588))


### Chores

* **internal:** remove mock server code ([85a13fe](https://github.com/smithery-ai/typescript-api/commit/85a13fe04c88ef0c28c25475d4fcd44f12d379c5))
* **test:** update skip reason message ([46155b0](https://github.com/smithery-ai/typescript-api/commit/46155b045f244bd16f81b24cf99e51a6e1d8891d))
* update mock server docs ([2250bc7](https://github.com/smithery-ai/typescript-api/commit/2250bc7837c6b9acf44e3d87a063ab315911005c))

## 0.49.0 (2026-02-19)

Full Changelog: [v0.48.0...v0.49.0](https://github.com/smithery-ai/typescript-api/compare/v0.48.0...v0.49.0)

### Features

* **api:** api update ([e64e662](https://github.com/smithery-ai/typescript-api/commit/e64e6622b2f88d6b7ea27ba36dc88756b4151b14))


### Chores

* **internal/client:** fix form-urlencoded requests ([b640360](https://github.com/smithery-ai/typescript-api/commit/b64036080213e0e958f320554b294ce5ba79144e))

## 0.48.0 (2026-02-17)

Full Changelog: [v0.47.0...v0.48.0](https://github.com/smithery-ai/typescript-api/compare/v0.47.0...v0.48.0)

### Features

* **api:** api update ([fd0d5ce](https://github.com/smithery-ai/typescript-api/commit/fd0d5ce0de01ee208212a2db773f233d7021ff1f))

## 0.47.0 (2026-02-15)

Full Changelog: [v0.46.0...v0.47.0](https://github.com/smithery-ai/typescript-api/compare/v0.46.0...v0.47.0)

### Features

* **api:** api update ([d65bb99](https://github.com/smithery-ai/typescript-api/commit/d65bb99160af71f8e953d381cba1adf0ff986fb2))
* **api:** api update ([2860491](https://github.com/smithery-ai/typescript-api/commit/2860491d3b5a6275666ea81673a0a47e05d2e677))

## 0.46.0 (2026-02-14)

Full Changelog: [v0.45.0...v0.46.0](https://github.com/smithery-ai/typescript-api/compare/v0.45.0...v0.46.0)

### Features

* **api:** api update ([17ed9c6](https://github.com/smithery-ai/typescript-api/commit/17ed9c67cbe714fab5c25f5ada0e56c5a5959c51))
* **api:** api update ([8002d58](https://github.com/smithery-ai/typescript-api/commit/8002d58a38e8e751df6a1bf94830986336a3f25e))


### Bug Fixes

* remove experimental namespace from mcp-transport  [SMI-1478] ([#70](https://github.com/smithery-ai/typescript-api/issues/70)) ([1673b12](https://github.com/smithery-ai/typescript-api/commit/1673b1210106ca599193f167fc06dc2f788512d3))

## 0.45.0 (2026-02-13)

Full Changelog: [v0.44.0...v0.45.0](https://github.com/smithery-ai/typescript-api/compare/v0.44.0...v0.45.0)

### Features

* **api:** api update ([492e927](https://github.com/smithery-ai/typescript-api/commit/492e9272c4d57de3869ed7d808f63b7dec89c14b))

## 0.44.0 (2026-02-13)

Full Changelog: [v0.43.0...v0.44.0](https://github.com/smithery-ai/typescript-api/compare/v0.43.0...v0.44.0)

### Features

* **api:** api update ([25808a0](https://github.com/smithery-ai/typescript-api/commit/25808a0c707bb2905e0a6365b12915354ea704b6))

## 0.43.0 (2026-02-12)

Full Changelog: [v0.42.0...v0.43.0](https://github.com/smithery-ai/typescript-api/compare/v0.42.0...v0.43.0)

### Features

* **api:** api update ([8eaec57](https://github.com/smithery-ai/typescript-api/commit/8eaec57e0bed6b3c316aa4f76a7b678ba5ef30d0))
* **api:** api update ([1744563](https://github.com/smithery-ai/typescript-api/commit/174456379ab1174f5dd11246aad7cdd061fe9571))
* **api:** api update ([ab951a7](https://github.com/smithery-ai/typescript-api/commit/ab951a7f833b23e0908b42d33e430df936b2f048))


### Chores

* **internal:** avoid type checking errors with ts-reset ([7a47d97](https://github.com/smithery-ai/typescript-api/commit/7a47d97540449a7a921c7c90a0e328aac6313887))

## 0.42.0 (2026-02-10)

Full Changelog: [v0.41.0...v0.42.0](https://github.com/smithery-ai/typescript-api/compare/v0.41.0...v0.42.0)

### Features

* **api:** api update ([bf875f1](https://github.com/smithery-ai/typescript-api/commit/bf875f12187ed828a15e2f5bdcb207fa1748d47e))

## 0.41.0 (2026-02-09)

Full Changelog: [v0.40.0...v0.41.0](https://github.com/smithery-ai/typescript-api/compare/v0.40.0...v0.41.0)

### Features

* **api:** api update ([5aabba9](https://github.com/smithery-ai/typescript-api/commit/5aabba9f72c21c0f0da37409b56acce352017297))
* **api:** api update ([24b0eb7](https://github.com/smithery-ai/typescript-api/commit/24b0eb7df16533361c65d0af4ac058f99e28b7e4))

## 0.40.0 (2026-02-07)

Full Changelog: [v0.39.0...v0.40.0](https://github.com/smithery-ai/typescript-api/compare/v0.39.0...v0.40.0)

### Features

* **api:** api update ([34f7f44](https://github.com/smithery-ai/typescript-api/commit/34f7f44465064f0b27f1372faa929f79d0400997))

## 0.39.0 (2026-02-07)

Full Changelog: [v0.38.0...v0.39.0](https://github.com/smithery-ai/typescript-api/compare/v0.38.0...v0.39.0)

### Features

* **api:** api update ([b4d5992](https://github.com/smithery-ai/typescript-api/commit/b4d5992ed30d58c62405f8e103f122e59aa2f1db))
* **api:** api update ([a77c1ed](https://github.com/smithery-ai/typescript-api/commit/a77c1ed0f1f571344fac0f35c222d9d38ba804bc))


### Bug Fixes

* **client:** avoid removing abort listener too early ([8178cb2](https://github.com/smithery-ai/typescript-api/commit/8178cb23dc174df887ba353284d0b4058c20ff69))


### Chores

* **internal:** fix pagination internals not accepting option promises ([849272e](https://github.com/smithery-ai/typescript-api/commit/849272ea6b18af5896375b013a8a10c4639bbf7b))
* **internal:** upgrade pnpm ([ae82e56](https://github.com/smithery-ai/typescript-api/commit/ae82e56a02331d306a22dca641c547e5a3958281))

## 0.38.0 (2026-02-05)

Full Changelog: [v0.37.0...v0.38.0](https://github.com/smithery-ai/typescript-api/compare/v0.37.0...v0.38.0)

### Features

* **api:** api update ([6dc085b](https://github.com/smithery-ai/typescript-api/commit/6dc085b4c778b3c7543142b0c363f54404c9941c))


### Chores

* **client:** restructure abort controller binding ([31dfe60](https://github.com/smithery-ai/typescript-api/commit/31dfe601f2860c1a39dab9b8c55ad02a5f6203ee))

## 0.37.0 (2026-02-04)

Full Changelog: [v0.36.0...v0.37.0](https://github.com/smithery-ai/typescript-api/compare/v0.36.0...v0.37.0)

### Features

* **api:** api update ([872a596](https://github.com/smithery-ai/typescript-api/commit/872a596302b909231e156f8e35dbfaa753290d71))
* **api:** api update ([303350f](https://github.com/smithery-ai/typescript-api/commit/303350fba2ad64bc6a8c00cd9d02c32b8955607b))
* **api:** api update ([30eb6e5](https://github.com/smithery-ai/typescript-api/commit/30eb6e5262cffb794f383dcec79460db129648e8))

## 0.36.0 (2026-02-04)

Full Changelog: [v0.35.0...v0.36.0](https://github.com/smithery-ai/typescript-api/compare/v0.35.0...v0.36.0)

### Features

* **api:** api update ([a50b134](https://github.com/smithery-ai/typescript-api/commit/a50b134d4646dac5ae35afe499667a32253dc737))

## 0.35.0 (2026-02-04)

Full Changelog: [v0.34.1...v0.35.0](https://github.com/smithery-ai/typescript-api/compare/v0.34.1...v0.35.0)

### Features

* **api:** api update ([d742e38](https://github.com/smithery-ai/typescript-api/commit/d742e38a6566a7e61a902dd88b781008ac735b0a))
* **api:** api update ([6e9e580](https://github.com/smithery-ai/typescript-api/commit/6e9e580c0b1ee4a8e233449ba0b70011a11acecd))
* **api:** api update ([f921cb5](https://github.com/smithery-ai/typescript-api/commit/f921cb537d62cc6c66a1de7586c802c1a3b5554e))
* **api:** api update ([012ae26](https://github.com/smithery-ai/typescript-api/commit/012ae262b3e5a6007ad00560ab4ad7d5ebc68893))

## 0.34.1 (2026-02-03)

Full Changelog: [v0.34.0...v0.34.1](https://github.com/smithery-ai/typescript-api/compare/v0.34.0...v0.34.1)

### Bug Fixes

* **client:** avoid memory leak with abort signals ([2d97450](https://github.com/smithery-ai/typescript-api/commit/2d97450faa8702c487469bb9c7217a37eee00468))


### Chores

* **client:** do not parse responses with empty content-length ([efc3ae5](https://github.com/smithery-ai/typescript-api/commit/efc3ae5f79e53f6d5ba4900d57bd842ce5aecd3c))

## 0.34.0 (2026-02-02)

Full Changelog: [v0.33.0...v0.34.0](https://github.com/smithery-ai/typescript-api/compare/v0.33.0...v0.34.0)

### Features

* **api:** api update ([1a4618a](https://github.com/smithery-ai/typescript-api/commit/1a4618af2e7882f35766afcafef6d88cee7f9a85))

## 0.33.0 (2026-02-02)

Full Changelog: [v0.32.0...v0.33.0](https://github.com/smithery-ai/typescript-api/compare/v0.32.0...v0.33.0)

### Features

* **api:** api update ([5289e80](https://github.com/smithery-ai/typescript-api/commit/5289e80c56fa7a1620c37dc2b382be0a588a579d))


### Bug Fixes

* update mcp-transport from beta to experimental ([#55](https://github.com/smithery-ai/typescript-api/issues/55)) ([75f6581](https://github.com/smithery-ai/typescript-api/commit/75f6581b1b0cf5f4f7e507dce338d7d508ddbc91))

## 0.32.0 (2026-02-02)

Full Changelog: [v0.31.0...v0.32.0](https://github.com/smithery-ai/typescript-api/compare/v0.31.0...v0.32.0)

### Features

* **api:** api update ([69ceaf2](https://github.com/smithery-ai/typescript-api/commit/69ceaf28ac2ba2e29fba0d5be6af7b33e6c0b87e))

## 0.31.0 (2026-01-31)

Full Changelog: [v0.30.0...v0.31.0](https://github.com/smithery-ai/typescript-api/compare/v0.30.0...v0.31.0)

### Features

* **api:** api update ([962aa7c](https://github.com/smithery-ai/typescript-api/commit/962aa7c4311111eab1791ca10c60d6f26b86186c))
* **api:** api update ([d3eca64](https://github.com/smithery-ai/typescript-api/commit/d3eca6483a3ed95fc4042821c0cb9d8b9ceee532))
* **api:** api update ([8ba46c9](https://github.com/smithery-ai/typescript-api/commit/8ba46c90ec1e3619d1d682fa8e21b77b8c207ae3))
* **api:** api update ([a114ecd](https://github.com/smithery-ai/typescript-api/commit/a114ecd95afe303494218d02e2a90d408ab82a23))

## 0.30.0 (2026-01-28)

Full Changelog: [v0.29.0...v0.30.0](https://github.com/smithery-ai/typescript-api/compare/v0.29.0...v0.30.0)

### Features

* **api:** api update ([ba1a16a](https://github.com/smithery-ai/typescript-api/commit/ba1a16afff66cd872dcde2c7bee3ea1e763ba33b))
* **api:** api update ([63bdd80](https://github.com/smithery-ai/typescript-api/commit/63bdd802d8b6438875adac27775e3558a1ea4082))

## 0.29.0 (2026-01-27)

Full Changelog: [v0.27.0...v0.29.0](https://github.com/smithery-ai/typescript-api/compare/v0.27.0...v0.29.0)

### Features

* **api:** api update ([3039c8f](https://github.com/smithery-ai/typescript-api/commit/3039c8f1e243e685466faeaeea54a3b35fd3617a))
* **api:** api update ([1ed908c](https://github.com/smithery-ai/typescript-api/commit/1ed908cd0f228139fe48912cbcb2e611e462b441))
* **api:** api update ([06c328f](https://github.com/smithery-ai/typescript-api/commit/06c328fe55ba5a3023f84dc2d958bf5fb9ab4678))


### Chores

* bump version to 0.28.0 ([#48](https://github.com/smithery-ai/typescript-api/issues/48)) ([0147192](https://github.com/smithery-ai/typescript-api/commit/014719276450200969d9f46251cf495f0e73c9da))


### Refactors

* redesign MCP SDK ergonomics with createConnection() [SMI-1288] ([#50](https://github.com/smithery-ai/typescript-api/issues/50)) ([4122044](https://github.com/smithery-ai/typescript-api/commit/41220447758e6e69798fbb6e8819b26fa9d5d59c))

## 0.27.0 (2026-01-23)

Full Changelog: [v0.26.0...v0.27.0](https://github.com/smithery-ai/typescript-api/compare/v0.26.0...v0.27.0)

### Features

* **api:** api update ([8dfcbb3](https://github.com/smithery-ai/typescript-api/commit/8dfcbb30941bd0e50b29ce62e9f73adfa9c6525b))

## 0.26.0 (2026-01-23)

Full Changelog: [v0.25.0...v0.26.0](https://github.com/smithery-ai/typescript-api/compare/v0.25.0...v0.26.0)

### Features

* **api:** api update ([f355be6](https://github.com/smithery-ai/typescript-api/commit/f355be6ee5e031426d44b3db736076879db9341a))
* make client optional in SmitheryTransport ([#43](https://github.com/smithery-ai/typescript-api/issues/43)) ([8b9b9e7](https://github.com/smithery-ai/typescript-api/commit/8b9b9e7bb333e84319fc848dd699b51666e150ef))

## 0.25.0 (2026-01-22)

Full Changelog: [v0.24.0...v0.25.0](https://github.com/smithery-ai/typescript-api/compare/v0.24.0...v0.25.0)

### Features

* **api:** api update ([0006ad9](https://github.com/smithery-ai/typescript-api/commit/0006ad9a3dc3b2bb36ba3b07f95c991f9acb8213))
* **api:** api update ([bb153cc](https://github.com/smithery-ai/typescript-api/commit/bb153cc75f1422c22ed2e6e6c4816c04a6796890))
* **api:** api update ([4a27a36](https://github.com/smithery-ai/typescript-api/commit/4a27a369a4f637fb505a9fe65393fe059a4d759a))
* **api:** api update ([d4b47cc](https://github.com/smithery-ai/typescript-api/commit/d4b47cc096e38e3e425afe797e8a9a5f73d7b165))
* **api:** api update ([1246071](https://github.com/smithery-ai/typescript-api/commit/124607148bb5399de4576ca50726b0be0a1dd397))
* make namespace optional and rename to SmitheryTransport ([#42](https://github.com/smithery-ai/typescript-api/issues/42)) ([34fecfe](https://github.com/smithery-ai/typescript-api/commit/34fecfee6399cde14c157fee32fce0811dbf3a5a))

## 0.24.0 (2026-01-21)

Full Changelog: [v0.23.0...v0.24.0](https://github.com/smithery-ai/typescript-api/compare/v0.23.0...v0.24.0)

### Features

* add SmitheryConnectTransport for MCP SDK integration [SMI-1270] ([#39](https://github.com/smithery-ai/typescript-api/issues/39)) ([e607f59](https://github.com/smithery-ai/typescript-api/commit/e607f596a85ab4f25920781ae74a8e6c8e2237f5))

## 0.23.0 (2026-01-21)

Full Changelog: [v0.22.0...v0.23.0](https://github.com/smithery-ai/typescript-api/compare/v0.22.0...v0.23.0)

### Features

* **api:** api update ([b0f87bd](https://github.com/smithery-ai/typescript-api/commit/b0f87bdbf60b8aaa52e666daa37c81db0d796f39))
* **api:** api update ([d56f4ae](https://github.com/smithery-ai/typescript-api/commit/d56f4ae601594d3e6a198e6b9d3ab601d49e8cae))

## 0.22.0 (2026-01-20)

Full Changelog: [v0.21.0...v0.22.0](https://github.com/smithery-ai/typescript-api/compare/v0.21.0...v0.22.0)

### Features

* **api:** api update ([1cc5ce1](https://github.com/smithery-ai/typescript-api/commit/1cc5ce174eda021c8bbd25f54ad05863ad936300))

## 0.21.0 (2026-01-19)

Full Changelog: [v0.20.0...v0.21.0](https://github.com/smithery-ai/typescript-api/compare/v0.20.0...v0.21.0)

### Features

* **api:** api update ([b6efe57](https://github.com/smithery-ai/typescript-api/commit/b6efe576d90a38475ee21df5f8ba1ee8c1ec3b58))

## 0.20.0 (2026-01-19)

Full Changelog: [v0.19.0...v0.20.0](https://github.com/smithery-ai/typescript-api/compare/v0.19.0...v0.20.0)

### Features

* **api:** api update ([b390628](https://github.com/smithery-ai/typescript-api/commit/b390628690d3b629c46f7327d61b156a3cf3efab))


### Chores

* update SDK settings ([bff3496](https://github.com/smithery-ai/typescript-api/commit/bff3496f20bcc374842fdb4a7dc522dac219cc12))

## 0.19.0 (2026-01-19)

Full Changelog: [v0.18.0...v0.19.0](https://github.com/smithery-ai/typescript-api/compare/v0.18.0...v0.19.0)

### Features

* **api:** api update ([1bdda5c](https://github.com/smithery-ai/typescript-api/commit/1bdda5ca9788f5b41f7a305cfaad17aea31e9411))
* **api:** api update ([b9a78bb](https://github.com/smithery-ai/typescript-api/commit/b9a78bb2ce53d88555f25271cbffef14b1f76e98))
* **api:** api update ([8cf1c44](https://github.com/smithery-ai/typescript-api/commit/8cf1c44322c04fa612788e04df1d63d6e82fcfdc))
* **api:** api update ([b73da69](https://github.com/smithery-ai/typescript-api/commit/b73da69edcb87f52877cb69900636aa0422b5297))


### Chores

* update SDK settings ([edef50c](https://github.com/smithery-ai/typescript-api/commit/edef50c1860a07c47254cda34637ec376e4338ac))
* update SDK settings ([6268ebc](https://github.com/smithery-ai/typescript-api/commit/6268ebc89b69690adf4330b7b880fa2ff5efee05))
* update SDK settings ([7488482](https://github.com/smithery-ai/typescript-api/commit/74884827fe747322d6a20a2a4b58820f51460c11))

## 0.18.0 (2026-01-19)

Full Changelog: [v0.17.0...v0.18.0](https://github.com/smithery-ai/typescript-api/compare/v0.17.0...v0.18.0)

### Features

* **api:** api update ([d000d87](https://github.com/smithery-ai/typescript-api/commit/d000d8751ab85fdc03c1349b6b060eadf8cc51cd))
* **api:** manual updates ([25ea41e](https://github.com/smithery-ai/typescript-api/commit/25ea41e7503d056376830e45af1652666aa24c2f))

## 0.17.0 (2026-01-19)

Full Changelog: [v0.16.0...v0.17.0](https://github.com/smithery-ai/typescript-api/compare/v0.16.0...v0.17.0)

### Features

* **api:** api update ([f61d959](https://github.com/smithery-ai/typescript-api/commit/f61d95935ab0b11ac31c0da32df684bb4d4bb69a))

## 0.16.0 (2026-01-19)

Full Changelog: [v0.15.0...v0.16.0](https://github.com/smithery-ai/typescript-api/compare/v0.15.0...v0.16.0)

### Features

* **api:** api update ([b2530fa](https://github.com/smithery-ai/typescript-api/commit/b2530fa849ffcc0028cf6aa97bdf36d5d29469fa))

## 0.15.0 (2026-01-18)

Full Changelog: [v0.14.0...v0.15.0](https://github.com/smithery-ai/typescript-api/compare/v0.14.0...v0.15.0)

### Features

* **api:** api update ([caa83a7](https://github.com/smithery-ai/typescript-api/commit/caa83a7e7271da0f59c80eaaed22ebbcf5601de6))
* **api:** api update ([3bdd85b](https://github.com/smithery-ai/typescript-api/commit/3bdd85bed89b22cfdf64490a50914ede36f4eb8e))


### Chores

* **internal:** update `actions/checkout` version ([b1116a8](https://github.com/smithery-ai/typescript-api/commit/b1116a88d2e0f9f3c63e2fec1d8f7966907760b2))
* **internal:** update lock file ([a426eca](https://github.com/smithery-ai/typescript-api/commit/a426ecaeea33b8de6aa880dd9199c0f3ec9a1b1d))
* **internal:** upgrade brace-expansion and @babel/helpers ([b9f2dd7](https://github.com/smithery-ai/typescript-api/commit/b9f2dd7a4b83b35e019a348cd52fc4a0987e5f24))

## 0.14.0 (2026-01-15)

Full Changelog: [v0.13.0...v0.14.0](https://github.com/smithery-ai/typescript-api/compare/v0.13.0...v0.14.0)

### Features

* **api:** api update ([c810bdd](https://github.com/smithery-ai/typescript-api/commit/c810bdd021f219d4481748a4eaab0a8b274ffe87))
* **api:** api update ([80df737](https://github.com/smithery-ai/typescript-api/commit/80df737db77dee3d397db4944bb8571094844598))


### Chores

* **internal:** upgrade babel, qs, js-yaml ([5a90a4b](https://github.com/smithery-ai/typescript-api/commit/5a90a4b225b0cab62b2f0aed5b01899967a03506))

## 0.13.0 (2026-01-13)

Full Changelog: [v0.12.0...v0.13.0](https://github.com/smithery-ai/typescript-api/compare/v0.12.0...v0.13.0)

### Features

* **api:** api update ([fcf7936](https://github.com/smithery-ai/typescript-api/commit/fcf7936aff0f51063c7c7a324263543cb240a73c))

## 0.12.0 (2026-01-13)

Full Changelog: [v0.11.0...v0.12.0](https://github.com/smithery-ai/typescript-api/compare/v0.11.0...v0.12.0)

### Features

* **api:** api update ([1c0ea56](https://github.com/smithery-ai/typescript-api/commit/1c0ea564e660e6c3183ff94622198f1aa1242420))
* **api:** api update ([26cb051](https://github.com/smithery-ai/typescript-api/commit/26cb05172da2634c7830141df0e97de79b20238d))
* **api:** api update ([b4235cd](https://github.com/smithery-ai/typescript-api/commit/b4235cd6a34886d3566ca698c150392808e31559))


### Bug Fixes

* **publish:** remove extraneous npm copy from package ([133259d](https://github.com/smithery-ai/typescript-api/commit/133259dda9f7b0dd7e1041260a4a877941fe4c58))

## 0.11.0 (2026-01-12)

Full Changelog: [v0.10.0...v0.11.0](https://github.com/smithery-ai/typescript-api/compare/v0.10.0...v0.11.0)

### Features

* **api:** api update ([23c8fb4](https://github.com/smithery-ai/typescript-api/commit/23c8fb4a4859cb4c35023ada4a1dc08584f9c36e))

## 0.10.0 (2026-01-12)

Full Changelog: [v0.9.0...v0.10.0](https://github.com/smithery-ai/typescript-api/compare/v0.9.0...v0.10.0)

### Features

* **api:** api update ([e00c6f4](https://github.com/smithery-ai/typescript-api/commit/e00c6f49d08fddcce5210c3522cab55151a65d2a))
* **api:** api update ([4dcaad5](https://github.com/smithery-ai/typescript-api/commit/4dcaad58553129cc59eaf49ee985e3f450e9f761))

## 0.9.0 (2026-01-12)

Full Changelog: [v0.8.0...v0.9.0](https://github.com/smithery-ai/typescript-api/compare/v0.8.0...v0.9.0)

### Features

* **api:** api update ([3fb30ae](https://github.com/smithery-ai/typescript-api/commit/3fb30ae29c29660622db8b8b407bdbda6335e29d))

## 0.8.0 (2026-01-12)

Full Changelog: [v0.7.0...v0.8.0](https://github.com/smithery-ai/typescript-api/compare/v0.7.0...v0.8.0)

### Features

* **api:** api update ([e193d09](https://github.com/smithery-ai/typescript-api/commit/e193d09ddf4efa3d2e71917b2234a2d4b4eb6d60))

## 0.7.0 (2026-01-11)

Full Changelog: [v0.6.0...v0.7.0](https://github.com/smithery-ai/typescript-api/compare/v0.6.0...v0.7.0)

### Features

* **api:** api update ([f0e85f3](https://github.com/smithery-ai/typescript-api/commit/f0e85f32903235ba92fbb9812ba07de14a4308b0))

## 0.6.0 (2026-01-11)

Full Changelog: [v0.5.0...v0.6.0](https://github.com/smithery-ai/typescript-api/compare/v0.5.0...v0.6.0)

### Features

* **api:** api update ([09e7abd](https://github.com/smithery-ai/typescript-api/commit/09e7abd0f6663ce680ecaa49a7cf11765fb063df))

## 0.5.0 (2026-01-10)

Full Changelog: [v0.4.0...v0.5.0](https://github.com/smithery-ai/typescript-api/compare/v0.4.0...v0.5.0)

### Features

* **api:** api update ([ddd71bf](https://github.com/smithery-ai/typescript-api/commit/ddd71bff5def74bc22a72dcd75debda382004b7a))

## 0.4.0 (2026-01-09)

Full Changelog: [v0.3.0...v0.4.0](https://github.com/smithery-ai/typescript-api/compare/v0.3.0...v0.4.0)

### Features

* **api:** api update ([85f659b](https://github.com/smithery-ai/typescript-api/commit/85f659b9649bbcfa898db863f470d312b0a81002))

## 0.3.0 (2026-01-09)

Full Changelog: [v0.2.0...v0.3.0](https://github.com/smithery-ai/typescript-api/compare/v0.2.0...v0.3.0)

### Features

* **api:** api update ([4656385](https://github.com/smithery-ai/typescript-api/commit/46563850ac92ed2dd3e770e72acbf4410c97b7de))

## 0.2.0 (2026-01-09)

Full Changelog: [v0.1.0...v0.2.0](https://github.com/smithery-ai/typescript-api/compare/v0.1.0...v0.2.0)

### Features

* **api:** api update ([c77fd98](https://github.com/smithery-ai/typescript-api/commit/c77fd986f828b8423fa440c0fda71871140490d0))

## 0.1.0 (2026-01-09)

Full Changelog: [v0.1.0-alpha.12...v0.1.0](https://github.com/smithery-ai/typescript-api/compare/v0.1.0-alpha.12...v0.1.0)

### Features

* **api:** api update ([ea05a87](https://github.com/smithery-ai/typescript-api/commit/ea05a8780cf5e7f81c848ef3a25c0c343c3cb5b6))
* **api:** api update ([f401ce4](https://github.com/smithery-ai/typescript-api/commit/f401ce44a5d6132b568406ea3c09de9a9ccbae3f))

## 0.1.0-alpha.12 (2026-01-09)

Full Changelog: [v0.1.0-alpha.11...v0.1.0-alpha.12](https://github.com/smithery-ai/typescript-api/compare/v0.1.0-alpha.11...v0.1.0-alpha.12)

### Features

* **api:** api update ([fa50205](https://github.com/smithery-ai/typescript-api/commit/fa50205b32e38764c9169d163bfdb38a04750c61))

## 0.1.0-alpha.11 (2026-01-09)

Full Changelog: [v0.1.0-alpha.10...v0.1.0-alpha.11](https://github.com/smithery-ai/typescript-api/compare/v0.1.0-alpha.10...v0.1.0-alpha.11)

### Features

* **api:** manual updates ([87eb040](https://github.com/smithery-ai/typescript-api/commit/87eb040993417e8d0e98bef260b95263d0dbe0a5))

## 0.1.0-alpha.10 (2026-01-09)

Full Changelog: [v0.1.0-alpha.9...v0.1.0-alpha.10](https://github.com/smithery-ai/typescript-api/compare/v0.1.0-alpha.9...v0.1.0-alpha.10)

### Features

* **api:** manual updates ([d69dd4b](https://github.com/smithery-ai/typescript-api/commit/d69dd4bd3d5c16592c06327daa3b4a52da7f418f))

## 0.1.0-alpha.9 (2026-01-09)

Full Changelog: [v0.1.0-alpha.8...v0.1.0-alpha.9](https://github.com/smithery-ai/typescript-api/compare/v0.1.0-alpha.8...v0.1.0-alpha.9)

### Features

* **api:** manual updates ([18782c0](https://github.com/smithery-ai/typescript-api/commit/18782c051eb2ee8f267bbeae2f5b3c35da1abc48))

## 0.1.0-alpha.8 (2026-01-09)

Full Changelog: [v0.1.0-alpha.7...v0.1.0-alpha.8](https://github.com/smithery-ai/typescript-api/compare/v0.1.0-alpha.7...v0.1.0-alpha.8)

### Features

* **api:** manual updates ([d749ffb](https://github.com/smithery-ai/typescript-api/commit/d749ffb19584ecafd1f89110b2214d207c8ca475))

## 0.1.0-alpha.7 (2026-01-09)

Full Changelog: [v0.1.0-alpha.6...v0.1.0-alpha.7](https://github.com/smithery-ai/typescript-api/compare/v0.1.0-alpha.6...v0.1.0-alpha.7)

### Features

* **api:** manual updates ([4647220](https://github.com/smithery-ai/typescript-api/commit/464722089fc486912cd286f285dce50cac5c8008))

## 0.1.0-alpha.6 (2026-01-08)

Full Changelog: [v0.1.0-alpha.5...v0.1.0-alpha.6](https://github.com/smithery-ai/typescript-api/compare/v0.1.0-alpha.5...v0.1.0-alpha.6)

### Features

* **api:** api update ([2951451](https://github.com/smithery-ai/typescript-api/commit/295145167f89abfc6ca6873f3335913d36e6ce3d))

## 0.1.0-alpha.5 (2026-01-08)

Full Changelog: [v0.1.0-alpha.4...v0.1.0-alpha.5](https://github.com/smithery-ai/typescript-api/compare/v0.1.0-alpha.4...v0.1.0-alpha.5)

### Features

* **api:** manual updates ([07c580e](https://github.com/smithery-ai/typescript-api/commit/07c580e8372f85712cbdac5d3d5d6ec1688e7814))

## 0.1.0-alpha.4 (2026-01-08)

Full Changelog: [v0.1.0-alpha.3...v0.1.0-alpha.4](https://github.com/smithery-ai/typescript-api/compare/v0.1.0-alpha.3...v0.1.0-alpha.4)

### Chores

* update SDK settings ([e45da5e](https://github.com/smithery-ai/typescript-api/commit/e45da5e23be8eb74c1ea624305f7723d53047896))

## 0.1.0-alpha.3 (2026-01-08)

Full Changelog: [v0.1.0-alpha.2...v0.1.0-alpha.3](https://github.com/smithery-ai/typescript-api/compare/v0.1.0-alpha.2...v0.1.0-alpha.3)

### Features

* **api:** manual updates ([e8ed82f](https://github.com/smithery-ai/typescript-api/commit/e8ed82f388e0561b09f1bb6666ee25a04312422b))
* **api:** manual updates ([2eace53](https://github.com/smithery-ai/typescript-api/commit/2eace5353355a4ccd0bdf67a828d25c7bcf6cff3))
* **api:** manual updates ([331af9a](https://github.com/smithery-ai/typescript-api/commit/331af9ae2abe5bc9ed82a1f27c6dbbf405227f5c))
* **api:** manual updates ([e0656a1](https://github.com/smithery-ai/typescript-api/commit/e0656a10736d61942d971fecbebfee0fb383d039))
* **api:** manual updates ([36cda52](https://github.com/smithery-ai/typescript-api/commit/36cda524207d831564bb9ac24aed4e586c99a043))
* **api:** manual updates ([cb72f75](https://github.com/smithery-ai/typescript-api/commit/cb72f750db02861497f827786e2c3de917ff2062))
* **api:** manual updates ([0a90adc](https://github.com/smithery-ai/typescript-api/commit/0a90adccf515c7bd4b498627d5107911835ccfed))
* **api:** manual updates ([c0815a3](https://github.com/smithery-ai/typescript-api/commit/c0815a33c778ed99ca8b69e16c65c67f232d7eb6))

## 0.1.0-alpha.2 (2026-01-08)

Full Changelog: [v0.1.0-alpha.1...v0.1.0-alpha.2](https://github.com/smithery-ai/typescript-api/compare/v0.1.0-alpha.1...v0.1.0-alpha.2)

### Features

* **api:** manual updates ([3f3e75f](https://github.com/smithery-ai/typescript-api/commit/3f3e75fda0b7b6cf08d5a1214642b680973ff368))

## 0.1.0-alpha.1 (2026-01-08)

Full Changelog: [v0.0.1-alpha.0...v0.1.0-alpha.1](https://github.com/smithery-ai/typescript-api/compare/v0.0.1-alpha.0...v0.1.0-alpha.1)

### ⚠ BREAKING CHANGES

* update decorator api ([#182](https://github.com/smithery-ai/typescript-api/issues/182))

### Features

* add .well-known/mcp-config endpoint ([#186](https://github.com/smithery-ai/typescript-api/issues/186)) ([bb0dcff](https://github.com/smithery-ai/typescript-api/commit/bb0dcff2db6db4e127881e7adf1d3dc89c20d7e7))
* Add API key support to transport creation ([#150](https://github.com/smithery-ai/typescript-api/issues/150)) ([1e7a809](https://github.com/smithery-ai/typescript-api/commit/1e7a80976241a97750f1a1cca3ddcd9412ccc86b))
* add better error messages and hot reload ([#183](https://github.com/smithery-ai/typescript-api/issues/183)) ([83056f7](https://github.com/smithery-ai/typescript-api/commit/83056f7f2dbfbb935a8c8e53a661fac9faf92231))
* add cli entrypoint ([f3df1d5](https://github.com/smithery-ai/typescript-api/commit/f3df1d5f9c66f9173d10530bb99d5105d98ed079))
* add decorator ([#180](https://github.com/smithery-ai/typescript-api/issues/180)) ([ef6731b](https://github.com/smithery-ai/typescript-api/commit/ef6731b012809a8bbd54ff854ccef06dde3a3787))
* add fastmcp patch for config/CORS handling ([#171](https://github.com/smithery-ai/typescript-api/issues/171)) ([b0dbf4e](https://github.com/smithery-ai/typescript-api/commit/b0dbf4eaa3aa33df8aaaaed53512c7e0dfb54715))
* add logging to servers ([#197](https://github.com/smithery-ai/typescript-api/issues/197)) ([d3b4fe8](https://github.com/smithery-ai/typescript-api/commit/d3b4fe866dc1ff9d4411bf2beb6e6e1d0f7b49e3))
* add Python 3.10 support with tomli fallback for tomllib ([#208](https://github.com/smithery-ai/typescript-api/issues/208)) ([4f23f10](https://github.com/smithery-ai/typescript-api/commit/4f23f10cdac5b3915049e31b87473137efb02191))
* add run, create commands to cli ([#174](https://github.com/smithery-ai/typescript-api/issues/174)) ([a7ce2c1](https://github.com/smithery-ai/typescript-api/commit/a7ce2c10ecb9b1efc38c796857fedf8bbe1693e0))
* add start command / fix: allow optional config ([#188](https://github.com/smithery-ai/typescript-api/issues/188)) ([1c7ba89](https://github.com/smithery-ai/typescript-api/commit/1c7ba89e0e997d33b6ffe5f9893c42ad63465749))
* add stateless support ([#169](https://github.com/smithery-ai/typescript-api/issues/169)) ([81898d5](https://github.com/smithery-ai/typescript-api/commit/81898d565315a823cfe108d5ad1cfeb21d78878d))
* allow connection for optional config ([7bf6a35](https://github.com/smithery-ai/typescript-api/commit/7bf6a3560e1e124ec9ff13357ffa7110edc6f745))
* **api:** manual updates ([2b16516](https://github.com/smithery-ai/typescript-api/commit/2b16516b6ff07fadc641a3736327b7c8c0d942ff))
* **api:** manual updates ([a16427f](https://github.com/smithery-ai/typescript-api/commit/a16427f81ae95975d423bd2b04e62ef79ca5e953))
* **api:** manual updates ([0eea18d](https://github.com/smithery-ai/typescript-api/commit/0eea18d69afee254facad13ad25de88014a5641e))
* **api:** manual updates ([fe47c17](https://github.com/smithery-ai/typescript-api/commit/fe47c1731ddc868eb3fe861e93436477fd6feb11))
* **api:** manual updates ([dc395ba](https://github.com/smithery-ai/typescript-api/commit/dc395baa0a71cbd9c73a02e592e3fa3b36bfe1aa))
* **api:** manual updates ([d228365](https://github.com/smithery-ai/typescript-api/commit/d228365590ad093351ac29067a84ba5d7b49577d))
* **api:** manual updates ([9227f7c](https://github.com/smithery-ai/typescript-api/commit/9227f7cdde84df6e8851515bf9774fc5d7ef06ff))
* **api:** manual updates ([50d1fbc](https://github.com/smithery-ai/typescript-api/commit/50d1fbcaf1819b1a8b071df2680fd2fdc371bce6))
* **beta:** openai apps ([#200](https://github.com/smithery-ai/typescript-api/issues/200)) ([648a6f2](https://github.com/smithery-ai/typescript-api/commit/648a6f2560b63e06f0ef1b4f78a86d14d4f325b1))
* config flow in playground for python runtime ([#178](https://github.com/smithery-ai/typescript-api/issues/178)) ([c3c71d8](https://github.com/smithery-ai/typescript-api/commit/c3c71d8f9ece857f90f507389abcf594ef0a4837))
* improve fastmcp compatibility and add tests ([#192](https://github.com/smithery-ai/typescript-api/issues/192)) ([cb7594e](https://github.com/smithery-ai/typescript-api/commit/cb7594efb9ebb20406291445867cbdaeebd36dfa))
* improve python scaffold ([#184](https://github.com/smithery-ai/typescript-api/issues/184)) ([099afce](https://github.com/smithery-ai/typescript-api/commit/099afce49d165153e0cf7e4f99c7eb15056db70b))
* minor api update ([#205](https://github.com/smithery-ai/typescript-api/issues/205)) ([93930be](https://github.com/smithery-ai/typescript-api/commit/93930be501c87a9d6af520ceb08f3051d6ae7a0a))
* rename run to dev command ([#181](https://github.com/smithery-ai/typescript-api/issues/181)) ([56557fa](https://github.com/smithery-ai/typescript-api/commit/56557fab978fb40876125bbba225ba74c0e10c39))
* update decorator api ([#182](https://github.com/smithery-ai/typescript-api/issues/182)) ([e5829b6](https://github.com/smithery-ai/typescript-api/commit/e5829b6ff8b982c45093c8bca4197d170f7f09a3))
* update registry api to include icon url and verified ([#198](https://github.com/smithery-ai/typescript-api/issues/198)) ([a806149](https://github.com/smithery-ai/typescript-api/commit/a8061496cc055d0c819f25e8e6ba18bd4b3cb991))
* use better pattern for module import ([34a59df](https://github.com/smithery-ai/typescript-api/commit/34a59dfa1f20ca51a4d4b8e8be8c9a0fc85b2876))
* use cmd /c for windows command execution  ([#206](https://github.com/smithery-ai/typescript-api/issues/206)) ([0e46602](https://github.com/smithery-ai/typescript-api/commit/0e466024275496bc876031314c8c33ffd7565e96))
* use starlette for well-known response ([501fa0f](https://github.com/smithery-ai/typescript-api/commit/501fa0fdb04f276e444ca7a302ad0d03aca2d577))


### Bug Fixes

* .well-known with fastmcp 2.0 ([#190](https://github.com/smithery-ai/typescript-api/issues/190)) ([4a1e41d](https://github.com/smithery-ai/typescript-api/commit/4a1e41d357df98733eb6b8e771500a5863827d8e))
* add barrel index.ts to export SDK entry point ([#166](https://github.com/smithery-ai/typescript-api/issues/166)) ([962f16b](https://github.com/smithery-ai/typescript-api/commit/962f16b52ca69d3d9c8405b9182fdf163215ebf4))
* add biomejs platform binary to sdk publish workflow ([0026639](https://github.com/smithery-ai/typescript-api/commit/00266392560a81cf8a124d64f01a5e5b874a153e))
* add OPTIONS to CORS ([a1a6bc7](https://github.com/smithery-ai/typescript-api/commit/a1a6bc7d5d1dffca60411a27aab4bae6ccee40b6))
* attempt changing package dir ([cbcda60](https://github.com/smithery-ai/typescript-api/commit/cbcda6016a08a2d31f0b2dce6b950fd75aeb952a))
* cafe explorer package lock ([5c7fbec](https://github.com/smithery-ai/typescript-api/commit/5c7fbec69b785b9c31f89621730516dca0d536da))
* cli entrypoint ([c14e573](https://github.com/smithery-ai/typescript-api/commit/c14e573ad297b3233e442cf0323503c6424e0921))
* config access through middleware ([#194](https://github.com/smithery-ai/typescript-api/issues/194)) ([e3a9a15](https://github.com/smithery-ai/typescript-api/commit/e3a9a15102fc76990a3fcf72a1a28a4b923b99a8))
* dependency and style ([#175](https://github.com/smithery-ai/typescript-api/issues/175)) ([c5911dc](https://github.com/smithery-ai/typescript-api/commit/c5911dc2917fae8649d8d5abb6431c6670d21fce))
* init command ([f0f97e4](https://github.com/smithery-ai/typescript-api/commit/f0f97e438e460a0a60fb6dfd74aef8916517fb7b))
* module import during init ([#193](https://github.com/smithery-ai/typescript-api/issues/193)) ([9fcb6e7](https://github.com/smithery-ai/typescript-api/commit/9fcb6e74f555a8c69f5fd499942df91a3b1c2f9c))
* revert to last working state (7b57993) ([#33](https://github.com/smithery-ai/typescript-api/issues/33)) ([178547a](https://github.com/smithery-ai/typescript-api/commit/178547a708e106dce2e3fd44997701deeaac0a9e))
* rm old dependency ([b2fbd81](https://github.com/smithery-ai/typescript-api/commit/b2fbd81f38a0234f20c4607daf11d9df6b2e42c0))
* update module path ([836c4d9](https://github.com/smithery-ai/typescript-api/commit/836c4d932fd4ba35d3eb03480e7e4d67b7464190))
* update speakeasy overlay to match current API structure ([#215](https://github.com/smithery-ai/typescript-api/issues/215)) ([9f06b11](https://github.com/smithery-ai/typescript-api/commit/9f06b11c1bd58df2c5bfe7557080a75147a73f60))
* well-known endpoint scope and host header ([#187](https://github.com/smithery-ai/typescript-api/issues/187)) ([a246d94](https://github.com/smithery-ai/typescript-api/commit/a246d943f6c1df0067debc6c505b17e77d0f9ce5))


### Chores

* 🐝 Update SDK - Generate SDK 0.3.0 ([#155](https://github.com/smithery-ai/typescript-api/issues/155)) ([bfc568c](https://github.com/smithery-ai/typescript-api/commit/bfc568c4196d2e0354c0060b7539bc4863f9a9b0))
* 🐝 Update SDK - Generate SDK 0.3.4 ([#156](https://github.com/smithery-ai/typescript-api/issues/156)) ([d307036](https://github.com/smithery-ai/typescript-api/commit/d30703686784905719a1c4de679b578dccd507ab))
* 🐝 Update SDK - Generate SDK 0.3.5 ([#157](https://github.com/smithery-ai/typescript-api/issues/157)) ([309dc22](https://github.com/smithery-ai/typescript-api/commit/309dc224236e1123d94c97f1676a5bc930fc0d14))
* 🐝 Update SDK - Generate SDK 0.3.6 ([#159](https://github.com/smithery-ai/typescript-api/issues/159)) ([f5286f9](https://github.com/smithery-ai/typescript-api/commit/f5286f98f11095c77b01162a71e2b0b4535fb6ce))
* 🐝 Update SDK - Generate SDK 0.3.7 ([#160](https://github.com/smithery-ai/typescript-api/issues/160)) ([823aaa4](https://github.com/smithery-ai/typescript-api/commit/823aaa4cff054863a984c4288f63ec84d8408a43))
* 🐝 Update SDK - Generate SDK 0.4.0 ([#165](https://github.com/smithery-ai/typescript-api/issues/165)) ([25d09fe](https://github.com/smithery-ai/typescript-api/commit/25d09fe229c31a20d1b4f0f882c0a8ff2569e19a))
* 🐝 Update SDK - Generate SDK 0.4.1 ([#168](https://github.com/smithery-ai/typescript-api/issues/168)) ([bb51733](https://github.com/smithery-ai/typescript-api/commit/bb51733b8e3d99f0931f5f4176abd1f58cf7b37b))
* 🐝 Update SDK - Generate SDK 0.4.3 ([#196](https://github.com/smithery-ai/typescript-api/issues/196)) ([c68d222](https://github.com/smithery-ai/typescript-api/commit/c68d22272c6b951d54aac50010026a43d99571ed))
* 🐝 Update SDK - Generate SDK 0.4.4 ([#199](https://github.com/smithery-ai/typescript-api/issues/199)) ([341587f](https://github.com/smithery-ai/typescript-api/commit/341587fcb03f922cfdeaf0a470d7699269451c61))
* 🐝 Update SDK - Generate SDK 0.5.3 ([#209](https://github.com/smithery-ai/typescript-api/issues/209)) ([54303cd](https://github.com/smithery-ai/typescript-api/commit/54303cde77b5e48a0df398c88686cbe05528fc56))
* 🐝 Update SDK - Generate SDK 0.6.1 ([#210](https://github.com/smithery-ai/typescript-api/issues/210)) ([0b82a20](https://github.com/smithery-ai/typescript-api/commit/0b82a2016864c52ed4251d2be0aa00d6fa1e16ff))
* 🐝 Update SDK - Generate SDK 0.6.2 ([#212](https://github.com/smithery-ai/typescript-api/issues/212)) ([77e5945](https://github.com/smithery-ai/typescript-api/commit/77e5945e9add2f0ef6083671b16435f20462aa63))
* bump create-smithery version to 1.0.10 [skip ci] ([2d7f949](https://github.com/smithery-ai/typescript-api/commit/2d7f9497083ce1d93421ee10309d7a71f7a700db))
* bump create-smithery version to 1.0.11 [skip ci] ([a27a961](https://github.com/smithery-ai/typescript-api/commit/a27a961d71199f28b8261842be1e6ab6b19981a0))
* bump create-smithery version to 1.0.12 [skip ci] ([11dd332](https://github.com/smithery-ai/typescript-api/commit/11dd332e1aa6ca3760bfd62f3a9749baedfa7d71))
* bump v ([3a8ce3e](https://github.com/smithery-ai/typescript-api/commit/3a8ce3e05a22298667659fea8054eebba69ef4cb))
* bump version ([9df6b15](https://github.com/smithery-ai/typescript-api/commit/9df6b158b996b23c7c379e0ca7b8e616e28dbe61))
* bump version ([aebab69](https://github.com/smithery-ai/typescript-api/commit/aebab691b1b2d46021a7130e61ec5fd37fa20b6e))
* bump version ([d824e13](https://github.com/smithery-ai/typescript-api/commit/d824e13d9a435906626ce65154924cd1e9782708))
* bump version to 0.0.10 [skip ci] ([b9d5b0d](https://github.com/smithery-ai/typescript-api/commit/b9d5b0d5b82d5a4e9eafa89d98ac9aec5a1bdda1))
* bump version to 0.0.11 [skip ci] ([0915a05](https://github.com/smithery-ai/typescript-api/commit/0915a05f8f336dda6cf7b7f7ce9ea4faa88c2de2))
* bump version to 0.0.12 [skip ci] ([eb83dfc](https://github.com/smithery-ai/typescript-api/commit/eb83dfc3bc2c6aa10d088e9cd2250c986128fd03))
* bump version to 0.0.13 [skip ci] ([6d3003c](https://github.com/smithery-ai/typescript-api/commit/6d3003cdc1c2e2e44c0379e7fd80079e0d14d0f9))
* bump version to 0.0.14 [skip ci] ([e1af419](https://github.com/smithery-ai/typescript-api/commit/e1af4197f8a9a50dc4777adac04fef37bdabb118))
* bump version to 0.0.15 [skip ci] ([b87b382](https://github.com/smithery-ai/typescript-api/commit/b87b3822f6675ba3da6f8bc52a3d9505ca15c5c7))
* bump version to 0.0.16 [skip ci] ([35838c0](https://github.com/smithery-ai/typescript-api/commit/35838c034b8aadfb6344a5e3a92aebaa598b7952))
* bump version to 0.0.17 [skip ci] ([f57d2bd](https://github.com/smithery-ai/typescript-api/commit/f57d2bd078a3eaec50713f83875cea6dec7fe417))
* bump version to 0.0.18 [skip ci] ([eda6907](https://github.com/smithery-ai/typescript-api/commit/eda6907eac1d29fd06b5b626957c036aadfa5916))
* bump version to 0.0.19 [skip ci] ([cb1cbba](https://github.com/smithery-ai/typescript-api/commit/cb1cbbae2e7e1bb2ad7c518cab1e3109d96358ed))
* bump version to 0.0.20 [skip ci] ([59b8870](https://github.com/smithery-ai/typescript-api/commit/59b8870af522520671302b43120c393ec5c2fd1f))
* bump version to 0.0.21 [skip ci] ([7b72c67](https://github.com/smithery-ai/typescript-api/commit/7b72c673118e1a0b46340f48d8db159b2a37f9ba))
* bump version to 0.0.22 [skip ci] ([74ecda5](https://github.com/smithery-ai/typescript-api/commit/74ecda5ce5f30e68f0535912438841d745b18afb))
* bump version to 0.0.23 [skip ci] ([8ca1e41](https://github.com/smithery-ai/typescript-api/commit/8ca1e4130ae0adb035447db818ab4a4f49404212))
* bump version to 0.0.24 [skip ci] ([05977b1](https://github.com/smithery-ai/typescript-api/commit/05977b1efae34f3b05ba7662b7909c402fc175c1))
* bump version to 0.0.25 [skip ci] ([bcf37ce](https://github.com/smithery-ai/typescript-api/commit/bcf37cea2eb49c61b2065146e683cb5414196433))
* bump version to 0.0.6 [skip ci] ([a4b8a2d](https://github.com/smithery-ai/typescript-api/commit/a4b8a2d5fac9e4556d0a9dc2f9d077574607a913))
* bump version to 0.0.7 [skip ci] ([528594e](https://github.com/smithery-ai/typescript-api/commit/528594ec6bf4be0cb08fb564dc1f3d055fc1d122))
* bump version to 0.0.8 [skip ci] ([c66e928](https://github.com/smithery-ai/typescript-api/commit/c66e92899c9d602f958beb19b1ea18442ff536a1))
* bump version to 0.0.9 [skip ci] ([b1ed30f](https://github.com/smithery-ai/typescript-api/commit/b1ed30f8158cadef69c1696b75de8778b8718789))
* bump version to 1.0.1 [skip ci] ([325061e](https://github.com/smithery-ai/typescript-api/commit/325061ef3996bad83aa5fee47cb2db1765e438a1))
* bump version to 1.0.2 [skip ci] ([9913850](https://github.com/smithery-ai/typescript-api/commit/9913850b1aab3cdacd5083673c297f24d4368aa1))
* bump version to 1.0.3 [skip ci] ([e6b640d](https://github.com/smithery-ai/typescript-api/commit/e6b640db4ee5a85afed20f8cfb94cdd60af0d857))
* bump version to 1.0.4 [skip ci] ([bfcbb94](https://github.com/smithery-ai/typescript-api/commit/bfcbb9491ab0501bae1140001caa4f24848a8653))
* bump version to 1.2.1 [skip ci] ([d907cdf](https://github.com/smithery-ai/typescript-api/commit/d907cdfbe41960f547659d6f9b91a4e05a4432b2))
* bump version to 1.2.2 [skip ci] ([1eea3ed](https://github.com/smithery-ai/typescript-api/commit/1eea3ed87617bd5c1d956373029bb137a4595990))
* bump version to 1.2.3 [skip ci] ([825c015](https://github.com/smithery-ai/typescript-api/commit/825c015b179bc34fcdb26824a2eadc09fb3f53a9))
* bump version to 1.3.1 [skip ci] ([a4b6c8b](https://github.com/smithery-ai/typescript-api/commit/a4b6c8bd8cc113517a27491bd7fe59549a852990))
* bump version to 1.3.2 [skip ci] ([6c89369](https://github.com/smithery-ai/typescript-api/commit/6c89369224c89d24394dd61cc19098369635d930))
* bump version to 1.3.3 [skip ci] ([f40188e](https://github.com/smithery-ai/typescript-api/commit/f40188e7bbabade7a376a3ccf5e120e5fadd09cf))
* bump version to 1.3.4 [skip ci] ([0bcd823](https://github.com/smithery-ai/typescript-api/commit/0bcd823e9969dbf71cf1188759919c4981e133bd))
* bump version to 1.4.1 [skip ci] ([4279080](https://github.com/smithery-ai/typescript-api/commit/4279080375887f985be8708e825b6731a6f94377))
* bump version to 1.4.2 [skip ci] ([c432ad1](https://github.com/smithery-ai/typescript-api/commit/c432ad1508b54605efda106353549f1180438492))
* bump version to 1.4.3 [skip ci] ([172c00c](https://github.com/smithery-ai/typescript-api/commit/172c00c9fdb1b1c7bdfd1a1e2755e36b9acdc381))
* bump version to 1.5.1 [skip ci] ([c099019](https://github.com/smithery-ai/typescript-api/commit/c0990198144c892fc7823cc520587477bde5d627))
* bump version to 1.5.10 [skip ci] ([31de6f6](https://github.com/smithery-ai/typescript-api/commit/31de6f67ac2bb22752b9160c0a2a6787e88c098c))
* bump version to 1.5.2 [skip ci] ([6603d7c](https://github.com/smithery-ai/typescript-api/commit/6603d7cb721d13a79080e0913d8ac08b7d92a043))
* bump version to 1.5.3 [skip ci] ([5086e56](https://github.com/smithery-ai/typescript-api/commit/5086e563e8e9565e2766802766c55b4d7353f4a2))
* bump version to 1.5.4 [skip ci] ([92f33e3](https://github.com/smithery-ai/typescript-api/commit/92f33e3fa9fc2e71120a9df5e5ef6849defe7920))
* bump version to 1.5.5 [skip ci] ([25c85eb](https://github.com/smithery-ai/typescript-api/commit/25c85ebfa8b6d347676ef50f48c5a50150f52a9d))
* bump version to 1.5.6 [skip ci] ([a2503ff](https://github.com/smithery-ai/typescript-api/commit/a2503ff10685e394eefa61eb285f2c63ae7632f0))
* bump version to 1.5.7 [skip ci] ([6d31023](https://github.com/smithery-ai/typescript-api/commit/6d310238c22abad104fb726f02dda2a70766e4ef))
* bump version to 1.5.8 [skip ci] ([7a0f90c](https://github.com/smithery-ai/typescript-api/commit/7a0f90c25abfedc99fc57078b989f53d02ee6878))
* bump version to 1.5.9 [skip ci] ([583bb34](https://github.com/smithery-ai/typescript-api/commit/583bb34f049b4362305b7c36ffe1207106dd6f57))
* bump version to 1.6.1 [skip ci] ([3f0243a](https://github.com/smithery-ai/typescript-api/commit/3f0243a255f2ebb9079f754c9f898cebf5ac2283))
* bump version to 1.6.2 [skip ci] ([d76af74](https://github.com/smithery-ai/typescript-api/commit/d76af740201e6c88d08b49d4e3ccbc4f7b678883))
* bump version to 1.6.3 [skip ci] ([25c7975](https://github.com/smithery-ai/typescript-api/commit/25c7975a3fbe8aedf444f01f163bb2c61b298372))
* bump version to 1.6.4 [skip ci] ([7301eaa](https://github.com/smithery-ai/typescript-api/commit/7301eaa0a44fbc82a3385aff251838aa2b4c6774))
* bump version to 1.6.5 [skip ci] ([4444739](https://github.com/smithery-ai/typescript-api/commit/44447399ce97979f7f82c84e7d83737d33eaa677))
* bump version to 1.6.6 [skip ci] ([d65d061](https://github.com/smithery-ai/typescript-api/commit/d65d0614ceddf191b97e1526eaad1d6bc45c11f0))
* bump version to 1.6.7 [skip ci] ([c289c99](https://github.com/smithery-ai/typescript-api/commit/c289c999008f22970d4a1dc2641921d62f3858e0))
* bump version to 1.6.8 [skip ci] ([a87dd54](https://github.com/smithery-ai/typescript-api/commit/a87dd546556b2e7a419885ebb61cecb2b0e97af8))
* bump version to 2.0.0 for breaking change ([62fbadd](https://github.com/smithery-ai/typescript-api/commit/62fbadd1abc88c37be6dce4333c9dc1aa9c1d8e3))
* cleanups and add solar system example ([#201](https://github.com/smithery-ai/typescript-api/issues/201)) ([0f7f34b](https://github.com/smithery-ai/typescript-api/commit/0f7f34b62ff2d6bc25562b844ee4f1a512e03a97))
* enforce zod version, bump TS sdk version and update example server ([8c8ed99](https://github.com/smithery-ai/typescript-api/commit/8c8ed99f0789a10f9c3a3187058a8d5563db5a71))
* fix folder org and pyproject ([0b3e0d4](https://github.com/smithery-ai/typescript-api/commit/0b3e0d42528326df4bc4817345d888205b88c32a))
* major version bump to 3.0.0 ([38803e7](https://github.com/smithery-ai/typescript-api/commit/38803e764c98713d48b1a383e5f58fa398ef3ba0))
* remove debug logs from well-known ([ab1a6e3](https://github.com/smithery-ai/typescript-api/commit/ab1a6e32cec8a528ae70ecd2bbaa093eecfd0144))
* simplify hello-server scaffold and update package versions ([27f0f62](https://github.com/smithery-ai/typescript-api/commit/27f0f622ba162c6708412d669fdbc6e54d5a8697))
* sync repo ([4415e47](https://github.com/smithery-ai/typescript-api/commit/4415e47fee2f5f258ea99ed8372a1ff0b0ccbd8d))
* update cli verison in examples ([4f1a3de](https://github.com/smithery-ai/typescript-api/commit/4f1a3deed339fb54065cef9de8615ac06cab444c))
* update deps ([d36615e](https://github.com/smithery-ai/typescript-api/commit/d36615e75abca6e351b6ed32f185f7f372ba3914))
* update example deps ([98da9c5](https://github.com/smithery-ai/typescript-api/commit/98da9c5f10bda61e51b98b93578ce4070fb6c2a3))
* update example server config ([216effd](https://github.com/smithery-ai/typescript-api/commit/216effdb987a110fa50a52ff716e6881972747e8))
* update example server version ([55fc508](https://github.com/smithery-ai/typescript-api/commit/55fc5083793b54cc0e1f06278b3d0ea2e0366ef2))
* update package deps and workflow ([4e81a08](https://github.com/smithery-ai/typescript-api/commit/4e81a08ca5e3c40af9134e863efac13ec72369dc))
* update package deps and workflow ([#173](https://github.com/smithery-ai/typescript-api/issues/173)) ([7d760dd](https://github.com/smithery-ai/typescript-api/commit/7d760ddff21db317357668651d07135f9ca253c9))
* update scaffold setup ([#172](https://github.com/smithery-ai/typescript-api/issues/172)) ([db7a594](https://github.com/smithery-ai/typescript-api/commit/db7a59440a13193e3d38271a12430142c4b464cb))
* update SDK settings ([68d9c9a](https://github.com/smithery-ai/typescript-api/commit/68d9c9ae4adfb6fdb28876b0af19e69a571107a9))
* update SDK settings ([8be709d](https://github.com/smithery-ai/typescript-api/commit/8be709d379f1c8572d21d78eb99e1de5b780cf4a))
* update SDK settings ([5725105](https://github.com/smithery-ai/typescript-api/commit/57251052bd0fb90e14a70d229dacdefc7064986d))
* update smithery cli version ([#216](https://github.com/smithery-ai/typescript-api/issues/216)) ([c28a6bd](https://github.com/smithery-ai/typescript-api/commit/c28a6bdb8539c01a6e41e422874e2d103966a80d))
* update ts sdk version ([b673ca9](https://github.com/smithery-ai/typescript-api/commit/b673ca97408fd12e56c5c8a6e73b6a937a8aac2f))
* update version to 2.1.0, move zod to peer deps ([6627fb6](https://github.com/smithery-ai/typescript-api/commit/6627fb6c4c1b1bef6ca04f770f8479db150c9835))


### Documentation

* add basic server scaffold ([1c2d6b1](https://github.com/smithery-ai/typescript-api/commit/1c2d6b1c7bcd1d4567902361cabc8fa21869aadd))
* add local server example ([#204](https://github.com/smithery-ai/typescript-api/issues/204)) ([de3f2cd](https://github.com/smithery-ai/typescript-api/commit/de3f2cd975b456eb1e64c8c0da49de37b2e08324))
* add npm badge for registry ([#162](https://github.com/smithery-ai/typescript-api/issues/162)) ([0841288](https://github.com/smithery-ai/typescript-api/commit/08412885b83a8cdf7562515059c8a0e87440dcad))
* improve examples ([#202](https://github.com/smithery-ai/typescript-api/issues/202)) ([186a38f](https://github.com/smithery-ai/typescript-api/commit/186a38ff4e4caee5343cf8e4fff42189b78ba538))
* update config use ([60f1021](https://github.com/smithery-ai/typescript-api/commit/60f10215a03106f2209b3bb6b1c1686b3f16b3ae))
* update readme ([#161](https://github.com/smithery-ai/typescript-api/issues/161)) ([930d0f8](https://github.com/smithery-ai/typescript-api/commit/930d0f831aa79bf350c33ab70356fe2cb72998f1))
* update README.md ([#13](https://github.com/smithery-ai/typescript-api/issues/13)) ([7bab198](https://github.com/smithery-ai/typescript-api/commit/7bab1988b6f4ae91dbf8f4d900775dbbf397efcb))
* update scaffold ([bd356a4](https://github.com/smithery-ai/typescript-api/commit/bd356a45751923f6de0c1b24b23f1d3c01b8d943))
* update scaffold ([#189](https://github.com/smithery-ai/typescript-api/issues/189)) ([2c75a52](https://github.com/smithery-ai/typescript-api/commit/2c75a526d14f8862cc14604381ec4eedf0c6eb32))
* update scaffold ([#207](https://github.com/smithery-ai/typescript-api/issues/207)) ([5da1706](https://github.com/smithery-ai/typescript-api/commit/5da1706afc1abbed512e19fb2d4b83699d046665))
* update smithery cli version in examples ([47aea92](https://github.com/smithery-ai/typescript-api/commit/47aea929a65d300a1691f271b106106e7777d584))


### Refactors

* clean up exports in index.ts and streamline session request handling in createStatefulServer ([8e49aec](https://github.com/smithery-ai/typescript-api/commit/8e49aec20f583accb396bb169c61e720a7e1a049))
* move create smithery to sdk ([#185](https://github.com/smithery-ai/typescript-api/issues/185)) ([64cdc63](https://github.com/smithery-ai/typescript-api/commit/64cdc634a6ed6107a6b56bdee016b1e7d7cd5f26))
* remove chatgpt apps support ([#213](https://github.com/smithery-ai/typescript-api/issues/213)) ([4a99137](https://github.com/smithery-ai/typescript-api/commit/4a991372bc31f8ebf8a4dd0849d16b1ee9635dc8))
