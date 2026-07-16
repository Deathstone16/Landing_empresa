# Norware — Visual Identity Specification v2

**Goal:** A distinctive, premium identity that cannot be confused with a template. Warm, editorial, crafted.

---

## 1. Color Palette — Direction: Warm/Earthy/Editorial Hybrid

**Why:** Every dark-mode agency site uses navy (#0A0E1A) + mint + violet. It signals "tech" but says nothing about the *kind* of tech. Norware builds *for people, by people* — software as craft, not assembly. A warm palette communicates confidence, permanence, and human judgment — the opposite of "generated."

### Core Palette

| Token | Hex | Use |
|-------|-----|-----|
| `--ink` | `#1C1816` | Primary text (near-black with warm undertone) |
| `--paper` | `#F5F0EB` | Background (warm off-white, like quality uncoated paper) |
| `--paper-light` | `#FAF7F3` | Secondary surface |
| `--stone-100` | `#E8E2DA` | Borders, dividers (light mode) |
| `--stone-200` | `#D4C9BD` | Muted elements |
| `--stone-400` | `#8C7E72` | Secondary text |
| `--copper` | `#C97D4A` | Primary accent — a warm, desaturated copper |
| `--copper-light` | `#DF9E6D` | Hover states, highlights |
| `--copper-dark` | `#A35F30` | Active states |
| `--copper-glow` | `rgba(201, 125, 74, 0.12)` | Subtle glows, backgrounds |
| `--deep-umber` | `#3D2E24` | Dark mode background (warm dark, not navy) |
| `--deep-umber-light` | `#4E3C30` | Dark mode surface |
| `--deep-umber-border` | `#5C483A` | Dark mode borders |
| `--ink-over-umber` | `#EDE4DB` | Primary text in dark mode |

### Why copper?
- Copper is the metal of tools, craft, and durability — perfect for a *software agency* that builds things.
- It has warmth without being "friendly" or playful (like orange/yellow would be).
- It's rare in UI, so it immediately reads as intentional.
- It pairs beautifully with warm neutrals and natural textures.
- Copper patina (verdigris) could become a secondary accent for special states.

### Secondary accent
`--verdigris: #5B8C7A` — A muted teal-green (oxidized copper). Use sparingly: only for data visualization accents, code block highlights, or the "special" state. Prevents the palette from being purely warm.

---

## 2. Typography — Three Distinctive Pairings

**Why not Space Grotesk + Inter?** They're the default Astro/Tailwind combo. Everyone uses them. None of them say "craft."

### Option A: Editorial/Elegant — "The Foundry" (RECOMMENDED)

- **Headings:** STIX Two Text — https://fonts.google.com/specimen/STIX+Two+Text
  - A modern revival of classic serif typefaces used in scientific publishing.
  - Feels authoritative, timeless, precise — like a well-bound book.
  - The serifs signal "this is written by experts, not generated."
  - Weights: 500 (regular), 600 (semibold), 700 (bold)

- **Body:** Satoshi — https://fonts.cdnfonts.com/satoshi (or use Plus Jakarta Sans as free alternative)
  - https://fonts.google.com/specimen/Plus+Jakarta+Sans
  - A geometric sans with warm character. Not cold like Inter, not quirky.
  - Paired with a serif heading, the contrast feels intentional and editorially sophisticated.
  - Weights: 400 (regular), 500 (medium), 600 (semibold)

- **Mono:** IBM Plex Mono — https://fonts.google.com/specimen/IBM+Plex+Mono
  - More character than JetBrains Mono. Slightly imperfect. Human.

**Vibe:** *A Monocle magazine spread about software companies.*

### Option B: Technical/Industrial — "The Workshop"

- **Headings:** Syne — https://fonts.google.com/specimen/Syne
  - A variable font built by and for designers. Wide, confident, slightly condensed.
  - The "extra" weight (800) is striking for hero titles.
  - Feels engineered, not written.

- **Body:** DM Sans — https://fonts.google.com/specimen/DM+Sans
  - Low-contrast geometric sans with excellent readability.
  - Warmer than Inter, more stable than Space Grotesk.
  - Technical without being robotic.

- **Mono:** Fragment Mono — https://fonts.google.com/specimen/Fragment+Mono
  - A modern monospace with a distinctive dotted-zero and angled terminals.
  - Still highly readable but unmistakably different.

**Vibe:** *A blueprint or workshop manual. Industrial, precise, unfussy.*

### Option C: Warm/Human — "The Studio"

- **Headings:** Fraunces — https://fonts.google.com/specimen/Fraunces
  - A variable "soft-serif" — sits between serif and sans.
  - Has optical size control; use the "soft" axis for warmth.
  - Feels handcrafted, luxurious, slightly unconventional.
  - The italic swashes make accent phrases sing.

- **Body:** Public Sans — https://fonts.google.com/specimen/Public+Sans
  - Designed by USWDS for government interfaces. Clear, trustworthy, warm.
  - Excellent language support and accessibility.

- **Mono:** Recursive — https://fonts.google.com/specimen/Recursive
  - A variable font with casual/monolinear axes. Can switch between friendly and technical.

**Vibe:** *A boutique design studio's brand guidelines. Crafted, personal, warm.*

---

## 3. Layout Innovations — Breaking the Template

### Hero — The "Editorial Spread"

Instead of `[text 50%] [image 50%]`:

```
┌─────────────────────────────────────────────────────────┐
│                                                         │
│   ┌─────────────────────────────┐  ┌────────────────┐  │
│   │                             │  │                │  │
│   │   $ Norware                 │  │   A tall,      │  │
│   │                             │  │   narrow       │  │
│   │   We build software         │  │   stats bar    │  │
│   │   that feels like it        │  │                │  │
│   │   was made for you.         │  │   3 projects   │  │
│   │                             │  │   delivered    │  │
│   │   [---]                     │  │   this year    │  │
│   │                             │  │                │  │
│   │   ┌─────────────────────┐   │  │   12 engineers │  │
│   │   | A wide, split bar  |   │  │                │  │
│   │   | [CTA]    [social]  |   │  └────────────────┘  │
│   │   └─────────────────────┘   │                      │
│   └─────────────────────────────┘                      │
│                                                         │
│   A thin copper rule that stretches full width          │
│   with the Norware mark centered on it                  │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

Key breaks from the template:
- **No right-side hero image.** Instead, a tall, typographic stat bar that reads like a colophon.
- **Hero headline is a single line of large serif text,** not split with a gradient span.
- **Below the fold:** a full-width editorial divider with the logo mark centered.
- **No floating badge/bubble.** No "available for projects" pill — it feels desperate.

### Services — The "Manifesto Grid"

Instead of 3 identical cards:

```
  ┌──────────────────────────────────────────────────────┐
  │                                                      │
  │   Section title as a question, not a label:          │
  │   "What does Norware actually do?"                   │
  │                                                      │
  │   ┌──────────────────┐  ┌──────────────────────────┐ │
  │   | Development      │  | Strategy                 │ |
  │   | (large, spans    │  | (compact, offset right)  │ |
  │   | 2 rows)          │  |                          │ |
  │   |                  │  └──────────────────────────┘ |
  │   | • Full-cycle     │  ┌──────────────────────────┐ |
  │   | • Modern stack   │  | Team augmentation         │ |
  │   | • Senior team    │  | (compact, right)         │ |
  │   └──────────────────┘  └──────────────────────────┘ |
  │                                                      │
  │   "We don't write code. We solve problems."          │
  │   — A signature line at the bottom set in italic     │
  │                                                      │
  └──────────────────────────────────────────────────────┘
```

Key breaks:
- **Asymmetric card sizing.** One large "hero card" + two smaller.
- **Cards have no icon boxes** (no `div w-12 h-12 rounded-xl bg-gradient`). Instead, the title *is* the visual.
- **No numbered steps.** Steps use copper divider rules between them, not numbered circles.
- **Process section** is a vertical stack, not horizontal — reads more deliberate, less like a feature list.

### Portfolio — The "Gallery Wall"

Instead of a 3-column grid of card shadows:

```
  ┌──────────────────────────────────────────────────────┐
  │                                                      │
  |   "Work" — one word, small, uppercase, tracked out   |
  │                                                      │
  │   ┌────────────────────────────────────────────┐     │
  │   | Project 1 (full bleed, spans full width)   |     │
  │   | [image fills the entire area]              |     │
  │   | Title + description overlay bottom-left    |     │
  │   └────────────────────────────────────────────┘     │
  │                                                      │
  │   ┌─────────────┐  ┌─────────────────────────┐      │
  │   | Project 2   |  | Project 3               |      │
  │   | (1:1)       |  | (2:1)                   |      │
  │   └─────────────┘  └─────────────────────────┘      │
  │                                                      │
  |   Thin copper rule below                              |
  |   "View all projects →" set in the corner             |
  └──────────────────────────────────────────────────────┘
```

Key breaks:
- **No borders around cards.** Images sit directly on the background.
- **Full-bleed first project** — makes a statement.
- **No tags on hover.** Tags are shown as a simple text line below the title.
- **No overlay gradients** on hover. Projects speak for themselves.
- **Testimonial** is not a separate card — it's an inline quote in the body text of the section, like a pull-quote in a magazine.

### Navigation — The "Frontispiece"

Instead of `Logo [link] [link] [CTA button] [theme toggle]`:

```
  ┌──────────────────────────────────────────────────────┐
  │   norware                                             |
  │   established 2024 · software agency                  │
  │                                                      │
  │   [Work]  [Services]  [Contact]                      │
  │                                                      │
  │   ─────────────────────────────────────────────────── │
  │   (a thin copper rule separates nav from content)    │
  └──────────────────────────────────────────────────────┘
```

Key breaks:
- **Left-aligned, vertically stacked.** Logo above the tagline, tagline above the links. Reads like a book title page.
- **No blurry glass effect.** Solid background. Feels grounded.
- **No sticky nav.** It's at the top and stays there. The page scrolls *through* it. (Why do agency sites need sticky nav? They don't. It's a template thing.)
- **No CTA button in nav.** The nav's job is navigation. The CTA lives in the hero and footer. Removing it makes the nav calmer and the CTA more meaningful.
- **No theme toggle on desktop.** Pick one dark or light mode and commit. (If you must have it, hide it in settings.)

### Section Transitions — Deliberate, Not Stacked

Instead of `section → section → section` with identical padding:

| Section | Top Padding | Bottom Padding | Divider |
|---------|-------------|----------------|---------|
| Hero | 0 | `6rem` | Full-width copper rule with centered mark |
| Services | `8rem` | `6rem` | None (background stays same) |
| Portfolio | `6rem` | `8rem` | Background subtly shifts (paper→paper-light or vice versa) |
| Contact | `6rem` | `6rem` | A copper rule at top |

Every transition is different. No two adjacent sections have the same background tone. This creates rhythm, not repetition.

---

## 4. Component Grammar — The Signature Motifs

### Motif 1: The Copper Rule (divider system)

```
────────────────────── ◆ ──────────────────────
```

A thin (1px) rule that spans the width of the content area, with the Norware mark (◆ or a custom monogram `N`) centered on it. This appears:
- Between hero and first section
- Between major section shifts
- As a footer topper

**Technical:** `1px solid var(--color-copper)` with the mark absolutely centered. The mark has a `var(--color-paper)` background box behind it so it "sits on" the rule rather than being transparent over it.

This replaces dotted borders, gradient dividers, and the `before:absolute before:bg-gradient-to-r` patterns from the old design.

### Motif 2: The Inset Mark

Every project card, service block, or notable element gets a small Norware mark (◆) in the bottom-right corner, inset by `--space-xs`. It's always set in `--copper` at ~60% opacity. It won't obscure content because it's a single glyph, and it anchors every composition to the brand.

This is Norware's version of a watermark or colophon — subtle but pervasive.

### Motif 3: The Generous Pull-Quote

Key statements throughout the page are set as editorial pull-quotes:
- Larger type than body (roughly `1.25rem` or `1.5rem`)
- Italic (if the typeface supports it)
- Flush left with a vertical copper bar on the left side (like a blockquote but thinner — 2px wide)
- No quotation marks
- Surrounded by generous white space

This replaces the `bg-surface border rounded-xl` testimonial card pattern.

### Motif 4: The Raw Corner

Instead of `rounded-xl` everywhere:
- Section-level containers: `rounded-none` (sharp edges feel intentional)
- Interactive elements (buttons, inputs): `rounded-sm` (3px — subtle but not bubbly)
- Image containers: `rounded` on the bottom or `clip-path` for a slight diagonal crop on one corner
- **Never uniform rounding everywhere.** Different rounding levels for different element types communicate hierarchy.

This replaces the 12px rounded corners on everything.

---

## 5. Spacing Philosophy

**The problem:** Current spacing is `py-20 md:py-28` on every section, `px-5 md:px-8 lg:px-10` on every container. It's uniform and therefore invisible.

**New system:** Intentional asymmetry and rhythm.

### Horizontal spacing
- Content max-width: `--max-w-content: 1200px` (slightly narrower than the standard 1280px — gives a more editorial column feel)
- Side padding varies by viewport but stays generous (no content touches edges)
- Pull-quotes and full-bleed images break out of the content width

### Vertical rhythm (CSS custom properties)

```css
--space-xs: 0.5rem;
--space-sm: 1rem;
--space-md: 2rem;
--space-lg: 4rem;    /* between adjacent distinct elements */
--space-xl: 6rem;    /* between major sections */
--space-2xl: 8rem;   /* before footer */
```

Key rule: **Never use the same spacing twice in a row.** If section A has `py-space-xl`, section B should have `py-space-xl pt-space-lg pb-space-2xl`. The asymmetry communicates intention.

### Line-height rhythm
- Body: `1.6` (comfortable for long reading)
- Headings: `1.05` (tight, editorial)
- Between heading and body: exactly `--space-sm` (1rem)
- Between elements in a card: exactly `--space-xs` (0.5rem) — tight grouping

---

## 6. Motion Signature — The "Typewriter Boot"

**The problem:** `fade-in-up 700ms cubic-bezier(0.16, 1, 0.3, 1)` is the most common animation on the web. It's invisible because it's everywhere.

**New signature:** Sequential typewriter/boot-sequence reveal.

### How it works
1. **Nothing animates on first load** — the page appears fully (no loading spinner, no fade-in of the entire page)
2. **The first animation:** the hero headline's first line renders immediately, then each subsequent line appears with a terminal-like cursor blink (`█`) that resolves into text. This mimics the Norware team "typing" the page.
3. **As you scroll, sections boot up:**
   - A cursor `█` appears at the top of the section
   - Content reveals in a deliberate left-to-right/top-to-bottom sequence (not staggered scale/fade)
   - The "boot" takes ~400ms per section, slightly faster as you go deeper
4. **Motion style:**
   - `cubic-bezier(0.05, 0.7, 0.1, 1.0)` — a sharp ease-out that snaps into place
   - No y-axis movement. Content appears and settles, it doesn't fly in from below.
   - No opacity fade. Use a `clip-path` inset(0 100% 0 0) that reveals to `inset(0 0 0 0)` — content is "unveiled" from left to right, like a typewriter.
5. **Hover states:**
   - No scale transforms. Hover changes color and adds a small underline (2px solid copper) that draws from center.
   - Cards don't lift. Hover adds a copper left-border that slides in from the left (2px → 4px).

### Cursor mark
A custom CSS pseudo-element for the cursor:
```css
.cursor::after {
  content: "█";
  animation: blink 1s step-end infinite;
}
@keyframes blink {
  50% { opacity: 0; }
}
```

This cursor appears:
- On the hero headline during initial reveal
- On section headings as they scroll into view
- On the CTA button (subtle, very small) to suggest interaction

### Why this motion?
- It ties directly to "software development" — terminal boot sequences are unmistakably technical
- It's distinctive without being gimmicky (no parallax, no particles, no confetti)
- It communicates precision and control — every element arrives deliberately
- It makes every page load feel like "the Norware system is booting up for you"

---

## Summary: What Changes

| Element | Before | After |
|---------|--------|-------|
| Background | `#0A0E1A` (navy) | `#3D2E24` (deep umber) / `#F5F0EB` (paper) |
| Accent | `#2DD4A7` (mint) | `#C97D4A` (copper) |
| Secondary | `#5B4FC4` (violet) | `#5B8C7A` (verdigris, sparse) |
| Headings | Space Grotesk | STIX Two Text (editorial serif) |
| Body | Inter | Plus Jakarta Sans / Satoshi |
| Nav | Fixed, glass, horizontal | Static, solid, stacked left |
| Hero | Left text / right image | Large typography + stats bar |
| Services | 3 equal cards | Asymmetric manifesto grid |
| Portfolio | 3 equal cards | Full-bleed hero + varied sizes |
| Dividers | Gradient lines | Copper rule with centered mark |
| Corners | `rounded-xl` (12px) | Mixed: none / `rounded-sm` (3px) |
| Hover | Lift + shadow | Copper left-border slide |
| Animation | fade-in-up | Typewriter clip-reveal |
| Spacing | Uniform `py-20 md:py-28` | Asymmetric `--space-*` tokens |
