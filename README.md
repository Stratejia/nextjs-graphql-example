# Next.js + GraphQL example

[![Lint General](https://github.com/Stratejia/nextjs-graphql-example/actions/workflows/lint-general.yml/badge.svg)](https://github.com/Stratejia/nextjs-graphql-example/actions/workflows/lint-general.yml)
[![Build Frontend](https://github.com/Stratejia/nextjs-graphql-example/actions/workflows/build-frontend.yml/badge.svg)](https://github.com/Stratejia/nextjs-graphql-example/actions/workflows/build-frontend.yml)
[![GH Pages](https://github.com/Stratejia/nextjs-graphql-example/actions/workflows/pages/pages-build-deployment/badge.svg)](https://github.com/Stratejia/nextjs-graphql-example/actions/workflows/pages/pages-build-deployment)

Simple [Next.js](https://v3.nuxtjs.org/) and [Apollo](https://www.apollographql.com/) example about recipes.

Made with love by [Stratéjia](https://www.stratejia.ca/).

Check the [project board]([https://github.com/orgs/Rock-n-Prog/projects/1](https://github.com/orgs/Stratejia/projects/2/views/1)) for what we want to do next.

To contribute, make sure you have read the [docs](https://stratejia.github.io/nextjs-graphql-example) and
[contribution guide](CONTRIBUTING.md).

## Setup (Docker env)

```bash
# Build apps
docker compose build # all services
docker compose build --no-cache # to force rebuild
docker compose build frontend # example, to only build frontend

# Run apps
docker compose up # all services
docker compose up frontend # example, to only start frontend
```

## Setup (local env)

For specific package setup, see their respective `README.md` files.

### Install dependencies

```bash
yarn
```

## Available scripts

### Lint app

```bash
yarn lint:staged # Run code style fix on staged files

yarn prettier
yarn prettier:write # Fix code style using prettier
```
