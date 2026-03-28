# Phase 1-4: Destructuring & Spread

## Object destructuring

```ts
const user = { id: 1, name: "Arine", role: "engineer" }

const { name, role } = user           // basic
const { name: userName } = user       // rename
const { name, age = 0 } = user       // default value if undefined
```

## Array destructuring

```ts
const [first, , last] = [100, 85, 72]   // skip middle with empty comma
const [lat, lng] = [37.5, 127.0]
```

Go analogy: similar to multiple return value unpacking `lat, lng := getCoords()`

## Rest syntax (collect remaining)

```ts
// object rest
const { id, ...rest } = { id: 1, name: "Arine", role: "engineer" }
// rest = { name: "Arine", role: "engineer" }

// array rest -- must be last
const [first, ...remaining] = [100, 85, 72]
// remaining = [85, 72]
```

`...rest` must always be the last element. This is a syntax error:
```ts
const [first, ...rest, last] = scores  // ERROR
```

## Spread operator (expand into)

```ts
// array
const b = [0, ...a, 4]

// object merge -- later field wins
const updated = { ...base, role: "admin" }
```

## Destructured function parameters

```ts
// inline type
const printUser = ({ name, role = "guest" }: { name: string; role?: string }) => {
  console.log(name, role)
}

// cleaner -- pull type out
type UserProps = {
  name: string
  role?: string
}

const printUser = ({ name, role = "guest" }: UserProps) => {
  console.log(name, role)
}
```

In React, component props are always written this way -- destructured directly in the parameter.
The `?` in the type means optional. The `= "guest"` is the runtime default.
