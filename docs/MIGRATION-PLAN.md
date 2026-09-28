# AltIQ Labs — Google Sites → Angular Template Migration Plan

Template: `Advisr` Angular 20 multi-purpose consulting theme (682 files, 199 components, 10 home variants)
Source site: https://www.altiqlabs.com (Google Sites, brand hue `#0041A5`)
Target brand: **monotone `#1977bc`** = `hsl(205, 77%, 41.8%)`
Base home variant: **home-2**

---

## 0. Gate: monotone conversion (done first, as required)

Created `src/assets/css/aiq-tokens.css`, imported **last** in `src/styles.scss` so it overrides
Bootstrap and all 12 theme stylesheets.

**Two ramps, one hue (196). Nothing else is allowed in the codebase.**

| Brand ramp | hex | role | contrast |
|---|---|---|---|
| `--aiq-50` | `#edf6fd` | washes, hover rows | — |
| `--aiq-100` | `#d2e9f9` | tinted section bg | — |
| `--aiq-200` | `#a5d3f3` | body text on dark | 9.87 on 900 ✅ |
| `--aiq-300` | `#6fb8ec` | accent text on dark | 7.68 on ink ✅ |
| `--aiq-400` | `#399de5` | hover for brand fills | — |
| **`--aiq-500`** | **`#1977bc`** | **the brand** — fills, buttons, body text | **4.77 on white ✅ AA** |
| `--aiq-600` | `#1668a2` | button hover | 5.94 w/ white ✅ |
| `--aiq-700` | `#11517e` | links, brand text on light | 8.24 ✅ |
| `--aiq-800` | `#0c3a5a` | dark panels | 11.87 ✅ |
| `--aiq-900` | `#08253b` | footer | 15.69 ✅ |
| `--aiq-950` | `#051724` | hero overlay floor | 18.19 ✅ |

| Tonal ramp (hue 205, low sat) | hex | role |
|---|---|---|
| `--aiq-canvas` | `#fcfdfd` | page bg |
| `--aiq-surface` | `#f5f8f9` | cards |
| `--aiq-surface-2` | `#ecf0f3` | nested cards, inputs |
| `--aiq-line` | `#dae1e7` | decorative hairlines |
| `--aiq-line-strong` | `#bdc9d1` | card borders |
| `--aiq-line-ui` | `#7a8f9f` | input borders — 3.29 ✅ |
| `--aiq-text-faint` | `#8596a3` | placeholder/disabled |
| `--aiq-text-muted` | `#566976` | secondary body — 5.60 ✅ |
| `--aiq-text` | `#27353f` | body — 12.36 ✅ |
| `--aiq-ink` | `#152028` | headings, dark hero |
| `--aiq-ink-deep` | `#0c1318` | max contrast |

### The colour change fixed the AA problem

The earlier `#2596be` only reached 3.40:1 on white, so it could not carry body-size
white text and primary buttons had to fall back to a darker step. **`#1977bc` reaches
4.77:1** — it passes AA outright. The brand colour is now the primary button fill and
`--aiq-btn-bg` points at `--aiq-500` directly.

### Recolour surface (measured, not estimated)

| Surface | Volume | Method |
|---|---|---|
| 12 theme CSS files | **1,213 hex occurrences / 205 distinct colours** | scripted sweep → 22 tokens |
| `rgba()` literals | ~120 (multi-hue: blues, greens, purples) | scripted → `hsl(var(--aiq-hue) …)` |
| Multi-hue gradients | 15 | hand-replace with `--aiq-grad-*` |
| Inline `style="…#hex"` in components | **59 files, ~90 occurrences** | replace with `.aiq-sec-*` classes |
| SVG assets with baked `fill="#…"` | **112 of 144 SVGs** | scripted hue-forcing sweep |
| PNG assets | **184 (17 MB)** | cannot be recoloured — see below |

