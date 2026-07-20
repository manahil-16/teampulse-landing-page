# TeamPulse Responsive SaaS Landing Page (React)

A responsive marketing landing page for **TeamPulse**, a team-analytics dashboard SaaS.
This is the marketing site only — no working dashboard functionality, per the assignment.
Built with **React + Vite**, following a detailed content brief section by section.

## Live demo: https://teampulse-landing-page.vercel.app/
## Demo Responsive walkthrough video: https://github.com/user-attachments/assets/aac9499e-f0c6-42d2-9c46-9808ef89c934


## Why React (with Vite)

- Every section from the brief (Navbar, Hero, Trusted By, Stats, Features, Dashboard
Preview, How It Works, Testimonials, Pricing, FAQ, CTA, Footer) is its own component
in `src/components/`, composed in order inside `App.jsx`.
- Repeated content (feature cards, stat cards, pricing tiers, FAQ items, testimonials)
is rendered from small data arrays at the top of each component file, instead of
hand-repeating markup — the standard React pattern for lists of similar items.
- The FAQ accordion uses `useState` to track which question is open. The nav's mobile
menu also uses `useState` for its open/closed toggle.
- Vite gives a fast dev server and a plain static `dist/` build that deploys with no
extra configuration on Vercel or Netlify.

## Project structure

```
teampulse-react/
├── index.html
├── src/
│ ├── main.jsx
│ ├── index.css # Design system (CSS variables) + all component styles + breakpoints
│ ├── App.jsx # Composes every section in the brief's order
│ └── components/
│ ├── Navbar.jsx # Logo, nav links, Login/Get Started, mobile toggle (useState)
│ ├── Hero.jsx # Headline, description, buttons, dashboard preview illustration
│ ├── TrustedBy.jsx # "Trusted by" logo row (text-based, not real trademarked logos)
│ ├── Stats.jsx # 120+ / 25K+ / 98% / 50+ stat cards
│ ├── Features.jsx # 6 feature cards with emoji icons
│ ├── DashboardPreview.jsx # "See Your Team in Action" — metrics, bar chart, pie chart, progress bars
│ ├── HowItWorks.jsx # 4-step numbered flow with arrows
│ ├── Testimonials.jsx # Star-rated quotes
│ ├── Pricing.jsx # Starter / Pro / Enterprise tiers
│ ├── FAQ.jsx # Accordion (useState tracks open question)
│ ├── CTA.jsx # Bottom call-to-action banner
│ └── Footer.jsx # About / Features / Pricing / Blog / Contact / Privacy / Terms
├── package.json
└── vite.config.js
```

## Note on "Trusted By" logos

The brief lists real company names (Google, Microsoft, Spotify, Airbnb, Slack) "for
visual inspiration in a mockup." Actual company logos are trademarked, so this build
displays the names as styled text instead of reproducing logo marks — same layout and
intent, without using anyone's brand assets.

## Design system

Defined as CSS custom properties in `src/index.css`:

- **Color** — indigo primary (`--indigo`), slate text/backgrounds, green for positive
metrics (growth, satisfaction), amber for star ratings
- **Type** — system sans throughout, bold weights for headings
- **Spacing** — a `--space-1` through `--space-6` scale used consistently
- **Breakpoints** — mobile-first; nav collapses below `860px`, hero splits into two
columns at `960px`, feature/stat/pricing grids go multi-column between `700px` and
`1000px` depending on the section

## Responsive behavior

- **Mobile:** everything stacks in a single column, nav collapses behind a toggle,
How It Works steps stack vertically with down-arrows
- **Tablet:** stats and features move to 2–3 column grids
- **Desktop:** hero becomes a two-column split (copy + dashboard preview), How It
Works steps lay out horizontally with side-arrows, pricing becomes a 3-column row

## Running locally

```bash
npm install
npm run dev # http://localhost:5173
```

## Building for production

```bash
npm run build
npm run preview
```

## Deployment

Deployed via Vercel.
