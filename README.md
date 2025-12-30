# CORE Car - Premium Corporate Car Service Website

A modern, sophisticated website for CoreCar, featuring a dark moody design with sleek animations and dynamic scroll effects. Built with Next.js 16, TypeScript, Tailwind CSS, and Framer Motion.

## Features

### Design & User Experience
- **Moody Dark Theme**: Sophisticated dark color scheme optimized for executive audiences
- **Smooth Animations**: Framer Motion-powered entrance and scroll animations
- **Responsive Design**: Fully responsive across all devices (mobile, tablet, desktop)
- **Loading Experience**: Elegant loading screen with progress indicator

### Sections & Components

1. **Hero Section**
   - Full-screen hero with parallax background image
   - Animated headline and call-to-action buttons
   - Live statistics counter (25+ Years, 50+ Cities, 24/7 Availability)

2. **Core Principles**
   - Four key pillars: Consistent, On-Time, Reliable, Efficient
   - Animated cards with icon hover effects

3. **Services**
   - Six service offerings with detailed descriptions
   - Grid layout with hover animations
   - Corporate Car Service, Group Transport, Roadshows, Airport Transfers, Event Transportation, Hourly & Point-to-Point

4. **Features**
   - Six key features highlighting competitive advantages
   - Split layout with feature list and chauffeur imagery
   - On-time arrival rate showcase

5. **Fleet Showcase**
   - Four premium vehicles with specifications
   - Rolls Royce Cullinan, Mercedes S-Class, Cadillac Escalade, Mercedes Sprinter
   - Passenger and luggage capacity badges
   - Image zoom effects on hover

6. **Global Reach**
   - Coverage across 50+ cities and 6 continents
   - Regional breakdown by geography
   - Interactive world map visualization

7. **Testimonials**
   - Six customer testimonials with ratings
   - Animated cards with hover effects
   - Client information with role and company

8. **Pricing**
   - Three-tier pricing structure (Basic, Pro, Enterprise)
   - Monthly/Annual toggle with 20% savings indicator
   - Feature comparison lists

9. **FAQ**
   - Accordion-style frequently asked questions
   - Smooth expand/collapse animations
   - Six common questions with detailed answers

10. **Blog Preview** (Ghost CMS Ready)
    - Integration-ready for Ghost blog platform
    - Three most recent posts with featured images
    - Reading time and publish date metadata

11. **Call-to-Action**
    - Final conversion section with background imagery
    - Dual CTA buttons (Book a Ride / Contact Sales)

12. **Footer**
    - Comprehensive site navigation
    - Service links, company info, support resources
    - Legal links and copyright information

## Technology Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4.x
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **UI Components**: Custom Radix UI components
- **CMS**: Ghost CMS integration ready

## Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd corecar
```

2. Install dependencies
```bash
npm install
```

3. Run the development server
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
corecar/
├── app/
│   ├── globals.css          # Global styles and Tailwind config
│   ├── layout.tsx            # Root layout with metadata
│   └── page.tsx              # Homepage with all sections
├── components/
│   ├── ui/                   # Reusable UI components
│   │   ├── button.tsx
│   │   └── card.tsx
│   ├── blog-preview.tsx      # Blog section (Ghost integration)
│   ├── cta.tsx               # Call-to-action section
│   ├── faq.tsx               # FAQ accordion
│   ├── features.tsx          # Features section
│   ├── fleet.tsx             # Fleet showcase
│   ├── footer.tsx            # Site footer
│   ├── global-reach.tsx      # Global coverage map
│   ├── header.tsx            # Navigation header
│   ├── hero.tsx              # Hero section
│   ├── loading-screen.tsx    # Loading animation
│   ├── pricing.tsx           # Pricing tiers
│   ├── principles.tsx        # Core principles
│   ├── services.tsx          # Services grid
│   └── testimonials.tsx      # Customer testimonials
├── lib/
│   └── utils.ts              # Utility functions
├── public/                   # Static assets
├── GHOST_INTEGRATION.md      # Ghost CMS setup guide
├── next.config.ts            # Next.js configuration
├── package.json              # Dependencies
└── tsconfig.json             # TypeScript configuration
```

## Ghost CMS Integration

The website is designed to integrate with Ghost CMS for blog content and dynamic pages. See [GHOST_INTEGRATION.md](./GHOST_INTEGRATION.md) for detailed setup instructions.

### Quick Ghost Setup

1. Install Ghost Content API
```bash
npm install @tryghost/content-api
```

2. Add environment variables
```env
GHOST_API_URL=https://your-site.ghost.io
GHOST_CONTENT_API_KEY=your_content_api_key
```

3. Create Ghost API client in `lib/ghost.ts`
4. Update BlogPreview component to fetch real data

## Design System

### Colors
- **Background**: `oklch(0.12 0 0)` - Deep dark gray
- **Foreground**: `oklch(0.98 0 0)` - Near white
- **Accent**: `oklch(0.85 0.05 45)` - Gold/amber for highlights
- **Border**: `oklch(0.28 0 0)` - Subtle gray

### Typography
- **Font Family**: Geist Sans (primary), Geist Mono (code)
- **Headlines**: 5xl to 8xl (80-96px on desktop)
- **Body**: lg to xl (18-20px)

### Animations
- **Entrance**: Fade in from bottom with stagger delays
- **Hover**: Scale (1.02-1.05) and lift effects
- **Scroll**: Intersection Observer-based reveals
- **Parallax**: Background image movement on scroll

## Performance Optimizations

- Server-side rendering with Next.js App Router
- Image optimization with Next.js Image component
- CSS bundling with Tailwind CSS
- Code splitting by route
- Lazy loading for below-fold content
- Minimal JavaScript bundle with tree shaking

## Browser Support

- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)

## Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Configure environment variables
3. Deploy with automatic CI/CD

### Other Platforms
The application can be deployed to any platform supporting Next.js:
- Netlify
- AWS Amplify
- Cloudflare Pages
- Custom Node.js server

## Cross-Reference with Framer Prototype

This implementation is based on the Framer prototype at:
https://high-state-335324.framer.app/

**Implemented from Prototype:**
- ✅ Premium Corporate Car Service headline
- ✅ Core principles section (4 pillars)
- ✅ Service offerings grid
- ✅ Fleet showcase with Rolls Royce Cullinan
- ✅ Global coverage (50+ cities)
- ✅ Testimonials section
- ✅ Pricing tiers (Basic, Pro, Enterprise)
- ✅ FAQ accordion
- ✅ Navigation structure
- ✅ Dark, sophisticated aesthetic
- ✅ Smooth animations throughout

## Future Enhancements

- [ ] Ghost CMS full integration
- [ ] Booking system integration
- [ ] User authentication portal
- [ ] Real-time vehicle tracking
- [ ] Multi-language support
- [ ] Advanced analytics
- [ ] Live chat support
- [ ] Mobile app deep linking

## Contributing

When contributing to this project:
1. Maintain the dark, sophisticated design aesthetic
2. Ensure all animations are smooth (60fps)
3. Test across multiple devices and browsers
4. Follow existing code structure and naming conventions
5. Update documentation for new features

## License

Copyright © 2024 CORE Car. All rights reserved.

## Support

For questions or support, contact the development team or refer to the documentation.
