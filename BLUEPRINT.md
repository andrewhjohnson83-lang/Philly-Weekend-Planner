# Philly Weekend Planner — Website Blueprint

Planning document only. No HTML, CSS, or JavaScript is written yet. Built from the Philadelphia research document and the course's final project requirements.

---

## 1. Overall Website

**Purpose:** Help visitors and locals plan a realistic Philadelphia weekend based on their interests, budget, and available time, instead of scrolling through an overwhelming, uncurated list of attractions.

**Primary audience:** Regional weekend travelers on a 48 to 72 hour trip from nearby cities (NYC, DC, Baltimore) or suburban PA/NJ, who want a walkable, well-paced plan without transit confusion.

**Secondary audience:** Philadelphia-area locals looking for a "staycation" weekend or a reason to finally explore a neighborhood they've never gotten around to.

**Tone and personality:** A knowledgeable local friend, not a tourism board. Confident, practical, a little conversational. Helpful over promotional.

**Tagline (primary):** "Your Weekend, Planned Like a Local."
**Alternate:** "Plan Less. Explore More."

**Primary CTA:** "Build My Weekend" (drives to the interactive quiz)

**Why it's useful, in one line:** Instead of hours of research and the risk of sold-out tickets or an unrealistic schedule, visitors get a matched weekend plan in under a minute, plus transparent pricing before they arrive.

---

## 2. Website Navigation

**Recommended page count: 5** (the assignment requires a minimum of 4; a 5th page gives the activity search/filter feature room to work properly instead of being crammed onto the offerings page).

| Page | Purpose | Visitor Accomplishes |
|---|---|---|
| **Home** (`index.html`) | First impression, value proposition, entry point to the quiz | Understands what the service does and gets matched to a weekend track |
| **Weekend Plans** (`plans.html`) *(Services/Offerings)* | Present the 3 core weekend "products" | Picks or reviews a full Saturday/Sunday itinerary |
| **Explore Activities** (`explore.html`) | Searchable directory of curated sights, food, and culture | Browses and filters individual activities by category, price, and setting |
| **About** (`about.html`) | Establish identity, mission, and practical car-free logistics | Understands who runs this and why, and how to get around without a car |
| **Contact** (`contact.html`) *(Inquiry/Conversion)* | Convert interest into an inquiry | Submits a custom trip request |

**Navigation structure:**
```
Header nav (all pages): Home | Weekend Plans | Explore Activities | About | Contact
                                                    |
Home --(quiz result CTA)--> Weekend Plans --(customize CTA)--> Contact
Explore --(plan custom route CTA)--> Contact
About --(view plans / ask a question CTA)--> Weekend Plans / Contact
Footer (all pages): repeats nav + student project disclosure
```

---

## 3. Home Page

**1. Header / Navigation**
- Logo/wordmark ("Philly Weekend Planner"), nav links, a persistent "Plan My Weekend" button.

**2. Hero Section**
- *Purpose:* Immediate value proposition and primary conversion point.
- *Content:* Full-width Philadelphia skyline or streetscape photo, headline, short subhead, primary + secondary CTA.
- *Headline:* "Your Weekend in Philadelphia, Already Figured Out."
- *Supporting text:* "Skip the research spiral. Tell us your style and budget, and we'll hand you a walkable, realistic weekend plan in under a minute."
- *CTA:* "Build My Weekend" (scrolls to quiz) + secondary "See Weekend Plans" (links to plans.html)
- *Visual:* Yes, hero photo required.

**3. Why Plan With Us (value pillars)**
- *Purpose:* Build credibility before asking for engagement.
- *Content:* 3 short callout cards: Walkable & Car-Free, Transparent Pricing (No Surprises), Local Food & Culture, Curated.
- *Headline:* "Why Plan With Us?"
- *Visual:* Small icon or simple graphic per card, optional but nice to have.
- No CTA needed here.

