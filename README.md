# Charisville Dental Clinic

A warm, modern storefront for Charisville Dental Clinic, built with React,
Tailwind CSS, and Framer Motion — using the clinic's real logo colors
(teal `#0eb9b0` and navy `#0b2a37`, sampled directly from the logo file)
and copy grounded in the clinic's actual requirements document.

> This replaces an earlier "invite-only luxury atelier" concept pass —
> same stack and section structure, restyled around the real brand and
> a friendlier, more accessible tone after a design review.

## Run it

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
npm run preview
```

## What's here

```
src/
  App.jsx                    Assembles the page
  components/
    Nav.jsx                  Fixed header, appears on scroll
    Hero.jsx                 Orchestrated load sequence
    HeroVisual.jsx            Generated stand-in for clinic photography
    MaterialRender.jsx       Generated stand-in for macro material renders
    Philosophy.jsx            Whole-health approach
    About.jsx                 Clinic history, mission, vision and values
    Services.jsx              Treatment catalogue
    Sanctum.jsx               Clinic experience and media placeholder
    FAQs.jsx                  Patient questions and policies
    Access.jsx                 Appointment and patient intake form
    Footer.jsx
  assets/mark.png            Icon mark, recolored for the dark theme
brand-assets/                 Original logo + isolated crops, for reference
```

## Design system

- **Palette** — navy (`#0b2a37`) and teal (`#0eb9b0`), both sampled
  directly from the uploaded logo file, on a white/cream base with a
  soft sand neutral for variety. See `tailwind.config.js`.
- **Type** — Plus Jakarta Sans for display/headline text (rounded,
  friendly, still confidently modern), Inter for body copy. Both load
  from Google Fonts in `index.html`.
- **Shape language** — rounded corners throughout (`rounded-3xl` panels,
  pill-shaped buttons) and soft teal-tinted shadows instead of hard
  edges, in place of the earlier hairline-bordered, square-cornered
  look.
- **Motion** — one orchestrated reveal on the hero load, a single
  scroll-reveal per section, and hover/focus transitions. Respects
  `prefers-reduced-motion` throughout (`Reveal.jsx`, `HeroVisual.jsx`).

## Placeholder content that needs real assets

This is a fully coded, working build — nothing is a static mockup — but a
few things stand in for material that only the client can provide:

- **Hero and clinic imagery.** `HeroVisual.jsx` and `MaterialRender.jsx`
  generate soft gradient/blob compositions in place of real photography
  of the clinic, team, and treatments. No stock photography was used, to
  avoid licensing issues in a client deliverable — these should be
  replaced with real photos per the "Media & Team Information" section
  of the requirements doc (marked "to be provided later").
- **Booking form.** `Access.jsx` is a fully working, validated React form
  with no backend attached — submitting shows a confirmation state
  locally. Point `handleSubmit` at whatever intake you use (email
  service, CRM, booking system).
- **Team and gallery media.** The requirements document marks these as
  "to be provided later". The site includes a clear placeholder for the
  clinic, team, treatment and before-and-after media until approved assets
  and qualifications are supplied.
- **Legal and patient information.** FAQs, the supplied privacy policy
  summary, the external terms page, payment rules, appointment guidance,
  cancellation policy and consent/intake request path are included.

## Note on scope

This started as an "invite-only luxury atelier" concept exploration. It is
now a one-page clinic website using the clinic's real logo colors and a
warmer, more accessible tone — much closer to the "dental home for all"
positioning in the requirements document.
