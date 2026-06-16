# 🛒 WhatBytes — Responsive E-Commerce Catalog

> 📌 **Assignment Submission** — This project was built as part of a front-end developer assignment for **WhatBytes**.

A high-performance, fully responsive e-commerce product catalog built with **Next.js 16**, **Tailwind CSS v4**, **TypeScript**, and **Zustand** for global state management.

🔗 **Live Demo:** [what-bytes-chi.vercel.app](https://what-bytes-chi.vercel.app)

---

## ✨ Features

- **Dynamic Product Catalog** — Responsive grid layout with smooth image transitions and hover states
- **Advanced Multi-Attribute Filtering** — Instant client-side filtering by category, price range, and tags
- **Global Shopping Cart** — Centralized cart with quantity updates, item removal, and real-time totals
- **Persistent Cart State** — Cart is saved to `localStorage` and restored on page reload
- **Fully Responsive** — Optimized for mobile, tablet, and desktop viewports

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| Next.js 16 (App Router) | Framework & routing |
| React 19 | UI components |
| TypeScript | Type safety |
| Tailwind CSS v4 | Utility-first styling |
| Zustand v5 | Lightweight global state management |
| Lucide React | Icon library |
| Vercel | Deployment |

---

## 📁 Project Structure

```
src/
├── app/
│   ├── cart/            # Cart page
│   ├── product/         # Dynamic product detail pages
│   ├── layout.tsx       # Root layout
│   └── page.tsx         # Home / catalog page
├── components/
│   ├── Header.tsx       # Navbar with live cart badge
│   ├── Footer.tsx       # Responsive footer
│   ├── ProductCard.tsx  # Product grid item
│   ├── SidebarFilters.tsx  # Category, price & tag filters
│   └── SocialIcons.tsx  # SVG social icons
├── data/
│   └── products.ts      # Mock product data
└── store/
    └── useCartStore.ts  # Zustand cart store with persistence
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js v18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/shubh18005/what-bytes.git
cd what-bytes

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

---

## 🌐 Deployment

This project is deployed on **Vercel**.

🔗 Live URL: [what-bytes-chi.vercel.app](https://what-bytes-chi.vercel.app)

Every push to the `main` branch triggers an automatic redeployment.

---

## 📋 Assignment Details

This project was submitted as a **front-end developer assignment** for **WhatBytes**.

### Assignment Requirements Fulfilled

| Requirement | Status |
|---|---|
| Responsive product listing page | ✅ |
| Product filtering (category, price, tags) | ✅ |
| Individual product detail page | ✅ |
| Shopping cart with add/remove/update | ✅ |
| Cart persistence across sessions | ✅ |
| Clean, modular component architecture | ✅ |
| TypeScript throughout | ✅ |
| Deployed live on Vercel | ✅ |

### Key Implementation Decisions

- **Zustand over Redux** — Lighter footprint with built-in `persist` middleware, avoiding the boilerplate overhead of Redux Toolkit while still providing a centralized, reactive store.
- **Next.js App Router** — Used the modern file-based routing system with granular `'use client'` boundaries to separate server and client components for optimal performance.
- **Tailwind CSS v4** — Utility-first styling for rapid, consistent UI development with responsive breakpoints and custom design tokens.
- **Client-side Filtering** — All filters (category, price range, tags) run synchronously on the client for instant, zero-latency feedback without additional API calls.

---

## 👨‍💻 Author

**Shubh Garg**

- 🔗 GitHub: [github.com/shubh18005](https://github.com/shubh18005)
- 💼 LinkedIn: [linkedin.com/in/shubh-garg-90ab9a1b6](https://www.linkedin.com/in/shubh-garg-90ab9a1b6/)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).