# DTD ARMORY

## Visual Style Guide

### DebugTheDay

**Version 1.0**

---

# 1. Brand Direction

### Core idea

**DTD Armory is a tactical intelligence platform for players who want to understand their gear, prepare for activities, and build better.**

The visual language should communicate:

* Tactical
* Technical
* Modern
* Gritty
* Reliable
* Community-driven
* Data-focused
* Premium without feeling corporate

### Brand personality

DTD Armory should feel like:

> **A field operations terminal built by gamers, for gamers.**

It should **not** feel like:

* A generic gaming website
* A military contractor website
* A recreation of The Division 2's interface
* A flashy cyberpunk HUD
* A generic SaaS dashboard

The sweet spot is:

**Tactical field equipment + modern data application.**

---

# 2. Color System

The primary palette should use **dark blue/charcoal + DebugTheDay orange + electric blue**.

## Primary Colors

| Name             | Hex       | Usage                      |
| ---------------- | --------- | -------------------------- |
| Void             | `#070B10` | Main page background       |
| Deep Navy        | `#0B121A` | Large sections             |
| Tactical Surface | `#111B27` | Cards/panels               |
| Raised Surface   | `#172332` | Hover/active surfaces      |
| Border           | `#263545` | Dividers and borders       |
| Muted Text       | `#8E9BA8` | Secondary information      |
| Primary Text     | `#F2F5F7` | Main text                  |
| Orange           | `#FF6A00` | Primary brand/action color |
| Orange Bright    | `#FF7A18` | Hover/active orange        |
| Blue             | `#2388FF` | Secondary brand/accent     |
| Blue Bright      | `#3FA0FF` | Hover/active blue          |
| Success          | `#20C878` | Positive states            |
| Warning          | `#F5A623` | Warning states             |
| Danger           | `#F04444` | Error/destructive states   |

### Primary rule

**Orange = action.**

Use orange for:

* Primary CTA
* Active controls
* Important highlights
* Progress indicators
* Key data points

**Blue = information.**

Use blue for:

* Links
* Secondary actions
* Data visualization
* Informational states
* Navigation accents

Do not allow orange and blue to compete equally on every screen.

---

# 3. Color Ratios

A typical page should approximately follow:

```text
70%  Dark background / surfaces
15%  Secondary surfaces
10%  White / gray typography
 5%  Orange + blue accents
```

The artwork can introduce additional colors, but the **UI itself should remain controlled**.

---

# 4. Typography

Use a two-font system.

## Display Font

### Recommended: Rajdhani

Use for:

* Page titles
* Hero headlines
* Large statistics
* Section headings
* Tactical labels

Characteristics:

* Uppercase
* Strong
* Condensed
* Technical
* Military-inspired without copying The Division

Example:

```text
KNOW YOUR GEAR.
KNOW THE MISSION.
```

Suggested weights:

* 500
* 600
* 700

---

## UI / Body Font

### Recommended: Inter

Use for:

* Body text
* Navigation
* Buttons
* Forms
* Tables
* Tooltips
* Database information

Weights:

* 400
* 500
* 600
* 700

---

## Optional Data Font

For highly technical numbers or stat displays, use:

### IBM Plex Mono

Use sparingly for:

* Coordinates
* Item IDs
* Numerical statistics
* Build values
* Technical metadata

Example:

```text
726,000
135.0%
52.0%
165.0%
```

---

# 5. Typography Hierarchy

### Hero

```text
H1
64–88px
700
Uppercase
Tight line-height
```

### Page title

```text
H1
40–48px
700
```

### Section title

```text
H2
28–36px
700
```

### Card title

```text
H3
18–22px
600
```

### Body

```text
16px
400
Line height: 1.5
```

### Supporting text

```text
14px
400–500
```

### Tactical label

```text
11–13px
600
Uppercase
Letter spacing: 0.15em
```

---

# 6. Logo Usage

DTD Armory should primarily use:

**DTD ARMORY**

with:

**BY DEBUGTHEDAY**

as the supporting brand identifier.

### Logo treatment

Preferred:

