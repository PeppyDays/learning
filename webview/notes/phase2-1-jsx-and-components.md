# Phase 2-1: JSX & Components

## What is JSX

JSX is a syntax extension for JavaScript/TypeScript that looks like HTML but compiles to function calls.

You write:
```tsx
const el = <button className="btn">{label}</button>
```

Build tool (SWC/Babel) compiles to:
```ts
const el = React.createElement("button", { className: "btn" }, label)
```

The browser never sees JSX -- only the compiled JavaScript runs.

File extension `.tsx` signals the build tool that JSX transformation is needed.

## JSX rules (differs from HTML)

```tsx
<div className="container" />   // 'class' is reserved in JS, use className
<label htmlFor="email" />       // 'for' is reserved in JS, use htmlFor
<input />                       // self-closing tags required
<br />

// {} = escape to JavaScript -- only expressions allowed, not statements
<div>{name}</div>
<div>{1 + 2}</div>
<div>{isAdmin ? "yes" : "no"}</div>
// <div>{if (x) {}}</div>   -- ERROR, if is a statement
```

## What is a component

A function that returns JSX. Two rules:
1. Name starts with a capital letter
2. Returns JSX or null

```tsx
function Button({ label }: { label: string }) {
  return <button>{label}</button>
}
```

Capital letter matters -- React uses it to distinguish HTML elements from components:
```tsx
<button />   // HTML element
<Button />   // your component
```

## Props

React always passes props as a single object. You cannot use multiple parameters.

```tsx
// WRONG
function Badge(text: string) {}

// CORRECT
function Badge(props: { text: string }) {}
function Badge({ text }: { text: string }) {}  // destructured -- preferred
```

When you write `<Badge text="hello" />`, React calls `Badge({ text: "hello" })`.

Props can be any type -- string, number, boolean, array, function, ReactNode.

## Return type

TypeScript infers the return type automatically. Rarely need to write it explicitly.

```tsx
// inferred -- preferred in company code
function Badge({ text }: { text: string }) {
  return <span>{text}</span>
}

// explicit types if needed
import type { ReactNode } from 'react'
function Layout({ children }: { children: ReactNode }): ReactNode {}
```

`JSX.Element` -- single element, never null
`React.ReactNode` -- anything renderable: JSX, null, string, number, arrays

## Composing components

```tsx
const Badge = ({ text }: { text: string }) => {
  return <span>{text}</span>
}

const Profile = ({ name, role }: { name: string; role: string }) => {
  return (
    <div>
      <Badge text={role} />
      <span>{name} - {role}</span>
    </div>
  )
}
```

Go analogy: composing components is like composing middleware or functions -- small pieces assembled into larger ones.
