# Webview Development Study

## Learner Background

- Backend/platform/infrastructure engineer (no web/JS/TS experience)
- Familiar with backend languages like Java, Go, Python
- Strong in DI, middleware, API design, async processing concepts
- Expanding into frontend to become a full-stack developer

## Project Goal

Understand the company's webview architecture (Next.js App Router + Bulletproof React) at the design level, and be able to build features independently and participate in architecture discussions.

## References

- Example code: <https://github.com/healingpaper/web/tree/main/gangnamunni/webview/zzim>
- Architecture: <https://www.notion.so/healingpaper/Bulletproof-1d5d9338d3d480cdb4bacb4d27c6b646>

## Curriculum

### Phase 1: TypeScript Essentials -- "Minimum TS to read and write React code"

| # | Topic | Key Content |
|---|-------|-------------|
| 1-1 | Type System Basics | Primitives, interface, type, generics -- compared to Java/Go |
| 1-2 | Functions & Async | Arrow functions, async/await, Promise -- vs backend async patterns |
| 1-3 | Module System & import/export | ES Modules, absolute paths (`@/*`), no barrel files rule |
| 1-4 | Destructuring & Spread | Object/array destructuring, spread -- used daily in React |

### Phase 2: React Core -- "Components are functions, state is data"

| # | Topic | Key Content |
|---|-------|-------------|
| 2-1 | JSX & Components | Functions that return UI -- compared to template engines |
| 2-2 | Props & Children | Data flow, one-way binding -- API request/response analogy |
| 2-3 | useState & useEffect | State management & side effects -- DB state & event handler analogy |
| 2-4 | Conditional Rendering & Lists | Ternary, map, key -- similar to server response branching |
| 2-5 | Context & Custom Hooks | Global state injection -- compared to DI containers |

### Phase 3: Next.js App Router -- "The boundary between server and client"

| # | Topic | Key Content |
|---|-------|-------------|
| 3-1 | Routing & Layouts | File-based routing, layout.tsx, dynamic routes `[id]` |
| 3-2 | Server vs Client Components | `'use client'` boundary -- SSR/CSR difference & hydration |
| 3-3 | Data Fetching Patterns | Server component fetch, client-side TanStack Query |
| 3-4 | Provider Pattern | providers.tsx context tree -- middleware chain analogy |

### Phase 4: Company Architecture -- "Bulletproof React + Webview Patterns"

| # | Topic | Key Content |
|---|-------|-------------|
| 4-1 | Feature-Based Structure | features/ directory design, unidirectional dependency rule |
| 4-2 | API Layer & HttpClient DI | wishApi pattern, createBrowserClient/createServerClient |
| 4-3 | TanStack Query in Practice | queryOptions factory, infinite scroll, cache invalidation |
| 4-4 | Tailwind CSS in Practice | Utility classes, CVA, conditional styling |
| 4-5 | Native App Bridge | `@unni/webview-interface`, post/postLegacy communication |

### Phase 5: Building a Real Webview -- "Hands-on implementation"

| # | Topic | Key Content |
|---|-------|-------------|
| 5-1 | Webview Project Setup | Project creation, config files, dev server |
| 5-2 | Feature Module Implementation | Build a feature: API -> Query -> Component |
| 5-3 | Telemetry & A/B Testing | Amplitude, Airbridge, ExperimentSwitch pattern |
| 5-4 | Code Review Checklist | Architecture rule compliance, common mistake patterns |

## Note Style Guide

- Connect to prior concepts: naturally bridge from what was learned before
- Backend analogies only when clearly helpful: DI, middleware, API patterns as bridges
- Progressive explanation: deep-dive one scenario, then expand
- Concrete code examples: always runnable code instead of abstract descriptions
- Friendly conversational tone: like a senior colleague explaining
- Why first: before the definition, explain "what breaks if you don't know this"
- Conversation first, code to finish: understand through dialogue, then write code to complete the topic
- Spell out acronyms on first use
- Real-world pitfalls: go beyond definitions and examples to common mistakes and traps
- Company code connection: use zzim webview code as examples whenever possible

## Learning Method

1. Understand concepts through dialogue: compare with backend concepts
2. Write code hands-on: implement learned concepts as runnable code
3. Read company code: see how the pattern is used in the zzim webview
4. Write notes: save key content and code to notes/ directory

- Note files: `notes/phase{N}-{M}-{topic}.md` (with code blocks)
- Practice code: run directly in project root

## Progress

> Total: 3/22 done (14%) | Current: Phase 1-4 Destructuring & Spread

| Phase | Topic | Status |
|-------|-------|--------|
| 1-1 | Type System Basics | done (notes/phase1-1-type-system-basics.md) |
| 1-2 | Functions & Async | done (notes/phase1-2-functions-and-async.md) |
| 1-3 | Module System & import/export | done (notes/phase1-3-module-system.md) |
| 1-4 | Destructuring & Spread | - |
| 2-1 | JSX & Components | - |
| 2-2 | Props & Children | - |
| 2-3 | useState & useEffect | - |
| 2-4 | Conditional Rendering & Lists | - |
| 2-5 | Context & Custom Hooks | - |
| 3-1 | Routing & Layouts | - |
| 3-2 | Server vs Client Components | - |
| 3-3 | Data Fetching Patterns | - |
| 3-4 | Provider Pattern | - |
| 4-1 | Feature-Based Structure | - |
| 4-2 | API Layer & HttpClient DI | - |
| 4-3 | TanStack Query in Practice | - |
| 4-4 | Tailwind CSS in Practice | - |
| 4-5 | Native App Bridge | - |
| 5-1 | Webview Project Setup | - |
| 5-2 | Feature Module Implementation | - |
| 5-3 | Telemetry & A/B Testing | - |
| 5-4 | Code Review Checklist | - |

Status values: "-" not started, "in progress", "done", "done (filepath)"
