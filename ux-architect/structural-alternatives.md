# Structural Alternatives — Norware Landing Page

> **Problem**: The current design follows a standard Sticky Nav → Hero → Services → Portfolio → FAQ → Contact → Footer template. The user reports it "parece una landing genérica hecha con IA."
>
> **Root cause**: The structure is section-driven (each section fills a slot), not content-driven. The layout doesn't reflect anything unique about Norware.
>
> **Below**: 3 completely different structural proposals. Not reshuffled templates — fundamentally different conceptions of what a page can be.

---

## Alternative A: "The Studio" — Narrative Walkthrough

**Metaphor**: Walking through Norware's physical workshop. Each "room" is a different spatial experience, not a section.

**Core idea**: The page is a sequence of spatial experiences, not a list of sections. The user moves through a narrative arc like entering a studio.

### Structure

```
┌─────────────────────────────────────────────────────────┐
│  [logo]                                          [hello] │
│  ─────────────────────────────────────────────────────── │
│                                                         │
│   ROOM 1: ENTRANCE                                      │
│   Full-bleed. Big statement. No mockup, no screenshots. │
│   Just the name + what they stand for — gallery-wall     │
│   typography. The only action is "Enter the studio."     │
│   (Scroll down to enter)                                 │
│                                                         │
│   ╔══════════════════════════════════════════════════╗   │
│   ║  ROOM 2: THE WORKSHOP (split-screen narrative)   ║   │
│   ║  Left  → A live code terminal (playful, real)    ║   │
│   ║  Right → How Norware thinks (not what they do)   ║   │
│   ║  As you scroll, the terminal types itself out.    ║   │
│   ╚══════════════════════════════════════════════════╝   │
│                                                         │
│   ROOM 3: THE GALLERY                                   │
│   Horizontal scroll. ONE deep project case study.        │
│   Frame 1: The problem                                  │
│   Frame 2: The approach (visual)                        │
│   Frame 3: The result (metrics, real numbers)           │
│   Frame 4: What they said (full quote, real person)     │
│                                                         │
│   ROOM 4: THE MANIFESTO                                 │
│   Full-screen text. No cards, no grids. Just words      │
│   arranged like a printed broadsheet. This replaces FAQ │
│   — the answers are in the philosophy.                  │
│                                                         │
│   ROOM 5: THE TABLE (contact)                           │
│   One email address. One calendar link. Team names.     │
│   No form. The footer appears only after hovering near  │
│   the bottom edge for 1.5s.                             │
│                                                         │
│   [hello@norware.dev]                               ═══╝ │
└─────────────────────────────────────────────────────────┘
```

### Key mechanics

| Element | Behavior |
|---------|----------|
| Nav | No sticky nav. Logo top-left + "hello" top-right. That's it. Scrolling reveals/hides them with opacity. |
| Scroll | Each "room" is viewport height. Transitions use zoom/blur/opacity like walking between rooms, not fade-in-up. |
| Gallery | Horizontal scroll with snap points. Desktop: mouse wheel or drag. Mobile: swipe. Shows progress (3/8). |
| Manifesto | Replaces FAQ. Type is the only visual element. Answers "why" not "how much." Layout shifts like a printed essay. |
| Contact | Sticky email in bottom-left corner, always visible. Main contact section is minimal — one line of text + CTA. |
| Footer | Hidden by default. Appears when user moves mouse near bottom edge or scrolls past contact. |

### Why this fixes "generic"

- **No hero mockup** — the single most template-like element is removed entirely
- **No feature cards** — replaced by a side-by-side terminal + philosophy, which is inherently more distinctive
- **No 3-column portfolio** — replaced by a deep horizontal deep-dive of one project
- **No FAQ accordion** — replaced by a manifesto that answers through philosophy
- **The scroll IS the experience** — it's a walkthrough, not a browse

### Mobile adaptation (truly mobile-first)

The horizontal gallery becomes a vertical card stack you swipe through. The split-screen workshop stacks (terminal on top, text below). The manifesto stays full-width text but with larger type. Contact remains sticky at the bottom of the viewport. The studio metaphor works better on mobile because the "rooms" are shorter — the narrative feels faster, denser.

---

## Alternative B: "The Terminal" — Single-Window Atomic Experience

**Metaphor**: The page is a CLI. You never leave the terminal. Commands reveal content inline.

**Core idea**: Everything fits in one or two viewports. There is no scroll in the traditional sense — you "scroll" by triggering reveals, not by moving through sections.

### Structure (single screen, 100vh)

