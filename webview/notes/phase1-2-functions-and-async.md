# Phase 1-2: Functions & Async

## Three ways to write functions

```typescript
// 1. Function declaration (closest to Go's func)
function add(a: number, b: number): number {
  return a + b;
}

// 2. Arrow function (React default -- used 90% of the time)
const add = (a: number, b: number): number => a + b;

// 3. Function expression (rare, just recognize it)
const add = function (a: number, b: number): number {
  return a + b;
};
```

## Typing functions

Parameters must be typed. Return types are usually inferred but annotate on public/shared functions.

```typescript
// Explicit return type
const greet = (name: string): string => `Hello, ${name}`;

// Inferred return type -- TS figures it out
const greet = (name: string) => `Hello, ${name}`;
```

## Callback types -- functions as parameters

```go
// Go: func process(items []string, fn func(string) bool) { ... }
```

```typescript
// TS equivalent
const filterHospitals = (
  hospitals: Hospital[],
  predicate: (h: Hospital) => boolean,
) => hospitals.filter(predicate);
```

## Generic functions

Generic parameter `<T>` goes before the parentheses:

```typescript
const wrapResponse = <T>(data: T, statusCode: number): ApiResponse<T> => {
  return { data, statusCode, message: "ok" };
};

// T is inferred from arguments
wrapResponse(hospital, 200);    // T = Hospital
wrapResponse(hospitals, 200);   // T = Hospital[]
```

## Shorthand property syntax

When variable name matches the key, don't repeat it:

```typescript
// Verbose
{ data: data, statusCode: statusCode }

// Shorthand -- same thing, used everywhere in the codebase
{ data, statusCode }
```

## Async/Await

Like Go's goroutines but with Promises. `async` marks the function, `await` pauses until resolved.

```typescript
const fetchHospitalById = async (id: number): Promise<Hospital> => {
  await sleep(100);
  const hospital = hospitals.find((h) => h.id === id);
  if (!hospital) {
    throw Error("Hospital not found");
  }
  return hospital;
};
```

Key rules:
- `await` is required -- without it the Promise fires but doesn't wait (silent bug)
- Error handling uses `try/catch` instead of Go's `if err != nil`

## Promise.all -- like sync.WaitGroup

Run multiple async operations in parallel:

```typescript
const fetchMultiple = async (ids: number[]): Promise<Hospital[]> => {
  return await Promise.all(ids.map((id) => fetchHospitalById(id)));
};
```

## Common array methods (used daily in React)

```typescript
hospitals.map((h) => h.name);          // transform each item
hospitals.filter((h) => h.isOpen);     // keep matching items
hospitals.find((h) => h.id === 1);     // first match or undefined
hospitals.some((h) => h.rating > 4);   // any match? -> boolean
hospitals.every((h) => h.rating > 4);  // all match? -> boolean
```

## Structural typing

TS checks shape, not type name. No casting or instantiation needed -- if the object has the right fields, it matches. Different from Go's nominal typing.

```typescript
// Valid -- shape matches ApiResponse<string>
const res: ApiResponse<string> = { data: "hi", statusCode: 200, message: "ok" };
```

Annotate return types on public functions so the IDE shows the type name clearly.
