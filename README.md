# BizBazar.az — v1

Business buying & selling platform for Azerbaijan, with integrated professional services (valuation, legal, tax, due diligence, consulting, financing).

## Run locally

Open any page directly in a browser, or serve the folder to avoid CORS issues with `fetch`:

```bash
cd platform
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Pages

- `index.html` — landing page (hero search, categories, featured listings, how-it-works, services preview)
- `listings.html` — browse all listings with filters (category, city, price range, revenue range, years) and sorting
- `listing.html?id=<id>` — listing detail (KPIs, description, specs, price card, services upsell)
- `services.html` — 6 professional service categories + verified providers directory
- `sell.html` — seller onboarding (4 steps + listing submission form)

## Data

Seed data lives in `data/`:

- `listings.json` — 28 Baku-area business listings. The listing IDs mirror the tap.az URLs provided (so each entry corresponds to one of the original URLs). **Field content is placeholder data representative of tap.az business-for-sale listings** — swap in real values once the URLs are scraped or manually transcribed.
- `categories.json` — 12 business categories (bilingual labels).
- `services.json` — 6 service categories + 6 provider profiles.

### Listing schema

```json
{
  "id": "47201637",
  "source_url": "https://tap.az/...",
  "title_az": "...", "title_en": "...",
  "category": "cafe_restaurant",
  "city": "Bakı", "district": "Yasamal",
  "price_azn": 85000,
  "area_m2": 180,
  "monthly_rent_azn": 2500,
  "monthly_revenue_azn": 28000,
  "monthly_profit_azn": 6500,
  "staff_count": 9,
  "operating_years": 4,
  "equipment_included": true,
  "license_included": true,
  "reason_az": "...", "reason_en": "...",
  "seller_type": "owner",      // owner | broker | agency
  "posted_date": "2026-04-12",
  "featured": true,
  "description_az": "...", "description_en": "..."
}
```

## i18n

Two languages: **Azerbaijani (AZ, default)** and **English (EN)**. Toggle in the header (pill switch). Selection persisted in `localStorage` under `bb_lang`.
All UI strings live in `STRINGS` in `js/app.js`. Listing records store bilingual fields (`title_az` / `title_en`, etc.). Russian can be added by extending `STRINGS.ru` and adding `*_ru` fields on records.

## Money

All amounts stored in AZN. USD shown as approximation using `AZN_TO_USD = 0.59` in `js/app.js`. Swap for a live rate in production.

## What's next (v2 candidates)

1. **Auth + NDA flow** — gate sensitive financials behind a signed NDA.
2. **Saved searches + alerts** — email buyers when matching listings appear.
3. **Admin CMS** — upload listings, approve submissions, moderate.
4. **Service booking flow** — real forms that route to providers with calendar + payment.
5. **Messaging** — in-platform buyer ↔ seller chat, audit-logged for escrow.
6. **Real images** — currently uses category emoji placeholders; wire in image upload + CDN.
7. **Valuation calculator** — quick revenue/SDE multiple estimator as a lead magnet for the valuation service.
8. **Scraping pipeline** — pull real listings from tap.az/bina.az (with consent / API) into the database.
