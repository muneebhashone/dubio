# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- **Start development server**: `npm run dev --turbopack` (uses Next.js Turbopack for faster builds)
- **Build production**: `npm run build`
- **Start production server**: `npm start`
- **Lint code**: `npm run lint`

## Project Architecture

This is a Next.js 15 application using the App Router with TypeScript and modern React 19. The project appears to be a landing page for "Dubio" - a voice/audio-related product.

### Key Technologies
- **Framework**: Next.js 15 with App Router
- **UI**: Tailwind CSS v4 with shadcn/ui components (New York style)
- **Animation**: Framer Motion
- **Email**: EmailJS integration
- **API**: Axios for HTTP requests
- **Icons**: Lucide React

### Project Structure
- `src/app/` - Next.js App Router pages and layout
- `src/components/landing/` - Landing page specific components
- `src/components/ui/` - Reusable UI components (shadcn/ui)
- `src/lib/` - Utility functions and API client

### Component Architecture
The application follows a component-driven architecture with:
- **Landing Components**: All landing page sections are in `src/components/landing/`
- **UI Components**: Reusable components using shadcn/ui in `src/components/ui/`
- **Utilities**: Common utilities and class name merging in `src/lib/utils.ts`

### API Configuration
- **Backend Integration**: Next.js rewrites API calls from `/api/v1/*` to `${BACKEND_URL}/api/*`
- **Environment Variables**: Uses `BACKEND_URL` for backend API endpoint
- **API Client**: Axios instance configured in `src/lib/apiClient.ts` with localhost:3000 base URL

### Styling
- **CSS Framework**: Tailwind CSS v4
- **Design System**: shadcn/ui components with "new-york" style variant
- **Theme**: Dark theme with primary background `bg-[#0a0724]`
- **Typography**: Montserrat font family from Google Fonts

### TypeScript Configuration
- Path aliases configured: `@/*` maps to `./src/*`
- Strict TypeScript enabled
- Next.js plugin integration for optimal type checking