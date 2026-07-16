# Norware Landing Page — Technical Architecture & UX Foundation

---

## 1. Design Tokens / CSS Custom Properties

### File: `src/styles/design-tokens.css`

```css
:root {
  /* ── Brand Colors ── */
  --color-brand-50: #f0f7ff;
  --color-brand-100: #e0effe;
  --color-brand-200: #b9dffd;
  --color-brand-300: #7cc5fb;
  --color-brand-400: #36a9f7;
  --color-brand-500: #0c8ee7;
  --color-brand-600: #0070d1;
  --color-brand-700: #0159a9;
  --color-brand-800: #064b8b;
  --color-brand-900: #0b3f73;
  --color-brand-950: #07284a;

  --color-accent: var(--color-brand-500);
  --color-accent-hover: var(--color-brand-600);
  --color-accent-light: var(--color-brand-50);

  /* ── Neutral / Gray ── */
  --color-gray-50:  #f9fafb;
  --color-gray-100: #f3f4f6;
  --color-gray-200: #e5e7eb;
  --color-gray-300: #d1d5db;
  --color-gray-400: #9ca3af;
  --color-gray-500: #6b7280;
  --color-gray-600: #4b5563;
  --color-gray-700: #374151;
  --color-gray-800: #1f2937;
  --color-gray-900: #111827;
  --color-gray-950: #030712;

  /* ── Semantic Surface ── */
  --color-bg:           #ffffff;
  --color-bg-secondary: var(--color-gray-50);
  --color-bg-tertiary:  var(--color-gray-100);
  --color-text-primary:   var(--color-gray-900);
  --color-text-secondary: var(--color-gray-600);
  --color-text-tertiary:  var(--color-gray-400);
  --color-border:       var(--color-gray-200);
  --color-border-light: var(--color-gray-100);

  /* ── Typography ── */
  --font-sans:  'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  --font-mono:  'JetBrains Mono', 'SF Mono', 'Fira Code', monospace;

  /* Type scale: 1.25 (Major Third) */
  --text-xs:   0.75rem;   /* 12px */
  --text-sm:   0.875rem;  /* 14px */
  --text-base: 1rem;      /* 16px */
  --text-lg:   1.125rem;  /* 18px */
  --text-xl:   1.25rem;   /* 20px */
  --text-2xl:  1.5rem;    /* 24px */
  --text-3xl:  1.875rem;  /* 30px */
  --text-4xl:  2.25rem;   /* 36px */
  --text-5xl:  3rem;      /* 48px */
  --text-6xl:  3.75rem;   /* 60px */

  --leading-tight:   1.15;
  --leading-snug:    1.3;
  --leading-normal:  1.6;
  --leading-relaxed: 1.75;

  --tracking-tight:  -0.025em;
  --tracking-normal: 0;
  --tracking-wide:   0.025em;

  /* ── Font Weight ── */
  --font-normal:   400;
  --font-medium:   500;
  --font-semibold: 600;
  --font-bold:     700;

  /* ── Spacing Scale (4px base) ── */
  --space-1:   0.25rem;   /*  4px */
  --space-2:   0.5rem;    /*  8px */
  --space-3:   0.75rem;   /* 12px */
  --space-4:   1rem;      /* 16px */
  --space-5:   1.25rem;   /* 20px */
  --space-6:   1.5rem;    /* 24px */
  --space-8:   2rem;      /* 32px */
  --space-10:  2.5rem;    /* 40px */
  --space-12:  3rem;      /* 48px */
  --space-14:  3.5rem;    /* 56px */
  --space-16:  4rem;      /* 64px */
  --space-20:  5rem;      /* 80px */
  --space-24:  6rem;      /* 96px */
  --space-28:  7rem;      /* 112px */
  --space-32:  8rem;      /* 128px */

  /* ── Section Vertical Rhythm ── */
  --section-py-sm:  var(--space-12);
  --section-py-md:  var(--space-20);
  --section-py-lg:  var(--space-28);

  /* ── Border Radius ── */
  --radius-sm:   0.375rem;
  --radius-md:   0.5rem;
  --radius-lg:   0.75rem;
  --radius-xl:   1rem;
  --radius-2xl:  1.5rem;
  --radius-full: 9999px;

  /* ── Shadows ── */
  --shadow-sm:   0 1px 2px 0 rgb(0 0 0 / 0.05);
  --shadow-md:   0 4px 6px -1px rgb(0 0 0 / 0.07), 0 2px 4px -2px rgb(0 0 0 / 0.05);
  --shadow-lg:   0 10px 15px -3px rgb(0 0 0 / 0.07), 0 4px 6px -4px rgb(0 0 0 / 0.05);
  --shadow-xl:   0 20px 25px -5px rgb(0 0 0 / 0.07), 0 8px 10px -6px rgb(0 0 0 / 0.05);
  --shadow-card: 0 1px 3px 0 rgb(0 0 0 / 0.04), 0 1px 2px -1px rgb(0 0 0 / 0.06);

  /* ── Transitions ── */
  --transition-fast:   150ms ease;
  --transition-base:   250ms ease;
  --transition-slow:   400ms ease;

  /* ── Z-Index Scale ── */
  --z-base:     1;
  --z-dropdown: 50;
  --z-sticky:   100;
  --z-overlay:  200;
  --z-modal:    300;
}
```

