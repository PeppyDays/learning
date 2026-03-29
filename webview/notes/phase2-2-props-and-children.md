# Phase 2-2: Props & Children

## One-way data flow

Data flows parent -> child only. Props are read-only -- child cannot modify them.

Go analogy: props are like function arguments. A function cannot modify the caller's variables.

```tsx
const Profile = ({ name }: { name: string }) => {
  name = "hacked"  // TypeScript error -- read-only
  return <span>{name}</span>
}
```

To send data back up, parent passes a callback as a prop:

```tsx
const Parent = () => {
  const handleClick = () => console.log("child clicked")
  return <Button onClick={handleClick} />
}

const Button = ({ onClick }: { onClick: () => void }) => {
  return <button onClick={onClick}>click me</button>
}
```

Data flows down via props. Events bubble up via callbacks.

## children

Built-in prop that captures content between opening and closing tags.

```tsx
import type { ReactNode } from 'react'

const Card = ({ children }: { children: ReactNode }) => {
  return <div>{children}</div>
}

// usage
<Card>
  <span>hello</span>
</Card>
```

Can be combined with other props:

```tsx
const LabeledBox = ({ title, children }: { title: string; children: ReactNode }) => {
  return (
    <div>
      <h2>{title}</h2>
      {children}
    </div>
  )
}
```

Go analogy: `children` is like passing a handler to middleware -- the wrapper defines the structure, the caller provides the content.

## ReactNode vs JSX.Element

Use `ReactNode` for children props -- it accepts JSX, null, strings, numbers, arrays.
Use `JSX.Element` only when you need to guarantee a single non-null element.