The sweep is **luminance-preserving**: each source colour maps to the token nearest it in
relative luminance, within its family (chromatic → brand ramp, desaturated → tonal ramp).
That keeps every section's light/dark rhythm intact while collapsing 205 hues into one.
Full table: `scratchpad/colour-map.csv`.

**Manual overrides required** (luminance alone gets these wrong):

| Source | Was | Auto-maps to | Override to | Why |
|---|---|---|---|---|
| `#ff7d00` ×22 | orange accent | `--aiq-400` | `--aiq-500` | this was *the* accent; must read as brand |
| `#f13f3f` ×18 | red / danger | `--aiq-500` | `--aiq-status-bad` | keep semantic separation |
| `#08ce8a` `#0de298` `#40edcf` ×28 | success greens | `--aiq-200/300` | keep (on dark) / `--aiq-700` on light | checkmarks need AA on their actual bg |

### Raster imagery: 184 PNGs — left untouched

17 MB of stock photography carries the template's original colour and cannot be
tokenised. **Decision: no filter is applied.** The images stay exactly as shipped
because they are being replaced with real AltIQ photography. Until then the site
is monotone in every CSS-controlled surface, with full-colour placeholder photos.

No `filter` rule exists anywhere in `aiq-tokens.css` — swapping the files in
`src/assets/img/` is all that is needed.

---

## 0b. Brand logo

Supplied file: `altiq-logo.png`, 2048×1537 (~4:3), blue wordmark + grey halftone dot
field + "Thinking Laterally" tagline. Sampled brand blue is `#1a7cc4` / `#1979c0` —
confirms `#1977bc` as the correct token value.

Five derived assets now live in `src/assets/img/logo/`:

| File | Size | Used by |
|---|---|---|
| `altiq-logo.png` | 2048×1537 | full lockup, as supplied |
| `altiq-logo-mark.png` | 1975×750 | **header, mobile header, navbar** — wordmark only |
| `altiq-logo-light.png` | 2048×1537 | **both footers** — reverse lockup for dark |
| `altiq-logo-mark-light.png` | 1975×750 | reverse wordmark, for dark headers |
| `altiq-favicon.png` | 512×195 | favicon |

**Why the header uses a crop.** The supplied lockup is nearly 4:3. At a normal 44px
header height the tagline renders ~5px tall and is illegible. The header therefore
uses a wordmark crop crediting the measured blue bounding box (x 72–1960, y 384–1024
plus a margin of dot texture), giving a 2.63:1 lockup that sits properly in a navbar.
The full lockup with tagline is used in the footers, where there is vertical room.

**Why there is a reverse variant.** Both footers sit on `--aiq-900` (`#08253b`). The
supplied logo's grey dots and grey tagline nearly disappear there. `*-light.png`
inverts the hierarchy for dark backgrounds: wordmark brightened to `--aiq-400`
(`#399de5`, 5.3:1 on the footer), dots recessed to `#2f4d5e` so they stay a texture
rather than noise, tagline lifted to `#dfe8ed` so it stays readable.

Sizing is controlled by `.aiq-logo` in `aiq-tokens.css` (44px header / 84px footer,
36px / 68px under 991px) — never by width attributes on the img.

> **Worth replacing when you can:** these variants are generated by recolouring the
> raster. A designer-supplied vector (SVG) master plus an official reverse lockup
> would be sharper at every size and is the proper long-term asset. A square monogram
> would also make a better favicon than the current 2.63:1 crop, which renders about
> 16×6 in a browser tab.

Also cleaned up: the per-route favicon switch in `app.component.ts` tested nine routes
that no longer exist and always fell through to a template icon. It is now a constant.

---

## 1. What your live site actually contains

### Information architecture (14 unique page templates, 25 URLs)

