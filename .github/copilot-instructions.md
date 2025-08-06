# CIPR Ecommerce Frontend - AI Agent Instructions

## Project Architecture

This is a **React 19 + Vite 7** e-commerce frontend using **React Router DOM 7** for routing and **Tailwind CSS** for styling. The app follows a component composition pattern with a clear separation between layout, pages, and reusable components.

### Key Architectural Patterns

- **Layout Wrapper**: All routes use `MainLayout.jsx` which includes `Navbar`, `Breadcrumb`, and `Footer`
- **Route Structure**: App.jsx defines routes with nested layout using `<Outlet />` pattern
- **Component Organization**: `/components` for reusable UI, `/pages` for route components, `/layout` for wrappers
- **Styling System**: Utility-first Tailwind with consistent design tokens and responsive patterns

## Essential Development Context

### Mock Data Structure  
Product data follows a consistent structure with varied, realistic content:
```jsx
const products = [
  {
    id: 1,
    name: 'Classic Denim Shirt',     // Unique, descriptive names
    price: 199,                      // Varied pricing
    image: 'https://images.unsplash.com/...' // Consistent image sizing
  }
];
```
**Avoid repetitive names** - each product should have a unique, descriptive name that reflects real e-commerce inventory.

### Navigation System
The navbar (`nav-bar.jsx`) implements sophisticated active state management using `useLocation()`. It features:
- Desktop navigation with hover effects and active indicators 
- Mobile-responsive collapsed menu
- Shopping cart with badge counter
- User profile dropdown on hover

### State Management Approach
- **Local State**: `useState` for component-specific state (search, cart, UI interactions)
- **URL State**: React Router for navigation and page state
- **No Global State**: Currently uses prop passing and local state only

### Styling Conventions
```jsx
// Card pattern
"bg-white rounded-lg shadow-md p-6 border border-gray-200"

// Button pattern  
"px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"

// Responsive grid
"grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6"

// Mobile-responsive text sizing
"text-xs sm:text-sm" // Small text
"text-sm sm:text-base" // Body text  
"text-xl sm:text-2xl" // Headers
```

### QR Code Integration
The `qr-code-generator.jsx` component is a key feature that renders QR codes for product sharing and promotions. It's prominently featured on the homepage.

## Development Workflows

### Adding New Pages
1. Create component in `/src/pages/`
2. Add route to `App.jsx` within the `MainLayout` wrapper
3. Add navigation link to `nav-bar.jsx` with proper active state handling
4. Update breadcrumb logic if needed

### Component Creation Pattern
```jsx
import { useState } from 'react';

function ComponentName({ prop1, prop2, className = '' }) {
  const [state, setState] = useState(initialValue);

  return (
    <div className={`base-classes ${className}`}>
      {/* Content */}
    </div>
  );
}

export default ComponentName;
```

### Search Functionality Pattern
The homepage demonstrates advanced search with:
- Live suggestions dropdown
- Trending and recent searches
- Keyboard navigation support
- Focus management with `setTimeout` for blur handling

## Build System & Dependencies

### Key Scripts
- `npm run dev` - Vite dev server (port 5173)
- `npm run build` - Production build 
- `npm run lint` - ESLint checking
- `npm run preview` - Preview production build

### Major Dependencies
- **React 19.1.0** - Latest React with concurrent features
- **Vite 7.0.4** - Fast build tool with HMR
- **React Router DOM 7.7.1** - Client-side routing
- **Tailwind CSS 3.4.17** - Utility-first CSS
- **Lucide React** - Icon library (preferred over other icon sets)

### UI Component System
The `/components/ui/` directory contains a complete Shadcn/ui implementation with 40+ TypeScript components using class-variance-authority for variant management.

## Project-Specific Conventions

### File Naming
- Components: PascalCase (e.g., `NavBar.jsx`, `MainLayout.jsx`)
- Pages: lowercase (e.g., `home.jsx`, `products.jsx`)
- Utilities: kebab-case (e.g., `qr-code-generator.jsx`)

### Import Patterns
```jsx
// React hooks first
import { useState, useEffect } from 'react';
// Third-party libraries
import { Link, useLocation } from 'react-router-dom';
import { Search, TrendingUp } from 'lucide-react';
// Local components
import ComponentName from '../components/ComponentName';
```

### Mobile-First Responsive Design
The application uses a **mobile-first approach** with specific breakpoint patterns:
- Base styles target mobile devices (320px+)
- `sm:` breakpoint for larger phones/small tablets (640px+)
- `md:` breakpoint for tablets (768px+)
- `lg:` breakpoint for desktop (1024px+)

**Mobile Optimization Patterns:**
- Search bar: Responsive padding `pl-3 sm:pl-4`, button sizing `px-3 sm:px-6`
- Product grids: `grid-cols-2 md:grid-cols-4` with responsive gaps `gap-3 sm:gap-6`
- Typography: Progressive sizing `text-xs sm:text-sm`, `text-xl sm:text-2xl`
- QR code: Different sizes for mobile/desktop using conditional rendering

### Error Handling
Currently minimal - implement error boundaries and loading states when adding new features. Check console for React development warnings.

## Integration Points

### External Services
- **Unsplash**: Product images via direct URLs with specific dimensions
- **QR Code Library**: Canvas-based QR generation for sharing functionality

### Future Integration Readiness
The codebase is structured for easy addition of:
- State management (Zustand/Redux)
- API integration (React Query)
- Authentication systems
- Payment processing

## Key Files for Understanding

- `src/App.jsx` - Route definitions and app structure
- `src/layout/MainLayout.jsx` - Common layout wrapper
- `src/components/nav-bar.jsx` - Navigation with active states
- `src/pages/home.jsx` - Complex homepage with search and QR features
- `DEVELOPMENT.md` - Comprehensive development guide
- `QUICK-REFERENCE.md` - Common patterns and quick fixes
