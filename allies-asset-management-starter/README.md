# Allies Asset Management – Next.js (Vercel) Starter

Gold/black, SEO‑ready starter with Home, Services, Packages, Contact and a serverless API for leads.

## Quick start
```bash
npm i
npm run dev
# open http://localhost:3000
```

## Deploy to Vercel
1. Push this folder to GitHub.
2. Go to https://vercel.com/new → Import the repo → Deploy.
3. In Vercel → Project → Settings → **Environment Variables**:
   - `LEAD_WEBHOOK_URL` (optional) – where to forward leads (Zapier/Make/your API).
4. In Vercel → Domains → add your custom domain.
5. Done.

## Customize
- Edit copy in `src/app/*` pages.
- Update phone, address, and links in `src/components/SeoJsonLd.jsx` and layout.
- Replace `public/sitemap.xml` & `public/robots.txt` URLs with your real domain.
- To add portals, set real hrefs on the Home cards (Owner/Tenant).
