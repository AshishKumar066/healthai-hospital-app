# HealthAI — Hospital Management (React)

React web version of the HealthAI Flutter app, restructured so a Spring
Boot/Java backend can be plugged in later without touching the UI.

## Run locally

```bash
npm install
npm run dev
```

Open the printed localhost URL. Demo login: `demo@healthai.com` / `demo123`
(or use Sign Up to create a new mock account — stored in memory only).

## Structure

```
src/
├── components/     # Reusable UI (Logo, AuthShell, ChatbotWidget, ...)
├── pages/          # One file per screen (Login, Signup, Dashboard, ...)
├── services/       # API layer — mock now, swap body for axios calls later
├── data/           # mockData.js — single place to replace with real API data
└── App.jsx         # Route definitions
```

When the Java backend is ready, only the `services/*.js` files change
(mock logic → `axios.get("/api/...")`) — pages and components stay the same.

## Pages built so far

- [x] Login (`/login`)
- [x] Signup (`/signup`)
- [x] Global floating chatbot/help widget (bottom-right, every page)
- [ ] Dashboard / Home — nearby hospitals by location, animated cards
- [ ] Appointments / Calendar
- [ ] Doctor listing & profile
- [ ] Patient management
- [ ] Prescriptions & medical records
- [ ] Billing
