# Phase 1-3: Module System & import/export

## Why it matters

Without understanding the module system, you get cryptic errors like:
- `Cannot use import statement in a module` -- CJS vs ESM mismatch
- `Module not found` -- wrong path or alias not resolved at runtime

## Two systems

### CommonJS (CJS) -- Node.js legacy, seen in config files
```js
const fs = require('fs')
module.exports = { myFunc }
```

### ES Modules (ESM) -- what you write in React/Next.js
```ts
import { useState } from 'react'
export function MyComponent() {}
```

## Named vs Default export

```ts
// math.ts
export function add(a: number, b: number): number { return a + b }  // named
export const PI = 3.14159                                            // named
export default function multiply(a: number, b: number): number {    // default
  return a * b
}
```

```ts
// importing
import { add, PI } from './math'         // named -- must use {}
import { add as plus } from './math'     // rename named with 'as'
import multiply from './math'            // default -- no {}, any name works
import myMul from './math'              // also valid for default
```

Go analogy: named exports = exported functions in a Go package (name is fixed).
Default exports have no Go equivalent -- closest is a package exporting one thing.

## @/* alias

Configured in `tsconfig.json`:
```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./*"]
    }
  }
}
```

Usage:
```ts
import { Button } from '@/components/Button'  // anchored to project root
// instead of
import { Button } from '../../../components/Button'
```

`@/*` is NOT a true absolute path -- it's an alias the compiler expands.
The bundler (webpack/turbopack) resolves it at build time.

## Runtime gotcha

TypeScript understands `@/*` at type-check time, but Node.js does not.
Raw `ts-node` will fail on `@/` imports without `tsconfig-paths`.
In Next.js this is not a problem -- the bundler handles it.

## Company rule

No barrel files (`index.ts` that re-exports everything).
Import directly from the source file to keep build times fast and avoid circular deps.