```
┌─────────────────────────────────────────────────────────┐
│                                                         │
│   ╭─────────────────────────────────────────────────╮   │
│   │  NORWARE @ ~ $ _                                 │   │
│   │                                    (blinking    │   │
│   │  Type a command or press Enter to begin          │   │
│   │                                     cursor)     │   │
│   ╰─────────────────────────────────────────────────╯   │
│                                                         │
│   Available commands:                                    │
│   ./norware --philosophy    Why we exist                 │
│   ./norware --work          One project, in depth       │
│   ./norware --contact       Start a conversation         │
│   help                     Show this message            │
│                                                         │
│   <────────────────────────────────────────────────────> │
│   ┌─────────────────────────────────────────────────┐   │
│   │   ───────────────────────────────────────────   │   │
│   │   Type your message...           [Send] ─────   │   │
│   │   ───────────────────────────────────────────   │   │
│   └─────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────┘
```

### How it works

| Interaction | What happens |
|-------------|--------------|
| Press Enter or type `help` | Shows available commands. This IS the nav. |
| Type `./norware --philosophy` | The terminal outputs a multi-paragraph manifesto. Content pushes previous output up. You can scroll up to re-read. |
| Type `./norware --work` | The terminal clears and becomes a horizontal carousel of 4 "slides" showing one project deep-dive. Slide indicators at bottom. Arrow keys to navigate. |
| Type `./norware --contact` | A message input appears inline. Type your message, press Enter. It sends. No form, no fields, no labels. |
| Click/tap anywhere | Focus returns to the command input. The cursor blinks. |

### Key mechanics

| Element | Behavior |
|---------|----------|
| Layout | Single viewport. The terminal output scrolls within the terminal pane, not the page. The page itself never scrolls. |
| Project deep-dive | 4 slides rendered INSIDE the terminal pane. Each is a full-width card. Arrow navigation. |
| Contact | Inline input at the bottom of the terminal. Sends to hello@norware.dev. No redirect, no thank-you page — just "Message sent. We'll respond within 24h." |
| Philosophy | Pure text output. No images, no cards, no gradients. Just ASCII layout. Feels like reading a man page. |
| Nav | There is no nav. The terminal IS the nav. The brand logo is the prompt prefix (`norware@~`). |
| Footer | There is no footer. Copyright appears as the last line of terminal output when you scroll all the way up. |

### Why this fixes "generic"

- **Zero standard layout patterns** — there is nothing to compare to a template
- **The terminal is the page** — it's not "a landing page with a terminal theme," it's a functional terminal
- **Forces engagement** — you can't skim. You have to interact to see content.
- **No feature cards, no portfolio grid, no testimonial pull quote** — these patterns literally cannot exist in this format
- **Extremely memorable** — anyone who visits will remember it

### Mobile adaptation

On mobile, the terminal is full-screen with a larger font. The command input shifts to the bottom of the screen (thumb zone). The project slides become vertical swipes instead of horizontal arrows. The terminal output uses larger line heights for readability. The `help` command auto-runs on first visit so mobile users see available commands immediately without typing.

### Technical notes

- Zero JS frameworks needed. A single vanilla JS module handles: terminal output rendering, command parsing, cursor blink, slide navigation, message sending.
- The "terminal" is entirely CSS. The green-on-black aesthetic uses the existing color system (`--color-primary-500` on `--color-bg`).
- The project slides are DOM elements revealed/hidden by command state, not a separate page.
- Message sending can use `mailto:` as fallback, fetch API for the real endpoint.

---

## Alternative C: "Two Stories" — Content-Determined Layout

**Metaphor**: Norware has exactly 2 things worth saying. Each gets a bespoke layout designed around its content. Nothing else.

**Core idea**: The page is made of 2 stories + 1 epilogue. Each story's structure is determined by what Norware needs to say, not by a template grid. This is the most radical reduction.

### Structure

```
┌─────────────────────────────────────────────────────────┐
│   STORY 1: "How We Build"                               │
│   Layout = Code indentation nesting                     │
│                                                         │
│   As you scroll, the page indents like code:            │
│                                                         │
│   function norware() {                                  │
│     const philosophy = "We build with..."               │
│                                                         │
│     function discovery() {                              │
│       // left-aligned: the problem                      │
│       // scroll further →                               │
│                                                         │
│       function build() {                                │
│         // indented once: the approach                  │
│         // scroll further →                             │
│                                                         │
│         function launch() {                             │
│           // indented twice: the result                 │
│         }                                               │
│       }                                                 │
│     }                                                   │
│   }                                                     │
│                                                         │
│   (Each indent level is a scroll-driven layout shift)   │
│                                                         │
│   ════════════════════════════════════════════════════  │
│                                                         │
│   STORY 2: "What We've Built"                           │
│   Layout = 4 full-viewport frames that transition       │
│                                                         │
│   ┌──────────────┐  ┌──────────────┐                    │
│   │  FRAME 1:    │  │  FRAME 2:    │                    │
│   │  The problem │→│  The process │                    │
│   │  (text)      │  │  (timeline)  │                    │
│   └──────────────┘  └──────────────┘                    │
│                                                         │
│   ┌──────────────┐  ┌──────────────┐                    │
│   │  FRAME 3:    │  │  FRAME 4:    │                    │
│   │  The code    │→│  The result  │                    │
│   │  (snippet)   │  │  (numbers)   │                    │
│   └──────────────┘  └──────────────┘                    │
│                                                         │
│   ════════════════════════════════════════════════════  │
│                                                         │
│   EPILOGUE: "Let's Talk"                                │
│   Layout = 1 email address. That's it.                  │
│                                                         │
│   The footer appears only after 2 seconds of            │
│   inactivity near the bottom of the page.               │
└─────────────────────────────────────────────────────────┘
```