**4. Featured Weekend Plans**
- *Purpose:* Preview the 3 offerings so visitors can browse before taking the quiz.
- *Content:* 3 preview cards, one per weekend track, each with a short description and a "View Plan" link to `plans.html`.
- *Headline:* "Three Ways to Spend Your Weekend."
- *Visual:* Yes, one representative photo per track.

**5. Build Your Weekend (main interactive feature)**
- *Purpose:* The core engagement tool. See Section 7 for full design.
- *Headline:* "Find Your Weekend in 60 Seconds."
- *Supporting text:* One line explaining it's 3 quick questions.
- *CTA:* Inside the results, not before them ("See Full Itinerary").

**6. CTA Banner**
- *Purpose:* Capture visitors who skip the quiz.
- *Headline:* "Want Something More Custom?"
- *Supporting text:* Short line inviting a direct inquiry.
- *CTA:* "Get in Touch" → `contact.html`

**7. Footer**
- Logo, nav links, student project disclosure, copyright.

*Sections deliberately excluded:* a separate "Featured Activities" grid and a standalone "How It Works" block. Both would duplicate content already covered by the offerings preview and the quiz's own instructions, so they're left out to keep the homepage from getting bloated.

---

## 4. Weekend Plans Page (Services/Offerings)

Three offerings, framed as services the business provides, not just attraction categories:

### Offering 1: The Founding Weekend
- **Description:** A fully mapped 48-hour route through Old City and Independence National Historical Park, sequenced to avoid backtracking and sold-out timed-entry tickets. Covers Independence Hall, the Liberty Bell Center, the Museum of the American Revolution, Elfreth's Alley, and a stop at Reading Terminal Market.
- **Benefit:** Saves hours of research and prevents the two most common first-timer mistakes: missing a timed-entry window and over-scheduling a small walkable area.
- **Visual:** Independence Hall or Liberty Bell photo.
- **CTA:** "View This Weekend"

### Offering 2: The Art & Riverfront Weekend
- **Description:** A weekend built around the Benjamin Franklin Parkway and Fairmount, pairing the Barnes Foundation and Philadelphia Museum of Art with a scenic stroll on the Schuylkill Banks Boardwalk and dinner in Rittenhouse Square.
- **Benefit:** Balances world-class museum time with outdoor riverfront relaxation, including timing tips for pay-what-you-wish admission windows.
- **Visual:** PMA / Rocky Steps or Schuylkill Banks Boardwalk photo.
- **CTA:** "View This Weekend"

### Offering 3: The Local Flavor Weekend
- **Description:** A food-first route connecting Reading Terminal Market, the South 9th Street Italian Market, Philadelphia's Magic Gardens, and dinner in South Philadelphia.
- **Benefit:** Guides visitors straight to the food locals actually eat, while skipping the standard tourist-trap stops.
- **Visual:** Reading Terminal Market or Italian Market photo.
- **CTA:** "View This Weekend"

*Note on scope:* Three offerings is the right number here. A fourth ("family weekend," "custom builder," etc.) was considered, but the quiz and the Explore Activities filter already cover personalization, so a fourth static track would mostly duplicate existing content without adding real value.

**Page layout:**
- Header/Nav
- Page banner: short intro framing these as the site's 3 signature "products"
- Each offering as its own full section: name, description, benefit, Saturday/Sunday mini-schedule, price tier indicator, image, CTA
- Small "Rainy Day? Here's the Swap" callout: quick indoor alternatives per track (e.g., swap the boardwalk for the Franklin Institute)
- CTA banner: "Need Something Custom?" → Contact
- Footer

---

## 5. About Page

**Who Philly Weekend Planner is:** A small, fictional local project started by residents who kept watching visiting friends either overplan themselves into exhaustion or wander without a plan and miss the good stuff.

**Why it exists / the problem it solves:** Most tourism sites list hundreds of attractions with no sense of geography, pacing, or cost, which leads to itinerary paralysis, wasted transit time, and avoidable mistakes like sold-out timed tickets.