---

## 2. Breakpoint Strategy

Mobile-first, defined as Tailwind `screens` in `tailwind.config.mjs`:

```js
// tailwind.config.mjs
export default {
  theme: {
    extend: {
      screens: {
        sm:  '640px',
        md:  '768px',
        lg:  '1024px',
        xl:  '1280px',
        '2xl': '1536px',
      },
    },
  },
};
```

| Alias | Min-Width | Target Devices |
|-------|-----------|----------------|
| `(default)` | 0 | Portrait phones |
| `sm`  | 640px | Landscape phones, small tablets |
| `md`  | 768px | Tablets, small laptops |
| `lg`  | 1024px | Laptops, desktops |
| `xl`  | 1280px | Wide desktops |
| `2xl` | 1536px | Large screens |

### Breakpoint Usage Rules

1. **All base styles are mobile-first** — no `max-width` queries for layout.
2. Use `max-width` **only** for overrides (e.g., hiding elements on mobile).
3. Layout grids switch at `md` (2 cols) and `lg` (3+ cols).
4. Section padding increases at each breakpoint: `py-[--section-py-sm]` → `md:py-[--section-py-md]` → `lg:py-[--section-py-lg]`.

---

## 3. Container System

```css
/* Base container */
.container {
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding-left: var(--space-4);  /* 16px */
  padding-right: var(--space-4);
}

/* Responsive max-widths */
@media (min-width: 640px) {
  .container { max-width: 640px; }
}
@media (min-width: 768px) {
  .container { max-width: 768px; padding-left: var(--space-6); padding-right: var(--space-6); }
}
@media (min-width: 1024px) {
  .container { max-width: 1024px; padding-left: var(--space-8); padding-right: var(--space-8); }
}
@media (min-width: 1280px) {
  .container { max-width: 1280px; }
}

/* Narrow container for text-heavy sections (FAQ, testimonials) */
.container--narrow {
  max-width: 768px;
}

/* Full-width breakout (logo strip, hero background) */
.container--fluid {
  max-width: 100%;
  padding-left: var(--space-4);
  padding-right: var(--space-4);
}
```

---

## 4. Grid Patterns for Each Section

| Section | Mobile | md (768px) | lg (1024px) |
|---------|--------|------------|-------------|
| Hero | single column, stacked | 1fr + 1fr side-by-side | 1fr + 1fr |
| Logo strip | `flex` horizontal scroll | `flex` centered wrap | `flex` centered |
| Features | 1 column | 2 columns | 3 columns |
| How it works | 1 column (vertical steps) | 1 column (horizontal steps) | 3 columns |
| Portfolio | 1 column | 2 columns (masonry-ish) | 3 columns |
| Pricing | 1 column | 3 columns (same height) | 3 columns |
| FAQ | 1 column (narrow) | 1 column (narrow) | 1 column (narrow) |
| Contact | 1 column | 2 columns (info + form) | 2 columns |

### Generic Grid Utilities

```css
.grid-2  { display: grid; grid-template-columns: 1fr; gap: var(--space-8); }
.grid-3  { display: grid; grid-template-columns: 1fr; gap: var(--space-8); }

@media (min-width: 768px) {
  .grid-2 { grid-template-columns: repeat(2, 1fr); }
}

@media (min-width: 1024px) {
  .grid-2 { grid-template-columns: repeat(2, 1fr); }
  .grid-3 { grid-template-columns: repeat(3, 1fr); }
}
```

