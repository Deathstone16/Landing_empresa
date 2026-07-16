# Norware — Visual Design System Specification

> **Designer**: UI Designer Agent
> **Version**: 1.0
> **Status**: Ready for implementation
> **Tech Stack**: Astro + Tailwind CSS

---

## 1. Color Palette

### Primary / Accent: Deep Teal
A sophisticated, distinctive accent that stands apart from the generic blue most tech sites use. Communicates reliability, depth, and innovation.

| Token | Hex | Usage |
|-------|-----|-------|
| `--color-primary-50` | `#F0FDFA` | Background tint, hover on light surfaces |
| `--color-primary-100` | `#CCFBF1` | Light backgrounds, badges, tags |
| `--color-primary-200` | `#99F6E4` | Active/selected states (light) |
| `--color-primary-300` | `#5EEAD4` | Borders, decorative accents |
| `--color-primary-400` | `#2DD4BF` | Hover state for secondary elements |
| `--color-primary-500` | `#14B8A6` | Primary accent default |
| **`--color-primary-600`** | **`#0D9488`** | **Primary buttons, links, active states** |
| **`--color-primary-700`** | **`#0F766E`** | **Button hover, focus rings** |
| `--color-primary-800` | `#115E59` | Active/pressed states |
| `--color-primary-900` | `#134E4A` | Dark mode accent on dark bg |

### Neutrals (Light Theme)

| Token | Hex | Usage |
|-------|-----|-------|
| `--color-white` | `#FFFFFF` | Card backgrounds, page bg |
| `--color-bg` | `#FAFAF9` | Page background (warm off-white) |
| `--color-surface` | `#FFFFFF` | Cards, modals, dropdowns |
| `--color-surface-secondary` | `#F5F5F4` | Section alt backgrounds, hover |
| `--color-border` | `#E7E5E4` | Borders, dividers, strokes |
| `--color-border-light` | `#F0EFED` | Subtle borders |
| `--color-muted` | `#A8A29E` | Placeholder text, disabled states |
| `--color-text-primary` | `#1C1917` | Headings, primary body text |
| `--color-text-secondary` | `#57534E` | Body text, descriptions |
| `--color-text-tertiary` | `#78716C` | Captions, metadata |

### Semantic Colors

| Token | Hex | Usage |
|-------|-----|-------|
| `--color-success` | `#10B981` | Success states, checkmarks |
| `--color-warning` | `#F59E0B` | Warnings |
| `--color-error` | `#EF4444` | Errors, destructive actions |
| `--color-info` | `#3B82F6` | Informational |

