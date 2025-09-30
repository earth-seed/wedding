# Bryce & Leyla's Wedding Website

## Overview

This is a wedding website for Bryce and Leyla's Mediterranean celebration in Akyaka, Turkey on October 1, 2026. The application is a single-page application (SPA) built with React, featuring multiple informational pages about the wedding event, venue, travel information, schedule, and gift registry. The design emphasizes a warm, Mediterranean aesthetic with earthy tones and elegant typography, drawing inspiration from premium travel and hospitality platforms.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework**: React 18 with TypeScript, using Vite as the build tool and development server.

**Routing**: Client-side routing implemented with Wouter, a lightweight alternative to React Router. The application features five main routes:
- Home (`/`) - Hero section with couple introduction and wedding details
- Travel (`/travel`) - Airport and accommodation information
- Venue (`/venue`) - NUUP Hotel venue details and imagery
- Schedule (`/schedule`) - Two-day event timeline (September 30 & October 1, 2026)
- Registry (`/registry`) - Gift preferences including charity donations and honeymoon fund

**UI Component Library**: shadcn/ui components built on Radix UI primitives, providing accessible, customizable components following the "New York" style variant. All components support both light and dark modes.

**Styling Approach**: 
- Tailwind CSS for utility-first styling
- Custom Mediterranean color palette with warm clay, soft sage, and olive gold tones
- Typography using Google Fonts: 'Playfair Display' for headings and 'Lato' for body text (though design guidelines specify 'Lora' and 'Source Serif 4')
- Responsive design with mobile-first breakpoints

**State Management**: TanStack Query (React Query) v5 for server state management, though currently no API endpoints are implemented. Toast notifications handled via custom hook and Radix UI Toast primitives.

**Component Structure**: 
- Reusable presentational components (EventCard, HeroSection, InfoSection, MediaGallery, Navigation)
- Page components for each route
- Centralized shadcn/ui component library in `client/src/components/ui/`

### Backend Architecture

**Server Framework**: Express.js with TypeScript running on Node.js.

**Development Setup**: 
- Vite middleware integration for hot module replacement during development
- Separate production build process bundling both client and server code
- Custom logging middleware for API request tracking

**API Structure**: Currently minimal - the routes are registered but no endpoints are implemented. The application is primarily static/client-side.

**Storage Layer**: In-memory storage implementation (`MemStorage`) with interface (`IStorage`) designed for user management. Currently includes placeholder CRUD methods for users, though not actively used by the wedding website. This abstraction allows easy swapping to database-backed storage in the future.

**Session Management**: Dependencies include `connect-pg-simple` for PostgreSQL session storage, though session handling is not currently implemented.

### Database Schema

**ORM**: Drizzle ORM configured for PostgreSQL via `@neondatabase/serverless` driver.

**Current Schema**: Single `users` table with:
- `id` (varchar, primary key, auto-generated UUID)
- `username` (text, unique, not null)
- `password` (text, not null)

**Schema Definition**: Type-safe schema definitions using Drizzle with Zod validation schemas generated via `drizzle-zod`.

**Migrations**: Configured to output to `./migrations` directory, using `drizzle-kit push` for schema synchronization.

**Note**: The user authentication schema appears to be boilerplate and is not currently utilized by the wedding website functionality. The application is primarily informational with no authentication requirements.

## External Dependencies

### Third-Party UI Libraries
- **Radix UI**: Comprehensive collection of unstyled, accessible components (@radix-ui/react-*)
- **shadcn/ui**: Pre-configured component system built on Radix UI
- **Lucide React**: Icon library for UI elements
- **Embla Carousel**: Touch-friendly carousel component
- **cmdk**: Command menu component
- **Vaul**: Drawer component library

### Database & ORM
- **Neon Database**: Serverless PostgreSQL provider (@neondatabase/serverless)
- **Drizzle ORM**: TypeScript ORM with type-safe queries
- **Drizzle Kit**: CLI tool for schema migrations and management

### Development Tools
- **Vite**: Build tool and development server with HMR
- **TypeScript**: Type safety across frontend and backend
- **Tailwind CSS**: Utility-first CSS framework
- **PostCSS & Autoprefixer**: CSS processing pipeline
- **esbuild**: JavaScript bundler for production server code
- **tsx**: TypeScript execution for development server

### State Management & Data Fetching
- **TanStack Query**: Asynchronous state management for React
- **React Hook Form**: Form state management
- **Zod**: Schema validation

### Utilities
- **date-fns**: Date manipulation and formatting
- **clsx & tailwind-merge**: Conditional className utilities
- **class-variance-authority**: Component variant management
- **nanoid**: Unique ID generation

### Assets
Application uses locally stored generated images in `attached_assets/generated_images/` directory for hero sections, venue photos, and gallery items.

### Hosting Platform
The application appears configured for Replit deployment with specific Replit Vite plugins (@replit/vite-plugin-runtime-error-modal, @replit/vite-plugin-cartographer, @replit/vite-plugin-dev-banner) active in development mode.