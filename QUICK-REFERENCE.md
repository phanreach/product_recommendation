# CIPR Ecommerce - Quick Developer Reference

## 🚀 Quick Start Commands

```bash
# Development
npm run dev          # Start dev server at http://localhost:5173
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint

# Project Setup
git clone <repo>
cd product_recommendation
npm install
npm run dev
```

## 📁 Key Files to Know

| File | Purpose |
|------|---------|
| `src/App.jsx` | Main app router and routes |
| `src/pages/home.jsx` | Homepage with search and QR |
| `src/components/nav-bar.jsx` | Navigation with active states |
| `src/components/qr-code-generator.jsx` | QR code functionality |
| `src/layout/MainLayout.jsx` | Page layout wrapper |
| `tailwind.config.js` | Tailwind CSS configuration |
| `vite.config.js` | Vite build configuration |

## 📱 Mobile Navigation Features

### **Burger Menu Implementation**
- **Toggle Functionality**: Hamburger/close icon animation
- **Slide Animation**: Smooth slide-down transition (300ms)
- **Auto-close**: Menu closes on route change or outside click
- **Backdrop Overlay**: Semi-transparent overlay for better UX

```jsx
// Mobile menu state management
const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

// Auto-close on route change
useEffect(() => {
  setIsMobileMenuOpen(false);
}, [location.pathname]);
```

## 🎨 Common Tailwind Patterns

```jsx
// Cards
className="bg-white rounded-lg shadow-md p-6 border border-gray-200"

// Buttons
className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"

// Inputs
className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2"

// Grid Layouts
className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"

// Responsive Text
className="text-lg md:text-xl lg:text-2xl"
```

## 🔧 Component Creation Template

```jsx
// New component template
import { useState } from 'react';

function ComponentName({ prop1, prop2, className = '' }) {
  const [state, setState] = useState(initialValue);

  const handleEvent = () => {
    // Event logic
  };

  return (
    <div className={`base-classes ${className}`}>
      {/* Component content */}
    </div>
  );
}

export default ComponentName;
```

## 🛣 Adding New Routes

```jsx
// 1. Create page component in src/pages/
// 2. Add to App.jsx:
import NewPage from './pages/new-page';

// In routes array:
{
  path: "/new-page",
  element: <MainLayout><NewPage /></MainLayout>
}

// 3. Add navigation link in nav-bar.jsx:
<Link to="/new-page" className="nav-link">New Page</Link>
```

## 🔍 Common Issues & Quick Fixes

```bash
# Port in use
netstat -ano | findstr :5173
taskkill /PID <process_id> /F

# Dependencies issues
rm -rf node_modules package-lock.json
npm install

# Cache issues
npm run dev -- --force
```

## 📦 Adding New Dependencies

```bash
# UI Libraries
npm install lucide-react          # Icons
npm install framer-motion        # Animations
npm install react-hook-form      # Forms

# Development
npm install --save-dev @types/node  # TypeScript support
npm install --save-dev prettier     # Code formatting
```

## 🎯 Performance Checklist

- [ ] Use `memo()` for expensive components
- [ ] Implement `useCallback()` for event handlers
- [ ] Add `useMemo()` for computed values
- [ ] Lazy load routes with `React.lazy()`
- [ ] Optimize images (WebP format)
- [ ] Use `loading="lazy"` for images below fold

## 🔐 Security Best Practices

- [ ] Sanitize user inputs
- [ ] Use HTTPS in production
- [ ] Implement Content Security Policy
- [ ] Regular dependency updates (`npm audit`)
- [ ] Validate all API responses

## 📱 Responsive Breakpoints

```css
/* Tailwind Breakpoints */
sm: 640px    /* Small devices */
md: 768px    /* Tablets */
lg: 1024px   /* Laptops */
xl: 1280px   /* Desktops */
2xl: 1536px  /* Large screens */
```

## 🎨 Color Palette

```css
/* Primary Colors */
blue-600     /* Primary buttons */
gray-900     /* Main text */
gray-600     /* Secondary text */
gray-100     /* Light backgrounds */

/* Status Colors */
green-600    /* Success */
red-600      /* Error */
yellow-600   /* Warning */
purple-600   /* Special features */
```

## 📋 Pre-Deployment Checklist

- [ ] Run `npm run lint` (no errors)
- [ ] Run `npm run build` (successful)
- [ ] Test responsive design on mobile
- [ ] Check browser console for errors
- [ ] Verify all routes work correctly
- [ ] Test QR code functionality
- [ ] Validate accessibility basics

---

**Need help?** Check the full `DEVELOPMENT.md` guide for detailed information.