**Who it serves:** Short-stay regional travelers who want a realistic 48-hour plan, and curious locals looking to explore their own city car-free.

**Mission:** Make a genuinely great Philadelphia weekend accessible without requiring hours of independent research.

**What makes it different:** Curated, not exhaustive. Walkable by design. Transparent about real costs upfront, rather than leaving budget as a surprise.

**Supporting content (keeps the page useful, not just narrative):** A short "Getting Around Without a Car" section covering SEPTA's contactless base fare, Indego bike share, and general walkability, presented as an FAQ accordion (see Section 9, optional third feature).

**Page layout:**
- Header/Nav
- Page banner
- Our Story / Why We Exist
- Mission & Who We Serve
- What Makes Us Different (short comparison-style list)
- Getting Around Without a Car (FAQ accordion)
- CTA banner: "View Weekend Plans" / "Ask a Question" → plans.html / contact.html
- Footer

Keep this page short. It's a student project About page, not a corporate mission statement — 4 to 5 short sections is enough.

---

## 6. Contact Page

**Fields:**

| Field | Required? | Validation | Error Message |
|---|---|---|---|
| Full Name | Yes | Non-empty after trimming whitespace, minimum 2 characters | "Please enter your name." |
| Email | Yes | Matches a standard email pattern (has `@`, a domain, no spaces) | "Please enter a valid email address." |
| Weekend Type | Yes | A select dropdown (Founding / Art & Riverfront / Local Flavor / Not sure yet) that must not be left on the placeholder option | "Please choose a weekend type." |
| Budget | Yes | A select or radio group ($ / $$ / $$$) that must have a selection | "Please select a budget range." |
| Travel Dates | No | If filled in, should be a real date (use `type="date"`); no past-date enforcement needed for this scope | — |
| Interests | No | Free text or checkbox group, no validation required | — |
| Message | No | Free text, no strict validation, reasonable character limit suggested in the placeholder | — |

**Behavior:**
- Submission is intercepted with `event.preventDefault()`.
- All required fields are checked on submit; each invalid field gets a red border/class and its inline error message.
- The first error message also gets a general banner near the top of the form ("Please fix the highlighted fields.").
- On successful validation, the form is replaced with (or a banner is shown above) a confirmation message: "Thanks! We'll follow up on your custom weekend plan within 2 business days." The form fields reset.
- No real backend. This is all client-side.

**Page layout:**
- Header/Nav
- Page banner: "Let's Plan Your Weekend"
- Two-column layout: form on the left, a short "What Happens Next" + response-time note + quick links on the right (stacks to one column on mobile)
- Footer

---

## 7. Main Interactive Feature: Build Your Weekend Quiz

**Where it appears:** Embedded on the Home page, below the "Why Plan With Us" section.

**Questions (kept to 3 for realistic beginner/intermediate scope):**

1. **What matters most to you this weekend?**
   - A) History & Landmarks
   - B) Art & Scenery
   - C) Food & Neighborhoods
2. **What's your budget style?**
   - A) Keep it affordable ($)
   - B) Balanced ($$)
   - C) Treat yourself ($$$)
3. **How do you like to move through a day?**
   - A) Relaxed — 1 to 2 main stops
   - B) Packed — back-to-back stops

*(Optional 4th question about weather, swapping outdoor stops for indoor ones, could be added later — see Section 9 — but is left out of the core quiz to keep the branching logic simple.)*

**What the JavaScript uses:** Three pre-built plan objects (`heritagePlan`, `artsPlan`, `foodPlan`) matching the three Weekend Plans offerings, each storing a name, short description, an array of Saturday stops, an array of Sunday stops, and a link to its section on `plans.html`.

**How results are generated:**
- Question 1's answer directly selects which of the 3 plan objects to use (A → heritage, B → arts, C → food). This is the only branching that changes which plan is shown, keeping the logic simple.
- Question 2's answer (budget style) is used to append a short line of matching text to the result (e.g., "optimized for a budget-conscious weekend") rather than changing the underlying plan.
- Question 3's answer (pace) decides whether to display the full stop list or a shorter, trimmed version (e.g., `stops.slice(0, 2)` for relaxed vs. the full array for packed).

