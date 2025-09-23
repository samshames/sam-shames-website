# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- **Start development server**: `npm run dev` (uses Next.js with turbopack)
- **Build for production**: `npm run build` (uses Next.js with turbopack)
- **Start production server**: `npm start`
- **Lint code**: `npm run lint` (ESLint)

## Architecture Overview

This is a single-page personal website built with Next.js 15 App Router and Tailwind CSS 4. The architecture follows a component-based design with clean separation of concerns:

### Project Structure
- **App Router**: Uses Next.js 15 App Router with `src/app/page.tsx` as the main page
- **Component Library**: All UI components are in `src/components/` as self-contained React components
- **Single Page Design**: All sections render on one page with smooth scrolling navigation
- **Static Generation**: Built for static deployment with SSG optimization

### Key Components
- `Navigation.tsx`: Sticky navigation with scroll-triggered visibility and smooth scrolling
- `HeroSection.tsx`: Landing section with professional photo and bio
- `ProfessionalBio.tsx`: Career background and expertise
- `Timeline.tsx`: Life and career milestones with timeline visualization
- `PastProjects.tsx`: Project showcase across multiple categories
- `Blog.tsx`: External blog platform integration
- `FunFacts.tsx`: Personal stories and entertaining content
- `Contact.tsx`: Contact form and professional inquiries

### Navigation Pattern
The navigation uses a scroll-triggered sticky header that appears after 300px scroll. All navigation is handled via `scrollToSection()` function that uses `element.scrollIntoView()` for smooth scrolling to section anchors.

### Styling Architecture
- Uses Tailwind CSS 4 with utility-first approach
- Responsive design with mobile-first breakpoints (`md:` for desktop)
- Color scheme primarily uses gray scale with clean, professional appearance
- Typography uses Next.js Google Fonts (Geist Sans and Geist Mono)

### TypeScript Configuration
- Strict TypeScript configuration with `@/*` path mapping for clean imports
- All components are properly typed with React.FC patterns where applicable

## Content Management

Most content is hardcoded within components rather than using a CMS. To update content:
- **Timeline events**: Modify arrays in `Timeline.tsx`
- **Projects**: Update project arrays in `PastProjects.tsx`
- **Fun facts**: Edit arrays in `FunFacts.tsx`
- **Personal info**: Update text content directly in component files

## Deployment Notes

- Optimized for Vercel deployment with static generation
- Uses Next.js Image optimization for performance
- All components are client-side rendered where needed (Navigation uses 'use client')
- No server-side API routes currently implemented