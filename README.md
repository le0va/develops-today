# Playlist App UI Tests

Automated UI tests for the [Playlist App](https://vite-react-alpha-lemon.vercel.app/) using Playwright.

## Tech Stack

- Playwright
- JavaScript
- ESLint
- Prettier

## Prerequisites

- Node.js v18 or higher
- npm v9 or higher

## Setup

1. Install dependencies:
```bash
npm install
```

2. Install Playwright browsers:
```bash
npx playwright install chromium
```

3. Create a `.env` file in the project root and add the base URL:
```
BASE_URL=<application_url>
```

## Run Tests

Run all tests in headless mode:
```bash
npm run test
```

Run tests with a visible browser:
```bash
npm run test:headed
```

Open the HTML report after a test run:
```bash
npm run test:report
```

## Code Quality

Lint and format the code before submitting:
```bash
npm run lint
npm run format
```

## Implemented Test Cases

1. **Search functionality** — filters tracks by name as the user types
2. **Add track to playlist** — clicking "+" adds the track to "Your Playlist"
3. **Verify total playlist duration** — checks that the displayed total matches the sum of added track durations in seconds