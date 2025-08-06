import { Bell, Home, Package, ShoppingBag, User, Settings, LogOut, Menu, X } from "lucide-react";
import { useLocation, Link } from "react-router-dom";
import { useState, useEffect } from "react";

function Navbar() {
    const location = useLocation();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    
    // Close mobile menu when route changes
    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [location.pathname]);
    
    // Helper function to check if a path is active
    const isActive = (path) => {
        if (path === '/') {
            return location.pathname === '/';
        }
        return location.pathname.startsWith(path);
    };

    return (
        <>
            {/* Main Navigation Bar */}
            <nav className="bg-white shadow-lg sticky top-0 z-50 border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        {/* Logo */}
                        <div className="flex-shrink-0">
                            <Link to="/" className="flex items-center space-x-2 group">
                                <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent group-hover:from-blue-700 group-hover:to-purple-700 transition-all duration-300">
                                    CIPR
                                </span>
                            </Link>
                        </div>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center space-x-8">
                            <Link
                                to="/"
                                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                                    isActive('/') 
                                        ? 'text-blue-600 bg-blue-50' 
                                        : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                                }`}
                            >
                                Home
                            </Link>
                            <Link
                                to="/collections"
                                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                                    isActive('/collections') 
                                        ? 'text-blue-600 bg-blue-50' 
                                        : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                                }`}
                            >
                                Collections
                            </Link>
                            <Link
                                to="/new"
                                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                                    isActive('/new') 
                                        ? 'text-blue-600 bg-blue-50' 
                                        : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                                }`}
                            >
                                New Arrivals
                            </Link>
                            <Link
                                to="/products"
                                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                                    isActive('/products') 
                                        ? 'text-blue-600 bg-blue-50' 
                                        : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                                }`}
                            >
                                Products
                            </Link>
                        </div>

                        {/* Desktop Right Side */}
                        <div className="hidden md:flex items-center space-x-4">
                            {/* Cart */}
                            <Link 
                                to="/cart" 
                                className="relative p-2 text-gray-600 hover:text-blue-600 transition-colors duration-200"
                            >
                                <ShoppingBag size={20} />
                                <span className="absolute -top-1 -right-1 h-5 w-5 bg-red-500 text-white rounded-full text-xs flex items-center justify-center font-medium">
                                    0
                                </span>
                            </Link>

                            {/* Notifications */}
                            <button className="relative p-2 text-gray-600 hover:text-blue-600 transition-colors duration-200">
                                <Bell size={20} />
                                <span className="absolute -top-1 -right-1 h-4 w-4 bg-red-500 text-white rounded-full text-xs flex items-center justify-center">
                                    2
                                </span>
                            </button>

                            {/* Profile */}
                            <button className="p-2 text-gray-600 hover:text-blue-600 transition-colors duration-200">
                                <User size={20} />
                            </button>
                        </div>

                        {/* Mobile Right Side */}
                        <div className="md:hidden flex items-center space-x-3">
                            {/* Mobile Cart */}
                            <Link 
                                to="/cart" 
                                className="relative p-2 text-gray-600 hover:text-blue-600 transition-colors duration-200"
                            >
                                <ShoppingBag size={20} />
                                <span className="absolute -top-1 -right-1 h-4 w-4 bg-red-500 text-white rounded-full text-xs flex items-center justify-center">
                                    0
                                </span>
                            </Link>

                            {/* Burger Menu Button */}
                            <button
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                className="p-2 text-gray-600 hover:text-blue-600 transition-colors duration-200 focus:outline-none"
                                aria-label="Toggle menu"
                            >
                                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <div 
                    className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
                    onClick={() => setIsMobileMenuOpen(false)}
                />
            )}

            {/* Mobile Slide Menu */}
            <div className={`fixed top-16 left-0 right-0 bg-white shadow-lg z-50 md:hidden transform transition-transform duration-300 ease-in-out ${
                isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
            }`}>
                <div className="px-4 py-6 space-y-4">
                    {/* Navigation Links */}
                    <Link
                        to="/"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors duration-200 ${
                            isActive('/') 
                                ? 'bg-blue-50 text-blue-600' 
                                : 'text-gray-700 hover:bg-gray-50'
                        }`}
                    >
                        <Home size={20} />
                        <span className="font-medium">Home</span>
                    </Link>
                    <Link
                        to="/collections"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors duration-200 ${
                            isActive('/collections') 
                                ? 'bg-blue-50 text-blue-600' 
                                : 'text-gray-700 hover:bg-gray-50'
                        }`}
                    >
                        <Package size={20} />
                        <span className="font-medium">Collections</span>
                    </Link>
                    <Link
                        to="/new"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors duration-200 ${
                            isActive('/new') 
                                ? 'bg-blue-50 text-blue-600' 
                                : 'text-gray-700 hover:bg-gray-50'
                        }`}
                    >
                        <ShoppingBag size={20} />
                        <span className="font-medium">New Arrivals</span>
                    </Link>
                    <Link
                        to="/products"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors duration-200 ${
                            isActive('/products') 
                                ? 'bg-blue-50 text-blue-600' 
                                : 'text-gray-700 hover:bg-gray-50'
                        }`}
                    >
                        <Package size={20} />
                        <span className="font-medium">Products</span>
                    </Link>

                    {/* Profile Section */}
                    <div className="border-t border-gray-200 pt-6 mt-6">
                        <div className="px-4 py-3 bg-gray-50 rounded-lg mb-4">
                            <div className="flex items-center space-x-3">
                                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                                    <User size={20} className="text-white" />
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-gray-900">Welcome!</p>
                                    <p className="text-xs text-gray-500">Manage your account</p>
                                </div>
                                <div className="ml-auto">
                                    <Bell size={16} className="text-gray-400" />
                                    <span className="absolute -top-1 -right-1 h-3 w-3 bg-red-500 rounded-full"></span>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <button 
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="flex items-center space-x-3 w-full px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors duration-200"
                            >
                                <Settings size={16} />
                                <span className="text-sm">Settings</span>
                            </button>
                            <button 
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="flex items-center space-x-3 w-full px-4 py-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors duration-200"
                            >
                                <LogOut size={16} />
                                <span className="text-sm">Sign Out</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Navbar;