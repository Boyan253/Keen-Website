# Keen Agents Website

A modern, responsive website for Keen Agents - a company that builds custom AI agents for business automation.

## Features

- **Modern React/Next.js Architecture**: Built with Next.js 14, TypeScript, and Tailwind CSS
- **Responsive Design**: Mobile-first approach with beautiful responsive layouts
- **Interactive Components**: 
  - AI Readiness Questionnaire with scoring system
  - Contact form with validation
  - FAQ accordion
  - Hero section with variation toggle
- **SEO Optimized**: Meta tags, sitemap, robots.txt, and semantic HTML
- **Accessibility**: WCAG AA compliant with proper ARIA labels
- **Performance**: Optimized for Core Web Vitals

## Sections

1. **Hero Section**: Primary and risk-averse messaging variations
2. **What We Do**: Core value propositions and feature cards
3. **How We Do It**: 5-phase implementation process with timeline
4. **Success Stories**: Case studies with metrics and testimonials
5. **About Us**: Leadership team and company values
6. **FAQ**: Enterprise concerns and security questions
7. **AI Readiness Quiz**: Interactive 7-question assessment
8. **Contact**: Contact form and company information

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Building for Production

```bash
npm run build
npm start
```

## Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Deployment**: Vercel (recommended)

## Content Management

All content is managed through React components and follows the marketing brief specifications. Key content areas:

- Hero messaging and CTAs
- Feature descriptions and value propositions
- Process phases and deliverables
- Case study data and testimonials
- FAQ questions and answers
- Contact form fields and validation

## Customization

### Colors
The color scheme is defined in `tailwind.config.js`:
- Primary: Blue tones (#0ea5e9)
- Secondary: Gray tones (#64748b)
- Accent: Yellow tones (#eab308)

### Typography
- Primary font: Inter (Google Fonts)
- Display font: Cal Sans (fallback to Inter)

### Components
All components are modular and can be easily customized:
- `components/Header.tsx` - Navigation and logo
- `components/Hero.tsx` - Hero section with variations
- `components/WhatWeDo.tsx` - Features and value props
- `components/HowWeDoIt.tsx` - Process timeline
- `components/SuccessStories.tsx` - Case studies
- `components/AboutUs.tsx` - Team and company info
- `components/FAQ.tsx` - Frequently asked questions
- `components/AIReadinessQuiz.tsx` - Interactive assessment
- `components/Contact.tsx` - Contact form and info

## SEO Features

- Meta tags and Open Graph data
- Structured data for better search visibility
- Sitemap generation
- Robots.txt configuration
- Semantic HTML structure
- Fast loading and Core Web Vitals optimization

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

This project is proprietary to Keen Agents.

## Support

For technical support or questions about the website, please contact the development team.
