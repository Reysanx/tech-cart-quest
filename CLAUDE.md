# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Tech Cart Quest is an e-commerce application for electronics built with Vite, React, TypeScript, shadcn-ui, and Tailwind CSS. This is a Lovable-generated project.

## Development Commands

```bash
# Install dependencies
npm i

# Start development server (default port 5173)
npm run dev

# Run linter
npm run lint

# Build for production
npm run build

# Build for development (includes dev mode settings)
npm run build:dev

# Preview production build locally
npm run preview
```

## Architecture Overview

### State Management

This application uses **React Context** for global state management, not Redux or Zustand:

- **CartProvider** ([src/hooks/useCart.tsx](src/hooks/useCart.tsx)) - Manages shopping cart state
  - Access via `useCart()` hook
  - Provides: `items`, `addItem`, `removeItem`, `updateQuantity`, `clearCart`, `totalItems`, `subtotal`
  - Cart items are stored in memory only (not persisted)

- **ThemeProvider** ([src/hooks/useTheme.tsx](src/hooks/useTheme.tsx)) - Manages light/dark theme
  - Access via `useTheme()` hook
  - Persists to localStorage
  - Respects system preference on first load

### Provider Hierarchy

The app is wrapped with providers in this order (see [src/App.tsx](src/App.tsx)):
```
QueryClientProvider (TanStack Query)
  └─ ThemeProvider
    └─ CartProvider
      └─ TooltipProvider
        └─ BrowserRouter (React Router)
```

### Routing Structure

All routes are defined in [src/App.tsx](src/App.tsx):

- `/` - Home page (Index)
- `/category/:category` - Category listing page
- `/product/:id` - Product detail page
- `/cart` - Shopping cart page
- `/checkout` - Checkout page
- `/auth` - Authentication page
- `/search` - Search results page
- `*` - 404 Not Found (catch-all)

**IMPORTANT**: When adding new routes, they MUST be placed above the catch-all `*` route, or they will not work.

### Data Layer

Product data is **static** and defined in [src/data/products.ts](src/data/products.ts). There is no backend API for products.

- Product interface includes: `id`, `name`, `price`, `originalPrice`, `image`, `category`, `description`, `specs`, `stock`, `isNew`, `discount`
- Categories are hardcoded: Smartphones, Portátiles, Tablets, Audio, Televisores, Electrodomésticos, Fotografía, Accesorios
- When adding products, maintain the existing Product interface structure

### Component Organization

```
src/
├── components/
│   ├── ui/              # shadcn-ui components (accordion, button, card, etc.)
│   ├── Navbar.tsx       # Main navigation bar
│   ├── ProductCard.tsx  # Product display card
│   └── ThemeToggle.tsx  # Dark/light mode toggle
├── pages/               # Route components
├── hooks/               # Custom React hooks (useCart, useTheme, etc.)
├── data/                # Static data (products.ts)
├── lib/                 # Utilities (utils.ts for cn helper)
└── assets/              # Static assets (images)
```

### Import Path Aliases

The project uses `@` as an alias for the `src` directory:
```typescript
import { Button } from "@/components/ui/button";
import { products } from "@/data/products";
```

### UI Components

This project uses **shadcn-ui** for the component library. All UI components are in `src/components/ui/` and should not be significantly modified. When needing new UI components, add them from the shadcn-ui library rather than creating custom alternatives.

## Key Conventions

- **TypeScript**: All new files should use TypeScript (.tsx for components, .ts for utilities)
- **Styling**: Use Tailwind CSS utility classes; avoid inline styles or CSS modules
- **Component Structure**: Pages import from components; components should be relatively flat (avoid deep nesting)
- **Context Usage**: Always check if a component is inside the required Provider before using a hook (useCart requires CartProvider, useTheme requires ThemeProvider)
- **Product IDs**: Product IDs are strings, not numbers

## Lovable Integration

This project is managed through Lovable (lovable.dev). Changes pushed to this repository will sync with the Lovable project, and changes made in Lovable will be committed automatically to this repo.

Project URL: https://lovable.dev/projects/39117159-a151-432e-aeb0-10366f30c761