**What the results look like:** A dynamically injected card showing the plan name, one-line description, a Saturday snapshot (2 to 4 bullet stops depending on pace), a Sunday snapshot, and the budget note.

**CTA after results:** "See Full Itinerary" linking to the matching section on `plans.html`, plus a smaller "Retake Quiz" link/button.

---

## 8. Second Interactive Feature: Activity Search & Filter

**Where it belongs:** The Explore Activities page, where all curated activities live.

**What the visitor does:** Uses a category dropdown (Historic Foundations, Arts & Culture, Food & Markets, Outdoor & Entertainment), a price filter ($ / $$ / $$$), a setting filter (Indoor / Outdoor / Mixed), and a live keyword search box, in any combination.

**What happens:** As any control changes, the activity grid re-renders to show only matching cards. A visible result count updates, and an empty-state message appears if nothing matches the combined filters.

**What information it uses:** The activities array of objects defined in Section 10 (name, category, description, neighborhood, price level, setting, tags).

**Why it's useful:** It's the direct payoff of the "curated, not overwhelming" pitch — instead of scrolling 18 cards, a visitor narrows to exactly what fits their interest and budget.

**General JavaScript logic:** One combined filter function runs on any control's `change` or `input` event. It reads the current value of all four controls, chains `Array.prototype.filter()` against the activities array, and for the keyword search compares `.toLowerCase()` against name, description, and tags using `.includes()`. Matching results are mapped to template literals and injected into the grid container.

---

## 9. Optional Third Feature: FAQ Accordion

**Clearly optional** — the project's required interactive feature count (2) is already met by the quiz and the filter. This is a nice-to-have if time allows.

**Where:** The About page, under "Getting Around Without a Car."

**Content:** Practical logistics questions pulled straight from the research doc: "How much does SEPTA cost?", "Do I need to book tickets in advance?", "Is Philadelphia walkable in a weekend?", "How does Indego bike share work?"

**Why it's a good optional add:** It's low-complexity (event delegation + `classList.toggle()`), reuses content that would otherwise be a wall of static text, and reinforces the site's practical, no-surprises positioning.

---

## 10. Activity Content (18 Sample Listings)

Pulled directly from the research document, organized into 4 categories used by the Explore filter.

### Historic Foundations & Landmarks
1. **Independence Hall** — Old City — Where the Declaration of Independence and Constitution were signed. — $ ($1 reservation fee) — Indoor — Best for: history buffs, families — Tags: historic, landmark, timed-entry
2. **The Liberty Bell Center** — Old City — Free walk-up entry to the iconic cracked bell. — $ (Free) — Indoor — Best for: all visitors — Tags: historic, free, walk-up, family-friendly
3. **Museum of the American Revolution** — Old City — Interactive galleries and George Washington's original war tent; ticket valid 2 consecutive days. — $$ ($25–$27) — Indoor — Best for: history enthusiasts — Tags: museum, historic, two-day-ticket
4. **National Constitution Center** — Historic District — Nonpartisan museum with the *Freedom Rising* show and 42 bronze delegate statues. — $$ ($19.95–$24.95) — Indoor — Best for: families, civics fans — Tags: museum, historic, rainy-day
5. **Elfreth's Alley & Museum** — Old City — The nation's oldest continuously occupied residential street. — $ ($3 museum / street is free) — Mixed — Best for: architecture fans — Tags: historic, free-option, quick-visit, photogenic