```text
DTD ARMORY
BY DEBUGTHEDAY
```

The DTD/DebugTheDay identity should remain recognizable.

### Clear space

Maintain at least:

**1× the height of the DTD emblem**

around the logo.

Never:

* Stretch the logo
* Rotate the logo
* Add glow effects
* Add unnecessary shadows
* Change brand colors arbitrarily
* Place it over extremely busy artwork

---

# 7. Iconography

Use a consistent **outline icon system**.

Recommended library:

**Lucide Icons**

Icon characteristics:

* 1.5–2px stroke
* Simple geometry
* Rounded where appropriate
* No excessive detail

Primary icons:

```text
Dashboard
Armory
Builds
Activities
Database
Community
Settings
Search
User
Notifications
Chevron
Plus
Edit
Trash
Share
Filter
```

Avoid mixing:

* Filled icons
* Cartoon icons
* 3D icons
* Emoji
* Different icon families

---

# 8. UI Shape Language

DTD Armory should use **slightly squared tactical geometry**.

### Border radius

Primary:

```text
8px
```

Small:

```text
4px
```

Large feature panels:

```text
12px
```

Avoid excessive:

```text
rounded-full
```

unless the element is intentionally circular.

Buttons should generally feel like **equipment controls**, not social-media pills.

---

# 9. Borders

Borders should be subtle.

Default:

```text
1px solid #263545
```

Active:

```text
1px solid #FF6A00
```

Information:

```text
1px solid #2388FF
```

Avoid heavy outlines around every element.

---

# 10. Shadows

Use restrained shadows.

Preferred:

```text
0 8px 30px rgba(0,0,0,.25)
```

For major overlays:

```text
0 16px 50px rgba(0,0,0,.40)
```

Avoid dramatic glowing neon shadows.

The **artwork provides atmosphere**.

The UI provides clarity.

---

# 11. Tactical Accent

DTD Armory can use small visual indicators throughout the application.

Examples:

```text
━━━━
```

or

```text
▰
```

or small orange/blue status bars.

These should function as **visual punctuation**, not decoration everywhere.

Example:

```text
BUILD INTELLIGENCE
────────
```

---

# 12. Buttons

## Primary

Orange background:

```text
#FF6A00
```

Text:

```text
#070B10
```

Example:

```text
GET STARTED →
```

Characteristics:

* 44–48px minimum height
* 8px radius
* Bold text
* Strong contrast

---

## Secondary

Dark transparent/surface background.

```text
background: #111B27
border: #263545
```

Example:

```text
EXPLORE BUILDS →
```

---

## Ghost

Transparent:

```text
background: transparent
border: transparent
```

Use for:

* Cancel
* Secondary navigation
* Low-priority actions

---

## Danger

Use red only when necessary.

Examples:

```text
DELETE BUILD
REMOVE AGENT
DISCARD CHANGES
```

Never use red as a decorative accent.

---

# 13. Cards

Cards should feel like **information modules**.

Structure:

```text
┌──────────────────────────────┐
│ LABEL                        │
│                              │
│ TITLE                        │
│ Description                  │
│                              │
│ DATA              ACTION →   │
└──────────────────────────────┘
```

Default:

```text
background: #111B27
border: #263545
radius: 8px
```

Hover:

```text
border → #3A4D60
```

Active:

```text
border → #FF6A00
```

---

# 14. Photography / Artwork

Artwork should be:

### Cinematic tactical concept art

Preferred characteristics:

* Post-crisis urban environments
* Washington D.C.-inspired environments
* Tactical agents
* Gear
* Weapons
* Field equipment
* Safehouses
* Operations centers
* Mission environments
* Squads
* Maps
* Workbenches
* Data terminals

Color treatment:

**Dark blue/gray shadows + warm orange light.**

---

# 15. Artwork Rules

Artwork should generally contain **no website UI**.

Do not bake these into the artwork:

* Buttons
* Navigation
* Page headings
* Search bars
* Cards
* Statistics
* Website menus

Those belong in the actual application.

### Exception

Environmental storytelling can contain:

