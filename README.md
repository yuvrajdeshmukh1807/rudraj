# Hotel Rudrajya — Authentic Maharashtrian & Kolhapuri Restaurant

> **॥ अतिथी देवो भव ॥**  
> *Authentic Maharashtrian Taste, Served with Tradition*  
> **हॉटेल रुद्रराज्य — अस्सल महाराष्ट्रीयन आणि झणझणीत कोल्हापुरी चव**

[![Live Website](https://img.shields.io/badge/Live_Website-Netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white)](https://fastidious-biscuit-31a1cb.netlify.app/)
[![React 19](https://img.shields.io/badge/React-19.3-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-6.0-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-8.3-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vite.dev/)

---

## 🍽️ About Hotel Rudrajya

**Hotel Rudrajya** brings the royal culinary heritage of Maharashtra to your table. Crafted with hand-ground Kolhapuri spices, cold-pressed oils, freshly harvested grains for hot Jowar and Bajra bhakris, and slow-cooked earthen preparations that awaken your senses with authentic taste.

- **Live URL**: [https://fastidious-biscuit-31a1cb.netlify.app/](https://fastidious-biscuit-31a1cb.netlify.app/)
- **Cuisine**: Traditional Maharashtrian, Kolhapuri Specialities, Royal Thalis
- **Dining Hours**:
  - Lunch: 11:30 AM – 3:30 PM
  - Dinner: 7:00 PM – 11:00 PM
  - Open all 7 days

---

## ✨ Signature Specialities

- **Special Kolhapuri Misal Pav** (झणझणीत कोल्हापुरी मिसळ पाव) — Fiery sprout curry topped with farsan, onions, lemon, and hot buttered pav.
- **Gavran Pithla Bhakri & Thecha** (गावरान पिठलं भाकरी आणि खर्डा) — Rustic roasted gram flour curry served with piping-hot Jowar bhakri and stone-pounded green chili thecha.
- **Kolhapuri Tambda & Pandhra Rassa** (तांबडा आणि पांढरा रस्सा) — Legendary Kolhapuri duo: fiery red spicy broth and rich coconut-milky white broth.
- **Maharashtrian Royal Thali Feast** (शाही महाराष्ट्रीयन थाळी) — Grand assortment of traditional delicacies, bhakris, puran poli, curries, and solkadhi.
- **Sajuk Tupatli Puran Poli** (साजुक तुपातली पुरणपोळी) — Golden flatbread stuffed with fragrant chana dal and organic jaggery, generously glazed with pure cow ghee.
- **Solkadhi & Bharli Vangi** (सोलकढी आणि भरली वांगी) — Refreshing digestive drink made from kokum and fresh coconut milk paired with baby eggplants slow-cooked in roasted peanut gravy.

---

## 🚀 Key Features

- **Responsive Mobile-First Design**: Optimized layouts for iPhone, Android, tablets, and widescreen desktop displays.
- **Instant Table Reservation**: Full validation, meal time slots (Lunch/Dinner), seating preference selection (AC Hall, Traditional Baithak, Garden Courtyard), and quick reservation bars.
- **Interactive Menu Browser**: Real-time dish search, dietary filters (All, Pure Veg, Non-Veg), category tabs (Breakfast, Snacks, Veg, Non-Veg, Thalis, Desserts, Beverages), spice-level badges, and Quick View modals.
- **Food Gallery & Lightbox**: High-resolution gallery with category filtering and interactive modal lightbox.
- **Accessibility & Compliance**: Strict form field naming (`id`, `name`, `autoComplete`), single-page application (SPA) routing fallbacks, and Content Security Policy (CSP) best practices.
- **Quick Contact Integration**: Direct click-to-call and WhatsApp enquiry buttons with automated pre-filled messages.

---

## 🛠️ Technology Stack

- **Frontend**: [React 19](https://react.dev/), [TypeScript](https://www.typescriptlang.org/)
- **Build Tool**: [Vite 8](https://vite.dev/)
- **Styling**: Vanilla CSS Design System with Maharashtrian Heritage color tokens + [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Deployment**: [Netlify](https://www.netlify.com/) with continuous integration from GitHub

---

## 💻 Getting Started Locally

### Prerequisites
- Node.js (version 18+ or 20+)
- npm or pnpm

### Installation
```bash
# 1. Clone the repository
git clone https://github.com/yuvrajdeshmukh1807/rudraj.git

# 2. Navigate to project root
cd rudraj

# 3. Install dependencies
npm install

# 4. Start local development server
npm run dev
```

Visit `http://localhost:5173/` in your browser.

### Production Build
```bash
# Build production bundle to dist/
npm run build

# Preview production build locally
npm run preview
```

---

## 🌐 Deployment Configuration

The repository is configured for zero-configuration continuous deployment on Netlify using [`netlify.toml`](./netlify.toml) and [`public/_redirects`](./public/_redirects):
- **Build command**: `npm run build` (`tsc -b && vite build`)
- **Publish directory**: `dist`
- **Node version**: 20
- **SPA Routing**: `/* -> /index.html 200`