---

## 5. Component Hierarchy & Naming Conventions

### File Structure

```
src/
├── layouts/
│   └── BaseLayout.astro          <!-- <html>, <head>, <body>, SEO meta, fonts -->
├── components/
│   ├── sections/
│   │   ├── Nav.astro             <!-- Sticky nav -->
│   │   ├── Hero.astro            <!-- Hero section -->
│   │   ├── LogoStrip.astro       <!-- Trusted by logos -->
│   │   ├── Features.astro        <!-- 3-column features -->
│   │   ├── HowItWorks.astro      <!-- 3 steps -->
│   │   ├── Portfolio.astro       <!-- Work showcase -->
│   │   ├── Testimonial.astro     <!-- Quote card -->
│   │   ├── Pricing.astro         <!-- 3 tiers -->
│   │   ├── FAQ.astro             <!-- Accordion -->
│   │   ├── Contact.astro         <!-- Form + social -->
│   │   └── Footer.astro          <!-- Footer -->
│   ├── ui/
│   │   ├── Button.astro          <!-- Reusable button -->
│   │   ├── SectionHeading.astro  <!-- <h2> + optional subtitle -->
│   │   ├── Card.astro            <!-- Generic card wrapper -->
│   │   └── Accordion.astro       <!-- <details>/<summary> or custom -->
│   ├── animations/
│   │   └── ScrollReveal.astro    <!-- IntersectionObserver wrapper -->
│   └── svg/
│       ├── IconCheck.astro
│       ├── IconArrow.astro
│       ├── IconClose.astro
│       ├── IconMenu.astro
│       └── ...                   <!-- One file per icon -->
├── styles/
│   ├── design-tokens.css         /* Custom properties */
│   ├── base.css                  /* Reset, body, typography */
│   ├── utilities.css             /* Container, grids, helpers */
│   └── animations.css            /* @keyframes, .reveal classes */
└── pages/
    └── index.astro               <!-- Only page -->
```

### Naming Convention: BEM-lite

- **Component files**: PascalCase (`Nav.astro`, `ScrollReveal.astro`)
- **CSS classes**: kebab-case with block__element--modifier
  - `.nav`, `.nav__link`, `.nav__link--active`
  - `.card`, `.card__title`, `.card__body`
- **Tailwind utility classes** are preferred for one-off spacing/typography. Component-specific styles use `<style>` scoped in each `.astro` file.

### Component Dependencies

```
BaseLayout.astro
  └── sections/Nav.astro
  └── sections/Hero.astro          ← ui/Button.astro
  └── sections/LogoStrip.astro
  └── sections/Features.astro      ← ui/SectionHeading.astro, ui/Card.astro
  └── sections/HowItWorks.astro    ← ui/SectionHeading.astro
  └── sections/Portfolio.astro     ← ui/SectionHeading.astro, ui/Card.astro
  └── sections/Testimonial.astro   ← animations/ScrollReveal.astro
  └── sections/Pricing.astro       ← ui/SectionHeading.astro, ui/Card.astro
  └── sections/FAQ.astro           ← ui/SectionHeading.astro, ui/Accordion.astro
  └── sections/Contact.astro       ← ui/SectionHeading.astro, ui/Button.astro
  └── sections/Footer.astro
```

---

## 6. Page-Level HTML Skeleton

```astro
---
// src/pages/index.astro
import BaseLayout from '../layouts/BaseLayout.astro';
import Nav          from '../components/sections/Nav.astro';
import Hero         from '../components/sections/Hero.astro';
import LogoStrip    from '../components/sections/LogoStrip.astro';
import Features     from '../components/sections/Features.astro';
import HowItWorks   from '../components/sections/HowItWorks.astro';
import Portfolio    from '../components/sections/Portfolio.astro';
import Testimonial  from '../components/sections/Testimonial.astro';
import Pricing      from '../components/sections/Pricing.astro';
import FAQ          from '../components/sections/FAQ.astro';
import Contact      from '../components/sections/Contact.astro';
import Footer       from '../components/sections/Footer.astro';
---

<BaseLayout>
  <Nav />

  <main id="main-content">
    <Hero />
    <LogoStrip />
    <Features />
    <HowItWorks />
    <Portfolio />
    <Testimonial />
    <Pricing />
    <FAQ />
    <Contact />
  </main>

  <Footer />
</BaseLayout>
```

