# Hostinger Deploy

Run:

```bash
npm run build
```

Then upload only the **contents of `dist`** to Hostinger `public_html`.

Do not upload:

- `src`
- `node_modules`
- `package.json`
- old `.html` template pages from the project root

The build script copies `assets/img` into `dist/assets/img`, so Hostinger receives the images and videos needed by the React site.