```
/                                     Home — "Transform Your Enterprise with Confidence"
/what-is-your-perspective             Perspective hub — the 3T framework
  /consumers-of-tech                  CEO / BU Head / P&L Owner
  /advisors-of-tech                   CIO / Enterprise Architect / Strategy Lead
  /creators-of-tech                   CTO / Product Manager / Engineering Lead
/advisors-mentors                     4 named advisors w/ photos + bios
/our-lateral-thinking                 Differentiation + who we serve + service selector
/service-catalog/
  5d-assessment                       Flagship. Tiered T1–T5 engagement model
  cto-as-a-service                    4 engagement models, $3K–$18K/mo
  enterprise-architecture-as-a-service 4 models, $8K–$35K/mo
  tech-product-lifecycle-as-a-service  5 phases, 4 models, $5K–$22K/mo
/service-catalog/genesis              GCC GENESIS — migrating in from subdomain
/join-us                              Careers hub — culture + 8 roles
  ×8 job detail pages                 ID scheme: 20251108-1 … -8
→ forms.gle/mMQjyHSvWDKzVe2i7         Contact (external Google Form)
/terms                               T&C — migrating in from subdomain (13 sections, ~3,800 words)
```

### Content assets you already have (reusable copy)

- **Hero:** "Transform Your Enterprise with Confidence" + CTA "Try our 5D Assessment"
- **3T framework:** three personas, each with Mindset / Who You Are / Focus / AltIQ Value Prop — a
  clean, complete 4-field content model
- **4 services** with full component breakdowns, engagement models and **indicative pricing**
  (this is unusually complete — most consultancies hide it; it maps straight onto pricing tables)
- **Traditional Consulting vs AltIQ Labs** — 4-vs-4 comparison, ready-made comparison table
- **Who we serve:** mid-market enterprises; Manufacturing, Healthcare, Financial Services, Retail, Technology
- **Service selector:** 4 decision pathways
- **4 advisors** with names, roles, specialties, bios, photos
- **Culture pillars:** Lateral thinking / Pragmatism / Autonomy / Strategic focus
- **Footer legal:** © 2025 AltIQ Labs Private Limited (INDIA) + IP notice

### Content gaps on the live site (nothing to migrate — needs authoring)

- No testimonials, no client logos, no case studies, no stats/counters
- No blog or insights posts ("Our Lateral Thinking" is a positioning page, not a feed)
- No team page beyond the 4 external advisors — **no employees/founders shown**
- No social links anywhere

This matters because **the template's strongest sections are testimonial, counter, case-study and
brand-logo carousels** — all of which you currently have zero content for.

---

## 2. Component mapping — your content → template components

### Direct reuse (template component fits, swap data only)

| Your content | Template component | Change needed |
|---|---|---|
| Home hero + CTA | `home-9-sections/hero` (has CountUp built in) | copy swap; kill counters or author stats |
| 3T perspectives (3 cards) | `home-1-sections/solutions` | ⚠ it's `col-lg-6` (2-up) → change to `col-lg-4` |
| 4 services grid | `home-1-sections/services` | copy swap; 4 items fits its 2×2 grid natively |
| Trad. vs AltIQ comparison | `home-8-sections/progress` | repurpose to 4-vs-4 table |
| Industries served (5) | `home-5-sections/industries` or `home-8` | copy swap |
| Advisors & Mentors (4) | `views/about/components/team` + `home-7-sections/team` | copy swap; 4 slots = exact fit |
| Culture pillars (4) | `home-3-sections/features` | copy swap |
| Service catalog hub | `views/services/service` + `service2` | copy swap |
| Service detail ×4 | `views/services/service-details` | ⚠ static today — must be route-parameterised |
| FAQ per service | `views/pages/faq` + `faq-2` | `faq-2` exists but **is not routed** — wire it |
| Contact | `views/contact` | replace Google Form w/ real form + backend |
| 404 | `views/pages/error` | brand copy only |
| Global header/footer | `layout/components/header|footer` | ⚠ full IA rewrite — nav is 2-level w/ 8 job children |

### Build fresh — no template equivalent

