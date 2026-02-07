# Chadi Kammoun - Data Science Portfolio

A modern, responsive personal portfolio website built with React, Vite, and Tailwind CSS.

## Tech Stack

- **React 19** - UI library with functional components
- **Vite 6** - Fast build tool and development server
- **Tailwind CSS 3.4** - Utility-first CSS framework
- **Motion** - Animation library
- **Web3Forms** - Contact form service

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linting
npm run lint
```

Development server runs at `http://localhost:5173`

## Project Structure

```
src/
├── components/     # Reusable React components
├── App.jsx        # Main app component
├── main.jsx       # React entry point
└── index.css      # Global styles and CSS variables
public/            # Static assets
```

## Environment Setup

Create a `.env` file in the root directory:

```
VITE_WEB3FORMS_ACCESS_KEY=your_key_here
```

## Deployment

Deploy the `dist/` folder to:
- **Vercel** - Recommended, zero-config
- **Netlify** - Connect GitHub repo for auto-deployments
- **GitHub Pages** - Free static hosting

## License

MIT
