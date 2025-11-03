
# KPLC
## Student Details

- Student Number: ST1046651
- Student Name: Chukwuebuka Ezeh
- Module: WEDE5020
- Test Type: POE
- Github Repository Link: https://github.com/VCCT-WEDE5020-2025-G1/ST10466651-WEDE-POE-KPLC.git 

## Description

The KPLC website is a super fun and easy to use space where parents and caregivers can check out everything about early childhood learning. It’s got a sleek dark theme with smooth effects that make browsing enjoyable. You can see the centre’s vibe in photo albums like Memorable Moments, packed with outdoor play, games, and special events. The layout is clean, with a header that keeps the logo, headings, and buttons just where they should be, making everything easy to find. Whether you’re checking out programs or scrolling through happy learning moments, the KPLC website really shows how the centre focuses on playful, all-around development for the kids.

## Notes for Deployment & Live Events

- Do NOT commit API keys or private credentials into the repository. The Google Calendar API key previously found in `events.js` has been removed from client-side code.
- To enable live events safely: create a small server-side endpoint (Node/Express, PHP, etc.) that stores the API key in an environment variable and proxies requests to the Google Calendar API. Your front-end can then call your server endpoint without exposing the key.
- Example approach (Node/Express):
	1. Store the key in an environment variable (e.g., `process.env.GCAL_KEY`).
	2. Create a route `/api/events` that fetches events from Google Calendar with the API key and returns sanitized JSON to the client.
	3. Keep the repository free of secrets and add `.env` to `.gitignore`.

If you'd like, I can scaffold a minimal server proxy example and an updated `events.js` caller that requests `/api/events` (recommended). 

## Part 1 Details
The first part of this POE building:

- The HTML foundation of the website in baseform 
- Create a project proposal
- Research and sourcing for the content and media
- Creating a sitemap

## Part 2 Details

- Fix the already existing CSS and improve it
- Add new components to make the website more aesthetically appealing
- Making sure that the website layout or the formatting is adaptable across various devices
- Adding more complex CSS
- Research and sourcing for the content and media
- Adding my Wirefrmae
- Updating the timeline and budget
- Adding external JS 


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


## Device Adaptability

- This is how it is desplayed on a cellphone (iPhone14 pro)
 <img width="540" height="577" alt="image" src="https://github.com/user-attachments/assets/3feaf581-f367-40ea-9c55-d1c244999008" />
 
- This is how it is desplayed on a tablet (iPad)
 <img width="459" height="588" alt="image" src="https://github.com/user-attachments/assets/218cb329-93e4-407c-b9c8-8678459ca149" />
 
- This is how it is desplayed on a desktop 
 <img width="939" height="592" alt="image" src="https://github.com/user-attachments/assets/e057221c-1e6d-4059-a3b2-06ad7263f456" />


## Reference

Anon. 2025a. WEDE POE KPLC Cite Map. Available at: <https://www.canva.com/design/DAGxKKKLGMA/ugIHPRetHIewHdRCjja4_w/edit>.

Anon. 2025b. WEDE POE KPLC File Management. Available at: <https://www.canva.com/design/DAGxM5WaMBQ/QeTA7Gi_SRseiLitcPCvhA/edit>.

W3Schools, 2025. W3Schools online web tutorials. Available at: <https://www.w3schools.com/>.

Domain ACQ New Hero. (2025). Find Your Perfect Domain Name | Free Domain Search Tool | Wix.com. [online] Available at: https://www.wix.com/lp-en/domain?utm_source=bing&utm_medium=cpc&utm_campaign=506129503.

GoDaddy. (2019). Make Your Own Way | GoDaddy. [online] Available at: https://www.godaddy.com.

HOSTAFRICA. (2025). Best Hosting Provider South Africa | Quality Hosting Services. [online] Available at: https://hostafrica.co.za/.

Schoolandcollegelistings.com. (2025). Kangaroo play and learning centre. [online] Available at: https://www.schoolandcollegelistings.com/ZA/Cape-Town/104197458585169/Kangaroo-play-and-learning-centre [Accessed 28 Sep. 2025].

www.domains.co.za. (2025). Web Hosting South Africa. [online] Available at: https://www.domains.co.za/web-hosting-south-africa.
