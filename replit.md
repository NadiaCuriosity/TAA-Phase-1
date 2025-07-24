# Tina's Workflow Automation Proposal Dashboard

## Overview

This project is a single-page, interactive web-based presentation dashboard designed to secure a $3,500 NZD investment for a workflow automation project. The application serves as a visual aid to walk clients through current workflow problems, proposed solutions, costs, and future vision. Built with React and TypeScript, it features a modern, responsive design with smooth navigation and interactive cost calculations.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized production builds
- **UI Components**: shadcn/ui component library built on Radix UI primitives
- **Styling**: Tailwind CSS with custom design tokens and CSS variables
- **State Management**: React hooks for local state, TanStack Query for server state (though minimal server interaction)
- **Routing**: Wouter for lightweight client-side routing
- **Diagrams**: Mermaid.js for workflow visualization

### Backend Architecture
- **Runtime**: Node.js with Express server
- **Database**: PostgreSQL with Drizzle ORM (configured but minimal usage)
- **Session Storage**: In-memory storage with PostgreSQL session store capability
- **API Structure**: RESTful endpoints under `/api` prefix (minimal implementation)

### Component Structure
The application follows a modular component architecture:
- Main dashboard with 5 distinct sections as separate components
- Shared UI components from shadcn/ui library
- Navigation component with smooth scrolling and active section tracking
- Responsive design adapting to desktop, tablet, and mobile viewports

## Key Components

### 1. Navigation System
- Fixed sidebar navigation on desktop (hidden on mobile)
- Numbered navigation items (1-5) corresponding to dashboard sections
- Smooth scrolling with active section highlighting
- Responsive behavior with mobile-friendly alternatives

### 2. Dashboard Sections
- **Current Workflow**: Visual representation of existing inefficiencies using Mermaid diagrams
- **Cost Calculator**: Interactive calculator showing financial impact with real-time updates
- **Future Workflow**: Proposed solution visualization with before/after comparisons
- **Offer and ROI**: Investment details with timeline and return calculations
- **Strategic Roadmap**: Phase-based implementation plan with future expansion

### 3. Interactive Elements
- Live cost calculator with adjustable parameters (admin hours, hourly rates)
- Automatic payback period calculations
- Responsive form inputs with real-time validation
- Smooth animations and transitions

### 4. Design System
- **Typography**: Poppins font family with multiple weights
- **Color Palette**: 
  - Primary Dark: `#06414F` (body text, backgrounds)
  - Accent Green: `#145B51` (headings, highlights)
  - Highlight Gold: `#BF8E29` (key numbers, CTAs)
  - Background Light: `#F7F9F9` (main background)
- **Responsive Design**: Mobile-first approach with breakpoint-based layouts

## Data Flow

### Client-Side Data Flow
1. Dashboard components manage local state for interactive elements
2. Cost calculator performs real-time calculations based on user input
3. Navigation state tracks active section based on scroll position
4. Mermaid diagrams render after DOM load to prevent rendering issues

### Server Integration (Minimal)
- Express server serves static files and handles basic routing
- Database schema defined but not actively used for presentation
- Session handling capability present but not required for demo
- API routes structure in place for future expansion

## External Dependencies

### Core Libraries
- **React Ecosystem**: React, React DOM, React Query for state management
- **UI Framework**: Radix UI primitives with shadcn/ui components
- **Styling**: Tailwind CSS with PostCSS processing
- **Development**: Vite with TypeScript support and hot reloading
- **Routing**: Wouter for lightweight navigation

### Database & Server
- **Database**: Neon PostgreSQL with Drizzle ORM and migrations
- **Server**: Express with TypeScript support via tsx
- **Session Management**: connect-pg-simple for PostgreSQL sessions

### Visualization
- **Diagrams**: Mermaid.js for workflow charts and process visualization
- **Icons**: Lucide React for consistent iconography
- **Animations**: CSS transitions and Tailwind animation utilities

## Deployment Strategy

### Development Environment
- Local development server via Vite with hot module replacement
- TypeScript compilation with strict mode enabled
- ESLint and Prettier integration for code quality
- Replit-specific optimizations and plugins for cloud development

### Production Build
- Vite production build with code splitting and optimization
- Server bundle via esbuild for Node.js deployment
- Static asset serving through Express
- Environment variable configuration for database connections

### Database Management
- Drizzle migrations for schema changes
- Connection pooling via Neon serverless PostgreSQL
- Environment-based configuration (development vs production)

### Replit Integration
- Custom Vite plugins for Replit development environment
- Runtime error overlays for improved debugging
- Cartographer integration for enhanced development experience
- Automatic environment detection and configuration

The application is designed to be presentation-focused with minimal server requirements, making it suitable for demo environments while maintaining the flexibility to add full backend functionality in future iterations.