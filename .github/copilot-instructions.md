# CIPR E-commerce Frontend - AI Agent Instructions

## Project Overview
React 19 + Vite e-commerce frontend with Tailwind CSS, featuring product browsing, cart functionality, authentication, and AI-powered recommendations.

## Critical Architecture Patterns

### Context & State Management
- **AppContext** (`src/context/AppContext.jsx`) manages global auth state with localStorage persistence
- Authentication flow: token → API call → user object → localStorage sync
- Context provides: `token`, `user`, `isAuthenticated`, `logout`, `setToken`
- Import path: `import { AppContext } from '../Context/AppContext'` (note capitalized 'Context')

### API Integration
- **Primary API**: `https://cipr-api.panhayuthoeun.codes` (proxied via `/api` in dev)
- **Authentication**: Bearer token from localStorage automatically added to requests
- **Services pattern**: `src/api/services.js` handles all API calls with centralized axios instance
- **Environment variable**: `VITE_API_URL` for API base URL configuration

### Component Architecture
- **Compound components**: Many components accept children and use composition
- **Loading states**: Use skeleton loading with Tailwind animations (`animate-pulse`)
- **Error boundaries**: Global ErrorBoundary component catches React errors
- **Toast system**: Custom toast implementation via `SimpleToaster` + `useToast` hook

## Development Workflows

### Essential Commands
```bash
npm run dev          # Start with API proxy to cipr-api.panhayuthoeun.codes
npm run build        # Production build
npm run preview      # Preview production build locally
npm run lint         # ESLint check
```

### Key Development Patterns

#### Authentication Flow
```jsx
// Always check auth state from context
const { user, isAuthenticated, logout } = useContext(AppContext);

// Route protection pattern
<Route path="/login" element={user ? <Home/> : <LoginPage />} />
```

#### API Service Pattern
```jsx
// Centralized API instance with auto-auth
const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || '/api',
  headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' }
});

// All services throw errors - no fallback data
export const getProducts = async () => {
  try {
    const response = await api.get('/products');
    return { products: response.data?.products || response.data || [] };
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Failed to fetch products');
  }
};

// Category-specific fetching for homepage
export const getProductsByCategory = async (category, limit = 4) => {
  const { products } = await getProducts({ category, limit });
  return { products: products.filter(p => p.category === category).slice(0, limit) };
};
```

#### Loading States
```jsx
// Standard loading pattern with skeleton
if (loading) {
  return (
    <div className="grid grid-cols-4 gap-6">
      {[...Array(4)].map((_, i) => (
        <div key={i} className="space-y-3">
          <div className="aspect-square bg-gray-100 rounded-lg animate-pulse"></div>
          <div className="h-4 bg-gray-100 rounded animate-pulse"></div>
        </div>
      ))}
    </div>
  );
}
```

## Project-Specific Conventions

### File Organization
- **Components**: Feature-based grouping (`auth/`, `ui/`, `common/`)
- **Pages**: Route components in `src/pages/`
- **Layout**: `MainLayout.jsx` provides consistent navigation + footer wrapper
- **Context path**: Import from `../Context/AppContext` (capitalized folder name)

### Styling Patterns
- **Tailwind-first**: No CSS modules, utility classes with `clsx` for conditionals
- **Responsive design**: Mobile-first with `sm:`, `md:`, `lg:` breakpoints
- **Color scheme**: Primary blue-600, gray scale for text, red for errors/alerts
- **Animations**: Use `animate-pulse` for loading, `transition-*` for hovers

### Navigation & Routing
- **Layout pattern**: Routes wrapped in `<MainLayout>` for nav/footer
- **Active state**: `isActive()` helper compares pathname for navigation highlighting
- **Mobile menu**: Overlay pattern with fixed positioning and transform animations

### Error Handling
- **Boundary errors**: Caught by ErrorBoundary with retry mechanisms
- **API errors**: All services throw errors, handled by components with proper error states
- **Form validation**: Display errors inline with red borders and text
- **Toast notifications**: Use SimpleToaster for user feedback

## Integration Points

### External Services
- **API**: Laravel backend at `cipr-api.panhayuthoeun.codes`
  - Products: `/api/products` (public), `/api/products/{id}` (public)
  - Cart: `/api/cart` (POST/GET, requires auth)
  - Sales: `/api/sales` (GET purchase history, POST purchase, requires auth)
  - Auth: `/api/login`, `/api/register`, `/api/logout`, `/api/user`
- **Recommendations**: Lambda function endpoint (reserved for future integration)
- **Images**: Unsplash URLs for product images
- **Icons**: Lucide React for consistent iconography

### Build & Deployment
- **Vite proxy**: Development API calls proxied to external API
- **Environment variables**: `VITE_API_URL` for API configuration
- **Static deployment**: Built for Vercel/Netlify deployment
- **Asset handling**: Vite handles imports, images in `src/assets/`

## Common Gotchas
- Context folder is capitalized: `../Context/AppContext`
- API calls automatically include auth tokens via axios interceptor
- All API services return structured data: `{ products: [...] }`, `{ product: {...} }`
- Use `import.meta.env.DEV` for development-only features
- Mobile menu requires both transform classes and backdrop for proper UX
- Authentication checks both `token` AND `user` existence for `isAuthenticated`
- Page-specific API functions: `getProductsByCategory()` for homepage, `getCollections()` for collections
- Recommendations use enhanced product data with rating/review metadata
