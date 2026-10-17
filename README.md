# Portfolio

A developer portfolio built with Next.js 16, React 19, TypeScript and Tailwind v4.
Live at **[parascodes.is-a.dev](https://parascodes.is-a.dev)**.

It pulls real numbers instead of hardcoding them: LeetCode, Codeforces, CodeChef
and GitHub are fetched at build time and revalidated every six hours, each
falling back to a committed snapshot if the upstream is down.

## Quick start

```bash
npm install
npm run dev          # http://localhost:3000
```

The site runs with no environment variables. Add a GitHub token only if you
want the live contribution graph:

```bash
# .env.local
GITHUB_TOKEN=github_pat_...   # classic or fine-grained, needs read:user
```

Without it the graph renders from `src/data/stats-snapshot.json`.

## Making it yours

**Everything personal lives in [`portfolio.config.ts`](portfolio.config.ts)** —
name, tagline, location, social handles, email, resume path, booking link. Edit
that one file and the whole site follows: page titles, Open Graph tags, every
profile link, the stats fetchers and the sitemap.

Page content lives in [`src/data/`](src/data) as typed modules and JSON. Nothing
is hardcoded in components.

See **[SETUP.md](SETUP.md)** for the file-by-file guide — it is written so you
can hand it, plus your resume, to a coding agent and let it fill the site in.

## Scripts

| Command | What it does |
|---|---|
| `npm run dev` | Dev server |
| `npm run build` | Production build |
| `npm run lint` | ESLint |
| `npm run typecheck` | `tsc --noEmit` |
| `npm run refresh-stats` | Re-snapshot LeetCode/Codeforces/CodeChef/GitHub |
| `npm run refresh-music` | Resolve album titles and covers from Spotify oEmbed |

## Deploying

Import the repo on Vercel. It builds with no configuration. Set
`NEXT_PUBLIC_SITE_URL` to your domain, or change `url` in the config — the
sitemap, robots.txt and canonical URLs all read from it.

## License

MIT — see [LICENSE](LICENSE). The code is free to reuse. The content under
`src/data/`, `public/` and `Resume_Paras.pdf` is personal: replace it with your
own rather than shipping someone else's history.