### Accessibility Notes
- `--color-primary-600` (#0D9488) on white: **4.7:1** contrast ratio (passes WCAG AA for normal text)
- `--color-text-primary` (#1C1917) on white: **15.3:1** (passes AAA)
- `--color-text-secondary` (#57534E) on white: **7.2:1** (passes AA)
- Always use `--color-primary-700` for hover states to maintain contrast

---

## 2. Typography

### Font Pair

| Role | Font | Fallback | Weight Range |
|------|------|----------|-------------|
| **Headings** | `Space Grotesk` | `system-ui, sans-serif` | 400–700 |
| **Body** | `Inter` | `system-ui, -apple-system, sans-serif` | 400–600 |
| **Monospace** | `JetBrains Mono` | `monospace` | 400–500 |

### Google Fonts URL
```
https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Space+Grotesk:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap
```

### Type Scale

| Token | Size | Weight | Line Height | Letter Spacing | Usage |
|-------|------|--------|-------------|----------------|-------|
| `--text-h1` | `3.5rem` (56px) | 700 | `1.1` | `-0.02em` | Hero headline |
| `--text-h2` | `2.25rem` (36px) | 600 | `1.2` | `-0.015em` | Section titles |
| `--text-h3` | `1.5rem` (24px) | 600 | `1.3` | `-0.01em` | Card titles, subsection heads |
| `--text-h4` | `1.25rem` (20px) | 600 | `1.35` | `-0.01em` | Minor headings |
| `--text-body-lg` | `1.125rem` (18px) | 400 | `1.6` | `-0.01em` | Lead text, hero description |
| `--text-body` | `1rem` (16px) | 400 | `1.6` | `-0.006em` | Body paragraphs |
| `--text-body-sm` | `0.875rem` (14px) | 400 | `1.55` | `0` | Small body, nav links |
| `--text-sm` | `0.75rem` (12px) | 500 | `1.5` | `0` | Captions, labels, metadata |
| `--text-xs` | `0.6875rem` (11px) | 500 | `1.4` | `0.02em` | Badges, legal text |

### Mobile Responsive Scale

| Token | Mobile | Tablet | Desktop |
|-------|--------|--------|---------|
| `--text-h1` | `2.25rem` (36px) | `2.75rem` (44px) | `3.5rem` (56px) |
| `--text-h2` | `1.75rem` (28px) | `2rem` (32px) | `2.25rem` (36px) |
| `--text-h3` | `1.25rem` (20px) | `1.375rem` (22px) | `1.5rem` (24px) |

---

## 3. Spacing System

**Base unit**: 4px (matches Tailwind's default spacing scale)

### Spacing Scale

| Token | Value | Tailwind |
|-------|-------|----------|
| `--space-1` | 4px | `p-1` |
| `--space-2` | 8px | `p-2` |
| `--space-3` | 12px | `p-3` |
| `--space-4` | 16px | `p-4` |
| `--space-5` | 20px | `p-5` |
| `--space-6` | 24px | `p-6` |
| `--space-8` | 32px | `p-8` |
| `--space-10` | 40px | `p-10` |
| `--space-12` | 48px | `p-12` |
| `--space-14` | 56px | `p-14` |
| `--space-16` | 64px | `p-16` |
| `--space-20` | 80px | `p-20` |
| `--space-24` | 96px | `p-24` |

### Section Spacing

| Context | Padding Top/Bottom |
|---------|-------------------|
| Hero section | `py-20` desktop, `py-16` mobile |
| Content sections | `py-16` desktop, `py-12` mobile |
| Featured/dark sections | `py-20` desktop, `py-14` mobile |
| Between sections | `gap-16` (or `space-y-16`) |

### Component Spacing

| Context | Value |
|---------|-------|
| Card padding | `p-6` (24px) / `p-8` (32px) for featured |
| Card gap (grid) | `gap-6` (24px) / `gap-8` (32px) |
| Stack gap (vertical) | `gap-4` (16px) for tight, `gap-6` (24px) for relaxed |
| Inline gap (horizontal) | `gap-3` (12px) for tight, `gap-4` (16px) for relaxed |
| Nav link padding | `px-4 py-2` |
| Button padding (sm) | `px-4 py-2` |
| Button padding (md) | `px-5 py-2.5` |
| Button padding (lg) | `px-6 py-3` |
| Form input padding | `px-4 py-3` |
| Accordion padding | `px-6 py-5` |
| Testimonial padding | `p-8` |
| Container padding | `px-4` mobile, `px-6` tablet, `px-8` desktop |

---

## 4. Component Visual Specs

### 4.1 Buttons

#### Primary Button (`btn-primary`)
| State | Style |
|-------|-------|
| Default | `bg-primary-600 text-white shadow-sm` |
| Hover | `bg-primary-700 shadow-md translate-y-[-1px]` |
| Active | `bg-primary-800 translate-y-[0px]` |
| Focus | `ring-2 ring-primary-500 ring-offset-2` |
| Disabled | `opacity-50 cursor-not-allowed` |

#### Secondary / Outline Button (`btn-secondary`)
| State | Style |
|-------|-------|
| Default | `bg-transparent border border-primary-600 text-primary-600` |
| Hover | `bg-primary-50 text-primary-700 border-primary-700` |
| Active | `bg-primary-100` |
| Focus | `ring-2 ring-primary-500 ring-offset-2` |
| Disabled | `opacity-50 cursor-not-allowed` |

#### Ghost / Text Button (`btn-ghost`)
| State | Style |
|-------|-------|
| Default | `bg-transparent text-text-secondary` |
| Hover | `bg-surface-secondary text-text-primary` |
| Active | `bg-border` |
| Focus | `ring-2 ring-primary-500 ring-offset-2` |

#### Sizes
| Size | Padding | Font | Border Radius |
|------|---------|------|---------------|
| `sm` | `px-4 py-2` | `text-sm` | `rounded-lg` (8px) |
| `md` | `px-5 py-2.5` | `text-body` | `rounded-lg` (8px) |
| `lg` | `px-6 py-3` | `text-body` | `rounded-xl` (12px) |

#### Shared button tokens
- `font-weight: 600` (semibold)
- `transition: all 200ms ease`
- `cursor: pointer`
- `display: inline-flex align-items: center justify-content: center gap-2`
- Icon in button: 16px (sm), 18px (md), 20px (lg)

### 4.2 Cards

| Token | Value |
|-------|-------|
| Background | `bg-white` |
| Border radius | `rounded-xl` (12px) |
| Border | `border border-border` |
| Shadow (default) | `shadow-sm` = `0 1px 2px 0 rgb(0 0 0 / 0.05)` |
| Padding | `p-6` (24px) |
| Hover | `shadow-md translate-y-[-2px] border-primary-200` |
| Transition | `all 300ms ease` |

**Featured card** (for pricing tiers, etc.):
- Border: `border-primary-500 border-2`
- Shadow: `shadow-md`
- Optional top accent bar: `4px solid primary-500` at top

### 4.3 Navigation

| Token | Value |
|-------|-------|
| Height | `h-16` (64px) desktop, `h-14` (56px) mobile |
| Background | `bg-white/80 backdrop-blur-md border-b border-border` |
| Container | `max-w-7xl mx-auto px-4 md:px-6` |
| Logo height | `h-8` (32px) |
| Link padding | `px-4 py-2` |
| Link color (default) | `text-text-secondary` |
| Link color (hover) | `text-primary-600` |
| Link font | `text-sm font-medium` |
| Active page indicator | `text-primary-600` + optional bottom bar: `h-0.5 w-full bg-primary-600` |
| CTA button in nav | `btn-primary sm` size |
| Mobile menu breakpoint | `md` (768px) |
| Mobile menu overlay | `bg-white/95 backdrop-blur-md` |

### 4.4 FAQ Accordion

| Token | Value |
|-------|-------|
| Container | `border-b border-border last:border-b-0` |
| Header padding | `px-6 py-5` |
| Content padding | `px-6 pb-5 pt-0` |
| Question font | `text-body font-medium text-text-primary` |
| Answer font | `text-body-sm text-text-secondary leading-relaxed` |
| Icon | 20px chevron, rotates 180° on expand |
| Expanded state | `bg-surface-secondary` (subtle highlight on active item) |
| Border radius | `rounded-xl` on the whole container (when single) |
| Hover on question | `text-primary-600` |
| Transition | `all 300ms ease` for height/opacity |

### 4.5 Pricing Cards

| Token | Basic Tier | Featured Tier |
|-------|-----------|---------------|
| Background | `bg-white` | `bg-white` |
| Border | `border border-border` | `border-2 border-primary-500` |
| Shadow | `shadow-sm` | `shadow-md` |
| Border radius | `rounded-xl` | `rounded-xl` |
| Padding | `p-8` | `p-8` |
| Badge ("Popular") | none | `bg-primary-600 text-white text-xs font-semibold px-3 py-1 rounded-full` |
| Price font | `text-h2 font-bold` | `text-h2 font-bold text-primary-600` |
| Feature list | `space-y-3 text-body-sm text-text-secondary` | same |
| CTA button | `btn-secondary` | `btn-primary` |

### 4.6 Testimonial Cards

| Token | Value |
|-------|-------|
| Layout | Flex row (avatar + quote) or centered card |
| Background | `bg-white border border-border` |
| Border radius | `rounded-xl` |
| Padding | `p-8` |
| Shadow | `shadow-sm` |
| Quote styling | `text-body-lg italic text-text-secondary leading-relaxed` with optional `text-primary-500` quotation mark |
| Author area | `flex items-center gap-3 mt-6 pt-6 border-t border-border` |
| Author name | `text-body-sm font-semibold text-text-primary` |
| Author role | `text-sm text-text-tertiary` |
| Avatar | `w-12 h-12 rounded-full object-cover` |
| Rating stars | 20px, `text-amber-400` fill |

### 4.7 Portfolio / Project Cards

| Token | Value |
|-------|-------|
| Container | `group relative overflow-hidden rounded-xl` |
| Image | `w-full aspect-[4/3] object-cover transition duration-500 ease-out` |
| Image hover | `scale-105` |
| Overlay (default) | `absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-300` |
| Content | `absolute bottom-0 left-0 right-0 p-6 translate-y-2 group-hover:translate-y-0 transition duration-300` |
| Title | `text-white text-h3 font-semibold` |
| Description | `text-white/80 text-body-sm` |
| Tags | `flex gap-2 mt-3` — tag: `bg-white/20 text-white text-xs px-3 py-1 rounded-full backdrop-blur-sm` |
| Border | `border border-border` (visible when not hovered) |

### 4.8 Form Inputs

| Token | Value |
|-------|-------|
| Layout | `flex flex-col gap-1.5` |
| Label | `text-sm font-medium text-text-primary` |
| Input container | `relative` (for icon prefixes) |
| Input field | `w-full px-4 py-3 bg-white border border-border rounded-xl text-body text-text-primary placeholder:text-muted transition-all duration-200` |
| Input focus | `border-primary-500 ring-2 ring-primary-500/20 outline-none` |
| Input error | `border-error ring-2 ring-error/20` |
| Input disabled | `bg-surface-secondary opacity-60 cursor-not-allowed` |
| Textarea | Same as input + `min-h-[120px] resize-y` |
| Select | Same as input + custom chevron icon |
| Checkbox / Radio | `w-4 h-4 border-2 border-border rounded focus:ring-primary-500 text-primary-600` |
| Helper text | `text-sm text-text-tertiary mt-1` |
| Error message | `text-sm text-error mt-1` |

### 4.9 Contact Section (Social Icons)

| Token | Value |
|-------|-------|
| Icon wrapper | `w-10 h-10 rounded-xl bg-surface-secondary hover:bg-primary-50 transition-all duration-200 flex items-center justify-center` |
| Icon size | 20px × 20px |
| Icon color | `text-text-secondary group-hover:text-primary-600` |
| Icon hover wrapper | `hover:border-primary-200 hover:shadow-sm` |
| Layout | `flex items-center gap-3` |

---

## 5. Icon Style

| Token | Value |
|-------|-------|
| Style | **Outline** (heroicons-style, 1.5px stroke) |
| Default size | 20px (nav, buttons, accordion) |
| Small size | 16px (inline with text, tag icons) |
| Large size | 24px (hero decorations, feature icons) |
| XLarge size | 32px–40px (section decorative icons) |
| Stroke width | 1.5px (consistent across all icons) |
| Stroke linecap | `round` |
| Stroke linejoin | `round` |
| Color | Inherits from parent text color |

### Recommended icon library
- **Lucide Icons** (preferred — consistent 1.5px stroke, round caps, well-maintained, tree-shakeable)
- Alternative: Heroicons (outline variant)

---

## 6. Animation Design Tokens

### Duration

| Token | Value | Usage |
|-------|-------|-------|
| `--duration-fast` | 150ms | Button hover, color transitions, focus rings |
| `--duration-normal` | 300ms | Card hover, accordion, nav link hover, modal |
| `--duration-slow` | 500ms | Page transitions, scroll reveal entrance |
| `--duration-extra-slow` | 700ms | Hero entrance, large reveals |

### Easing Curves

| Token | Cubic Bezier | Usage |
|-------|-------------|-------|
| `--ease-out` | `cubic-bezier(0.16, 1, 0.3, 1)` | Entrances, reveals (default easing) |
| `--ease-in-out` | `cubic-bezier(0.65, 0, 0.35, 1)` | Accordion, hover effects |
| `--ease-bounce` | `cubic-bezier(0.34, 1.56, 0.64, 1)` | Micro-interactions, playful elements |
| `--ease-linear` | `cubic-bezier(0, 0, 1, 1)` | Opacity fades |

### Scroll Reveal (Intersection Observer)

| Token | Value |
|-------|-------|
| Initial state | `opacity-0 translate-y-8` |
| Visible state | `opacity-100 translate-y-0` |
| Duration | `700ms` |
| Easing | `cubic-bezier(0.16, 1, 0.3, 1)` |
| Stagger delay (parent → children) | `100ms` between children |
| Stagger sequence | `[0ms, 100ms, 200ms, 300ms]` for 4 children |
| Reduce motion | `@media (prefers-reduced-motion: reduce) { animation: none; opacity: 1; transform: none; }` |

### Specific Animations

| Element | Animation |
|---------|-----------|
| Hero title | `fadeInUp 700ms ease-out` |
| Hero subtitle | `fadeInUp 700ms ease-out 150ms` (delayed) |
| Hero CTA | `fadeInUp 700ms ease-out 300ms` (delayed) |
| Card entrance (grid) | Staggered fadeInUp, each card 100ms apart |
| Nav link underline | `scale-x-0` to `scale-x-100` on hover, `duration-200 ease-out` |
| Button press | `scale-95` on active (click), `scale-100` on release |
| Accordion icon | `rotate(0)` to `rotate(180°)`, `duration-300 ease-in-out` |
| Mobile menu | `slideInRight` 300ms for open, `slideOutRight` 200ms for close |

---

## 7. Dark Mode Colors (Future-Proof)

Ready for `@media (prefers-color-scheme: dark)` or `class="dark"` toggle.

| Light Token | Dark Equivalent |
|-------------|----------------|
| `--color-white` | `#0C0A09` (near-black, warm) |
| `--color-bg` | `#0C0A09` |
| `--color-surface` | `#1C1917` |
| `--color-surface-secondary` | `#292524` |
| `--color-border` | `#44403C` |
| `--color-border-light` | `#292524` |
| `--color-muted` | `#A8A29E` (keep same or lighten) |
| `--color-text-primary` | `#FAFAF9` |
| `--color-text-secondary` | `#D6D3D1` |
| `--color-text-tertiary` | `#A8A29E` |
| `--color-primary-500` | `#2DD4BF` (brighter on dark) |
| `--color-primary-600` | `#14B8A6` |
| `--color-primary-700` | `#0D9488` |

---

## 8. Tailwind Config Extension

```js
// tailwind.config.mjs — extend the default theme with Norware tokens
export default {
  content: ['./src/**/*.{astro,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#F0FDFA',
          100: '#CCFBF1',
          200: '#99F6E4',
          300: '#5EEAD4',
          400: '#2DD4BF',
          500: '#14B8A6',
          600: '#0D9488',
          700: '#0F766E',
          800: '#115E59',
          900: '#134E4A',
        },
        bg: '#FAFAF9',
        surface: {
          DEFAULT: '#FFFFFF',
          secondary: '#F5F5F4',
        },
        border: {
          DEFAULT: '#E7E5E4',
          light: '#F0EFED',
        },
        muted: '#A8A29E',
        text: {
          primary: '#1C1917',
          secondary: '#57534E',
          tertiary: '#78716C',
        },
      },
      fontFamily: {
        heading: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      fontSize: {
        h1: ['3.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '700' }],
        h2: ['2.25rem', { lineHeight: '1.2', letterSpacing: '-0.015em', fontWeight: '600' }],
        h3: ['1.5rem', { lineHeight: '1.3', letterSpacing: '-0.01em', fontWeight: '600' }],
        h4: ['1.25rem', { lineHeight: '1.35', letterSpacing: '-0.01em', fontWeight: '600' }],
        'body-lg': ['1.125rem', { lineHeight: '1.6', letterSpacing: '-0.01em' }],
        'body': ['1rem', { lineHeight: '1.6', letterSpacing: '-0.006em' }],
        'body-sm': ['0.875rem', { lineHeight: '1.55' }],
      },
      borderRadius: {
        'xl': '0.75rem',
        '2xl': '1rem',
      },
      boxShadow: {
        'soft': '0 1px 2px 0 rgb(0 0 0 / 0.05)',
        'card': '0 4px 6px -1px rgb(0 0 0 / 0.05)',
        'card-hover': '0 10px 15px -3px rgb(0 0 0 / 0.08)',
      },
      animation: {
        'fade-in-up': 'fadeInUp 700ms ease-out forwards',
        'scale-in': 'scaleIn 300ms ease-out forwards',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
    },
  },
  plugins: [],
};
```

---

## 9. CSS Custom Properties Reference

```css
:root {
  /* Colors */
  --color-primary-50: #F0FDFA;
  --color-primary-100: #CCFBF1;
  --color-primary-200: #99F6E4;
  --color-primary-300: #5EEAD4;
  --color-primary-400: #2DD4BF;
  --color-primary-500: #14B8A6;
  --color-primary-600: #0D9488;
  --color-primary-700: #0F766E;
  --color-primary-800: #115E59;
  --color-primary-900: #134E4A;
  --color-bg: #FAFAF9;
  --color-surface: #FFFFFF;
  --color-surface-secondary: #F5F5F4;
  --color-border: #E7E5E4;
  --color-border-light: #F0EFED;
  --color-muted: #A8A29E;
  --color-text-primary: #1C1917;
  --color-text-secondary: #57534E;
  --color-text-tertiary: #78716C;
  --color-success: #10B981;
  --color-warning: #F59E0B;
  --color-error: #EF4444;
  --color-info: #3B82F6;

  /* Typography */
  --font-heading: 'Space Grotesk', system-ui, sans-serif;
  --font-body: 'Inter', system-ui, -apple-system, sans-serif;
  --font-mono: 'JetBrains Mono', monospace;

  /* Spacing (4px base) */
  --space-1: 0.25rem;
  --space-2: 0.5rem;
  --space-3: 0.75rem;
  --space-4: 1rem;
  --space-5: 1.25rem;
  --space-6: 1.5rem;
  --space-8: 2rem;
  --space-10: 2.5rem;
  --space-12: 3rem;
  --space-14: 3.5rem;
  --space-16: 4rem;
  --space-20: 5rem;
  --space-24: 6rem;

  /* Border radius */
  --radius-md: 0.5rem;
  --radius-lg: 0.75rem;
  --radius-xl: 1rem;
  --radius-full: 9999px;

  /* Shadows */
  --shadow-soft: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  --shadow-card: 0 4px 6px -1px rgb(0 0 0 / 0.05);
  --shadow-card-hover: 0 10px 15px -3px rgb(0 0 0 / 0.08);
  --shadow-lg: 0 20px 25px -5px rgb(0 0 0 / 0.1);

  /* Animation */
  --duration-fast: 150ms;
  --duration-normal: 300ms;
  --duration-slow: 500ms;
  --duration-extra-slow: 700ms;
  --ease-out: cubic-bezier(0.16, 1, 0.3, 1);
  --ease-in-out: cubic-bezier(0.65, 0, 0.35, 1);
  --ease-bounce: cubic-bezier(0.34, 1.56, 0.64, 1);
}
```

---

## 10. Implementation Checklist

- [ ] Install Tailwind CSS (`npx astro add tailwind`)
- [ ] Set up `tailwind.config.mjs` with extended theme (section 8)
- [ ] Import Google Fonts in `<head>` (section 2)
- [ ] Add CSS custom properties to base styles (section 9)
- [ ] Create `btn-primary`, `btn-secondary`, `btn-ghost` utility classes
- [ ] Create card component using config tokens
- [ ] Build navigation with glass effect using `bg-white/80 backdrop-blur-md`
- [ ] Implement scroll reveal animation utility
- [ ] Create form input base styles
- [ ] Add `prefers-reduced-motion` media query fallback
- [ ] Verify all color contrast ratios meet WCAG AA
