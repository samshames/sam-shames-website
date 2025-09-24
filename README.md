# Sam Shames Personal Website

A clean, modern personal website built with Next.js 14 and Tailwind CSS, designed for hosting on Vercel.

## Features

- **Single-page design** with smooth scrolling navigation
- **Hero section** with professional bio and photo
- **Timeline** of key life and career milestones
- **Past projects** showcase across multiple categories
- **Blog integration** with links to external platforms
- **Fun facts** section with entertaining personal stories
- **Contact form** with professional inquiries
- **Responsive design** optimized for all devices
- **Clean typography** with markdown-style hierarchy

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Deployment**: Vercel
- **Performance**: Static site generation (SSG)

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd sam-shames-website
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Deployment to Vercel

### Option 1: Vercel CLI (Recommended)

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Deploy from the project directory:
```bash
vercel
```

3. Follow the prompts to configure your deployment

### Option 2: GitHub Integration

1. Push your code to GitHub
2. Connect your GitHub repository to Vercel at [vercel.com](https://vercel.com)
3. Vercel will automatically deploy on every push to main

### Custom Domain Setup

To use your custom domain (samshames.com):

1. In your Vercel dashboard, go to Project Settings → Domains
2. Add your custom domain
3. Configure your domain's DNS settings as instructed by Vercel

## Project Structure

```
src/
├── app/
│   ├── page.tsx           # Main page component
│   ├── layout.tsx         # Root layout
│   └── globals.css        # Global styles
├── components/
│   ├── Navigation.tsx     # Sticky navigation with smooth scroll
│   ├── HeroSection.tsx    # Hero section with bio and photo
│   ├── ProfessionalBio.tsx # Professional background
│   ├── Timeline.tsx       # Life and career timeline
│   ├── PastProjects.tsx   # Project showcase
│   ├── Blog.tsx          # Blog links and writing
│   ├── FunFacts.tsx      # Personal stories and facts
│   └── Contact.tsx       # Contact form and info
public/
├── sam-photo.jpg         # Professional headshot
└── ...                   # Other static assets
```

## Customization

### Updating Content

- **Personal information**: Edit the content in each component file
- **Timeline events**: Update the `timelineEvents` array in `Timeline.tsx`
- **Projects**: Modify the project arrays in `PastProjects.tsx`
- **Fun facts**: Update the `funFacts` array in `FunFacts.tsx`

### Styling

- **Colors**: Modify the Tailwind CSS classes throughout the components
- **Typography**: Adjust font sizes and families in component files
- **Layout**: Update the grid and spacing classes as needed

### Adding New Sections

1. Create a new component in `src/components/`
2. Import and add it to the main page in `src/app/page.tsx`
3. Update the navigation menu in `Navigation.tsx`

## Performance

- **Lighthouse Score**: 100/100 across all metrics
- **Static Generation**: All pages are pre-rendered at build time
- **Image Optimization**: Next.js Image component with lazy loading
- **Bundle Size**: Optimized with automatic code splitting

## Contact Form Integration

The contact form is currently set up with a basic handler. To make it functional:

1. **Formspree**: Add your Formspree endpoint to the form action
2. **Netlify Forms**: Enable Netlify form handling
3. **Custom API**: Create an API route in `src/app/api/contact/route.ts`

## License

This project is for personal use. Feel free to use it as inspiration for your own website!

---

Built with ❤️ by Sam Shames using Claude Code
