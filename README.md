# Madiha Asif — Premium Portfolio Website ✨

A production-grade, animated, accessible, and fully responsive personal portfolio website built for **Madiha Asif** (Web Developer & Graphic Designer). Designed to leave a lasting impression on prospective freelance clients, recruiters, and commercial partners.

---

## 🎨 Design Theme & Visual Identity

- **Palette**: Pastel lavender (`#e9d5ff`, `#d8b4fe`), soft blush pink (`#fbcfe8`, `#f472b6`), clean white (`#ffffff`), and deep royal purple/navy (`#0c051a`, `#170a2c`, `#2b1055`).
- **Aesthetic**: Modern glassmorphism, subtle glowing mesh radial gradients, soft shadows, rounded cards, and clean typographical rhythm using *Plus Jakarta Sans* and *Inter*.
- **Interactive Background**: High-performance interactive HTML5 Canvas with animated pastel floating blobs, subtle drifting stars, mouse-driven parallax, and zero-jank execution.
- **Accessibility & Motion**: Fully respects `prefers-reduced-motion` to ensure comfortable viewing for users with motion sensitivity.
- **Micro-Delight**: Celebratory confetti animation on contact form completion.

---

## 🌟 Sections & Architecture

1. **Sticky Glassmorphic Navigation Bar**
   - Custom "MA" monogram brand mark & typography.
   - Smooth anchor scrolling (`#home`, `#about`, `#services`, `#projects`, `#skills`, `#contact`).
   - Active section tracking via `IntersectionObserver`.
   - Prominent "Let's Work Together" button scrolling to the contact section.
   - Responsive mobile slide-in drawer with backdrop blur, auto-close, and keyboard escape handling.

2. **Hero Section**
   - Introductory kicker: `HELLO, I'M`
   - Main title: `Madiha Asif`
   - Animated typewriter headline cycling: `Web Developer | Creative Designer | Digital Creator | UI/UX Enthusiast`
   - Real supporting value proposition.
   - 3 prominent action triggers:
     - **Explore My Work**: Smooth scroll jump to project gallery.
     - **Hire Me**: Opens WhatsApp directly at `+92 309 2274332`.
     - **Download CV**: Opens interactive CV modal and direct PDF download.
   - Pulsing "Available for Freelance Projects" indicator badge.
   - Avatar card with floating micro-badges (`Modern UI/UX`, `Clean Code`, `Karachi, PK`).
   - Animated scroll-down indicator.

3. **About Me Section**
   - Verified bio narrative highlighting both web development and graphic design expertise.
   - 3 Highlight cards: *Responsive Web Design*, *Creative UI/UX*, and *Modern Web Development*.
   - Factual statistics grid (8 featured live websites, 2 creative disciplines, 100% mobile-first responsive architecture, direct communication).

4. **Services Section**
   - 6 Premium service cards:
     1. **Website Development**
     2. **Responsive Web Design**
     3. **Frontend Development**
     4. **Website Redesign**
     5. **Graphic Design**
     6. **Logo Design & Branding**
   - Every service card features a dedicated **"Discuss Your Project"** button that opens WhatsApp with an exact, prefilled, URL-encoded inquiry message.

