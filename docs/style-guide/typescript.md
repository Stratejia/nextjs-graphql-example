# TypeScript

## No. Damn. Classes.

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

## Prefer types to interfaces

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

## No arrow functions

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

## No function return types

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

## Wrap multiple params in a type

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

// Usage
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

// Usage
const accountUri = getAccountUri({ baseUrl: 'https://example.com', accountId: '123' });
```

## Imports first, exports last

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

## Avoid state mutation

Supported by linter: **NO**

Always make sure not to mutate the state without re-creating it. Best example is mutating function params. Remember to
always return the new value.

Incorrect:

```ts
function updateFirstName({ account, firstName }: UpdateFirstNameParams) {
  account.firstName = firstName;
  return account;
}
```

Correct:

```ts
function updateFirstName({ account, firstName }: UpdateFirstNameParams) {
  return {
    ...account, // Shallow copy, used as an example
    firstName,
  };
}
```

## No inverted if statement

Supported by linter: **NO**

In an `if/else` statement, we want to avoid having a negation as the main condition. This helps the readability of our
code. Instead, we want to have a positive condition for the `if` and let the negation be part of the `else` statement.

It's okay to have negated arguments in a simple `if` statement when there is no `else`.

Incorrect:

```ts
if (!account.hasPlan) {
  // Logic if account has no plan
} else {
  // Logic if account has plan
}
```

Correct:

```ts
if (account.hasPlan) {
  // Logic if account has plan
} else {
  // Logic if account has no plan
}
```

```ts
// This is okay, since there is no else statement
if (!account.hasPlan) {
  // Logic if account has no plan
}
```

## No unnecessary else statement

Supported by linter: **NO**

In the case of a returned value, it is unnecessary to return in an else statement when the if statement returns.

Incorrect:

```ts
if (account.hasPlan) {
  return createBillForPlan(account.plan);
} else {
  return createBillForAccount(account);
}
```

Correct:

```ts
if (account.hasPlan) {
  return createBillForPlan(account);
}

return createBillForAccount(account);
```

```ts
// Even better
return account.hasPlan ? createBillForPlan(account) : createBillForAccount(account);
```

## No complex ternary if statement

Supported by linter: **NO**

Ternary if statements are nice, but they can get overly complicated. This can occur when they hold much logic or when
they are chained together.

Incorrect:

```ts
return account.hasPlan
    ? {
      plan: account.plan,
      something,
      metadata: {
        whatever,
      },
    }
    : {
      account,
      somethingElse,
      metadata: {
        whatever,
      },
    };
```

```ts
return account.hasPlan 
  ? createBillForPlan(account) 
  : account.canBeBilled 
    ? createBillForAccount(account)
    : throw createAccountBillingError(account);
```

Correct:

```ts
return account.hasPlan
    ? createBillingResponseForPlan(account.plan)
    : createBillingResponseForAccount(account); // In this example, we'd throw an error on a condition in this function
```