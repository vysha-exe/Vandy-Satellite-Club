# Vanderbilt Satellite Club (VUSAT)

Official-feeling public website for Vanderbilt Satellite Club, with a detailed HASP documentation hub for **MOSAIC**.

## Stack

- Next.js (App Router) + TypeScript
- Tailwind CSS
- Content modules under `src/content/`

## Develop

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build
```

Static files are written to `out/` (GitHub Pages compatible).

## Hosting (GitHub Pages)

This project uses a static export and deploys via GitHub Actions on every push to `main`.

**Live URL (after Pages is enabled):**  
https://vysha-exe.github.io/Vandy-Satellite-Club/

1. Repo must be **public** for free GitHub Pages (or use GitHub Pro for private Pages).
2. Settings → Pages → Source: **GitHub Actions**.
3. Push to `main` (or run the “Deploy to GitHub Pages” workflow).

Local GitHub Pages build:

```bash
# PowerShell
$env:GITHUB_PAGES="true"; npm run build
```

## Site map

| Route | Purpose |
|---|---|
| `/` | Home |
| `/about` | Club overview |
| `/projects` | Project directory |
| `/hasp` | MOSAIC documentation hub |
| `/hasp/[section]` | Science, hardware, testing, etc. |
| `/team` | Members, proposal roster, open slots |
| `/join` | Recruitment / contact placeholder |

Instagram: [vandysatelliteclub](https://www.instagram.com/vandysatelliteclub/?hl=en)

## Edit content

### Team / club members

Edit `src/content/team.ts`.

- Proposal roster entries use `status: "proposal-roster"`.
- Confirmed members should use `status: "confirmed"`.
- Open member slots are generated from `memberPlaceholders`.

### Projects

Edit `src/content/projects.ts`.

### HASP / MOSAIC docs

- Navigation: `src/content/hasp/nav.ts`
- Section copy: `src/content/hasp/sections.ts`

### Join contact

Edit `joinContactPlaceholder` in `src/content/site.ts` when a verified email or form is available.

### Figures

Place approved images in `public/images/hasp/` and reference them from the relevant HASP section. Do not publish the proposal PDF or detailed schematics without club approval.

## Accuracy rules

- Do not claim the payload has flown or that HASP has accepted the proposal unless verified.
- Do not invent results, photos, sponsors, or membership numbers.
- Keep preliminary mass, power, and thermal figures labeled as estimates / simulations.

## Logo

Club logo source: `Logo/vusat_logo_globe_satellite.png` (copied to `public/images/vusat-logo.png`).
