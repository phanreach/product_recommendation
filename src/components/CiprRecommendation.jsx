import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { getProducts } from '../api/services';

function CiprRecommendation({ currentProductId }) {
  const navigate = useNavigate();
  const [recommendations, setRecommendations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchRecommendations = async () => {
      try {
        setLoading(true);
        const response = await getProducts();
        
        // Filter out current product and get random recommendations
        const otherProducts = response.products?.filter(p => p.id !== currentProductId) || [];
        
        // Enhanced products with additional data for better display
        const enhancedProducts = otherProducts.slice(0, 8).map(product => ({
          ...product,
          rating: Math.random() * 2 + 3, // Random rating between 3-5
          reviewCount: Math.floor(Math.random() * 200) + 10,
          originalPrice: product.price + Math.floor(Math.random() * 50) + 10,
          discount: Math.floor(Math.random() * 30) + 5
        }));
        
        setRecommendations(enhancedProducts);
      } catch (error) {
        console.error('Error fetching recommendations:', error);
        setRecommendations([]);
      } finally {
        setLoading(false);
      }
    };

    fetchRecommendations();
  }, [currentProductId]);

  const nextSlide = () => {
    setCurrentIndex(prev => (prev + 1) % Math.max(1, recommendations.length - 3));
  };

  const prevSlide = () => {
    setCurrentIndex(prev => (prev - 1 + Math.max(1, recommendations.length - 3)) % Math.max(1, recommendations.length - 3));
  };

  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`);
  };

  if (loading) {
    return (
      <div className="space-y-6">
        <div className="h-8 bg-gray-100 rounded w-64 animate-pulse"></div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="space-y-3">
              <div className="aspect-square bg-gray-100 rounded-lg animate-pulse"></div>
              <div className="h-4 bg-gray-100 rounded animate-pulse"></div>
              <div className="h-4 bg-gray-100 rounded w-2/3 animate-pulse"></div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (recommendations.length === 0) {
    return null;
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-medium text-gray-900">
            You might also like
          </h2>
          <p className="text-gray-600 mt-1">
            Curated picks just for you
          </p>
        </div>
        
        {/* Navigation Controls */}
        {recommendations.length > 4 && (
          <div className="flex items-center space-x-2">
            <button
              onClick={prevSlide}
              className="p-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
              disabled={currentIndex === 0}
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={nextSlide}
              className="p-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
              disabled={currentIndex >= recommendations.length - 4}
            >
              <ChevronRight size={20} />
            </button>
          </div>
        )}
      </div>

      {/* Products Grid */}
      <div className="overflow-hidden">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {recommendations.slice(0, 4).map((product) => (
            <div
              key={product.id}
              className="group cursor-pointer"
              onClick={() => handleProductClick(product.id)}
            >
              {/* Product Image */}
              <div className="aspect-square bg-gray-50 rounded-lg overflow-hidden mb-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Product Info */}
              <div className="space-y-2">
                <h3 className="font-medium text-gray-900 group-hover:text-gray-700 transition-colors line-clamp-2">
                  {product.name}
                </h3>
                
                {/* Rating */}
                <div className="flex items-center space-x-1">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`w-3 h-3 ${
                          i < Math.floor(product.rating)
                            ? 'text-gray-900'
                            : 'text-gray-200'
                        }`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-xs text-gray-500">({product.reviewCount})</span>
                </div>

                {/* Price */}
                <div className="flex items-center space-x-2">
                  <span className="font-medium text-gray-900">
                    ${product.price}
                  </span>
                  {product.originalPrice > product.price && (
                    <span className="text-sm text-gray-400 line-through">
                      ${product.originalPrice}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* View All Button */}
      <div className="text-center pt-4">
        <button
          onClick={() => navigate('/products')}
          className="inline-flex items-center px-6 py-3 border border-gray-900 text-gray-900 rounded-lg hover:bg-gray-900 hover:text-white transition-colors font-medium"
        >
          View All Products
          <ArrowRight size={18} className="ml-2" />
        </button>
      </div>
    </div>
  );
}

export default CiprRecommendation;
