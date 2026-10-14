# AssignmentHub

An interactive portfolio for six JavaScript and React assignments. Select a project card to open its working demo without leaving the page.

## Projects

- **JavaScript Calculator** — four arithmetic operations and recent calculation history.
- **Interactive To-Do List** — add, complete, remove, and track tasks.
- **User Registration Form** — validate name, email, phone number, and password.
- **User Profile Card** — explore reusable profile cards and toggle connections.
- **Controlled Form** — edit a contact form and see its live React-state preview.
- **React Counter App** — increment, decrement, and reset a counter.

Each card includes an **Open standalone** link to run that assignment as its own page. The counter is available at `counter.html`; the portfolio remains the default `index.html`.

## Run locally

```sh
npm install
npm run dev
```

Use the search field or category filters to find projects. Click **Explore Project** on any card to try its demo. Press `Ctrl+K` (or `Cmd+K` on macOS) to focus search; press `Escape` or click outside a demo to close it.

## Deploy to GitHub Pages

The `Deploy AssignmentHub to GitHub Pages` workflow builds this portfolio and the independent React assignments, then publishes all six standalone pages whenever changes are pushed to `main`. In the repository, open **Settings → Pages** and set the build and deployment source to **GitHub Actions**. After a successful workflow run, the portfolio will be available at:

`https://prathamesh2003-sketch.github.io/FSD-Assignment-LCA-2-/`

Run Assignment 6's counter independently while developing with `npm run dev -- --open /counter.html`.