5. **Projects Portfolio Gallery (All 8 Verified Projects)**
   - Custom browser-frame mockup previews showcasing the actual design, colors, and layout of each website.
   - Interactive category filtering (*All, Full Platforms, Interactive Apps, Frontend Clones, Personal & Docs*).
   - "Live Demo" button (safe `rel="noopener noreferrer"` new-tab link).
   - "View Project" button linking to source repository or project details.
   - Verified technologies only (no fabricated backends or databases).
   - End-of-gallery CTA card linking directly to WhatsApp.

   | # | Project Name | Live URL | Category | Verified Stack |
   |---|--------------|----------|----------|----------------|
   | 1 | **Zaviyar Interior Design** | [Visit Website](https://zaviyar-interior-design-frontend.vercel.app/) | Full Platforms | React / Next.js, Tailwind CSS, Lucide Icons, WhatsApp E-Commerce |
   | 2 | **Student Attendance Tracker** | [Visit Website](https://student-attendance-tracker-xi.vercel.app/) | Interactive Apps | React, TypeScript, Tailwind CSS, shadcn/ui, Vite |
   | 3 | **Modern Web Calculator** | [Visit Website](https://earnest-genie-8b5b6b.netlify.app/) | Interactive Apps | HTML5, CSS3, JavaScript, DOM Engine, Grid Layout |
   | 4 | **OPTP Pakistan Restaurant** | [Visit Website](https://astounding-frangipane-dc78fe.netlify.app/) | Frontend Clones | HTML5, CSS3, Responsive Design, Brand Identity |
   | 5 | **Apple Flagship Experience** | [Visit Website](https://preeminent-shortbread-a6845d.netlify.app/) | Frontend Clones | HTML5, CSS3, FontAwesome, Product Showcase |
   | 6 | **Amazon Pakistan Marketplace** | [Visit Website](https://stalwart-seahorse-7aa4b3.netlify.app/) | Frontend Clones | HTML5, CSS3, FontAwesome, E-Commerce Grid |
   | 7 | **Interactive Digital Resume & CV** | [Visit Website](https://glowing-cactus-77f9b4.netlify.app/) | Personal & Docs | Semantic HTML5, CSS3, Web Typography, Accessibility |
   | 8 | **Multi-Section Navigation** | [Visit Website](https://iridescent-tanuki-80aec8.netlify.app/) | Personal & Docs | HTML5, CSS3, Anchor Links, Document Hierarchy |

6. **Skills & Creative Tools**
   - Categorized into *Frontend Development*, *Design & Creative Identity*, and *Workflow & Tools*.
   - Factual progress-free skill badges citing the exact projects where each skill was utilized.

7. **Functional Contact Section**
   - Direct contact cards for Email (`madihaasif1119@gmail.com`), WhatsApp (`+92 309 2274332`), and GitHub.
   - 1-click clipboard email copying with visual confirmation.
   - Interactive form (Full Name, Email, Project Type, Message).
   - Form validation feedback adhering to modern `:user-invalid` standards (no premature red borders before interaction).
   - Confetti burst on successful submission with a dual-continuation flow:
     - **"Send to WhatsApp"**: Pre-fills the exact name, email, project type, and message into WhatsApp!
     - **"Send via Email Client"**: Pre-fills a native mailto draft with formatted fields.

8. **Footer with Two Distinct Instagram Profiles**
   - **Graphic Design & Logo Design**: [`@logostudios_official`](https://www.instagram.com/logostudios_official/)
   - **Web Design & Development**: [`@web_designer2.1`](https://www.instagram.com/web_designer2.1/)
   - **GitHub**: [`@MadihaAsif66`](https://github.com/MadihaAsif66)
   - Dynamic copyright year: `{new Date().getFullYear()}`
   - Official brand icons and smooth Back-to-Top button with circular scroll progress ring.

9. **Interactive CV Modal & Replacement Location**
   - In-app preview of educational background and technical toolkit.
   - Direct download button for `Madiha_Asif_CV.pdf`.
   - Printable HTML view for clean physical or PDF printing.
   - **Easy File Replacement**: Drop your latest PDF resume at `public/cv/Madiha_Asif_CV.pdf`.

---

## 🚀 Running the Project Locally

### Prerequisites
- Node.js (v18 or higher)
- npm or pnpm

### 1. Clone or Open Project
```bash
cd "C:\Users\Dell-Corei7\.gemini\antigravity\scratch\madiha-portfolio"
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Start Development Server
```bash
npm run dev
```
Open your browser at the local URL displayed (typically `http://localhost:5173`).

### 4. Build for Production
```bash
npm run build
```
Creates an optimized, minified production build in the `dist/` directory.

### 5. Preview Production Build Locally
```bash
npm run preview
```

---

## 🌐 Deploying to Vercel or Netlify

### Option A: Deploying to Vercel (Recommended)
1. Push this folder to a GitHub repository under your account (e.g. `github.com/MadihaAsif66/madiha-asif-portfolio`).
2. Log in to [Vercel](https://vercel.com) and click **"Add New Project"**.
3. Import your GitHub repository.
4. Vercel automatically detects Vite:
   - **Framework Preset**: `Vite`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
5. Click **"Deploy"**. Your site will be live on a fast global CDN in under 1 minute!

### Option B: Deploying to Netlify
1. Log in to [Netlify](https://app.netlify.com) and click **"Add new site"** → **"Import an existing project"**.
2. Connect your GitHub repository.
3. Configure the build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
4. Click **"Deploy site"**.

---

## 📁 Project File Structure

```
madiha-portfolio/
├── public/
│   ├── cv/
│   │   ├── Madiha_Asif_CV.html       # Printable styled resume
│   │   ├── Madiha_Asif_CV.pdf        # Direct downloadable PDF resume
│   │   └── README_CV.txt             # Replacement instructions
│   └── favicon.svg                   # Custom MA monogram SVG favicon
├── src/
│   ├── components/
│   │   ├── AboutMe.tsx               # About section & factual stats
│   │   ├── BackToTop.tsx             # Scroll progress return button
│   │   ├── BrandIcons.tsx            # Crisp SVG Instagram & GitHub brand logos
│   │   ├── BackgroundCanvas.tsx      # Fluid canvas with pastel blobs & particles
│   │   ├── ContactSection.tsx        # Validated form with WhatsApp flow & confetti
│   │   ├── CvModal.tsx               # Interactive CV dialog & download triggers
│   │   ├── Footer.tsx                # Two Instagram profiles & GitHub link
│   │   ├── Hero.tsx                  # Animated typewriter hero & CTA buttons
│   │   ├── Navbar.tsx                # Glassmorphic header & mobile drawer
│   │   ├── ProjectMockupPreview.tsx  # Browser preview cards for all 8 projects
│   │   ├── ProjectsGallery.tsx       # 8-card gallery with category filter tabs
│   │   └── Services.tsx              # 6 service cards with prefilled WhatsApp CTAs
│   │   └── SkillsSection.tsx         # Categorized verified technical badges
│   ├── data/
│   │   └── portfolioData.ts          # Centralized verified project & contact data
│   ├── types/
│   │   └── index.ts                  # TypeScript models and interfaces
│   ├── App.tsx                       # Root application layout & scroll spy
│   ├── index.css                     # Tailwind v4, glassmorphism, & modern inputs
│   └── main.tsx                      # React 19 entrypoint
├── index.html                        # SEO meta tags, OpenGraph, & Google Fonts
├── package.json                      # Scripts & dependencies
├── tsconfig.json                     # TypeScript compiler configuration
└── vite.config.ts                    # Vite 8 & Tailwind v4 plugin configuration
```

---

## 📄 License & Attribution

Designed and developed with passion by **Madiha Asif**.
Licensed under the [MIT License](LICENSE).
#   m a d i h a - p o r t f o l i o  
 