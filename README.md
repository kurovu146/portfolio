# Portfolio — Vu Duc Tuan (Kuro)

Personal portfolio website showcasing my projects, skills, and experience.

**Live:** [kurovu146.github.io/portfolio](https://kurovu146.github.io/portfolio)

## Tech Stack

- Next.js 14 (Static Export)
- Tailwind CSS v3
- Framer Motion
- TypeScript
- GitHub Pages (CI/CD)

## Features

- Responsive design with dark theme
- Smooth scroll animations
- Project showcase with category filters
- Experience timeline
- Skills grid with icons
- Contact section with social links

## Getting Started

```bash
npm install
npm run dev
```

## Deployment

Automatically deployed to GitHub Pages on push to `main` via GitHub Actions.

## Project Structure

```
app/             # Next.js pages
components/
  sections/      # Page sections (hero, about, skills, projects, experience, contact)
  shared/        # Reusable components (header, social-links, typewriter)
  ui/            # Base UI components
lib/
  data.ts        # All portfolio content (easy to update)
  constants.ts   # Navigation items
  animations.ts  # Framer Motion variants
public/images/   # Avatar and assets
```
