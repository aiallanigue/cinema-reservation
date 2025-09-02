# Cinema Reservation System 🎬

Full-stack cinema seating reservation app with:
- VIP & Regular seats
- Reserve, Sell, Cancel
- DB persistence (Postgres)
- Authentication (JWT)
- Seat hold expiration (10 minutes, auto-cron)
- Pricing & Checkout

## Deployment

### Backend (Render)
1. Push repo to GitHub.
2. Create Render Web Service from `server/`.
3. Set env vars: `DATABASE_URL`, `JWT_SECRET`.
4. Deploy → get API URL.

### Frontend (Vercel)
1. Create Vercel Project from `client/`.
2. Set env var:  
