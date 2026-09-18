# Calendar art

One wide picture per month, shown at the top of each month card on `events.html`.
A month with no picture falls back to a paper plate with the crest, on the page and
in the downloaded image, so the site works with none of these files present.

## How to add a month

1. Generate the picture (prompt below), landscape 1536x640.
2. Export to WebP, about 1400x600, and strip the metadata.
3. Save it here as `<month>.webp`, for example `october.webp`.
4. Register it in `data/club.js` under `calendarArt`:
   - `'10': 'images/calendar/october.webp'` reuses the picture every year.
   - `'2026-10': 'images/calendar/osw-2026.webp'` applies to that one month only.
5. Copy both `images/calendar/` and `data/club.js` to the `LCOA/prototype/` mirror.

If you replace a file but keep its name, add or raise `?v=2` at the end of the path
in `data/club.js`, so browsers that saw the old picture fetch the new one.

## Rules for every month

- The card shows the picture at about 16:6.5, and a light wash runs over the top.
  Keep the objects low and wide. Keep the top 15 percent quiet.
- No people, no text, no digits, no logos. The crest is already on the page.
- Keep every picture on the same three neutrals: cream #FBF0E3, warm gold #967349,
  ink green #1E3324. Only the accent changes.
- The accent is fixed by the month number, in a rotation of four. Do not pick a
  different one: the note colours on the card follow the same rotation.
  - sage #AEC49D: January, May, September
  - blush #E6A4AE: February, June, October
  - gold #967349: March, July, November
  - rose #8E4255: April, August, December

## Prompt

Swap the two bracketed parts from the table below.

> Editorial still life photograph, matte pastel, soft cream haze. [OBJECTS]
> arranged on [SURFACE]. Objects spread low and wide across the frame, calm empty
> space above. Palette: [ACCENT HEX] with cream #FBF0E3 and warm gold #967349.
> Flat daylight, gentle film grain, shallow depth. No people, no text, no digits,
> no logos. Landscape.

## The months

| Month | Accent | Objects | Surface |
|---|---|---|---|
| January | sage #AEC49D | A new diary, a fountain pen, white tuberose stems, a brass paperweight | Sage green cotton cloth |
| February | blush #E6A4AE | Pink camellia heads, a lace handkerchief, a wax seal with ribbon, pressed petals in a shallow dish | Blush cotton, softly creased |
| March | gold #967349 | Small bowls of muted colour powder in ochre and dusty rose, a terracotta cup, marigold buds, a brass tray | Cream linen |
| April | rose #8E4255 | A clay water pot, a copper tumbler, dry palash blossoms, the corner of a khus mat | Warm sand cloth |
| May | sage #AEC49D | Two green mangoes, a cane hand fan, a glass jug with mint, a folded cotton stole | Sage green cloth |
| June | blush #E6A4AE | A folded paper boat, wet jasmine buds, a sapling in a small clay pot, a notebook in plain paper wrap | Pale stone slab, lightly wet |
| July | gold #967349 | A brass watering can, a seedling wrapped in plain paper, rain wet leaves, a coil of jute twine | Cream linen, damp sheen |
| August | rose #8E4255 | Rakhi threads in cream and rose, spools of thread, a peacock feather, an unlit brass diya | Deep cream cloth |
| September | sage #AEC49D | Peony heads, a blank invitation card, a satin ribbon, a small brass bell | Sage green silk |
| October | blush #E6A4AE | Marigold stems, dry grass, a stack of folded donation cloth, a small ceramic bowl of rice | Blush cloth |
| November | gold #967349 | Unlit clay diyas, a skein of wool, one camellia, dried wheat ears on a brass tray | Cream linen |
| December | rose #8E4255 | Pine sprigs, the corner of a folded blanket, dried rose buds, cinnamon sticks, an unlit cream candle | Warm sand wool |

Source of the pictures so far: the OpenAI Images playground, Medium quality.
