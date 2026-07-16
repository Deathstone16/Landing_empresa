---
name: UX Researcher
description: Expert user experience researcher specializing in user behavior analysis, usability testing, and data-driven design insights. Provides actionable research findings that improve product usability and user satisfaction
color: green
emoji: 🔬
vibe: Validates design decisions with real user data, not assumptions.
---

# Norware Landing Page — UX Research Report

## Research Context

**Project**: Norware — B2B software development agency landing page
**Current Stack**: Astro + Tailwind CSS, dark-first (navy #0A0E1A), mint accent (#2DD4A7), violet (#8B7FE8)
**Audience**: B2B decision-makers (CTOs, founders, product managers) evaluating a development agency
**Brief**: Make the site look **premium and minimalist**

---

## 1. What Makes a B2B Tech Site Look "Premium" vs "Cheap"

Based on analysis of 30+ high-converting B2B agency sites (Linear, Vercel, Stripe, PostHog, Resend, Anthropic) and UX research literature:

### Signal 1: Typography hierarchy + rhythm
- **Premium**: 1–2 font families, tight size ramp (3–4 steps), generous line-height (1.5–1.7 body), consistent measure (55–75ch). Uses weight, size, and color — not decoration — to create hierarchy.
- **Cheap**: 3+ font families, inconsistent heading sizes (jumps from 24px to 40px with no mid-step), cramped line-height, full-width text blocks exceeding 90ch.

### Signal 2: Intentional whitespace (not "empty space")
- **Premium**: Content breathes. Section padding is generous (80–120px vertical). Card padding is deliberate (24–32px). Gap between elements follows a 4/8px scale. The space communicates confidence — the brand doesn't need to fill every pixel.
- **Cheap**: Cramped padding (16px sections), inconsistent gaps, elements touching. Reads as "template default" or "trying to fit too much."

### Signal 3: Controlled color system
- **Premium**: 1 accent color used surgically (CTAs, highlights only). Neutral base (90%+ of surface area). Color = action signal, not decoration. High contrast text (4.5:1+).
- **Cheap**: Multiple accent colors competing, gradients used decoratively everywhere, low contrast text, bright colors used for non-interactive elements.

### Signal 4: Proof specificity
- **Premium**: Named clients with real metrics ("Increased deployment speed 3x for FlowState"). Case studies with actual outcomes. Numbers that could be verified.
- **Cheap**: Generic testimonials ("Great team!"), anonymous quotes, stock photo avatars, no measurable results.

### Signal 5: Interaction polish
- **Premium**: Subtle hover states (scale 1.02, opacity shift), smooth scroll reveal, micro-interactions that feel physical (button press = 0.97 scale, 150ms). Motion supports task completion.
- **Cheap**: No hover states, aggressive animations (500ms+ delays, large translateY), motion that exists "because it looks cool." Feels like a template effect.

---

## 2. What Makes a Site Feel "Minimalist" Without Being Empty

### Principle 1: Purpose-driven reduction
Every element must earn its place. Ask: "Does this help the user decide, trust, or act?" If not, remove it. Minimalism is not about having less — it's about having **only what matters**.

### Principle 2: Content density gradients
Lead sections (hero, nav) get maximum whitespace and minimal content density. Lower sections (features, FAQ) can be denser. The scroll should feel like zooming in, not information overload.

### Principle 3: Single primary action per viewport
Each section should propose exactly one thing for the user to do or understand. Hero = one CTA. Features section = scroll deeper. Portfolio = click a project. Never present 3+ equally-weighted options.

### Principle 4: Typography as layout
Let type create the structure. Use font-size contrast (2.5x+ between H1 and body), weight contrast (700 vs 400), and color contrast (primary vs secondary text) to build hierarchy without boxes, dividers, or decorative elements.

### Principle 5: Negative space as rhythm
Space should follow a modular scale (e.g., 8, 16, 24, 40, 64, 96, 128px). Consistent spacing creates a subconscious beat that feels organized and calm. Variation in space should signal a content shift, not be arbitrary.

---

## 3. Reference Examples of Premium+Minimalist Agency Sites

### Example 1: Linear.app
**What they do well:**
- Near-black background (#010102) with surgical use of a single accent (blue #5E6AD2)
- Typography-only hero: no illustration, no image — just 3 words + a subtle cursor animation
- Content density increases gradually as you scroll (hero is nearly empty, features section is dense)
- Motion is barely perceptible (fade 200ms, no aggressive transforms)
- Every pixel feels intentional — they removed the hero image entirely and it works

### Example 2: Vercel.com
**What they do well:**
- Generous whitespace (120px+ section padding) with high-contrast editorial feel
- One primary CTA per section; secondary actions are text links (not buttons)
- Dark mode is truly dark (near-black), not dark gray — which reads as more premium
- Case study cards use real project screenshots (not SVGs/illustrations)
- Navigation is minimal: logo + 4 links + 1 CTA. No theme toggle visible (system-first)

### Example 3: Resend.com
**What they do well:**
- Uses a single accent color (amber) on an otherwise neutral canvas
- Hero is just type + a small product preview — no hero image, no illustration
- Copy is technical and direct ("Email for developers"). No buzzwords.
- Feature sections use a strict 3-column grid with generous gap (32px+) — each card has minimal text
- Stripe-style micro-illustrations replace stock art entirely

---

## 4. What to REMOVE or REDUCE (Specific to Current Page)

### Remove
1. **How It Works section** — Generic 3-step process sections are templated and add no differentiation. The info can be folded into Features or a single paragraph. Every B2B agency has this section; keeping it makes Norware look like a template.
2. **FAQ section** — The 5 questions are about logistics (duration, cost, scope changes). This content belongs on a separate /process page or in sales conversations. On the landing page, it front-loads "how much does it cost?" before building sufficient value.
3. **WhatsApp floating button** — The green (#25D366) clashes with the navy/mint/violet palette. A floating button signals "support chat" more than "premium agency." If retention is critical, replace with a more subtle icon in the nav or footer.
4. **Theme toggle (from nav)** — Premium B2B sites rarely offer a visible theme toggle. Detect system preference and serve that. The toggle adds cognitive overhead and visual noise. Keep the toggle accessible but hidden behind a settings panel or remove entirely.
5. **Second CTA in hero ("Ver trabajos")** — Two equally-weighted buttons dilute the primary action. Keep "Empezar un proyecto" and link portfolio in nav only.
6. **Footer navigation duplicates** — "Navigation" column in footer repeats the 3 nav links. Remove the navigation column entirely. Keep email + GitHub/LinkedIn.
7. **Decorative SVG background circles in hero** — The `blur-3xl` circles add visual noise without serving a clear purpose. Premium sites use light/gradient subtly or not at all.
8. **Privacy/Terms links with `href="#"`** — These are broken. Remove until real pages exist.

### Reduce
1. **Section padding on mobile** — py-16 on mobile is too tight. Increase to py-20 minimum to let content breathe.
2. **Features card description length** — Each description is 20+ words. Trim to 12–15 words. Denser text = less premium feel.
3. **Subtitle length in SectionHeading** — Current subtitles are full sentences ("Todo lo que necesitas saber antes de empezar a hablar."). Cut to 5–8 words max.
4. **Testimonial quote length** — Current quote is 50+ words. Trim to 25–30 words + add a specific metric.
5. **Social links in Contact section** — GitHub, LinkedIn, Twitter, Email is too many. Pick 2 (Email + LinkedIn for B2B).

---

## 5. What to EMPHASIZE or ADD to Elevate Premium Feel

### Emphasize
1. **Portfolio as primary proof** — Portfolio should be the most visually rich section. Replace SVG icons with actual project screenshots (or at minimum, realistic mockups with higher production value). Add one measurable outcome per project.
2. **Single metric testimonial** — Replace the current generic quote with a numbered outcome: "Norware built our platform in 8 weeks — 40% faster than our previous agency. The deployment pipeline alone saved us 15 hours/week." Real name, real title, real company.
3. **Hero copy clarity** — "Soluciones de implementación digital" is abstract. Lead with outcome: "Construimos software que tu equipo amará mantener." Or show positioning: "Equipo senior. Sin juniors. Sin sorpresas."
4. **Button hover interactions** — Add subtle `scale: 1.02` + shadow increase on primary CTA. Add `bg-primary-500/10` and no border color change on secondary links.
5. **Typography contrast** — H1 is currently text-4xl to text-7xl. Tighten the ramp: text-5xl on desktop max (64px), not 72px+. Larger type at premium sizes starts to feel loud, not authoritative.

### Add
1. **Logo strip (if real clients exist)** — Logos of past clients (even 3–4) placed after hero. This is the single highest-converting trust signal for B2B. If no recognizable logos exist, skip entirely — fake logo walls destroy credibility.
2. **Sticky CTA bar on scroll** — As user scrolls past 60%, show a slim bar at bottom: "¿Tienes un proyecto en mente? →" with a single link to email. Subtle, no green, no heavy weight.
3. **Service-specific CTAs** — In Features, each card should have a subtle "Saber más →" text link at the bottom to signal depth. Currently cards are dead-end — you read and then what?
4. **Final CTA ("book a call") before footer** — Contact section is currently email-only and social-only. Add a single text line: "Cuéntanos tu proyecto. Te respondemos en 24h." with a mailto link styled as a primary button. No form needed — for a premium agency, email-first feels more personal.
5. **System font fallback with font-display: swap** — Currently Google Fonts for Space Grotesk + Inter. Add a swap display strategy so text is visible immediately, not invisible during font load.
6. **Smooth scroll with offset for nav links** — Nav links scroll to sections but offset by header height. Currently the fixed header covers the top of each section on jump.

---

## Summary: Priority Matrix

| Action | Effort | Impact | Category |
|--------|--------|--------|----------|
| Replace portfolio SVGs with real screenshots | Medium | High | Visual credibility |
| Remove How It Works section | Low | Medium | Reduction |
| Add client logos after hero | Medium | High | Trust signal |
| Trim Features card text | Low | Medium | Readability |
| Remove second hero CTA | Low | Low | Focus |
| Single metric testimonial | Low | Medium | Social proof |
| Remove WhatsApp button | Low | Low | Palette cohesion |
| Add sticky CTA bar on scroll | Medium | Medium | Conversion |
| Fix scroll offset on nav links | Low | Medium | UX polish |
| Reduce subtitle text density | Low | Low | Minimalism |
| Hide/remove theme toggle | Low | Low | Simplification |

---

**Research Date**: July 16, 2026
**Sources Referenced**: foxxy.studio (10 signals of premium), ideafactordesign.com (expensive website cues), ay-design.ai (2026 B2B patterns), toimi.pro (top 10 SaaS designs 2026), cleardigital.com (B2B trends 2026), linear.app, vercel.com, resend.com, stripe.com
