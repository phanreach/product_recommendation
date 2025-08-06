const New = () => {
  const newProducts = [
    {
      id: 1,
      name: 'Essential Cotton T-Shirt',
      type: 'Basic Tee',
      price: 199,
      originalPrice: 250,
      isNew: true,
      image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop'
    },
    {
      id: 2,
      name: 'Premium Denim Jacket',
      type: 'Outerwear',
      price: 399,
      originalPrice: 499,
      isNew: true,
      image: 'https://images.unsplash.com/photo-1551537482-f2075a1d41f2?w=400&h=400&fit=crop'
    },
    {
      id: 3,
      name: 'Minimalist Polo Shirt',
      type: 'Polo',
      price: 179,
      isNew: true,
      image: 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=400&h=400&fit=crop'
    },
    {
      id: 4,
      name: 'Classic Chino Pants',
      type: 'Bottoms',
      price: 229,
      isNew: true,
      image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400&h=400&fit=crop'
    },
    {
      id: 5,
      name: 'Heavyweight Hoodie',
      type: 'Sweatshirt',
      price: 299,
      isNew: true,
      image: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=400&h=400&fit=crop'
    },
    {
      id: 6,
      name: 'Linen Blend Shirt',
      type: 'Casual Shirt',
      price: 189,
      isNew: true,
      image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&h=400&fit=crop'
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">New Arrivals</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our latest collection featuring fresh designs and contemporary styles
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex justify-center mb-8">
          <div className="flex space-x-8 text-sm">
            <button className="text-gray-900 border-b-2 border-gray-900 pb-2">All New</button>
            <button className="text-gray-600 hover:text-gray-900 pb-2">This Week</button>
            <button className="text-gray-600 hover:text-gray-900 pb-2">This Month</button>
            <button className="text-gray-600 hover:text-gray-900 pb-2">Featured</button>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {newProducts.map((product) => (
            <div key={product.id} className="group cursor-pointer">
              <div className="relative aspect-square bg-gray-100 rounded-lg overflow-hidden mb-4">
                {product.isNew && (
                  <div className="absolute top-3 left-3 z-10">
                    <span className="bg-gray-900 text-white text-xs font-medium px-2 py-1 rounded">
                      NEW
                    </span>
                  </div>
                )}
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="space-y-2">
                <p className="text-sm text-gray-500">{product.type}</p>
                <h3 className="text-lg font-medium text-gray-900">{product.name}</h3>
                <div className="flex items-center space-x-2">
                  <span className="text-lg font-semibold text-gray-900">${product.price}</span>
                  {product.originalPrice && (
                    <span className="text-sm text-gray-500 line-through">${product.originalPrice}</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <button className="bg-gray-900 text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors">
            Load More Products
          </button>
        </div>
      </div>
    </div>
  );
};

export default New;
