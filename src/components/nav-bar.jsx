import { Bell, Home, Package, ShoppingBag, User, Settings, LogOut } from "lucide-react";

function Navbar() {
    return (
        <nav className="bg-white shadow-lg sticky top-0 z-50 border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <a href="/home" className="flex items-center space-x-2 group">
                            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent group-hover:from-blue-700 group-hover:to-purple-700 transition-all duration-300">
                                WeYoung
                            </span>
                        </a>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-1">
                        <a
                            href="/home"
                            className="px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center space-x-2 bg-blue-50 text-blue-700 shadow-sm border border-blue-200"
                        >
                            <Home size={16} />
                            <span>Home</span>
                        </a>
                        <a
                            href="/product"
                            className="px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center space-x-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                        >
                            <Package size={16} />
                            <span>Product</span>
                        </a>
                        <a
                            href="/order"
                            className="px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center space-x-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                        >
                            <ShoppingBag size={16} />
                            <span>Order</span>
                        </a>
                    </div>

                    {/* Right side - Desktop */}
                    <div className="hidden md:flex items-center space-x-4">
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
                                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
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
                        <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                            <User size={16} className="text-white" />
                        </div>
                    </div>
                </div>

                {/* Mobile Navigation Menu - Always visible on mobile */}
                <div className="md:hidden border-t border-gray-200 bg-white">
                    <div className="px-2 pt-2 pb-3 space-y-1">
                        <a
                            href="/home"
                            className="flex items-center space-x-3 px-3 py-2 rounded-lg text-base font-medium transition-colors duration-200 bg-blue-50 text-blue-700 border-l-4 border-blue-700"
                        >
                            <Home size={20} />
                            <span>Home</span>
                        </a>
                        <a
                            href="/product"
                            className="flex items-center space-x-3 px-3 py-2 rounded-lg text-base font-medium transition-colors duration-200 text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                        >
                            <Package size={20} />
                            <span>Product</span>
                        </a>
                        <a
                            href="/order"
                            className="flex items-center space-x-3 px-3 py-2 rounded-lg text-base font-medium transition-colors duration-200 text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                        >
                            <ShoppingBag size={20} />
                            <span>Order</span>
                        </a>
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