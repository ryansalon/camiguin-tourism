# Camiguin Tourism 🏝️

A tourism and travel guide web application for **Camiguin Island, Philippines** — the "Island Born of Fire". Discover waterfalls, sandbars, hotels, restaurants, and activities across the island, explore them on an interactive map, and plan your visits with travel-time estimates.

> **Note:** This is a **frontend-only** project. There is **no backend, no API, and no database** — all data is static/local to the app.

## ✨ Features

- **Home Page** – Hero banner, quick stats, featured destinations, newsletter CTA
- **Interactive Island Map** – Leaflet-powered map of Camiguin with custom photo markers, popups, and route drawing
- **Search & Filter** – Search destinations by name and filter by category (Spot / Hotel / Restaurant / Activity)
- **Destination Details** – Overview, features, best time to visit, operating hours, ratings, and reviews section
- **Travel Time Calculator** – Distance/ETA computed via the Haversine formula from Benoni Port or Camiguin Airport (~35 km/h with a route factor)
- **Saved Destinations (Favorites)** – Save favorite spots using browser `localStorage` and manage them on the "My Travel" page
- **Admin Dashboard (Mock)** – Read-only table listing all destinations; Add/Edit/Delete buttons are UI mockups only
- **Smooth Animations** – Page transitions and entrance animations powered by Framer Motion
- **Responsive Design** – Bootstrap 5-based layout with a scroll-aware navbar

## 🛠 Tech Stack

| Category | Technology |
|---|---|
| Framework | [Next.js 16](https://nextjs.org) (App Router) |
| UI Library | [React 19](https://react.dev) |
| Language | TypeScript |
| Styling | Bootstrap 5 + react-bootstrap + custom CSS |
| Maps | Leaflet + react-leaflet |
| Animations | Framer Motion |
| Icons | react-icons |
| Data Storage | Static TypeScript data + `localStorage` *(no database)* |
| Linting | ESLint 9 + eslint-config-next |

## 📁 Project Structure

```
camiguin-tourism/
├── app/
│   ├── layout.tsx              # Root layout: navbar/footer + page transitions
│   ├── page.tsx                # Home page
│   ├── globals.css             # Global styles
│   ├── search/page.tsx         # Search & category filter
│   ├── saved/page.tsx          # Saved/favorite destinations (localStorage)
│   ├── admin/page.tsx          # Admin dashboard (mock, read-only)
│   └── destination/[id]/page.tsx  # Destination details, map & travel calculator
├── components/
│   ├── AppNavbar.tsx           # Responsive navbar
│   ├── AppFooter.tsx           # Footer
│   ├── MapComponent.tsx        # Reusable Leaflet map (client-side only)
│   ├── ReviewsSection.tsx      # Mock reviews display
│   └── home/                   # Hero, QuickStats, FeaturedDestinations,
│                               # MapSection, NewsletterCTA
├── data/
│   └── destinations.ts         # All destination data (static array)
├── types/
│   └── index.ts                # Destination & Review TypeScript interfaces
├── public/
│   └── images/                 # Destination photos
└── package.json
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18.18 or later

### Installation

```bash
npm install
```

### Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Other scripts

```bash
npm run build    # Production build
npm run start    # Start production server
npm run lint     # Run ESLint
```

## 📌 How Data Works

All destination information lives in `data/destinations.ts` as a typed static array. Favorites are persisted in the browser's `localStorage` under the `savedDestinations` key. Since there is no backend or database, any changes to content require editing the source data file.
