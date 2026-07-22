---
name: typescript
description: Use this skill when writing or refactoring TypeScript code, defining interfaces, types, generics, utility types, or improving type safety.
---

# TypeScript Development Standards

## Objectives

Write maintainable, type-safe, production-ready TypeScript.

## Rules

- Enable strict typing.
- Never use `any` unless absolutely unavoidable.
- Prefer `unknown` over `any`.
- Prefer interfaces for object shapes.
- Use type aliases for unions and mapped types.
- Keep types close to where they are used.
- Use discriminated unions where appropriate.
- Prefer readonly for immutable data.
- Use enums only when necessary.
- Prefer utility types (`Pick`, `Omit`, `Partial`, `Record`, etc.).
- Infer types whenever it improves readability.

## Functions

- Keep functions small.
- Explicitly type public APIs.
- Avoid deeply nested logic.
- Return early whenever possible.

## Error Handling

- Never silently ignore errors.
- Create typed error objects.
- Handle nullable values safely.

## Imports

- Remove unused imports.
- Prefer named exports.
- Avoid circular dependencies.

## Code Style

- Descriptive variable names.
- Self-documenting code.
- Avoid unnecessary comments.
- Prioritize readability over cleverness.