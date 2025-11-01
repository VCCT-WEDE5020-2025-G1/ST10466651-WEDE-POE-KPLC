
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
