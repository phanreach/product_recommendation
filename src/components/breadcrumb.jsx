import { ChevronRight } from 'lucide-react';
import { useLocation, Link } from 'react-router-dom';

const Breadcrumb = () => {
  const location = useLocation();
  
  const getBreadcrumbs = () => {
    const path = location.pathname;
    const segments = path.split('/').filter(Boolean);
    
    const breadcrumbs = [
      { name: 'Home', href: '/', isActive: path === '/' }
    ];
    
    // Build breadcrumbs based on current path
    if (segments.length > 0) {
      let currentPath = '';
      segments.forEach((segment, index) => {
        currentPath += `/${segment}`;
        const isLast = index === segments.length - 1;
        
        // Capitalize and format segment names
        const name = segment.charAt(0).toUpperCase() + segment.slice(1);
        
        breadcrumbs.push({
          name,
          href: currentPath,
          isActive: isLast
        });
      });
    }
    
    return breadcrumbs;
  };

  const breadcrumbs = getBreadcrumbs();

  // Don't show breadcrumbs on home page
  if (location.pathname === '/') {
    return null;
  }

  return (
    <nav className="bg-gray-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center space-x-2 py-3 text-sm">
          {breadcrumbs.map((breadcrumb, index) => (
            <div key={breadcrumb.href} className="flex items-center">
              {index > 0 && (
                <ChevronRight size={16} className="text-gray-400 mx-2" />
              )}
              {breadcrumb.isActive ? (
                <span className="text-gray-900 font-medium">{breadcrumb.name}</span>
              ) : (
                <Link
                  to={breadcrumb.href}
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  {breadcrumb.name}
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Breadcrumb;
