
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

