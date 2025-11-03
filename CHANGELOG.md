# Changelog

All notable changes to this project are documented in this file.

The format is based loosely on "Keep a Changelog" and uses sections for Added, Changed, Fixed, Security, and Removed.

## Unreleased - 2025-11-03

### Added
- Centralized header and footer include files: `header.html`, `footer.html` (injected via `include.js`).
- Site-wide search UI (`search.js`) which injects an accessible search input and a magnifying-glass SVG submit button into the header.
- Utility CSS classes and typography improvements in `Asthetics/styles.css` (e.g., `.page-main`, `.section-spacer`, `.visually-hidden`, spacing utilities).

### Changed
- Consolidated and cleaned CSS: duplicated rules reduced and responsive breakpoints improved (`Asthetics/styles.css`, `Asthetics/head&foot.css`).
- Reordered and hardened script initialization to avoid race conditions where `search.js` expects the header DOM (ensure `include.js` runs before `search.js`).
- `albums.js` updated: accessible modal behavior, keyboard support (Enter/Space to open images, Escape to close), focus preservation/restoration, and lazy-loaded images.
- `programme.js` improved to avoid mutating shared arrays when generating randomized timetables; `showTimetable` left available for compatibility.
- `include.js` wrapped and hardened (IIFE, `use strict`, safer fetch with `cache: 'no-store'`, better error handling).

### Fixed
- Removed hard-coded client API key from `events.js` and added a clear fallback message and guidance to use a server-side proxy to protect Google API keys.
- Fixed race conditions and initialization ordering for header-search injection on multiple pages (scripts reordered on `home.html`, `about.html`, `albums.html`, `contacts.html`, `enrolment.html`, `programme.html`).

### Security
- Sensitive information removed from client code: API key/CALENDAR_ID were removed from `events.js`. Please add API keys only to a secure server-side endpoint and proxy requests from the frontend.

### Refactor
- Many inline styles migrated to utility CSS classes. Several HTML pages updated to use the new utilities and to include `id="main"` for skip-link accessibility.
- JS files modernized: wrapped in IIFEs, added strict mode, added DOM guards to avoid errors when scripts run on unrelated pages.

### Removed
- Hard-coded API key from `events.js` (left intentionally blank; front-end shows a fallback message until a server proxy is provided).

### Files touched (representative)
- `Asthetics/styles.css`
- `Asthetics/head&foot.css`
- `Asthetics/albums.css` (minor adjustments)
- `header.html`, `footer.html`
- `include.js`
- `search.js`
- `albums.js`
- `events.js`
- `programme.js`
- `form.js`
- `home.html`, `about.html`, `albums.html`, `contacts.html`, `enrolment.html`, `programme.html`

## Notes & Next Steps
- Move any remaining inline styles into `Asthetics/styles.css` (this reduces duplication and improves maintainability).
- Perform a full accessibility sweep: form labels, ARIA roles and attributes, keyboard focus order, and focus traps for modal dialogs.
- Optimize images for web (responsive sizes and compression) and consider using `srcset` where appropriate.
- Implement a minimal server-side proxy (Node/Express or similar) to securely store Google API keys and serve sanitized calendar data to the client.
- Consider adding automated tests (a few smoke tests) or a simple CI pipeline to run a quick lint/build check.