```astro
---
// src/layouts/BaseLayout.astro
interface Props {
  title?: string;
  description?: string;
}

const { title = 'Norware — Custom Software Development Agency', description = 'We build high-quality, scalable software for growing businesses. From web apps to APIs, our expert team delivers results on time and on budget.' } = Astro.props;
---

<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />

    <!-- Primary Meta -->
    <title>{title}</title>
    <meta name="description" content={description} />

    <!-- Canonical -->
    <link rel="canonical" href="https://norware.dev/" />

    <!-- Open Graph -->
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://norware.dev/" />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:image" content="/og-image.png" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />

    <!-- Twitter -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    <meta name="twitter:image" content="/og-image.png" />

    <!-- Favicon -->
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <link rel="icon" href="/favicon.ico" />

    <!-- Fonts: preconnect + subset (example) -->
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />

    <!-- Preload hero image -->
    <link rel="preload" as="image" href="/hero-screenshot.webp" fetchpriority="high" />

    <style>
      @import '../styles/design-tokens.css';
      @import '../styles/base.css';
      @import '../styles/utilities.css';
      @import '../styles/animations.css';
    </style>
  </head>
  <body>
    <!-- Skip link -->
    <a href="#main-content" class="skip-link">Skip to main content</a>

    <slot />
  </body>
</html>
```

---

## 7. SEO Structure

### Heading Hierarchy (per section)

```
H1: [Unique value prop]                             → Hero
├─ H2: Trusted by industry leaders                  → Logo strip (visually hidden)
├─ H2: Everything you need to ship faster           → Features
│  └─ H3: [Feature 1 title]                         → Feature card
│  └─ H3: [Feature 2 title]
│  └─ H3: [Feature 3 title]
├─ H2: How we work                                  → How it works
│  └─ H3: [Step 1 title]                            → Step card
│  └─ H3: [Step 2 title]
│  └─ H3: [Step 3 title]
├─ H2: Selected work                                → Portfolio
│  └─ H3: [Project name]                            → Project card
├─ H2: What our clients say                         → Testimonial (visually hidden if single quote)
├─ H2: Simple, transparent pricing                  → Pricing
│  └─ H3: [Plan name]                               → Pricing card
├─ H2: Frequently asked questions                   → FAQ
├─ H2: Let's build something great                  → Contact
```

### Semantic HTML Usage

| Element | Usage |
|---------|-------|
| `<header>` | Wraps `<nav>` (sticky nav bar) |
| `<nav>` | Site navigation with `aria-label="Main"` |
| `<main>` | Wraps all unique page content |
| `<section>` | Each major content block, with `aria-label` or `aria-labelledby` |
| `<article>` | Portfolio project cards |
| `<aside>` | Logo strip (complementary to hero) |
| `<footer>` | Site footer with `aria-label="Site footer"` |
| `<!-- -->` | Presentational-only icons (hide from AT with `aria-hidden="true"`) |

### Structured Data (JSON-LD)

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Norware",
  "url": "https://norware.dev",
  "logo": "https://norware.dev/favicon.svg",
  "description": "Custom software development agency building high-quality web applications, APIs, and digital products.",
  "foundingDate": "2024",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "[phone]",
    "contactType": "sales",
    "email": "hello@norware.dev"
  },
  "sameAs": [
    "https://github.com/norware",
    "https://linkedin.com/company/norware",
    "https://twitter.com/norware"
  ]
}
</script>
```

---

## 8. Animation Strategy

### CSS `@keyframes`

```css
/* animations.css */

