# KBS Pager React App

This repository contains a React application showcasing credit card offers.

## Setup

1. Install dependencies:

```bash
npm install
```

2. Start dev server:

```bash
npm start
```

App will be available at http://localhost:3000.

## Build and Deploy to GitHub Pages

1. Update the `homepage` field in `package.json` with your GitHub Pages URL, e.g.:
   ```json
   "homepage": "https://<username>.github.io/<repository-name>"
   ```

2. Commit all changes and push to GitHub.

3. Run:

```bash
npm run deploy
```

This will build the app and publish the contents of the `build` directory to the `gh-pages` branch.

GitHub Pages will serve the site from the configured `homepage`.

For more information, see the [gh-pages](https://www.npmjs.com/package/gh-pages) package and Create React App documentation.
