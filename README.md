# LCOA redesign prototype

Live: **https://shashankballaya.github.io/LCOA-prototype/?ref=team**

A simple, whitespace-led redesign of the Leo Club of Aurelian site in the
club's emblem palette (cream paper, sage, deep green, gold, one blush accent).
This replaced the 3D dragonfly prototype on 16 Sep 2026 after the president
asked for a revamp: "simple is the new beautiful". The old page is kept as
`dragonfly.html` for reference only.

This repo is published on its own so it stays separate from the live site at
lcoaurelian.in (repo `ShashankBallaya/LCOA`, branch `main`). Never point that
repo's Pages source at this work.

## What is in the page

One static file, `index.html`, no build step. Jost and Cormorant Garamond
from Google Fonts. Vanilla JS only.

| Section | State |
| --- | --- |
| Hero | Done. Generated scene (`images/hero-wide.webp` on desktop, `images/hero-tall.webp` on phones), emblem crest, headline, two buttons. |
| Stat strip | Done. Figures are from the term so far: 6 events, 120+ reached, 3 causes. |
| Promise | Done. Heading, motto text, the group photo in the arch, three pillars (Service, Fellowship, Leadership). |
| Recap | Done. Five real events with photos in `images/recap/`. Photos still carry baked-in dates from the collages; drop in clean sources under the same names, no code change needed. |
| Team | Layout done. Six board members, auto-rotating portrait on desktop, grid on phones. **Photos are stand-ins** from the old site; replace `images/team/{president,vicepresident,secretary,treasurer,marketing,advisor}.webp` with the photoshoot portraits, cropped 4:5, about 900x1125. |
| Events | Placeholder content. Three dark cards, first one wide. |
| Join | Layout done. The form validates but posts nowhere; it needs a form service or backend. |
| Footer | Done. Shares the closing image band (`images/closing.webp`) with Join. |

## Motion

- Hero: staged entrance on load (crest, headline, sentence, buttons, meta line).
- Photos wipe up with `clip-path` when scrolled into view, only after the image has loaded.
- Text blocks fade in. `prefers-reduced-motion` keeps opacity fades and drops movement.
- Team portrait rotates every 3.2 s with a gold progress line. Hover pauses it.

Gotcha: Chrome's IntersectionObserver applies `clip-path`, so a fully clipped
photo never intersects. The observer watches each photo's parent and maps
back (see the `owner` map in the script).

## Design rules used

- All hover effects sit under `@media (hover:hover) and (pointer:fine)`.
- Buttons scale to .97 on press. Transitions name their properties and use
  `--ease-out` / `--ease-in-out` from `:root`.
- Small text in gold uses `--gold-ink` (#7E5F3A) for contrast. `--gold` is for rules only.
- No eyebrow labels above headings, no section numbers, no arrows on cards that go nowhere.
- Card radii 16 px. Border or shadow, not both.

## Working on it

Open `index.html` in a browser, or serve the folder:

```bash
python -m http.server 5184
```

Fonts need a network connection.
