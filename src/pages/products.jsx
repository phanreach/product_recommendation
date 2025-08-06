import { useState } from 'react';
import { Search, ChevronDown, ChevronUp } from 'lucide-react';

const Products = () => {
  const [activeFilters, setActiveFilters] = useState({
    availability: true,
    category: false,
    colors: false,
    priceRange: false,
    collections: false,
    tags: false,
    ratings: false
  });

  const [selectedCategory, setSelectedCategory] = useState('NEW');

  const toggleFilter = (filter) => {
    setActiveFilters(prev => ({
      ...prev,
      [filter]: !prev[filter]
    }));
  };

  // Sample product data based on your reference
  const products = [
    {
      id: 1,
      name: 'Basic Slim Fit T-Shirt',
      type: 'Cotton T Shirt',
      price: 199,
      image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop',
      category: 'NEW'
    },
    {
      id: 2,
      name: 'Basic Heavy Weight T-Shirt', 
      type: 'Crewneck T-Shirt',
      price: 199,
      image: 'https://images.unsplash.com/photo-1583743814966-8936f37f4b30?w=400&h=400&fit=crop',
      category: 'NEW'
    },
    {
      id: 3,
      name: 'Full Sleeve Zipper',
      type: 'Cotton T Shirt',
      price: 199,
      image: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=400&h=400&fit=crop',
      category: 'NEW'
    },
    {
      id: 4,
      name: 'Embroidered Destructive Shirt',
      type: 'Cotton T Shirt',
      price: 199,
      image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&h=400&fit=crop',
      category: 'SHIRTS'
    },
    {
      id: 5,
      name: 'Basic Heavy Weight T-Shirt',
      type: 'Cotton T Shirt', 
      price: 199,
      image: 'https://images.unsplash.com/photo-1622445275576-721325763afe?w=400&h=400&fit=crop',
      category: 'T-SHIRTS'
    },
    {
      id: 6,
      name: 'Skimmed Print T-Shirt',
      type: 'Hermy Shirt',
      price: 399,
      image: 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=400&h=400&fit=crop',
      category: 'POLO SHIRTS'
    }
  ];

  const categories = [
    'NEW', 'BEST SELLERS', 'SHIRTS', 'T-SHIRTS', 'POLO SHIRTS', 'SHORTS', 
    'JEANS', 'SUIT', 'JACKETS', 'COAT'
  ];

  const sizes = ['XS', 'S', 'M', 'L', 'XL', '2X'];

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 text-sm text-gray-500 mb-6">
          <span>Home</span>
          <span>/</span>
          <span className="text-gray-900">Products</span>
        </div>

        {/* Page Title */}
        <h1 className="text-3xl font-bold text-gray-900 mb-8">PRODUCTS</h1>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <div className="lg:w-1/4">
            <div className="bg-white rounded-lg shadow-sm p-6 space-y-6">
              <h2 className="text-lg font-semibold text-gray-900">Filters</h2>

              {/* Size Filter */}
              <div>
                <h3 className="text-sm font-medium text-gray-900 mb-3">Size</h3>
                <div className="grid grid-cols-3 gap-2">
                  {sizes.map((size) => (
                    <button
                      key={size}
                      className="px-3 py-2 text-sm border border-gray-300 rounded-md hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500"
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Availability Filter */}
              <div>
                <button
                  onClick={() => toggleFilter('availability')}
                  className="flex items-center justify-between w-full text-left"
                >
                  <h3 className="text-sm font-medium text-gray-900">Availability</h3>
                  {activeFilters.availability ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </button>
                {activeFilters.availability && (
                  <div className="mt-3 space-y-2">
                    <label className="flex items-center">
                      <input type="checkbox" className="rounded border-gray-300" />
                      <span className="ml-2 text-sm text-gray-600">Available (450)</span>
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="rounded border-gray-300" />
                      <span className="ml-2 text-sm text-gray-600">Out Of Stock (18)</span>
                    </label>
                  </div>
                )}
              </div>

              {/* Category Filter */}
              <div>
                <button
                  onClick={() => toggleFilter('category')}
                  className="flex items-center justify-between w-full text-left"
                >
                  <h3 className="text-sm font-medium text-gray-900">Category</h3>
                  {activeFilters.category ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </button>
              </div>

              {/* Colors Filter */}
              <div>
                <button
                  onClick={() => toggleFilter('colors')}
                  className="flex items-center justify-between w-full text-left"
                >
                  <h3 className="text-sm font-medium text-gray-900">Colors</h3>
                  {activeFilters.colors ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </button>
              </div>

              {/* Price Range Filter */}
              <div>
                <button
                  onClick={() => toggleFilter('priceRange')}
                  className="flex items-center justify-between w-full text-left"
                >
                  <h3 className="text-sm font-medium text-gray-900">Price Range</h3>
                  {activeFilters.priceRange ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </button>
              </div>

              {/* Collections Filter */}
              <div>
                <button
                  onClick={() => toggleFilter('collections')}
                  className="flex items-center justify-between w-full text-left"
                >
                  <h3 className="text-sm font-medium text-gray-900">Collections</h3>
                  {activeFilters.collections ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </button>
              </div>

              {/* Tags Filter */}
              <div>
                <button
                  onClick={() => toggleFilter('tags')}
                  className="flex items-center justify-between w-full text-left"
                >
                  <h3 className="text-sm font-medium text-gray-900">Tags</h3>
                  {activeFilters.tags ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </button>
              </div>

              {/* Ratings Filter */}
              <div>
                <button
                  onClick={() => toggleFilter('ratings')}
                  className="flex items-center justify-between w-full text-left"
                >
                  <h3 className="text-sm font-medium text-gray-900">Ratings</h3>
                  {activeFilters.ratings ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </button>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:w-3/4">
            {/* Search Bar */}
            <div className="relative mb-6">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search"
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-gray-500 focus:border-gray-500"
              />
            </div>

            {/* Category Tabs */}
            <div className="flex flex-wrap gap-2 mb-6">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                    selectedCategory === category
                      ? 'bg-gray-900 text-white'
                      : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product) => (
                <div key={product.id} className="bg-white rounded-lg shadow-sm overflow-hidden group hover:shadow-md transition-shadow">
                  <div className="aspect-square bg-gray-100">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <p className="text-xs text-gray-500 mb-1">{product.type}</p>
                    <h3 className="text-sm font-medium text-gray-900 mb-2">{product.name}</h3>
                    <p className="text-lg font-semibold text-gray-900">${product.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
