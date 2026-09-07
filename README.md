# 🌿 Aura Haven — Luxury Property & Operations Management Dashboard

[![React](https://img.shields.io/badge/React-18.2-61DAFB?logo=react&logoColor=black)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-4.4-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![TanStack Query](https://img.shields.io/badge/TanStack_Query-v4-FF4154?logo=reactquery&logoColor=white)](https://tanstack.com/query/v4)
[![Supabase](https://img.shields.io/badge/Supabase-PostgreSQL-3ECF8E?logo=supabase&logoColor=white)](https://supabase.com/)
[![Styled Components](https://img.shields.io/badge/Styled_Components-v6-DB7093?logo=styledcomponents&logoColor=white)](https://styled-components.com/)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

An enterprise-grade, full-stack internal operations and reservation management dashboard designed for boutique luxury resorts and premium hospitality properties.

Built with **React 18**, **TanStack React Query**, **Supabase (PostgreSQL & Storage)**, and **Styled Components**, Aura Haven streamlines guest check-ins, cabin inventory, stay durations, and revenue analytics into a unified, high-performance workspace.

---

## 📸 Key Capabilities & Architectural Highlights

- 📊 **Executive Real-Time Analytics:** Real-time KPI cards tracking total revenue, booking counts, check-in rates, and occupancy rate over custom 7, 30, or 90-day timeframes.
- 📈 **Interactive Visualizations:** Area charts for daily total & extras sales, alongside dynamic Donut charts tracking guest stay duration distributions powered by **Recharts**.
- 🛎️ **Guest Activity & Stay Engine:** Rapid front-desk workflow to process arriving guests, register breakfast add-ons, and record check-outs with instant cache synchronization.
- 🏡 **Property & Cabin Inventory CRUD:** Comprehensive cabin manager supporting image uploads directly to Supabase cloud storage buckets, duplication, discounts, and real-time validation via **React Hook Form**.
- 📑 **Server-Side Pagination & URL-Driven State:** Filter and sort bookings, cabin capacities, and dates with state synchronized directly to the browser URL for shareable, bookmarkable filters.
- 🌓 **Adaptive Dual Theme System:** Seamless Light and Dark mode engine powered by CSS custom properties and persistent `localStorage` synchronization.
- 🛡️ **Authentication & Access Control:** Secure user registration, credential login, password/avatar updates, and route-level authorization guards.

---

## 🛠️ Tech Stack & Design Patterns

| Layer               | Technology                   | Architectural Purpose                                                      |
| :------------------ | :--------------------------- | :------------------------------------------------------------------------- |
| **Frontend Core**   | React 18, React Router v6    | Single Page Application with nested declarative routing                    |
| **Build & Tooling** | Vite, ESLint                 | Instant Hot Module Replacement (HMR) and optimized build bundles           |
| **Remote State**    | TanStack Query (React Query) | Server caching, background prefetching, optimistic mutations, invalidation |
| **Database & Auth** | Supabase (PostgreSQL)        | Relational queries, joins, file storage buckets, JWT auth                  |
| **Styling & Theme** | Styled Components v6         | Modular CSS-in-JS, theme tokens, fluid responsive layout                   |
| **Form Engine**     | React Hook Form              | High-performance uncontrolled form inputs with client-side validation      |
| **Data Viz**        | Recharts                     | Composable responsive charts with theme-adaptive color palettes            |
| **Notifications**   | React Hot Toast              | Global non-blocking asynchronous user feedback                             |
| **Error Handling**  | React Error Boundary         | Top-level runtime crash containment with recovery reset                    |

### Advanced Patterns Implemented:

- **Compound Component Pattern:** Highly reusable, zero-prop-drilling components (`<Modal>`, `<Menus>`, `<Table>`, `<Pagination>`) using Context API and `cloneElement`.
- **Prefetching Strategy:** Background pre-loading of subsequent and preceding pagination pages via `queryClient.prefetchQuery()` for instantaneous user transitions.
- **Separation of Concerns:** Business logic and API queries isolated into dedicated custom hooks (`useBookings`, `useCabins`, `useCheckout`, `useRecentStays`), keeping UI components purely presentational.

---

## 🚀 Quick Start (Local Development)

### 1. Clone the repository

```bash
git clone https://github.com/MostafaL2003/Aura-Haven.git
cd Aura-Haven
```

### 2. Install dependencies

```bash
npm install
```

### 3. Connect Supabase

The app communicates with Supabase for PostgreSQL data and image storage. Configuration is defined in `src/services/supaBase.js`:

```javascript
import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "YOUR_SUPABASE_URL";
const supabaseKey = "YOUR_SUPABASE_ANON_KEY";

const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;
```

> **Tip:** You can optionally move these to a `.env.local` file:
>
> ```env
> VITE_SUPABASE_URL=https://your-project.supabase.co
> VITE_SUPABASE_KEY=your-anon-key
> ```

### 4. Run the development server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 📦 Production Build & Deployment

To generate a minified, production-ready build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

### Deploying to Vercel or Netlify

#### **Vercel**

1. Import your GitHub repository into [Vercel](https://vercel.com/).
2. Framework Preset: **Vite**.
3. Build Command: `npm run build`.
4. Output Directory: `dist`.
5. For React Router single-page support, ensure a `vercel.json` rewrite rule is present if needed:

```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
```

#### **Netlify**

1. Import repository to [Netlify](https://www.netlify.com/).
2. Build command: `npm run build`.
3. Publish directory: `dist`.
4. Add a `_redirects` file in `public/` containing:

```text
/*    /index.html   200
```

---

## 📁 Project Architecture

```text
src/
├── context/              # Global React Contexts (DarkModeContext)
├── data/                 # Dev seed data & migration uploader
├── features/             # Feature-based modular architecture
│   ├── authentication/   # Login, signup, update user password & avatar
│   ├── bookings/         # Booking tables, detail view, status management
│   ├── cabins/           # Cabin inventory, creation/edit forms, deletion
│   ├── check-in-out/     # Check-in flow, checkout mutations, today's activity
│   ├── dashboard/        # KPI Stats, Sales chart, Duration chart, filter
│   └── settings/         # App-wide operational settings (rates, limits)
├── hooks/                # Global custom utilities (useOutsideClick, useLocalStorage)
├── pages/                # High-level route views (Dashboard, Bookings, Cabins...)
├── services/             # Supabase client & API abstraction layers
├── styles/               # Global styles, typography & color design tokens
└── ui/                   # Reusable UI library (Modal, Table, Menus, Buttons...)
```

---

## 💼 Engineering Decisions for Technical Review

- **Why TanStack Query over Redux?**  
  Almost all application state in this dashboard is asynchronous server state (bookings, guests, cabins). Using TanStack Query eliminated 80%+ of boilerplate action creators, reducers, and loading/error flags while providing automatic stale-while-revalidate caching out-of-the-box.
- **Why Compound Components?**  
  Components like `<Modal>` and `<Menus>` need high flexibility without cluttering the API with 15+ configuration props. Compound components permit declarative composition where parent and child share state implicitly.
- **URL as Single Source of Truth:**  
  Filters (e.g., `status=checked-out`, `sortBy=totalPrice-desc`, `page=2`) live in the URL query string, enabling users to refresh the browser, share direct links, or navigate with browser history without losing their view state.

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