### World-Class Arts & Culture
6. **Philadelphia Museum of Art** — Fairmount/Parkway — Encyclopedic art collection, plus the famous Rocky Steps. — $$ ($30) — Mixed — Best for: art lovers, pop-culture fans — Tags: art, museum, iconic, pay-what-you-wish-option
7. **The Barnes Foundation** — Logan Square — Impressionist and Post-Impressionist masterworks in unique curated "ensembles." — $$ ($30) — Indoor — Best for: art enthusiasts, couples — Tags: art, museum, first-sunday-free
8. **Eastern State Penitentiary** — Fairmount — Historic ruin of a radial prison, with an audio tour narrated by Steve Buscemi. — $$ ($21–$23) — Mixed — Best for: solo travelers, quirky-history fans — Tags: historic, atmospheric, audio-tour
9. **Philadelphia's Magic Gardens** — South Street — A mosaic folk-art labyrinth built from tiles, mirrors, and found objects. — $ ($15.50) — Mixed — Best for: photographers, couples — Tags: art, photogenic, timed-entry

### Food & Markets
10. **Reading Terminal Market** — Center City — Historic 1893 indoor market with 75+ vendors. — $–$$ ($5–$20) — Indoor — Best for: foodies, all visitors — Tags: food, market, rainy-day, budget-friendly
11. **Tommy DiNic's** — Center City (Reading Terminal) — Benchmark roast pork sandwich stall. — $ ($12–$16) — Indoor — Best for: foodies, solo travelers — Tags: food, sandwich, iconic-eat
12. **South 9th Street Italian Market** — South Philadelphia — The oldest continuous open-air market in the country. — $ ($5–$20) — Outdoor — Best for: foodies, budget travelers — Tags: food, market, outdoor, authentic
13. **Dalessandro's Steaks** — Roxborough — Neighborhood cheesesteak counter known for finely chopped ribeye. — $ ($13–$16) — Mixed — Best for: foodies — Tags: food, cheesesteak, off-the-beaten-path
14. **Parc Brasserie** — Rittenhouse Square — French brasserie with sidewalk patio dining on the square. — $$–$$$ ($30–$65) — Mixed — Best for: couples, foodies — Tags: dining, upscale, patio, brunch

### Outdoor & Entertainment
15. **Schuylkill Banks Boardwalk** — Center City West — A 2,000-foot riverside path with skyline views. — $ (Free) — Outdoor — Best for: solo, active, couples — Tags: outdoor, free, scenic, walk
16. **Spruce Street Harbor Park** — Delaware Waterfront — Seasonal (May–Oct) park with hammocks, food trucks, and a floating bar. — $ (Free) — Outdoor — Best for: couples, families — Tags: outdoor, free, seasonal, evening
17. **The Franklin Institute** — Logan Square — Hands-on science museum with a walk-through heart and planetarium. — $$ ($29) — Indoor — Best for: families, science fans — Tags: museum, family-friendly, rainy-day
18. **Walnut Street Theatre** — Center City East — America's oldest continuously operating theater. — $$–$$$ ($25–$95) — Indoor — Best for: theater lovers, couples — Tags: entertainment, evening, historic-venue

All details are sourced directly from the research document; nothing above is invented.

---

## 11. Page-by-Page Layout Summary

```
HOME
Header/Nav
Hero
Why Plan With Us (value pillars)
Featured Weekend Plans (3 preview cards)
Build Your Weekend Quiz + Results panel
CTA Banner
Footer

WEEKEND PLANS
Header/Nav
Page Banner/Intro
Offering 1: The Founding Weekend
Offering 2: The Art & Riverfront Weekend
Offering 3: The Local Flavor Weekend
Rainy Day Swap Callout
CTA Banner
Footer

EXPLORE ACTIVITIES
Header/Nav
Page Banner/Intro
Filter & Search Controls
Activity Grid (18 cards)
Empty State Notice
CTA Banner
Footer

ABOUT
Header/Nav
Page Banner
Our Story / Why We Exist
Mission & Who We Serve
What Makes Us Different
Getting Around Without a Car (FAQ Accordion)
CTA Banner
Footer

CONTACT
Header/Nav
Page Banner
Contact/Inquiry Form + Validation States
What Happens Next (sidebar)
Footer
```

