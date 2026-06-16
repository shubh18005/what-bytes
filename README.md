# Responsive E-Commerce Catalog Workspace

A high-performance, responsive e-commerce product catalog application built with **Next.js 16**, **Tailwind CSS v4**, and **TypeScript**. This project implements dynamic routing, robust product filtering architectures, and a centralized global shopping cart engine.

🎯 **Live Deployment Link:** [View Live Application](https://YOUR-SUBDOMAIN.vercel.app)

---


# Responsive E-Commerce Catalog Workspace

A high-performance, responsive e-commerce product catalog application built with **Next.js 16**, **Tailwind CSS v4**, and **TypeScript**. This project implements dynamic routing, robust product filtering architectures, and a centralized global shopping cart engine.

---

## 🚀 Key Features

*   **Dynamic Product Catalog:** Fully responsive grid layout displaying product mock cards with smooth image transitions and detailed hover states.
*   **Advanced Multi-Attribute Filters:** Instant client-side filtering system allowing users to search by category, price boundaries, and specific tags synchronously.
*   **Centralized Global Cart:** A state-managed shopping cart experience supporting asynchronous quantity modifications, item removals, and real-time total evaluations.
*   **Local State Synchronization:** Automatic hydration and caching mechanics to preserve user cart structures across browser sessions.
*   **Fully Responsive Viewports:** Custom tailored interface breakpoints for flawless rendering across small mobile screens, tablets, and wide desktop setups.

---

## 🛠️ Tech Stack & Architectural Decisions

### Core Framework: Next.js 16 & React
*   Utilizes the modern **App Router architecture** for optimized file-based routing protocols.
*   Separation of high-performance server structures and client-side interactive modules via granular `'use client'` hydration boundaries.

### State Management: Zustand
*   **Why Zustand?** Instead of adding the heavy overhead of Redux Toolkit or dealing with the re-rendering performance bottlenecks of standard React Context API, **Zustand** was selected. 
*   It provides a highly optimized, lightweight, centralized pub/sub store. 
*   Leverages the built-in `persist` middleware to automatically synchronize the basket state with browser `localStorage` cleanly without complex boilerplate.

### Styling System: Tailwind CSS v4
*   Leverages Tailwind's advanced engine for hyper-fast utility styling.
*   Maintains strict visual consistency across fluid responsive layouts using dynamic flexbox configurations and CSS Grid architectures.

---

## 📦 Directory Structure

```text
src/
├── app/                  # App Router structural paths & viewports
│   ├── cart/            # Shopping cart overview layout
│   ├── product/         # Dynamic individual item view modules
│   ├── layout.tsx       # Root document structure & wrapper setups
│   └── page.tsx         # Primary catalog home view
├── components/          # Sharable UI architectural units
│   ├── Header.tsx       # Navigation layout with live badge indicators
│   ├── Footer.tsx       # Responsive footer blocks with social nodes
│   ├── ProductCard.tsx  # Dynamic grid listing item component
│   ├── SidebarFilters.tsx # Multi-variable query filtering component
│   └── SocialIcons.tsx  # Lightweight custom SVG asset components
├── data/                # Data structures & mock product sets
│   └── products.ts      # Core product listing data array
└── store/               # Centralized state management nodes
    └── useCartStore.ts  # Zustand cart interaction engine