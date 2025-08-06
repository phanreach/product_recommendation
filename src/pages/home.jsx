import PromotionProduct from "../components/promotion-product";
import QRCodeGenerator from "../components/qr-code-generator";
import { Search, TrendingUp, Clock, X } from 'lucide-react';
import { useState } from 'react';

function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  const trendingSearches = ['Basic T-Shirt', 'Denim Jacket', 'Polo Shirt', 'Chino Pants'];
  const recentSearches = ['Cotton Shirt', 'Black Jeans', 'Summer Collection'];

  const handleSearch = (query) => {
    if (query.trim()) {
      // In a real application, this would navigate to a search results page
      console.log('Searching for:', query);
      // You could navigate to a search results page like:
      // window.location.href = `/search?q=${encodeURIComponent(query)}`;
      setIsSearchFocused(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch(searchQuery);
    }
  };

  // Filter suggestions based on search query
  const filteredTrending = trendingSearches.filter(term => 
    term.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const filteredRecent = recentSearches.filter(term => 
    term.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const popularProducts = [
    {
      id: 1,
      name: 'Embroidered Destructive Shirt',
      price: 199,
      image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&h=400&fit=crop'
    },
    {
      id: 2, 
      name: 'Embroidered Destructive Shirt',
      price: 179,
      image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop'
    },
    {
      id: 3,
      name: 'Embroidered Destructive Shirt', 
      price: 199,
      image: 'https://images.unsplash.com/photo-1583743814966-8936f37f4b30?w=400&h=400&fit=crop'
    },
    {
      id: 4,
      name: 'Embroidered Destructive Shirt',
      price: 199,
      image: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=400&h=400&fit=crop'
    }
  ];

  const featuredProducts = [
    {
      id: 5,
      name: 'Embroidered Destructive Shirt',
      price: 199,
      image: 'https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?w=400&h=400&fit=crop'
    },
    {
      id: 6,
      name: 'Skimmed Print T-Shirt',
      price: 399,
      image: 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=400&h=400&fit=crop'
    },
    {
      id: 7,
      name: 'Hermit Shirt',
      price: 399,
      image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400&h=400&fit=crop'
    },
    {
      id: 8,
      name: 'Full Short Sleeve',
      price: 199,
      image: 'https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?w=400&h=400&fit=crop'
    }
  ];

  const collections = [
    {
      id: 1,
      name: 'Basic Heavy Weight T-Shirt',
      price: 199,
      image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=500&fit=crop'
    },
    {
      id: 2,
      name: 'Soft Hand Straight Fit Jeans',
      price: 399, 
      image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&h=500&fit=crop'
    },
    {
      id: 3,
      name: 'Basic Heavy Weight T-Shirt',
      price: 199,
      image: 'https://images.unsplash.com/photo-1583743814966-8936f37f4b30?w=400&h=500&fit=crop'
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <div className="bg-white">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Enhanced Search Bar */}
          <div className="flex justify-center mb-12">
            <div className="w-full max-w-2xl">
              {/* Main Search Bar */}
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search for products, brands, or categories..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onFocus={() => setIsSearchFocused(true)}
                  onBlur={() => setTimeout(() => setIsSearchFocused(false), 200)}
                  onKeyPress={handleKeyPress}
                  className="block w-full pl-12 pr-24 py-4 border border-gray-300 rounded-xl leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-2 focus:ring-gray-500 focus:border-gray-500 shadow-sm text-lg"
                />
                <div className="absolute inset-y-0 right-0 pr-4 flex items-center space-x-2">
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery('')}
                      className="p-1 text-gray-400 hover:text-gray-600 transition-colors"
                    >
                      <X size={16} />
                    </button>
                  )}
                  <button 
                    className="bg-gray-900 text-white px-6 py-2 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors"
                    onClick={() => handleSearch(searchQuery)}
                  >
                    Search
                  </button>
                </div>
              </div>

              {/* Search Suggestions Dropdown */}
              {isSearchFocused && (
                <div className="absolute z-50 w-full max-w-2xl mt-2 bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
                  {/* Show suggestions only if there are results or no search query */}
                  {(filteredTrending.length > 0 || filteredRecent.length > 0 || searchQuery === '') ? (
                    <>
                      {/* Trending Searches */}
                      {(filteredTrending.length > 0 || searchQuery === '') && (
                        <div className="p-4 border-b border-gray-100">
                          <div className="flex items-center space-x-2 mb-3">
                            <TrendingUp size={16} className="text-gray-400" />
                            <span className="text-sm font-medium text-gray-900">Trending Searches</span>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {(searchQuery === '' ? trendingSearches : filteredTrending).map((term, index) => (
                              <button
                                key={index}
                                onClick={() => {
                                  setSearchQuery(term);
                                  handleSearch(term);
                                }}
                                className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200 transition-colors"
                              >
                                {term}
                              </button>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Recent Searches */}
                      {(filteredRecent.length > 0 || searchQuery === '') && (
                        <div className="p-4">
                          <div className="flex items-center space-x-2 mb-3">
                            <Clock size={16} className="text-gray-400" />
                            <span className="text-sm font-medium text-gray-900">Recent Searches</span>
                          </div>
                          <div className="space-y-2">
                            {(searchQuery === '' ? recentSearches : filteredRecent).map((term, index) => (
                              <button
                                key={index}
                                onClick={() => {
                                  setSearchQuery(term);
                                  handleSearch(term);
                                }}
                                className="block w-full text-left px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded-lg transition-colors"
                              >
                                {term}
                              </button>
                            ))}
                          </div>
                        </div>
                      )}
                    </>
                  ) : (
                    /* No Results Found */
                    <div className="p-6 text-center">
                      <p className="text-sm text-gray-500 mb-2">No suggestions found for "{searchQuery}"</p>
                      <button
                        onClick={() => handleSearch(searchQuery)}
                        className="text-sm text-gray-900 hover:underline"
                      >
                        Search anyway
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="flex justify-center mb-8">
            <div className="flex space-x-6 text-sm">
              <button className="text-gray-600 hover:text-gray-900 transition-colors">Login</button>
              <button className="text-gray-600 hover:text-gray-900 transition-colors">Register</button>
              <a href="/new" className="text-gray-600 hover:text-gray-900 transition-colors">New Arrivals</a>
              <a href="/collections" className="text-gray-600 hover:text-gray-900 transition-colors">Collections</a>
            </div>
          </div>

          {/* Popular Products Section */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-left">POPULAR PRODUCT</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {popularProducts.map((product) => (
                <div key={product.id} className="group cursor-pointer">
                  <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden mb-3">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="text-sm text-gray-600 mb-1">V-neck T-Shirt</h3>
                  <p className="text-sm font-medium text-gray-900 mb-1">{product.name}</p>
                  <p className="text-sm text-gray-900">${product.price}</p>
                </div>
              ))}
            </div>
            <div className="text-right mt-6">
              <button className="text-sm text-gray-600 hover:text-gray-900">See All</button>
            </div>
          </section>

          {/* Featured Products Grid */}
          <section className="mb-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {featuredProducts.map((product) => (
                <div key={product.id} className="group cursor-pointer">
                  <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden mb-3">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="text-sm text-gray-600 mb-1">V-neck T-Shirt</h3>
                  <p className="text-sm font-medium text-gray-900 mb-1">{product.name}</p>
                  <p className="text-sm text-gray-900">${product.price}</p>
                </div>
              ))}
            </div>
          </section>

          {/* XIV Collections Section */}
          <section className="mb-16">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold text-gray-900 mb-2">XIV</h2>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">COLLECTIONS</h3>
              <h4 className="text-xl text-gray-900">23-24</h4>
            </div>

            <div className="flex justify-center mb-8">
              <div className="flex space-x-8 text-sm">
                <button className="text-gray-900 border-b-2 border-gray-900 pb-1">(ALL)</button>
                <button className="text-gray-600 hover:text-gray-900">Man</button>
                <button className="text-gray-600 hover:text-gray-900">Women</button>
                <button className="text-gray-600 hover:text-gray-900">Kid</button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {collections.map((product) => (
                <div key={product.id} className="group cursor-pointer">
                  <div className="aspect-[3/4] bg-gray-100 rounded-lg overflow-hidden mb-4">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="text-sm text-gray-600 mb-1">Cotton T-Shirt</h3>
                  <p className="text-sm font-medium text-gray-900 mb-1">{product.name}</p>
                  <p className="text-sm text-gray-900">${product.price}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Brand Philosophy Section */}
          <section className="text-center py-16 bg-gray-50 rounded-2xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              OUR APPROACH TO FASHION DESIGN
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto mb-12">
              At elegant vogue, we blend creativity with craftsmanship to create fashion that transcends trends. Each design is meticulously crafted, ensuring the highest quality across finish.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="aspect-[3/4] rounded-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1490114538077-0a7f8cb49891?w=400&h=500&fit=crop"
                  alt="Fashion Design"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-[3/4] rounded-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=400&h=500&fit=crop"
                  alt="Craftsmanship"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-[3/4] rounded-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?w=400&h=500&fit=crop"
                  alt="Quality"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* CIPR QR Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-6xl font-bold text-gray-900">XIV</h2>
              <h3 className="text-4xl font-bold text-gray-900">QR</h3>
            </div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Scan to discover our latest collections and exclusive offers
            </p>
            
            {/* QR Code Display */}
            <div className="flex flex-col items-center space-y-6 mt-12">
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-2xl shadow-lg">
                <QRCodeGenerator 
                  url="https://www.youtube.com/shorts/Ay8lynMZ4mE?feature=share" 
                  size={250}
                  className="mx-auto"
                />
              </div>
              
              <div className="text-center">
                <p className="text-sm text-gray-500 mb-3">Point your camera at the QR code</p>
                <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse"></span>
                  Ready to scan
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <PromotionProduct />
    </>
  );
}

export default Home;
