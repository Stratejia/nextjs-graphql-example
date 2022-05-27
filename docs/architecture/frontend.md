# Frontend

For more info on UI components, see [associated doc](components/index.md).

## Software architecture

A simple Next.js (React) app built in TypeScript. File structure explains pretty well the software architecture.

TODO: How the frontend communicates with the backend

## File structure

For more info, see Next.js file structure.

- `.storybook`: Storybook config
- `components`: UI Components
  - `common`: Components used by non-specific parts of the app
- `pages`: Pages, routing automatically handled by Next.js
  - `_app.page.tsx`: Application (wrapped by providers)
  - `/**/*.page.tsx`: Pages of the application
- `public`: Public assets
- `stories`: Stories of UI components.
- `styles`: Application styling utilities
- `types`: Type declarations (.d.ts)

### Development files

- `/**/*.stories.tsx`: Stories of UI components
