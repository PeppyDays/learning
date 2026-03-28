# Phase 1-1: Type System Basics

## Why TypeScript

TypeScript = JavaScript + compile-time type safety. Same role as static typing in Go.
Every file in the company webview is `.ts` or `.tsx`.

## Primitives

```typescript
const name: string = "hello";
const age: number = 30;        // no int/float distinction
const isActive: boolean = true;
const nothing: null = null;
const notDefined: undefined = undefined;
```

Type inference works -- you don't need to annotate when TS can figure it out:

```typescript
const name = "hello";  // TS infers string
let count = 0;         // TS infers number
```

## const vs let

- `const` = cannot reassign (but object properties are still mutable)
- `let` = can reassign
- `var` = old way, don't use it

React code uses `const` for almost everything.

## interface vs type

```typescript
// interface -- for object shapes (DTOs, models)
interface Hospital {
  id: number;
  name: string;
}

// type -- same thing, also supports unions/aliases
type Hospital = {
  id: number;
  name: string;
};
```

Both work. Company codebase uses both. Practical rule:

- `interface` for "a thing with properties"
- `type` for unions, aliases, and utility types

## Union Types

Restrict a value to specific options -- like Go `iota` enums but safer:

```typescript
type WishCategory = "hospital" | "event";
type Currency = "KRW" | "JPY" | "THB" | "USD";
```

## Nullable vs Optional

```typescript
// string | null -- value exists but can be null (Go: *string that can be nil)
closedAt: string | null;

// ?: string -- field might not exist at all (Go: json:"memo,omitempty")
memo?: string;
```

| | `string \| null` | `memo?: string` |
|---|---|---|
| `"hello"` | ok | ok |
| `null` | ok | error |
| `undefined` | error | ok |
| key missing | error | ok |

Use `| null` for API responses where server explicitly returns null.
Use `?` for optional fields the user might not set.

## Generics

Same concept as Go generics:

```typescript
type ApiResponse<T> = {
  data: T;
  statusCode: number;
  message: string;
};

const res: ApiResponse<Hospital> = { ... };
const list: ApiResponse<Hospital[]> = { ... };
```

## Array Syntax

`WishItem[]` and `Array<WishItem>` are identical. Prefer `WishItem[]` -- it's the convention in the codebase. Use `Array<>` when nesting gets complex: `Array<WishItem[]>`.
