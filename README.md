# Cinema Seating Reservation — Vercel-ready Client

This is the React client for the Cinema Seating Reservation UI.
It is Vercel-ready. The app renders a hard-coded seating layout (419 seats) with categories and interactive seat state cycling (Available → Reserved → Sold → Cancelled).

## Local dev

```bash
cd client
npm install
npm start
```

## Deploy to Vercel

1. Push this repo to GitHub.
2. In Vercel, import the repo and set the root directory to `/client`.
3. Build & deploy. Vercel will run `npm run build`.

