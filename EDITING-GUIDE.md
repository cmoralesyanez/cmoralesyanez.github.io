# Editing & deploying this site

Your site is now data-driven: most updates mean editing one short file in
`/data`, not touching HTML. The pages read those files and render
themselves.

## Update numbers (citations, h-index, counts)
Edit **`data/site-data.js`**. Whatever you put there shows up on the
homepage and Publications page automatically.

> Note on Google Scholar: Scholar blocks automated requests from static
> sites like GitHub Pages, so there's no way to make the citation count
> truly live without your own backend. The badge is a manual snapshot —
> open your [Scholar profile](https://scholar.google.com/citations?user=55g_dQcAAAAJ&hl=es),
> read the number, and update `citations` and `asOf` in that file.

## Add a publication or talk
Edit **`data/publications.js`**:
- New journal paper → add an object to `JOURNAL_ARTICLES`
- New conference talk/poster → add an object to `CONFERENCE_WORK`
- Something under review → add a line to `IN_PREPARATION`

Copy an existing entry and change the fields — the page re-renders with no
other changes needed.

## Add a TV, radio, press, podcast, video or reel appearance
Edit **`data/media.js`** → add an object to `MEDIA_ITEMS`.
- Set `category` to `tv`, `press`, `radio`, `podcast`, `video`, or `reel`
- Set `tvu: true` to mark it as a Canal TVU appearance (gets the amber dot)
- `video`, `podcast` and `reel` items show up as carousels on the Outreach
  page — set `embed` to a YouTube video ID, a Spotify episode ID, or the
  full Instagram reel permalink URL, respectively
- `tv`, `press` and `radio` items show up in the simple list — set `url`
  to a link instead of `embed`

## Add a workshop, congress or seminar
Edit **`data/events.js`** → add an object to `EVENTS`. It appears under the
**Events** filter on the Publications page and in the Events timeline
immediately.

If the event needs its own page (schedule, speakers, registration form):
1. Duplicate `events/template.html`
2. Save it as `events/your-event-name.html`
3. Replace the `[BRACKETED PLACEHOLDERS]` with real content
4. Set that event's `page` field in `data/events.js` to the new file's path

This is the flexible part you asked for — every new conference or workshop
gets a branded mini-site that matches the rest of the site, without
rebuilding anything from scratch.

## Add or update a team member (students, thesis committees)
Edit **`team.html`** directly — it's a plain list grouped by degree level
(Ph.D., M.Sc., undergraduate thesis, undergraduate project). Copy an
existing `<li>` entry and change the name/role/title.

## Change colors / fonts
Open `assets/css/site.css` — all colors are defined as CSS variables at the
very top, under `:root`. The purple/violet scale, the amber accent, and the
three typefaces (Fraunces for headings, Inter for body text, IBM Plex Mono
for labels) are all set there in one place.

## Deploy
This is a normal GitHub Pages repo — no build step. Commit and push to the
`main` branch (or whichever branch Pages is configured to serve) and the
site updates within a minute or two:

```bash
git add .
git commit -m "Update site"
git push
```

## What changed from the old site
- New purple visual identity (the "seismic trace" waveform is the
  recurring signature element, used in the hero — now drawn as an actual
  seismogram with a P-wave onset, S-wave burst and decaying coda)
- Publications and Outreach are now searchable/filterable instead of
  static lists
- The standalone Events page was removed — events now live under an
  **Events** filter on the Publications page (`publications.html?filter=events`
  links straight to it), still backed by `data/events.js` and the
  `events/template.html` mini-site pattern for individual event pages
- New **Team** page listing thesis advising, co-advising and committee
  work, grouped by degree level
- Outreach now leads with three horizontally-scrolling carousels —
  YouTube recorded talks, Spotify podcast episodes, and Instagram Reels —
  followed by a simple list for TV, press and radio
- Canal TVU and other media appearances are tagged and filterable on
  Outreach
- Removed ~13 MB of unused legacy template files and an oversized photo
  (now optimized to ~80 KB)
