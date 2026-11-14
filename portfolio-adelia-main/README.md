# Adelia Deswita — Personal Portfolio Website

> **Turning Data Into Meaningful Business Insights.**  
> A modern editorial, Framer-inspired personal portfolio website built with **Next.js (App Router)**, **TypeScript**, and **Tailwind CSS**.

---

## ✦ Project Overview

This website serves as the primary digital portfolio for **Adelia Deswita**, an Information Systems graduate and **Business Intelligence & Data Analyst** specializing in:
- E-commerce live shopping conversion analytics and dimensional BigQuery modeling (Blibli)
- Fintech digital payment (PPOB) transaction monitoring, pricing elasticity, and contribution margin auditing (Amartha)
- Spatial data mart design and geographic consumer catchment modeling (PostGIS, GeoPandas, QGIS)
- Supervised machine learning and credit risk default prediction (LightGBM, SHAP)
- Multi-cohort customer retention and LTV modeling

---

## ✦ Visual Identity & Design System

The visual identity follows a **Modern Editorial Minimalist** direction inspired by premium Framer marketplace templates (*Satz, Presse, Nolan Lite, Folyx, Métier, Osei*).

### Palette:
- **Warm White (`#F8F7F4`)**: Primary background
- **Soft Beige (`#EAE8E2`)**: Secondary card backgrounds and tabs
- **Muted Sage (`#DCE5DD` / `#4A5B4C`)**: Subtle highlights and active badges
- **Soft Lavender (`#E8E5F0`)**: Accent tags
- **Charcoal (`#343630`)**: Primary typography and high-contrast buttons
- **Muted Stone Gray (`#77766F` / `#C8C5BD`)**: Secondary typography and subtle borders
- **Pure White (`#FFFFFF`)**: Elevated content cards

---

## ✦ Information Architecture & Pages

The application is structured around a **static-first multi-page architecture**:

1. **Home (`/`)**: High-impact editorial hero, availability indicator, core metric cards, featured project highlights, work experience summary, tech stack, and professional contact CTA.
2. **About (`/about`)**: Asymmetric editorial layout featuring Adelia's portrait, academic background, career narrative, professional interests, and working philosophies.
3. **Experience (`/experience`)**: Interactive vertical timeline detailing work history at **Blibli** (Business Intelligence Intern), **Amartha** (Payment Business Intern), and academic leadership, complete with achievements and links to case studies.
4. **Projects (`/projects`)**: Filterable project catalog categorized by *Business Intelligence, Data Analytics, Data Visualization, Machine Learning, and Geospatial Analytics* with animated card filtering.
5. **Dynamic Project Details (`/projects/[slug]`)**: Exhaustive deep-dive case studies covering *Overview, Business Context, Problem Statement, Objectives, Dataset Scope, Analytical Methodology, Pipeline Architecture, Interactive Dashboard Previews, Findings, Recommendations, Learnings, Image Lightbox, and Compliance Statements*.
6. **Skills (`/skills`)**: Descriptive technical capability matrix across 5 domains (*Query & Database, BI & Visualization, Programming & DS, Data Architecture, Commercial Analytics*) with project references.
7. **Contact (`/contact`)**: Direct channels (Email, LinkedIn, GitHub), CV download button, and a contact form with client-side validation and feedback states.
8. **Utility Routes**:
   - `sitemap.xml` (`/src/app/sitemap.ts`)
   - `robots.txt` (`/src/app/robots.ts`)
   - Custom `404` (`/src/app/not-found.tsx`)

---

## ✦ Tech Stack

- **Framework**: Next.js 16 (App Router, Turbopack)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Animation**: Framer Motion
- **Icons**: Lucide React + Custom SVG Icons
- **Typography**: Poppins (`300`, `400`, `500`, `600`, `700`, `800`) across all elements and headlines
- **Data Layer**: Structured TypeScript models (`src/data/`)

---

## ✦ Getting Started

### Prerequisites
- Node.js `v20+` or `v22+`
- npm `v10+`

### Installation & Run

```bash
# 1. Install dependencies
npm install

# 2. Run local development server
npm run dev

# 3. Open browser at
# http://localhost:3000
```

### Production Build

```bash
# Verify static generation and type safety
npm run build

# Start production server
npm run start
```

---

## ✦ Project Directory Structure

```
src/
├── app/
│   ├── layout.tsx                # Global layout, fonts, SEO metadataBase
│   ├── globals.css               # Editorial color tokens & utility classes
│   ├── page.tsx                  # Home overview page
│   ├── about/page.tsx            # About & philosophy page
│   ├── experience/page.tsx       # Work history timeline page
│   ├── projects/
│   │   ├── page.tsx              # Projects catalog with category filter
│   │   └── [slug]/page.tsx       # Dynamic deep case study pages
│   ├── skills/page.tsx           # Skills matrix page
│   ├── contact/page.tsx          # Contact channels & validated form
│   ├── not-found.tsx             # Editorial 404 page
│   ├── sitemap.ts                # Auto-generated XML sitemap
│   └── robots.ts                 # Search crawler instructions
├── components/
│   ├── navigation/Navbar.tsx     # Sticky navigation with mobile drawer
│   ├── layout/
│   │   ├── Footer.tsx            # Theme-consistent footer
│   │   └── ScrollIndicator.tsx   # Reading progress bar & back-to-top
│   ├── projects/
│   │   ├── ProjectCard.tsx       # Project card with hover scale & pill tags
│   │   └── ProjectFilterGrid.tsx # Category tabs with animated layout
│   ├── experience/
│   │   └── ExperienceTimeline.tsx# Interactive timeline with accordion scope
│   ├── skills/
│   │   └── SkillsDisplay.tsx     # Categorized skill cards with project cross-links
│   ├── contact/
│   │   └── ContactForm.tsx       # Validated form with success state & copy email
│   └── ui/
│       ├── ImageLightbox.tsx     # Fullscreen image modal for dashboards
│       ├── MotionWrapper.tsx     # Framer motion fade-in and stagger wrappers
│       └── Icons.tsx             # Clean SVG social brand icons
├── data/
│   ├── profile.ts                # Bio, academic history, philosophies, CV link
│   ├── experience.ts             # Work history, achievements, and responsibilities
│   ├── projects.ts               # Complete project catalog and case studies
│   └── skills.ts                 # Grouped technical competencies
├── types/
│   └── index.ts                  # TypeScript interface definitions
└── lib/
    └── utils.ts                  # ClassName merging utility
```

---

## ✦ Data Privacy & Compliance Notice

All commercial metrics, merchant names, partner fee schedules, and transaction figures presented in the case studies have been anonymized, normalized, or simulated using synthetic distributions in accordance with non-disclosure and confidentiality best practices. No private credentials or internal production queries are exposed.
