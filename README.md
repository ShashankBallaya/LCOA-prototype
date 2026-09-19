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

## Ceremony slides (`installationpresentation.html`)

Projection deck for **The Mad Hour**, the club's 1st Installation Ceremony
(20 Sep 2026, Spring Banquets, Vashi). One agenda point per slide: the point
as the `h1` display line, the member or guest calling it as the `h2` under it. The
stage behind every slide is the same generated hero render the home page uses
(`images/hero-wide.webp`, `images/hero-tall.webp` on phones), held still while
only the words cross-fade. A title card opens the deck and a thank-you card
closes it. Not linked from the site and marked `noindex`.

- **Running it:** arrow keys, space or a click anywhere moves on; `Home` / `End`
  jump to the ends; `A` opens the full agenda to jump to any point (with the
  minutes from the run sheet, which never appear on a slide); `F` goes
  fullscreen. Swipe works on a phone. The controls, counter and progress line
  fade out 2.6 s after the last input and return on the next one, so the room
  sees the ceremony and not the chrome.
- **Deep links:** `installationpresentation.html#7` opens on agenda point 7, so a reload during
  the ceremony never loses the place.
- **PDF for the AV desk:** print the page (landscape, background graphics on).
  Each slide is one page.
- **Editing:** the `AGENDA` array at the bottom of the file is the only thing to
  change — `topic`, `speaker`, `mins`, in running order. Wording follows the
  printed agenda card, with its typos fixed.
- **Sizing:** the agenda point sets in four steps by length (18, 40 and 62
  characters), so "Leo Pledge" and a full district title fill about the same
  block of screen. Under the rule, the honorific (`Leo`, `Lion`, `Leo Lion`,
  `MJF Lion`) shares the name's line, told apart by colour rather than stacked
  above it. Two people on one point: separate them with ` / `.
- **No portraits**, by request: the slide face is the agenda point and the name.

### PowerPoint version

`deck/the-mad-hour.pptx` is the same 22 slides as a 16:9 PowerPoint, built by
`python3 tools/build-pptx.py` (needs `python-pptx` and `pillow`). It reads the
`AGENDA` array out of `installationpresentation.html`, so the two decks cannot drift apart: edit
the agenda in one place, rebuild, done.

- **Transitions:** a 0.7 s fade between slides, advancing on click only, written
  so PowerPoint 2010+ gets the timed fade and Keynote, Google Slides and older
  PowerPoint get a plain one. Nothing auto-advances.
- **Real text, not pictures**, so a name can be fixed on the day. It asks for
  Cormorant Garamond and Jost; install both from Google Fonts on the machine
  that will present, or the deck falls back to whatever that machine has.
  Print `installationpresentation.html` to PDF instead if you cannot install fonts — a PDF carries
  its own.
- The stage behind the text is baked once from `images/hero-wide.webp` with the
  page's paper wash, into `deck/assets/` (git-ignored, rebuilt on demand).
- Each slide's notes carry its number and its minutes from the run sheet.
- One known difference from the web deck: PowerPoint has no control for lining
  numerals, so "1st" and "2026-27" use Cormorant's old-style figures.

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
