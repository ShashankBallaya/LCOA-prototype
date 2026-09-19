# Working on this repo

`README.md` covers what the page is and how it is built. This file holds the
things that are easy to get wrong.

## Two repositories, one club

| | repo | serves | branch |
| --- | --- | --- | --- |
| Prototype | `ShashankBallaya/LCOA-prototype` (this one) | shashankballaya.github.io/LCOA-prototype | `main` |
| Live site | `ShashankBallaya/LCOA` | **lcoaurelian.in** (root `CNAME`) | `main`, with `launch` ahead of it |

Design work happens here. Never point the live repo's Pages source at this
repo's work; copy files across instead.

## The launch trap (live repo, until 20 September 2026)

`.github/workflows/launch.yml` in the live repo fast-forwards `main` to the
`launch` branch at 08:30 UTC / 14:00 IST on 20 Sep 2026 — the moment the
installation ceremony starts. It is `--ff-only` **by design**: it publishes
nothing if `main` has moved on.

So any commit pushed to the live repo's `main` must be followed by merging
`main` into `launch` and pushing that too, or the new site never publishes:

```bash
git push origin main
git checkout -B launch origin/launch
git merge --no-edit -m "Merge main so the launch branch still fast-forwards" main
git push origin launch
git merge-base --is-ancestor origin/main origin/launch   # must succeed
```

The repo's own history shows this pattern ("Merge main so the launch branch
still fast-forwards"). Both workflow files say to delete themselves once the
launch has happened.

## The ceremony deck

`installationpresentation.html` — one agenda point per slide for The Mad Hour,
the 1st Installation Ceremony. The agenda point is the `h1` display line, the
member calling it the `h2` under it; no speaker portraits, by request.

- The `AGENDA` array at the bottom of that file is the **single source of
  truth**. `tools/build-pptx.py` reads it to build `deck/the-mad-hour.pptx`, so
  the two decks cannot drift. Edit the agenda in one place, rebuild.
- Published on the live site as a **self-contained folder**,
  `installationpresentation/` (the page as `index.html`, plus its own copies of
  the three fonts and six images). That was deliberate: a folder no other
  branch writes cannot conflict when `main` merges into `launch`. It is on both
  branches, so it survives the launch. URL: lcoaurelian.in/installationpresentation/
- The `.pptx` stays out of the live repo, by request.
- The page is `noindex` and linked from nowhere. It is for the projector.

## Still to do on the live repo

`main` has no `404.html`, so wrong URLs fall through to GitHub's generic page
until the launch brings the club's own. The conflict-free fix is to copy the
launch branch's file verbatim, then follow the merge-back recipe above:

```bash
git show origin/launch:404.html > 404.html
```

Its "All events" button points at `/events.html`, which only exists after the
launch.

## Conventions

- One static file per page, no build step, ES5-flavoured vanilla JS. Fonts are
  self-hosted from `fonts/` under the OFL; colour and easing tokens live in
  `:root` and are copied into each standalone page rather than shared.
- Hover effects only inside `@media (hover:hover) and (pointer:fine)`.
- Display type carries `font-variant-numeric: lining-nums`; Cormorant defaults
  to old-style figures, which drop below the baseline in headings.
- No eyebrow or kicker labels above a heading.
- `README.md` has the fuller list, including the IntersectionObserver +
  `clip-path` gotcha on the home page.

## Checking work in this sandbox

- Serve with `python3 -m http.server 5184`; drive a real browser through
  Playwright at `/opt/node22/lib/node_modules/playwright` (Chromium is
  pre-installed, never run `playwright install`). Batch the screenshots:
  desktop and phone in one pass.
- Design review: `npx --yes skills use "https://github.com/pbakaus/impeccable"
  --skill "impeccable"`, then its `impeccable detect --json <file>` for the
  mechanical pass.
- To render a `.pptx` for checking, `apt-get update` first, then
  `apt-get install -y libreoffice-impress` (the image ships `libreoffice-core`
  alone, which cannot open any document), and rasterise with `pymupdf`.
  Install Cormorant Garamond and Jost into `~/.fonts` first or the render lies.
- The egress proxy blocks **lcoaurelian.in** and the GitHub Pages domain, so
  published URLs cannot be verified from here. Ask the user to open them.
- Pushing to the live repo needs `add_repo` with `access: "push"` and trips the
  permission classifier on commits, merges and pushes; run those as separate,
  plain commands rather than one compound line, and expect to ask.
