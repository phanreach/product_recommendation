import { Bell, Home, Package, ShoppingBag, User, Settings, LogOut } from "lucide-react";
import { useLocation, Link } from "react-router-dom";

function Navbar() {
    const location = useLocation();
    
    // Helper function to check if a path is active
    const isActive = (path) => {
        if (path === '/') {
            return location.pathname === '/';
        }
        return location.pathname.startsWith(path);
    };

    // Helper function to get nav link classes
    const getNavLinkClasses = (path) => {
        const baseClasses = "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 flex items-center space-x-2 relative overflow-hidden";
        
        if (isActive(path)) {
            return `${baseClasses} bg-gray-900 text-white shadow-lg transform scale-105 ring-2 ring-gray-300 ring-opacity-50`;
        }
        return `${baseClasses} text-gray-600 hover:text-gray-900 hover:bg-gray-50 hover:scale-105 hover:shadow-md`;
    };

    // Helper function for mobile nav link classes
    const getMobileNavLinkClasses = (path) => {
        const baseClasses = "flex items-center space-x-3 px-3 py-2 rounded-lg text-base font-medium transition-all duration-300 relative";
        
        if (isActive(path)) {
            return `${baseClasses} bg-gray-900 text-white border-l-4 border-white shadow-lg`;
        }
        return `${baseClasses} text-gray-600 hover:text-gray-900 hover:bg-gray-50 hover:shadow-sm`;
    };
    return (
        <nav className="bg-white shadow-lg sticky top-0 z-50 border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <Link to="/" className="flex items-center space-x-2 group">
                            <span className="text-2xl font-bold bg-gradient-to-r from-gray-800 to-black bg-clip-text text-transparent group-hover:from-gray-600 group-hover:to-gray-800 transition-all duration-300">
                                CIPR
                            </span>
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-1">
                        <Link
                            to="/"
                            className={getNavLinkClasses('/')}
                        >
                            <Home size={16} />
                            <span>Home</span>
                            {isActive('/') && (
                                <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-white rounded-full animate-pulse"></div>
                            )}
                        </Link>
                        <Link
                            to="/collections"
                            className={getNavLinkClasses('/collections')}
                        >
                            <Package size={16} />
                            <span>Collections</span>
                            {isActive('/collections') && (
                                <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-white rounded-full animate-pulse"></div>
                            )}
                        </Link>
                        <Link
                            to="/new"
                            className={getNavLinkClasses('/new')}
                        >
                            <span>New</span>
                            {isActive('/new') && (
                                <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-white rounded-full animate-pulse"></div>
                            )}
                        </Link>
                        <Link
                            to="/products"
                            className={getNavLinkClasses('/products')}
                        >
                            <span>Products</span>
                            {isActive('/products') && (
                                <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-white rounded-full animate-pulse"></div>
                            )}
                        </Link>
                    </div>

                    {/* Right side - Desktop */}
                    <div className="hidden md:flex items-center space-x-4">
                        {/* Cart */}
                        <div className="relative">
                            <Link 
                                to="/cart" 
                                className={`p-2 rounded-full transition-all duration-300 relative group block ${
                                    isActive('/cart') 
                                        ? 'bg-gray-900 text-white shadow-lg ring-2 ring-gray-300 ring-opacity-50' 
                                        : 'bg-gray-50 hover:bg-gray-100 hover:shadow-md'
                                }`}
                            >
                                <ShoppingBag 
                                    size={20} 
                                    className={isActive('/cart') ? 'text-white' : 'text-gray-600 group-hover:text-gray-900'} 
                                />
                                <span className={`absolute -top-1 -right-1 h-5 w-5 rounded-full text-xs flex items-center justify-center font-medium transition-colors ${
                                    isActive('/cart') 
                                        ? 'bg-white text-gray-900' 
                                        : 'bg-gray-900 text-white'
                                }`}>
                                    0
                                </span>
                            </Link>
                        </div>

                        {/* Notifications */}
                        <div className="relative">
                            <button className="p-2 rounded-full bg-gray-50 hover:bg-gray-100 transition-colors duration-200 relative group">
                                <Bell size={20} className="text-gray-600 group-hover:text-gray-900" />
                                <span className="absolute -top-1 -right-1 h-5 w-5 bg-red-500 text-white rounded-full text-xs flex items-center justify-center font-medium animate-pulse">
                                    2
                                </span>
                            </button>
                        </div>

                        {/* Profile Button */}
                        <div className="relative group">
                            <button className="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                                <div className="w-8 h-8 bg-gradient-to-r from-gray-700 to-gray-900 rounded-full flex items-center justify-center">
                                    <User size={16} className="text-white" />
                                </div>
                            </button>

                            {/* Static Dropdown Menu - Shows on hover */}
                            <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-lg border border-gray-100 py-1 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                                <a href="#" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors duration-150">
                                    <User size={16} className="mr-3 text-gray-400" />
                                    Profile
                                </a>
                                <a href="#" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors duration-150">
                                    <Settings size={16} className="mr-3 text-gray-400" />
                                    Settings
                                </a>
                                <hr className="my-1 border-gray-100" />
                                <button className="flex items-center w-full px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors duration-150">
                                    <LogOut size={16} className="mr-3" />
                                    Logout
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Mobile Right Side */}
                    <div className="md:hidden flex items-center space-x-2">
                        {/* Mobile Cart */}
                        <div className="relative">
                            <Link 
                                to="/cart" 
                                className={`p-2 rounded-full transition-all duration-300 relative block ${
                                    isActive('/cart') 
                                        ? 'bg-gray-900 text-white shadow-lg' 
                                        : 'hover:bg-gray-100 hover:shadow-md'
                                }`}
                            >
                                <ShoppingBag 
                                    size={20} 
                                    className={isActive('/cart') ? 'text-white' : 'text-gray-600'} 
                                />
                                <span className={`absolute -top-1 -right-1 h-4 w-4 rounded-full text-xs flex items-center justify-center font-medium transition-colors ${
                                    isActive('/cart') 
                                        ? 'bg-white text-gray-900' 
                                        : 'bg-gray-900 text-white'
                                }`}>
                                    0
                                </span>
                            </Link>
                        </div>

                        {/* Mobile Notifications */}
                        <div className="relative">
                            <button className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-200 relative">
                                <Bell size={20} className="text-gray-600" />
                                <span className="absolute -top-1 -right-1 h-4 w-4 bg-red-500 text-white rounded-full text-xs flex items-center justify-center font-medium">
                                    2
                                </span>
                            </button>
                        </div>

                        {/* Mobile Profile */}
                        <div className="w-8 h-8 bg-gradient-to-r from-gray-700 to-gray-900 rounded-full flex items-center justify-center">
                            <User size={16} className="text-white" />
                        </div>
                    </div>
                </div>

                {/* Mobile Navigation Menu - Always visible on mobile */}
                <div className="md:hidden border-t border-gray-200 bg-white">
                    <div className="px-2 pt-2 pb-3 space-y-1">
                        <Link
                            to="/"
                            className={getMobileNavLinkClasses('/')}
                        >
                            <Home size={20} />
                            <span>Home</span>
                        </Link>
                        <Link
                            to="/collections"
                            className={getMobileNavLinkClasses('/collections')}
                        >
                            <Package size={20} />
                            <span>Collections</span>
                        </Link>
                        <Link
                            to="/new"
                            className={getMobileNavLinkClasses('/new')}
                        >
                            <span>New</span>
                        </Link>
                        <Link
                            to="/products"
                            className={getMobileNavLinkClasses('/products')}
                        >
                            <Package size={20} />
                            <span>Products</span>
                        </Link>
                    </div>

                    {/* Mobile Profile Section */}
                    <div className="pt-4 pb-3 border-t border-gray-200">
                        <div className="px-2 space-y-1">
                            <a href="#" className="flex items-center space-x-3 px-3 py-2 rounded-lg text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors duration-200">
                                <User size={20} />
                                <span>Profile</span>
                            </a>
                            <a href="#" className="flex items-center space-x-3 px-3 py-2 rounded-lg text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors duration-200">
                                <Settings size={20} />
                                <span>Settings</span>
                            </a>
                            <button className="flex items-center space-x-3 w-full px-3 py-2 rounded-lg text-base font-medium text-red-600 hover:bg-red-50 transition-colors duration-200">
                                <LogOut size={20} />
                                <span>Logout</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;