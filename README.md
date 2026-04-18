# cirolini.github.io

Personal website — [cirolini.github.io](https://cirolini.github.io)

Rafael Cirolini — Sr. Manager of Product Development at ADP Labs Brazil.
Engineering leadership, applied AI, observability.

## Stack

Static HTML + React (via CDN) + vanilla CSS. No build step.

## Local development

Don't open `index.html` directly — browsers block local script loads.
Run a tiny static server instead:

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

## Deploy

Pushing to `main` publishes automatically via GitHub Pages
(Settings → Pages → Deploy from a branch → `main` / root).

## Structure

```
index.html        # entry point
styles.css        # all styles
components/       # React components loaded as <script type="text/babel">
```

## License

MIT — see [LICENSE](./LICENSE).
