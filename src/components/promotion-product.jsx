function PromotionProduct() {
  const recommendedProducts = [
    {
      id: 1,
      name: 'Essential Cotton T-Shirt',
      type: 'Basic Tee',
      price: 199,
      image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop'
    },
    {
      id: 2,
      name: 'Premium Polo Shirt',
      type: 'Polo',
      price: 179,
      image: 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=400&h=400&fit=crop'
    },
    {
      id: 3,
      name: 'Classic Denim Jacket',
      type: 'Outerwear',
      price: 399,
      image: 'https://images.unsplash.com/photo-1551537482-f2075a1d41f2?w=400&h=400&fit=crop'
    },
    {
      id: 4,
      name: 'Casual Chino Pants',
      type: 'Bottoms',
      price: 229,
      image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400&h=400&fit=crop'
    }
  ];

  return (
    <div className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-4">
            AI Recommended Products
          </h2>
          <p className="text-lg text-gray-600">
            Personalized recommendations based on your preferences and browsing history
          </p>
        </div>

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {recommendedProducts.map((product) => (
            <div key={product.id} className="group relative cursor-pointer">
              <div className="aspect-square w-full overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-90 transition-opacity">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-300" 
                />
              </div>
              <div className="mt-4 space-y-2">
                <p className="text-sm text-gray-500">{product.type}</p>
                <h3 className="text-lg font-medium text-gray-900">
                  <a href={`/products/${product.id}`}>
                    <span aria-hidden="true" className="absolute inset-0"></span>
                    {product.name}
                  </a>
                </h3>
                <p className="text-lg font-semibold text-gray-900">${product.price}</p>
              </div>
              
              {/* Add to Cart Button */}
              <button 
                className="mt-3 w-full bg-gray-900 text-white py-2 px-4 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors opacity-0 group-hover:opacity-100 duration-300"
                onClick={(e) => {
                  e.preventDefault();
                  console.log(`Add ${product.name} to cart`);
                }}
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>

        {/* AI Badge */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-2 bg-gray-100 px-4 py-2 rounded-full">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            <span className="text-sm text-gray-600 font-medium">Powered by AI Algorithm</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PromotionProduct;