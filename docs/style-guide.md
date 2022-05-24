# Style Guide

General style guide for this project.

This style guide is bound to be changed over time and suggestions are always welcome!

Everything here should be supported by linters. Otherwise, create an issue.

## TypeScript

### No. Damn. Classes.

Supported by linter: **NO**

We keep this codebase FP-oriented, following the KISS principle. No classes should be present to avoid dealing with
state induced problems.

This codebase should only include functions and types. Nothing else.

This is especially true for static class methods. Never do that. Simply create functions and use them as you would.

Incorrect:

```ts
class AccountService {
  constructor(private readonly repository: AccountRepository) {}

  getAccounts() {
    return repository.getAccounts();
  }
}

const accountService = new AccountService(accountRepository);
const accounts = await accountService.getAccounts();
```

Correct:

```ts
function makeAccountService(repository: AccountRepository) {
  function getAccounts() {
    return repository.getAccounts();
  }

  // "private" functions = not returned
  return { getAccounts };
}

const accountService = makeAccountService(accountRepository);
const accounts = await accountService.getAccounts();
```

### Prefer types to interfaces

Supported by linter: **NO**

Interfaces are useless when types exist. They both do the same job, but types are more strict and are more FP-oriented.

[More info](https://fettblog.eu/tidy-typescript-prefer-type-aliases/)

Incorrect:

```ts
interface AccountRepository {
  getAccounts(): Promise<Account[]>;
}
```

Correct:

```ts
type AccountRepository = {
  getAccounts(): Promise<Account[]>;
};
```

Even better, when you don't need multiple implementations:

```ts
function makeAccountRepository() {
  function getAccounts() {
    return [];
  }
}

type AccountRepository = ReturnType<typeof makeAccountRepository>;
```

### No arrow functions

Supported by linter: **NO** ([might help](
https://mysticatea.github.io/eslint-plugin-es/rules/no-arrow-functions.html))

Arrow functions can bring confusion, it's hard to see what is a value and what is a function. To avoid this situation,
always use `function`.

Incorrect:

```ts
const double = (a: number) => a * 2;
```

Correct:

```ts
function double(a: number) {
  return a * 2;
}
```

### No function return types

Supported by linter: **NO**

Specifying function return types often leads to imports only used for this exact reason. To avoid this, we can let
our IDEs tell us when a function returns an unwanted type. This will also be caught be the CI when building the app.

Incorrect:

```ts
import { Account } from 'types/accounts';

function getAccounts(): Promise<Account[]> {
  return [{ firstName: 'John', lastName: 'Doe' }];
}
```

Correct:

```ts
function getAccounts() {
  return [{ firstName: 'John', lastName: 'Doe' }];
}
```

### Wrap multiple params in a type

Supported by linter: **NO**

For readability and usability, we prefer using a single type as function param **when the amount of params is more than one**.
This reduces ripple effect when we want to switch around params placement and lets the function user decide in which order
params are sent (defined in type). This also reduces the amount of param type definition from n (number of values) to 1
(params type).

Incorrect:

```ts
// Definition
function getAccountUri(baseUrl: string, accountId: string) {
  return `${baseUrl}/accounts/${accountId}`;
}

// usage
const accountUri = getAccountUri('https://example.com', '123');
```

Correct:

```ts
// Definition
type GetAccountUriParams = {
  baseUrl: string;
  accountId: string;
}

function getAccountUri({ baseUrl, accountId }: GetAccountUriParams) {
  return `${baseUrl}/accounts/${accountId}`;
}

// usage
const accountUri = getAccountUri({ baseUrl: 'https://example.com', accountId: '123' });
```

### Imports first, exports last

Supported by linter: **NO** ([might help](
https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/exports-last.md))

We should read script files (including JS/TS) as functions, with params (imports) and returned values (exports). This
means files should always before with imports and end with exports.

Separate declarations from exports.

Incorrect:

```tsx
import { useState } from 'react';

export default function AccountPage() {
  const [account, setAccount] = useState<Account>(null);

  return <Container>Something<Container/>;
}

const Container = styled.div`
  color: black;
`;
```

Correct:

```tsx
import { useState } from 'react';

function AccountPage() {
  const [account, setAccount] = useState<Account>(null);

  return <Container>Something<Container/>;
}

const Container = styled.div`
  color: black;
`;

export default AccountPage;
```

## Styling

### Use $ with custom props

Supported by linter: **NO**

When using styled-components, specify custom props with a `$` sign. This makes those props easy to spot and never
override an existing styled-components injected prop.

Incorrect:

```ts
const Container = styled.div<{ active: boolean }>(
  ({ theme, active }) => css`
    border: ${theme.spacing.xs} solid ${active ? theme.colors.border.high : theme.colors.primary};
  `,
);
```

Correct:

```ts
const Container = styled.div<{ $active: boolean }>(
  ({ theme, $active }) => css`
    border: ${theme.spacing.xs} solid ${$active ? theme.colors.border.high : theme.colors.primary};
  `,
);
```

### Inject params once

Supported by linter: **NO**

When using styled-components, always inject params only once, except when used a single time.

Incorrect:

```ts
const Container = styled.div`
  border: ${props => props.theme.spacing.xs} solid ${props => props.theme.colors.border.high};
`;
```

```ts
const Container = styled.div<{ $active: boolean }>`
  border: ${props => props.theme.spacing.xs} solid ${props => props.$active ? props.theme.colors.border.high : props.theme.colors.primary};
`;
```

Correct:

```ts
// Single usage, this is okay
const Container = styled.div`
  color: ${props => props.theme.colors.font.default};
`;
```

```ts
const Container = styled.div(
  ({ theme }) => css`
    border: ${theme.spacing.xs} solid ${theme.colors.border.high};
  `,
);
```

```ts
const Container = styled.div<{ $active: boolean }>(
  ({ theme, $active }) => css`
    border: ${theme.spacing.xs} solid ${$active ? theme.colors.border.high : theme.colors.primary};
  `,
);
```
