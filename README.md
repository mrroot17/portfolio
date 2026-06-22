# Ozodbek Nodirov — Personal Portfolio

Premium, minimalist one-page personal brand website built with **React 19**, **TypeScript**, **Vite**, and **Tailwind CSS**. It features an editorial design, light/dark themes, bilingual content (Uzbek / English), an animated particle background, and scroll-reveal interactions.

## Features

- Bilingual UI (UZ / EN) with the choice persisted in `localStorage`
- Light & dark themes that respect the OS preference and persist across visits
- Animated canvas particle background that adapts to the active theme
- Scroll-reveal animations via `IntersectionObserver`
- Responsive, accessible layout (ARIA labels, keyboard-friendly navigation)
- SEO-ready: meta description, Open Graph and Twitter cards, favicon

## Tech Stack

| Area        | Technology              |
| ----------- | ----------------------- |
| Framework   | React 19                |
| Language    | TypeScript              |
| Build tool  | Vite 6                  |
| Styling     | Tailwind CSS 3 + PostCSS |

## Getting Started

**Prerequisites:** [Node.js](https://nodejs.org/) 18+ and npm.

```bash
# 1. Install dependencies
npm install

# 2. Start the development server (http://localhost:3000)
npm run dev

# 3. Create an optimized production build
npm run build

# 4. Preview the production build locally
npm run preview
```

## Project Structure

```
.
├── index.html          # HTML entry point + SEO meta tags
├── index.tsx           # React entry point
├── index.css           # Tailwind directives + global styles
├── App.tsx             # Root component (theme & language state)
├── components/
│   ├── Header.tsx      # Navigation, theme & language switchers
│   ├── Hero.tsx        # Intro section with profile photo
│   ├── About.tsx       # Philosophy section
│   ├── Contact.tsx     # Email, phone & social links
│   ├── Footer.tsx      # Footer with quick navigation
│   └── Sparkles.tsx    # Animated particle background
├── tailwind.config.js
├── postcss.config.js
└── vite.config.ts
```

## Customization

- **Content / translations:** edit the `content` objects inside each component (`uz` and `en` keys).
- **Brand colors:** update `accent` (`#4CA1AF`) and `ink` (`#2C3E50`) in `tailwind.config.js` and the CSS variables in `index.css`.
- **Profile image & logo:** replace `components/photo_2026-02-02_14-26-24.jpg` and `components/image.png`.

## License

Personal project © Ozodbek Nodirov. All rights reserved.