* Graffiti
* Physical signage
* Military markings
* Posters
* Stencils
* Environmental labels

This helps the artwork feel like part of the world.

---

# 16. Hero Artwork

The homepage hero should be approximately:

```text
16:9
```

Recommended source resolution:

```text
3840 × 2160
```

Composition:

```text
LEFT                  RIGHT

UI negative space     Agent
                      ↓
Headline              D.C. skyline
CTA                   ↓
Supporting text       Mission environment
```

The image should remain readable underneath a dark gradient.

Recommended overlay:

```text
linear-gradient(
  90deg,
  rgba(7,11,16,.92),
  rgba(7,11,16,.55),
  rgba(7,11,16,.10)
)
```

---

# 17. Homepage Image Categories

Use a small, consistent image library.

### Hero

Agent overlooking D.C.

### Armory

Gear/workbench/inventory imagery.

### Builds

Agent + weapons + equipment.

### Activities

Mission environment / tactical operation.

### Database

Gear/item/data-focused imagery.

### Community

Multiple agents/squad.

### Final CTA

A separate cinematic environment.

Do not reuse the exact same image for every section.

---

# 18. Layout

Desktop max width:

```text
1440px
```

Preferred content width:

```text
1200–1320px
```

Page padding:

```text
24px mobile
32px tablet
48px desktop
```

Grid:

```text
12-column desktop
8-column tablet
4-column mobile
```

---

# 19. Spacing System

Use an 8px spacing system.

```text
4px   micro
8px   small
12px
16px  default
24px
32px
48px
64px
80px
96px
128px
```

Avoid arbitrary values unless necessary.

---

# 20. Homepage Section Rhythm

The homepage should alternate between:

**Cinematic → Data → Cinematic → Data**

Example:

```text
HERO
 ↓
PRODUCT FEATURES
 ↓
INTELLIGENCE FEATURE
 ↓
FEATURED BUILDS
 ↓
ACTIVITY INTELLIGENCE
 ↓
DATABASE
 ↓
COMMUNITY
 ↓
FINAL CTA
 ↓
FOOTER
```

This prevents the site from becoming visually exhausting.

---

# 21. Data Visualization

Charts should be restrained.

Primary visualization colors:

```text
Orange
Blue
White
Green
```

Do not create rainbow charts.

Example:

```text
Weapon Damage     ████████████
Critical Chance   ███████
Critical Damage   █████████
Armor             ██████████
```

Data should always prioritize readability over visual spectacle.

---

# 22. Tables

Database tables should look like operational data.

Example:

```text
ITEM                  TYPE       BRAND        RARITY
────────────────────────────────────────────────────
Striker's Mask        Mask       Striker      Gear Set
Coyote's Mask         Mask       Exotic       Exotic
Memento               Backpack   Exotic       Exotic
```

Use:

* Small uppercase headers
* Subtle borders
* Alternating surface colors when necessary
* Clear hover state
* Compact spacing

---

# 23. Navigation

Desktop sidebar/application navigation:

```text
DASHBOARD

ARMORY
  Agents
  Inventory
  Loadouts
  Stash

BUILDS

ACTIVITIES

DATABASE

COMMUNITY

────────────

SETTINGS
```

Active navigation:

* Orange indicator
* Slightly brighter surface
* White text

Inactive:

* Muted gray

---

# 24. Search

Search should eventually become a **global DTD Armory search**.

Placeholder:

```text
Search gear, builds, activities...
```

Search results can be categorized:

```text
GEAR
BUILDS
ACTIVITIES
GUIDES
COMMUNITY
```

This should become one of the defining UX features of DTD Armory.

---

# 25. Motion

Animations should be subtle.

Recommended:

```text
150–200ms
ease-out
```

Use animation for:

* Hover
* Panel transitions
* Dropdowns
* Loading states
* Navigation
* Toasts

Avoid:

* Constant pulsing
* Excessive HUD animation
* Screen shake
* Large parallax effects
* Auto-playing visual distractions

The application should feel **responsive, not animated for the sake of animation.**

---

# 26. Loading States

Use tactical skeleton loaders.

