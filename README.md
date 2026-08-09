# Modern Portfolio Template

A polished, responsive portfolio starter built with React, TypeScript, Tailwind CSS, and Framer Motion. It is designed for developers, designers, and creators who want a professional online presence without building everything from scratch.

## ✨ Highlights

- Clean, modern one-page layout
- Responsive design for desktop, tablet, and mobile
- Smooth section transitions and hover animations
- Reusable sections for hero, about, projects, and contact
- Elegant dark theme with glassmorphism styling
- Ready-to-customize copy, images, and links

## 🛠️ Tech Stack

- React 19
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React

## 📱 Included Sections

1. Hero section with animated intro and CTAs
2. About section with profile summary and skills
3. Projects section with sample cards and filters
4. Contact section with form and social links



## 🚀 Getting Started

### Prerequisites

- Node.js 18 or newer
- npm or yarn

### Install and run

```bash
npm install
npm start
```

The app will open locally in your browser at http://localhost:3000.

## 🧩 Project Structure

```bash
src/
├── components/
│   ├── About.tsx
│   ├── BackgroundElements.tsx
│   ├── Contact.tsx
│   ├── Hero.tsx
│   ├── LoadingScreen.tsx
│   ├── Navbar.tsx
│   └── Projects.tsx
├── hooks/
│   └── useScrollToSection.ts
├── utils/
│   └── constants.ts
├── App.tsx
├── index.tsx
└── index.css
```

## 🎨 Customization Guide

Replace the example content in the following places:

- Hero content: src/components/Hero.tsx
- About content: src/components/About.tsx
- Project cards: src/components/Projects.tsx
- Contact details: src/utils/constants.ts
- Metadata: public/index.html and public/manifest.json

## 🧱 Build for Production

```bash
npm run build
```

## 🌐 Deployment Options

You can deploy the built app to:

- Netlify
- Vercel
- GitHub Pages
- Any static hosting provider

## 📄 Notes

This project is intended as a flexible template for building a personal portfolio. Replace the placeholder text and links with your own content to make it truly yours.

## 📜 License

No explicit license is included. If you plan to redistribute or publish it, add your preferred license before sharing it publicly.