@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(24px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fade-in {
  from { opacity: 0; }
  to   { opacity: 1; }
}

@keyframes scale-in {
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
```

### Scroll Reveal Classes

```css
/* Base hidden state */
.reveal {
  opacity: 0;
  transform: translateY(24px);
  transition:
    opacity 600ms cubic-bezier(0.22, 1, 0.36, 1),
    transform 600ms cubic-bezier(0.22, 1, 0.36, 1);
}

.reveal--visible {
  opacity: 1;
  transform: translateY(0);
}

/* Stagger children */
.reveal--stagger > .reveal:nth-child(1) { transition-delay: 0ms; }
.reveal--stagger > .reveal:nth-child(2) { transition-delay: 100ms; }
.reveal--stagger > .reveal:nth-child(3) { transition-delay: 200ms; }
.reveal--stagger > .reveal:nth-child(4) { transition-delay: 300ms; }
.reveal--stagger > .reveal:nth-child(5) { transition-delay: 400ms; }

/* Reduced motion */
@media (prefers-reduced-motion: reduce) {
  .reveal {
    opacity: 1;
    transform: none;
    transition: none;
  }
}
```

### ScrollReveal.astro Component

```astro
---
// src/components/animations/ScrollReveal.astro
interface Props {
  class?: string;
  stagger?: boolean;
  threshold?: number;
}

const { class: className, stagger = false, threshold = 0.15 } = Astro.props;
const revealClass = stagger ? 'reveal reveal--stagger' : 'reveal';
---

<div class:list={[revealClass, className]} data-reveal data-reveal-threshold={threshold}>
  <slot />
</div>

<script>
  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          if (entry.target.dataset.revealStagger !== undefined) {
            entry.target.classList.add('reveal--visible');
          } else {
            entry.target.querySelectorAll('.reveal').forEach((el) => {
              el.classList.add('reveal--visible');
            });
          }
          observer.unobserve(entry.target);
        }
      }
    },
    { threshold: 0.15 }
  );

  document.querySelectorAll('[data-reveal]').forEach((el) => {
    observer.observe(el);
  });
