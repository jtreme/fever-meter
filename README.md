# Fever Meter

Fever Meter is a public-ready static fan dashboard for Indiana Fever game energy:
Clark Watch, logo-ish threes, longest bomb, Clark assist network, Kelsey Mitchell
heat check, Aliyah Boston impact, supporting cast pulse, and a game-vibe score.

This repo intentionally ships with sample data. Box-score stats can come from a
licensed basketball feed, but longest three and logo-three detection require
shot distance or court coordinates. Keep any licensed API token on the server,
not in browser JavaScript.

## Run Locally

Open `index.html` directly in a browser, or serve the folder:

```powershell
python -m http.server 8765
```

Then visit:

```text
http://127.0.0.1:8765
```

If that port is already taken, use another port:

```powershell
python -m http.server 8790 --bind 127.0.0.1 --directory .
```

## Publish

### GitHub Pages

1. Create a public GitHub repository.
2. Commit `index.html`, `styles.css`, `app.js`, and `assets/`.
3. In the repository, go to Settings -> Pages.
4. Set the source to the main branch root.
5. Use the generated Pages URL as the public app URL.

### Netlify

1. Drag this folder into Netlify Drop, or connect the GitHub repo.
2. Use no build command.
3. Set publish directory to the repository root.

### Vercel

1. Import the repository.
2. Use the default static project settings.
3. Set output directory to the repository root if prompted.

## Data Contract

The UI includes a manual JSON input panel for v1. Paste a payload in the same
shape as the sample, click "Load JSON", and the dashboard updates in the
browser. The entered payload is saved to `localStorage` on that device.

A production endpoint can return the same shape:

```json
{
  "label": "Fever vs Opponent",
  "scoreline": "IND 91 - OPP 86",
  "feverMeter": 88,
  "commentary": "High-pressure win.",
  "logoAlert": {
    "title": "Logo-ish Three Detected",
    "copy": "Clark hit from 31.2 feet."
  },
  "cards": [
    {
      "label": "Clark Watch",
      "value": "24 / 9",
      "meta": "24 points, 9 assists, 4 made threes, 5 turnovers, +11"
    }
  ],
  "assists": [["Boston", 4], ["Mitchell", 3]],
  "shots": [
    {
      "player": "Clark",
      "label": "33-foot logo three",
      "distanceFeet": 33,
      "confidence": "media-reported",
      "source": "Yahoo Sports report",
      "x": 48,
      "y": 22
    }
  ]
}
```

Shot confidence values:

- `measured`: official shot distance or x/y data.
- `media-reported`: a reputable recap or article reports a distance.
- `broadcast-noted`: announcer or broadcast graphic called out the range.
- `fan-observed`: manually tagged from watching, without broadcast/stat confirmation.

## Licensed Data Notes

- Box score: points, assists, rebounds, turnovers, made threes, plus/minus,
  field-goal percentage, and minutes.
- Play-by-play: scoring runs, clutch windows, assisted-by relationships.
- Shot location: x/y coordinates or shot distance for longest three, deep-three
  buckets, and logo-ish detection.

Recommended public architecture:

```text
Browser -> static dashboard -> serverless function -> licensed data provider
```

The serverless function should normalize provider responses into the small JSON
payload above. That makes the app portable and keeps vendor details private.

## Practical Input Options

- Manual JSON: safest public demo path; enter a small post-game summary by hand.
- Private spreadsheet: export JSON from a sheet you maintain, then paste it.
- Static JSON file: replace the sample object with `fetch("game.json")`.
- Serverless API: use only after the licensed data agreement permits public
  display for your domain and use case.

## Public Release Checklist

- Add your production domain in the deployment provider.
- Keep licensed data credentials in environment variables on the server.
- Add a short footer or About page naming the data source once licensed.
- Do not imply official affiliation with the Indiana Fever, WNBA, or any player.
- Confirm your provider license allows public display of derived stats.

## License

MIT. See `LICENSE`.