| Page | Why the template can't cover it | Effort |
|---|---|---|
| **Perspective hub** (`/what-is-your-perspective`) | No persona-router page type exists. Needs 3 large entry cards + framework explainer. | M |
| **Perspective detail ×3** | No persona page type. 4-field model (Mindset / Who You Are / Focus / Value Prop) + "Primary Relevant Services" cross-links. Build **one** component, drive from data. | M (1 component, 3 data objects) |
| **5D Assessment page** | **Your flagship, and the template has no pricing/tier component at all.** Needs a T1–T5 progressive tier table (free discovery → full blueprint). | **L — highest priority** |
| **Service pricing tables** | No pricing component anywhere in 199 components. All 4 service pages need one (engagement model × duration × price). | M (shared component) |
| **Careers hub** (`/join-us`) | No careers page type. Needs culture block + filterable role list. | M |
| **Job detail ×8** | No job template. Build one route-parameterised component + 8 data records + JobPosting schema.org. | M (1 component, 8 records) |
| **Terms & Conditions** (`/terms`) | Migrating in from the subdomain. 13 numbered sections, ~3,800 words, IN/SG dual governing law, SIAC arbitration. Needs a long-form legal layout with anchor nav. | M |
| **GCC GENESIS** (`/service-catalog/genesis`) | Migrating in from its own subdomain. Fifth service — reuses the shared service + pricing components. **Body copy not yet extracted.** | M |
| **Insights/Blog** | 7 blog components exist and are *fully built*, but **you have no posts**. Template is ready; content is not. | Content-blocked |

### Delete outright

**All 8 e-commerce routes and components** — `shop`, `shop-sidebar-left/right`, `shop-details`,
`cart`, `checkout`, `account`, `account2`, plus `assets/img/shop` (260 KB). An advisory firm has no
cart. Removing these also cuts a meaningful slice of the recolour surface.

Also delete **9 of 10 home variants** once you pick a base — that alone removes ~60% of the
1,213 hex occurrences before the sweep runs.

### Base variant recommendation

**Base is `home-2`** (your choice), now served at `/`. Sections: hero + about + brands +
case-studies + counter + cta + services + testimonial + blog. Then graft in:
- `altiq-sections/_solutions-3up.component.ts.keep` → the 3T cards (widen to `col-lg-4`)
- `views/about/components/team` → advisors
- `altiq-sections/_comparison.component.ts.keep` → Traditional vs AltIQ table

---

## 3. Sequencing

| Phase | Work | Blocked on |
|---|---|---|
| **0** | ✅ Token layer built and wired | — |
| **1** | ✅ Sweep run across all CSS/SVG/inline. Still to do: delete shop + 9 unused home variants. | — |
| **2** | Rebrand shell: `index.html` title/favicon, header IA (2-level, 8 job children), footer legal, `app.routes.ts` slugs | — |
| **3** | Ship Home from `home-9` + grafts. Ship the 3 static pages (Lateral Thinking, Advisors, Contact). | — |
| **4** | Build the pricing/tier component. Ship 5D + 3 service detail pages via parameterised routes. | **5D tier content (see below)** |
| **5** | Build persona component → 4 perspective pages. Build careers + job components → 9 career pages. | — |
| **6** | SEO: per-route meta (`title.service.ts` exists), sitemap, 301 map from Google Sites URLs, JobPosting + Organization schema. | — |
| **7** | Author the missing content: testimonials, case studies, stats, first blog posts. | **content authoring** |

---

## 4. What I need from you

1. **5D Assessment tier content + GENESIS body copy.** I could not extract this page's body. Google Sites renders it
   client-side, and the browser extension isn't connected, so `WebFetch` and a raw `curl` both
   returned only chrome/nav. I know from adjacent pages that it runs **T1–T5** ("free discovery to
   comprehensive transformation blueprints", roles reference "T2–T5 engagements") but not the tier
   names, scope, durations or prices. Paste the page text, or connect the extension and I'll pull it.
2. **Contact form backend** — the Google Form is a dead end for a real site. Formspree, or an API?