### Story 1 detail: "How We Build"

The layout IS the content. The page literally uses code indentation as a spatial navigation device.

| Scroll position | Layout state | Content |
|----------------|--------------|---------|
| 0-25vh | `function norware() {` — full-width, big type. The opening statement. | "We are Norware. We build software like we'd build a house." |
| 25-50vh | `const philosophy = ...` — slightly indented, slightly narrower column. | "We believe in..." (manifesto, 2-3 paragraphs) |
| 50-75vh | `function discovery() {` — indented further, text aligns left. Background shifts slightly darker. | "First, we listen. No assumptions." |
| 75-100vh | `function build() {` — deeper indent, narrower column. | "Then we build. In the open. Demos every week." |
| 100-125vh | `function launch() {` — deepest indent, smallest column. | "Then we let go. But we don't disappear." |

The visual effect: as you scroll, the page "narrows" like code indentation, creating focus. At the deepest indent (launch), you're at the most intimate, focused part of the narrative. Then the page "un-indents" for Story 2.

### Story 2 detail: "What We've Built"

4 viewport-height frames. Each is a distinct visual treatment. Transitions between frames use content-aware animations (not generic fades).

| Frame | Visual treatment | Content |
|-------|-----------------|---------|
| 1: The Problem | Dark, text-only. No images. | "A fintech company needed to process $50M/month in transactions. Their existing system took 12 seconds per query." |
| 2: The Process | A timeline that draws itself as you scroll. SVG path animation. | "Week 1-2: Audit. Week 3-6: Rebuild. Week 7-8: Deploy. Week 9+: Optimize." |
| 3: The Code | A real code snippet that highlights itself. Syntax-highlighted. The code is readable (not gibberish). | The actual SQL query that solved their bottleneck. Readers who understand code feel it; those who don't see the care. |
| 4: The Result | Big number, big quote, real person. | "500ms query time. $50M/month. 'They didn't just build software — they rebuilt how we think about data.' — Sarah Kim, CTO" |

### Epilogue: "Let's Talk"

A full-viewport screen with one centered email address. No form. No social links. Nothing else. The footer appears only after a user's mouse lingers near the bottom edge for 2 seconds — a micro-interaction that feels like discovering something hidden.

### Why this fixes "generic"

- **There are no sections** — there are stories. A section is a container; a story is a narrative.
- **Every layout is bespoke** — the code-indentation scroll and the 4-frame transition are not reskinned Tailwind templates
- **Only 2 things are said** — but they're said fully, deeply, memorably
- **No padding, no containers, no max-width** — each frame fills the viewport. No top/bottom padding on sections because there are no sections.

### Mobile adaptation

**Story 1**: Instead of horizontal indentation (which doesn't work on a narrow screen), the indentation maps to vertical scale: deeper indentation = smaller font, tighter spacing, creating a zoom-in effect as you scroll.

**Story 2**: Frames stack vertically and snap-scroll. Active frame is full viewport. Swipe between them. The code snippet is scrollable horizontally within the frame.

**Epilogue**: Same — one email, full screen. The hidden footer works the same way (tap near bottom, hold for 1s).

---

## Comparison & Recommendation

| Criteria | A: The Studio | B: The Terminal | C: Two Stories |
|----------|:---:|:---:|:---:|
| **Deviation from template** | High | Extreme | Extreme |
| **Implementation effort** | Medium | Low-Medium | Medium |
| **Mobile experience** | Strong | Strong | Strong |
| **Accessibility** | Medium (horizontal scroll needs care) | High (keyboard-native) | Medium (custom scroll) |
| **SEO friendliness** | Medium | Low (JS-dependent) | Medium |
| **Memorability** | High | Very High | High |
| **Risk** | Low — most familiar of the 3 | Medium — interaction barrier | Medium — scroll behavior may confuse |

### Recommendation

**Start with Alternative A ("The Studio")** — it deviates substantially from templates while remaining accessible and implementable. It transforms the user experience from "browsing a brochure" to "walking through a space."

If the team wants maximum differentiation with minimal implementation cost, **Alternative B ("The Terminal")** is the most practical: it requires the least code (one JS module, one screen), eliminates the most template patterns, and is the most memorable.

Avoid mixing elements from different alternatives — each is internally coherent. Mixing them would create the exact "frankenstein" feel the user is trying to escape.