</script>
```

### Entrance Animation Map

| Element | Animation | Trigger | Delay |
|---------|-----------|---------|-------|
| Hero headline | `fade-in-up` | On load (no IO) | 100ms |
| Hero subhead | `fade-in-up` | On load | 250ms |
| Hero CTAs | `fade-in-up` | On load | 400ms |
| Logo strip items | `fade-in` stagger | Scroll reveal | 0–200ms |
| Feature cards | `fade-in-up` stagger | Scroll reveal | 0–200ms |
| Step items | `fade-in-up` stagger | Scroll reveal | 0–200ms |
| Portfolio cards | `fade-in-up` stagger | Scroll reveal | 0–300ms |
| Testimonial | `scale-in` | Scroll reveal | 0ms |
| Pricing cards | `fade-in-up` stagger | Scroll reveal | 0–200ms |
| FAQ items | `fade-in-up` stagger | Scroll reveal | 0–200ms |
| Contact form | `fade-in-up` | Scroll reveal | 0ms |
| Nav bar | slide-down on scroll (sticky) | Scroll event | N/A |

### Sticky Nav Behavior

- `position: sticky; top: 0;` with `z-index: var(--z-sticky)`
- On scroll past hero: add `.nav--scrolled` (adds `box-shadow`, `backdrop-filter: blur`)
- Mobile: hamburger toggle with slide-down menu

---

## 9. Performance Considerations

### Font Loading
- `font-display: swap` on `@font-face` or Google Fonts `&display=swap`
- Preconnect to Google Fonts origins (done in `BaseLayout`)
- Consider `subset` parameter on Google Fonts URL

### Image Strategy
- **Hero screenshot**: preloaded `<link rel="preload">` with `fetchpriority="high"`, served as WebP with JPEG fallback
- **Portfolio images**: lazy-loaded via `loading="lazy"`, responsive via `srcset` and `<picture>`
- **Logo strip**: inline SVGs (no HTTP requests), or tiny PNGs with `loading="lazy"`
- **Icons**: all inline SVGs in `src/components/svg/` — zero network requests

### CSS
- All CSS imported via Astro `<style>` tags — Astro automatically extracts and minifies
- `design-tokens.css` is critical and inlined in `<head>` (via `<style>`)
- No CSS frameworks loaded from CDN — Tailwind is build-time only

### JS
- Zero JavaScript frameworks on the client
- Only lightweight vanilla JS:
  - Intersection Observer for scroll reveal (~0.5 KB)
  - Accordion toggle (~0.3 KB)
  - Mobile nav toggle (~0.5 KB)
  - Sticky nav class toggle (~0.2 KB)
- All scripts use `type="module"` and are deferred by default in Astro
- Total client JS budget: **< 5 KB uncompressed**

### Build
- `astro build` produces static HTML files
- All assets content-hashed for long-term caching
- Automatic CSS/JS minification
- Image optimization via Astro's `<Image />` or `<Picture />` components (if `@astrojs/image` added)

### Performance Budgets

| Metric | Target |
|--------|--------|
| First Contentful Paint | < 1.2s |
| Largest Contentful Paint | < 2.0s |
| Total Blocking Time | < 100ms |
| Cumulative Layout Shift | < 0.05 |
| Lighthouse Performance | ≥ 95 |
| Total page weight | < 300 KB |
| Client JS | < 5 KB |

---

## 10. Tailwind Configuration

```mjs
// tailwind.config.mjs
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50:  '#f0f7ff',
          100: '#e0effe',
          200: '#b9dffd',
          300: '#7cc5fb',
          400: '#36a9f7',
          500: '#0c8ee7',
          600: '#0070d1',
          700: '#0159a9',
          800: '#064b8b',
          900: '#0b3f73',
          950: '#07284a',
        },
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['JetBrains Mono', 'SF Mono', 'Fira Code', 'monospace'],
      },
      fontSize: {
        xs:   ['0.75rem',  { lineHeight: '1rem' }],
        sm:   ['0.875rem', { lineHeight: '1.25rem' }],
        base: ['1rem',     { lineHeight: '1.6' }],
        lg:   ['1.125rem', { lineHeight: '1.75rem' }],
        xl:   ['1.25rem',  { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem',  { lineHeight: '1.3' }],
        '3xl': ['1.875rem',{ lineHeight: '1.2' }],
        '4xl': ['2.25rem', { lineHeight: '1.15' }],
        '5xl': ['3rem',    { lineHeight: '1.1' }],
        '6xl': ['3.75rem', { lineHeight: '1.05' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
      },
      maxWidth: {
        '8xl': '88rem',
      },
      animation: {
        'fade-in-up': 'fade-in-up 0.6s cubic-bezier(0.22, 1, 0.36, 1) forwards',
        'fade-in':    'fade-in 0.6s ease forwards',
        'scale-in':   'scale-in 0.5s cubic-bezier(0.22, 1, 0.36, 1) forwards',
      },
      keyframes: {
        'fade-in-up': {
          '0%':   { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'scale-in': {
          '0%':   { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
    },
  },
  plugins: [],
};
```

---

## 11. Accessibility Baseline

- Skip link as first focusable element in `<body>`
- All interactive elements keyboard-accessible
- Color contrast ≥ 4.5:1 for text (AA), ≥ 3:1 for large text
- Focus indicators: `:focus-visible` with 2px offset ring
- Form inputs: proper `<label>` associations, `aria-describedby` for help text
- Accordion: native `<details>/<summary>` elements (zero JS, fully accessible)
- Icons: `aria-hidden="true"` for decorative icons, `role="img"` + `<title>` for informative icons
- Smooth scroll for anchor links respects `prefers-reduced-motion`
- All animation respects `prefers-reduced-motion: reduce`

---

## 12. Implementation Order

| Phase | Files | Depends On |
|-------|-------|------------|
| **1. Foundation** | `design-tokens.css`, `base.css`, `utilities.css`, `animations.css`, `tailwind.config.mjs` | Nothing |
| **2. Shell** | `BaseLayout.astro`, `index.astro` | Phase 1 |
| **3. Nav** | `Nav.astro` | Phase 2 |
| **4. Hero** | `Hero.astro`, `Button.astro` | Phase 2 |
| **5. Content sections** | `LogoStrip`, `Features`, `HowItWorks`, `Portfolio`, `Testimonial` | Phase 2, `SectionHeading`, `Card` |
| **6. Conversion sections** | `Pricing`, `FAQ`, `Contact` | Phase 2, `Accordion` |
| **7. Footer** | `Footer.astro` | Phase 2 |
| **8. Animation** | `ScrollReveal.astro`, integrate into sections | Phase 3–7 |
| **9. Polish** | Sticky nav scroll effect, mobile menu, micro-interactions | All phases |

---

*Specification prepared for the Norware frontend developer team.*
*Strictly follow these tokens, breakpoints, and conventions for pixel-perfect, performant implementation.*
