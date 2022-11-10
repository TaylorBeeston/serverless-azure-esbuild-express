# Azure Functions

This repo contains the bare minimum to deploy an [Azure Function](https://learn.microsoft.com/en-us/azure/azure-functions/functions-overview) using the [Serverless Framework](https://www.serverless.com/) with
[TypeScript](https://www.typescriptlang.org/) support via [ESBuild](https://esbuild.github.io/). Code is written as an [Express](https://expressjs.com/) server using [serverless-http](https://www.npmjs.com/package/serverless-http).

# Run offline

```bash
pnpm start
# or
pnpm sls-offline
```

# Deploy
```bash
pnpm sls-deploy
```
