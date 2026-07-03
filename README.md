# Cuba: An Interactive History Timeline

A single-page, interactive timeline of Cuban history from Pre-Columbian Cuba to the present, built for UCF's Cuba history course. No build step, no dependencies — just HTML, CSS, and vanilla JavaScript.

## Running it locally

Any static file server works, e.g.:

```
python3 -m http.server 8000
```

Then open `http://localhost:8000`. (Opening `index.html` directly via `file://` also mostly works, but some browsers block the Wikimedia Commons `fetch()` calls under `file://` — a local server avoids that.)

## Deploying to GitHub Pages

1. Push this repo to GitHub.
2. In the repo settings, under **Pages**, set the source to the `main` branch, root folder.
3. That's it — no build step required.

## Editing the timeline

All event content lives in **`js/data.js`** as a single array, `EVENTS`. To add, remove, or correct an event, edit that array directly — no other file needs to change. Each event follows this shape:

```js
{
  id: "unique-id",                 // used for cross-links; keep it stable once referenced elsewhere
  title: "Event Title",
  date: "1961-04-16",              // ISO date, used for sorting within an era
  dateDisplay: "April 16, 1961",   // shown to users; can be a range or approximate string
  era: "building-new-society",     // must match a key in the ERAS array
  readingTags: ["Building the New Society"],
  isFunFact: false,                // true = styled with the "Did You Know" ribbon
  summary: "2-3 sentence summary shown on the card.",
  details: {
    context: "Longer paragraph for the expanded drawer.",
    connections: ["other-event-id"], // ids of related events, shown as clickable chips
    whyItMatters: "Short present-day relevance note."
  },
  confidence: "verify",             // "high" or "verify" — "verify" shows a caution note in the drawer
  confidenceNotes: "What's uncertain and why.",
  wikimedia: { searchTerm: "search term for Commons", confidence: "high" },
  links: [{ label: "...", url: "...", confidence: "verify" }],
  videos: [{ id: "vimeo-id", title: "Video title" }]
}
```

The 8 eras themselves (labels, colors, order) are defined in the `ERAS` array at the top of the same file. Self-check quiz questions live in the `QUIZZES` object at the bottom, keyed by era.

## How images and video work

- **Images** are fetched live from the [Wikimedia Commons API](https://commons.wikimedia.org/w/api.php) using each event's `wikimedia.searchTerm` — no API key required. If no strong match is found (or the request fails), a colored fallback block is shown instead. Results are cached per-session so filtering/searching doesn't re-fetch.
- **Videos** are embedded via Vimeo's standard public `iframe` embed (no API key required) and only mount when a viewer clicks "Play clip" in an event's detail drawer, so the page doesn't load a dozen video players up front.

## A note on accuracy

Every event includes a `confidence` field. Entries marked `"verify"` include a `confidenceNotes` explanation of what's uncertain — dates that vary by source, disputed figures, or claims (like the Hearst "furnish the war" quote) that are widely considered apocryphal. These show up as a caution note in that event's detail drawer. Please review and correct as needed — this is a teaching tool, and getting the history right matters more than getting the site finished.
