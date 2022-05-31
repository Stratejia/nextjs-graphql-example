# Next.js + GraphQL example's frontend

## Setup

### Install dependencies

```bash
yarn
```

## Available scripts

### Start development server

Frontend starts on [http://localhost:3000](http://localhost:3000)

```bash
yarn dev
```

### Build production app

```bash
yarn build
```

### Lint app

```bash
yarn lint
yarn lint:styles # Lint styles (styled-components)
yarn lint:fix # Fix code style using eslint
yarn lint:styles:fix # Fix code style for styles (styled-components)
yarn lint:staged # Run code style fix on staged files

yarn prettier
yarn prettier:write # Fix code style using prettier
```

### Run tests

```bash
yarn test
yarn test:update # Update snapshots
yarn test:coverage # Display code coverage
yarn test:ci # Run tests with CI environment
```

### Storybook

Storybook will be available on [http://localhost:6006](http://localhost:6006).

```bash
yarn storybook
yarn storybook:build # Build static storybook site
```
