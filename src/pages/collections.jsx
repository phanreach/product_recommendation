const Collections = () => {
  const collections = [
    {
      id: 1,
      title: 'XIV Collections 23-24',
      description: 'Latest fashion trends for the modern gentleman',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop',
      products: [
        {
          id: 1,
          name: 'Basic Heavy Weight T-Shirt',
          price: 199,
          image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=300&h=300&fit=crop'
        },
        {
          id: 2,
          name: 'Soft Hand Straight Fit Jeans',
          price: 399,
          image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=300&h=300&fit=crop'
        },
        {
          id: 3,
          name: 'Basic Heavy Weight T-Shirt',
          price: 199,
          image: 'https://images.unsplash.com/photo-1583743814966-8936f37f4b30?w=300&h=300&fit=crop'
        }
      ]
    },
    {
      id: 2,
      title: 'Spring Collection',
      description: 'Fresh styles for the new season',
      image: 'https://images.unsplash.com/photo-1490114538077-0a7f8cb49891?w=800&h=600&fit=crop',
      products: [
        {
          id: 4,
          name: 'Lightweight Cotton Shirt',
          price: 249,
          image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=300&h=300&fit=crop'
        },
        {
          id: 5,
          name: 'Casual Polo Shirt',
          price: 179,
          image: 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=300&h=300&fit=crop'
        }
      ]
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Collections</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our carefully curated collections that blend timeless style with contemporary fashion
          </p>
        </div>

        {/* Collections */}
        <div className="space-y-16">
          {collections.map((collection, index) => (
            <div key={collection.id} className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              {/* Collection Image - Left on even, Right on odd */}
              <div className={`${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                <div className="aspect-[4/3] rounded-lg overflow-hidden">
                  <img
                    src={collection.image}
                    alt={collection.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Collection Content */}
              <div className={`${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'} space-y-6`}>
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-3">{collection.title}</h2>
                  <p className="text-gray-600 text-lg">{collection.description}</p>
                </div>

                {/* Featured Products */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {collection.products.map((product) => (
                    <div key={product.id} className="group cursor-pointer">
                      <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden mb-2">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <h3 className="text-sm font-medium text-gray-900 mb-1">{product.name}</h3>
                      <p className="text-sm text-gray-600">${product.price}</p>
                    </div>
                  ))}
                </div>

                <button className="bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors">
                  View Collection
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Brand Philosophy Section */}
        <div className="mt-20 bg-gray-50 rounded-2xl p-8 md:p-12">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              OUR APPROACH TO FASHION DESIGN
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              At elegant vogue, we blend creativity with craftsmanship to create fashion that transcends trends. Our approach is meticulously crafted, ensuring the highest quality across finish.
            </p>
            
            {/* Philosophy Images */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="aspect-[3/4] rounded-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1490114538077-0a7f8cb49891?w=400&h=500&fit=crop"
                  alt="Fashion Design Process"
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
                  alt="Quality Materials"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collections;
