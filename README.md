# Personal Portfolio Website

A modern, responsive personal portfolio website built with React, Vite, and Tailwind CSS. Features a clean dark theme design with smooth animations and interactive components.

## Features

- ⚡ **Fast Performance** - Built with Vite for lightning-fast development and production builds
- 🎨 **Modern Design** - Dark theme with green accent colors and smooth transitions
- 📱 **Fully Responsive** - Mobile-first design that works on all devices
- 🧩 **Component-Based** - Reusable React components for easy customization
- 🎯 **SEO Friendly** - Semantic HTML and proper meta tags
- ♿ **Accessible** - WCAG compliant with proper ARIA labels
- 🚀 **Optimized** - Tailwind CSS with custom utilities and minimal bundle size

## Sections

- **Hero** - Eye-catching introduction with profile image and CTA buttons
- **About** - Personal information and background
- **Skills** - Technology stack organized by category
- **Projects** - Showcase of recent work with descriptions and links
- **Experience** - Timeline of professional experience and education
- **Contact** - Contact form and social media links
- **Footer** - Navigation and social links

## Tech Stack

- **React 19** - UI library with functional components
- **Vite 6** - Fast build tool and development server
- **Tailwind CSS 3.4** - Utility-first CSS framework
- **PostCSS** - CSS processing with Autoprefixer
- **JavaScript (ES6+)** - Modern JavaScript

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/yourusername/portfolio-react.git
   cd portfolio-react
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Start the development server
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

### Building for Production

```bash
npm run build
```

This creates an optimized production build in the `dist/` folder.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
portfolio-react/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx          # Navigation header with mobile menu
│   │   ├── Icons.jsx           # SVG icon components
│   │   ├── Hero.jsx            # Hero section
│   │   ├── About.jsx           # About section
│   │   ├── Skills.jsx          # Skills section
│   │   ├── Projects.jsx        # Projects showcase
│   │   ├── Experience.jsx      # Experience and education timeline
│   │   ├── Contact.jsx         # Contact form
│   │   └── Footer.jsx          # Footer
│   ├── App.jsx                 # Main app component
│   ├── main.jsx                # React entry point
│   └── index.css               # Global styles and CSS variables
├── public/
│   └── ff.png                  # Profile image
├── index.html
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── package.json
└── README.md
```

## Customization

### Update Personal Information

Edit the content in each component (`src/components/`) to match your information:
- Update your name, title, and description in `Hero.jsx`
- Modify skills and experience in respective components
- Add your projects in `Projects.jsx`
- Update social links throughout

### Change Colors and Styling

The design system uses CSS variables defined in `src/index.css`. Modify:
- Primary color: `--primary`
- Background colors: `--background`, `--muted`
- Border colors: `--border`

Or customize the Tailwind config in `tailwind.config.js`.

### Replace Profile Image

1. Add your image to the `public/` folder
2. Update the `src` in `Hero.jsx` to point to your image:
   ```jsx
   <img src="/your-image.png" alt="Profile" />
   ```

## Deployment

This portfolio can be deployed to various platforms:

- **Netlify** - Connect your GitHub repo for automatic deployments
- **Vercel** - Zero-config deployment with optimal performance
- **GitHub Pages** - Free static hosting
- **Any static hosting** - Build and upload the `dist/` folder

## Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build locally
npm run lint     # Run ESLint (if configured)
```

## Performance

- Optimized bundle size with tree-shaking
- Lazy loading of images
- CSS minification and purging unused styles
- Fast page load with Vite's optimizations

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available under the MIT License. See the LICENSE file for more details.

## Contributing

Feel free to fork this project and customize it for your own portfolio. If you make improvements, consider sharing them back!

## Contact

- GitHub: [@chadikam](https://github.com/chadikam)
- Email: hello@example.com
- Website: [Your Portfolio URL]

## Acknowledgments

- Inspired by modern portfolio designs
- Built with incredible tools like React, Vite, and Tailwind CSS
- Icons inspired by Lucide Icons

---

Made with ❤️ by Chadi
