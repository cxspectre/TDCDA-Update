# TDC Digital Advisory

Marketing site for TDC Digital Advisory LLC — https://www.tdc-advisory.com

React 19 + TypeScript + Tailwind CSS 4, built with vinext (Next-compatible
app router on Vite) and served from a Cloudflare Worker.

## Prerequisites

- Node.js >= 22.13.0
- pnpm 11.19.0 (`corepack prepare pnpm@11.19.0 --activate`)

## Local development

```sh
pnpm install --frozen-lockfile
pnpm dev
```

The dev server prints its address (default http://localhost:5173).

## Build and preview the production bundle

```sh
pnpm build   # emits dist/ (client assets + Worker bundle)
pnpm start   # serves dist/ locally through Wrangler
```

## Layout

| Path | Contents |
|------|----------|
| `app/page.tsx` | Home page: pillars, practices, 4D approach, Intelligence Lab, profile, contact |
| `app/imprint/page.tsx` | Imprint and privacy policy |
| `app/layout.tsx` | Root layout, metadata, font loading |
| `app/globals.css` | Design system and all component styles |
| `app/sitemap.ts`, `app/robots.ts` | Generated `/sitemap.xml` and `/robots.txt` |
| `lib/site.ts` | Canonical site facts — domain, names, address, practices |
| `components/` | Site components plus shadcn/ui primitives in `components/ui/` |
| `public/` | Images, favicon, `og-image.png`, `llms.txt` |
| `scripts/generate-og-image.mjs` | Regenerates the 1200x630 Open Graph image |

## SEO

Metadata, canonical URLs, Open Graph and Twitter tags come from `lib/site.ts`
via `app/layout.tsx`. Structured data (Organization, Person, WebSite, WebPage,
BreadcrumbList) is emitted by `components/StructuredData.tsx`.

Change the domain in `lib/site.ts` and metadata, sitemap, robots and structured
data all follow.

To regenerate the Open Graph image after a copy or portrait change:

```sh
node scripts/generate-og-image.mjs
```

## Deployment

The build targets the Cloudflare Workers runtime. `pnpm build` writes the Worker
bundle and its configuration to `dist/`, ready for `wrangler deploy` or a
Cloudflare Workers Git integration.

Generated `dist/`, `.wrangler/` and `.sites-runtime/` are disposable and ignored
by Git.