Example:

```text
████████████████
████████
████████████████████
```

Avoid giant spinners whenever possible.

---

# 27. Empty States

Empty states should be useful.

Instead of:

> Nothing here.

Use:

> **YOUR ARMORY IS EMPTY**

> Add your first Agent to start tracking gear and building loadouts.

```text
+ ADD AGENT
```

---

# 28. Voice & Copy

Copy should be:

* Direct
* Confident
* Human
* Short
* Useful

Preferred:

> **Build smarter.**

> **Know what you're bringing.**

> **Find the gear you need.**

> **Prepare for the mission.**

Avoid:

> “Unlock your ultimate gaming potential with our revolutionary ecosystem!”

DTD Armory should sound like a **player talking to another player**, not marketing software.

---

# 29. Brand Voice

### DebugTheDay

The broader brand can be:

> **Same games. Different perspective.**

### DTD Armory

The product can be:

> **Know your gear. Know the mission.**

Supporting language:

> Plan. Build. Improve. Together.

> Build smarter.

> Prepare better.

> Play with purpose.

> Knowledge is a weapon.

---

# 30. What NOT To Do

Avoid these visual patterns:

❌ Excessive neon

❌ Generic cyberpunk

❌ Purple AI gradients

❌ Excessive glassmorphism

❌ Cartoon gaming graphics

❌ Emoji-heavy interfaces

❌ Excessive orange

❌ Copying The Division's exact UI

❌ Copying Ubisoft logos/assets

❌ Making every section look like a game HUD

❌ Putting text directly into AI-generated background images

---

# 31. Tailwind Design Tokens

Recommended starting tokens:

```css
:root {
  --background: #070B10;
  --surface: #111B27;
  --surface-raised: #172332;
  --border: #263545;

  --text-primary: #F2F5F7;
  --text-secondary: #8E9BA8;

  --brand-orange: #FF6A00;
  --brand-orange-hover: #FF7A18;

  --brand-blue: #2388FF;
  --brand-blue-hover: #3FA0FF;

  --success: #20C878;
  --warning: #F5A623;
  --danger: #F04444;
}
```

---

# 32. Component Philosophy

DTD Armory should be built from reusable components.

Core components:

```text
Button
Card
Badge
Input
Select
Tabs
Modal
Dropdown
Tooltip
Table
DataCard
StatCard
Search
Navigation
Sidebar
Header
Avatar
EmptyState
LoadingState
ErrorState
```

If the same UI pattern appears twice:

> **Make it a component.**

---

# 33. Responsive Design

### Desktop

Prioritize:

* Information density
* Multi-column layouts
* Sidebar navigation
* Large artwork
* Tables

### Tablet

Reduce:

* Column count
* Image size
* Sidebar width

### Mobile

Prioritize:

* One-column content
* Bottom/mobile navigation
* Large touch targets
* Simplified tables
* Condensed cards

The mobile experience should **not** simply be the desktop UI squeezed onto a phone.

---

# 34. Homepage Visual Formula

The ideal DTD Armory homepage should visually feel like:

```text
           CINEMATIC
               ↓
        ┌──────────────┐
        │   HERO ART   │
        └──────────────┘
               ↓
             DATA
               ↓
        ┌──────────────┐
        │   FEATURES   │
        └──────────────┘
               ↓
         INTELLIGENCE
               ↓
        ┌──────────────┐
        │  BUILD TOOL  │
        └──────────────┘
               ↓
           COMMUNITY
               ↓
        ┌──────────────┐
        │ FINAL CTA    │
        └──────────────┘
```

The artwork creates the **emotion**.

The application creates the **utility**.

---

# 35. Final Design Principle

Every screen should answer one question:

> **Does this help the Agent make a better decision?**

If yes, keep it.

If it's only there because it looks cool, reconsider it.

DTD Armory should ultimately feel like a tool an experienced player keeps open beside the game—not merely another gaming website.

---

## DTD ARMORY IN ONE SENTENCE

**A tactical intelligence platform where Agents manage their gear, build better loadouts, understand activities, and learn from the community.**
