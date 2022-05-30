# Frontend

For more info on UI components, see [associated doc](../development/components/index.md).

## Software architecture

A simple Next.js (React) app built in TypeScript. File structure explains pretty well the software architecture.

TODO: How the frontend communicates with the backend

## File structure

For more info, see Next.js file structure.

- `.storybook`: Storybook config
- `public`: Public assets
  - `locales`: Translations for each locale, separated into one folder by locale
- `src`: Source code
  - `components`: UI Components
    - `common`: Components used by non-specific parts of the app
  - `pages`: Pages, routing automatically handled by Next.js
    - `_app.page.tsx`: Application (wrapped by providers)
    - `/**/*.page.tsx`: Pages of the application
  - `styles`: Application styling utilities
  - `types`: Type declarations (.d.ts)
  - `utils`: Utility functions
  - `utils-tests`: Utility functions for tests

### Development files

- `/**/__stories__`: Stories of UI components
- `/**/__tests__`: Unit tests
- `/**/__stubs__`: Stubs (fake data) used for tests
- `/**/__mocks__`: Mocks (mocked functionalities) used for tests