---

## 12. Design Direction

- **Overall style:** Clean, modern, editorial-travel. Confident and approachable, not a stiff government tourism site and not overly cute.
- **Color direction:** A warm neutral base (off-white/cream) with a deep brick/terracotta accent (a nod to Philly rowhomes, without being literal) and a navy or forest-green secondary for contrast and CTA buttons, plus a charcoal text color. Keep the full palette to 3 to 4 colors.
- **Typography:** A confident serif or slab-serif for headlines (gives an editorial/historic feel), paired with a clean, readable sans-serif for body text (e.g., Inter or Work Sans). Keep a consistent type scale for h1/h2/h3/body/small across all pages.
- **Button style:** Rounded rectangles, solid fill for primary CTAs, outline/ghost style for secondary actions, consistent padding and a clear hover state.
- **Card style:** Consistent rounded corners, a subtle shadow or 1px border, a fixed image aspect ratio at the top of each card, consistent internal padding.
- **Image style:** Real photography, not clip art or cartoon illustration. Consistent crop ratios across all cards; the hero uses a wide skyline or streetscape shot.
- **Spacing/layout approach:** Generous whitespace, a consistent max-width container (roughly 1200px), consistent vertical padding between sections, CSS Grid/Flexbox for card layouts.
- **Reflecting Philadelphia without over-theming:** Let real neighborhood names, real photography, and specific details (Old City cobblestones, rowhome facades) carry the local identity, rather than leaning on generic tourist iconography like cartoon bell icons or novelty fonts.

---

## 13. Responsive Design Considerations

- **Navigation:** Collapse to a hamburger/mobile menu below roughly 768px; keep tap targets large enough to hit comfortably.
- **Cards:** Multi-column grids drop to a single column on phones, 2 columns max on tablets. Avoid squeezing 3+ columns onto a narrow screen.
- **Images:** Use `max-width: 100%; height: auto;` everywhere. Consider a shorter hero height on mobile so headline text isn't pushed too far down the screen.
- **Forms:** Stack labels and inputs full-width on mobile. Use at least 16px font size on inputs to prevent iOS auto-zoom on focus. Leave enough spacing between fields for touch.
- **Buttons:** Make CTA buttons full-width or generously sized on mobile; avoid small inline text links standing in for buttons.
- **Interactive features:** Quiz answer options should stack vertically and be easy to tap. Filter dropdowns on Explore Activities should stack above the grid instead of forcing a horizontal row that overflows. Accordion headers need enough touch-target height.
- **Spacing:** Reduce section vertical padding somewhat on mobile, but don't eliminate breathing room. Use relative units so spacing scales instead of fixed pixel values that don't adapt.
- **Text sizes:** Use `rem` units, keep body text at a minimum of ~16px on mobile, and scale down headline sizes at breakpoints so they don't wrap awkwardly or overflow the viewport.

---

## 14. Final Project Blueprint Summary

- **Final page list (5):** Home, Weekend Plans, Explore Activities, About, Contact
- **Navigation:** Consistent header/footer nav across all 5 pages, cross-linked via contextual CTAs
- **Main CTA:** "Build My Weekend"
- **3 required offerings:** The Founding Weekend, The Art & Riverfront Weekend, The Local Flavor Weekend
- **Main interactive feature:** Build Your Weekend Quiz (Home page, 3 questions, dynamic result card)
- **Second interactive feature:** Activity Search & Filter (Explore Activities page, category/price/setting/keyword)
- **Optional third feature:** FAQ Accordion (About page, car-free logistics questions)
- **Main content categories:** Historic Foundations & Landmarks, World-Class Arts & Culture, Food & Markets, Outdoor & Entertainment
- **Number of sample activities:** 18
- **General design direction:** Editorial-travel style, warm neutral + brick/terracotta + navy palette, serif headline / sans-serif body pairing, photography-led, generous whitespace, mobile-first responsive behavior throughout
