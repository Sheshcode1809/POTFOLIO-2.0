---
name: nextjs
description: Use this skill when building or modifying Next.js applications using the App Router.
---

# Next.js Best Practices

## Architecture

- Use the App Router.
- Prefer Server Components.
- Use Client Components only when necessary.
- Keep pages thin.
- Move reusable UI into components.
- Organize features by domain.

## Data Fetching

- Fetch on the server whenever possible.
- Cache appropriately.
- Handle loading and error states.
- Validate API responses.

## Performance

- Optimize images with next/image.
- Lazy load heavy components.
- Avoid unnecessary client-side rendering.
- Minimize JavaScript bundles.

## SEO

- Use Metadata API.
- Add proper titles and descriptions.
- Use semantic HTML.

## Routing

- Use nested layouts.
- Use route groups when appropriate.
- Prefer dynamic routes over duplicated pages.

## API

- Use Route Handlers.
- Validate input.
- Return consistent JSON.

## Security

- Never expose secrets.
- Keep API keys on the server.
- Sanitize user input.

## Project Structure

app/
components/
lib/
hooks/
types/
utils/
public/

## Code Quality

- Use async/await.
- Avoid duplicated logic.
- Build reusable components.