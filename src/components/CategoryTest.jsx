import React, { useState, useEffect } from 'react';
import { getProducts } from '../api/services';

const CategoryTest = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const testCategories = async () => {
      try {
        console.log('🔍 Testing Product Categories...');
        console.log('⏰ Starting API call at:', new Date().toISOString());
        
        const result = await getProducts();
        
        console.log('📥 API call completed at:', new Date().toISOString());
        console.log('📦 API Result structure:', {
          hasResult: !!result,
          hasProducts: !!result?.products,
          productsLength: result?.products?.length || 0,
          firstProduct: result?.products?.[0] || null
        });
        
        if (result?.products?.length > 0) {
          console.log('🔍 First product in detail:', result.products[0]);
          console.log('🔍 Second product in detail:', result.products[1]);
          
          // Category analysis
          const categoryBreakdown = {};
          
          result.products.forEach((product, index) => {
            console.log(`Product ${index + 1} category processing:`, {
              id: product.id,
              name: product.name,
              originalDescription: product.description,
              finalCategory: product.category
            });
            
            const category = product.category || 'UNCATEGORIZED';
            categoryBreakdown[category] = (categoryBreakdown[category] || 0) + 1;
          });
          
          console.log('📊 Final Category Breakdown:', categoryBreakdown);
          
          setProducts(result.products);
        } else {
          console.log('⚠️ No products found in API response');
        }
        setLoading(false);
      } catch (error) {
        console.error('❌ Category Test Error:', error);
        console.error('❌ Error details:', {
          message: error.message,
          stack: error.stack,
          response: error.response?.data
        });
        setError(error.message);
        setLoading(false);
      }
    };

    testCategories();
  }, []);

  if (loading) {
    return (
      <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
        <p className="text-yellow-800">🔍 Testing product categories...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
        <p className="text-red-800">❌ Error: {error}</p>
      </div>
    );
  }

  // Calculate category stats
  const categoryStats = products.reduce((acc, product) => {
    const cat = product.category || 'UNCATEGORIZED';
    acc[cat] = (acc[cat] || 0) + 1;
    return acc;
  }, {});

  // const totalCategories = Object.keys(categoryStats).length;
  const categorizedProducts = products.filter(p => p.category && p.category !== 'UNCATEGORIZED').length;
  const uncategorizedProducts = products.filter(p => !p.category || p.category === 'UNCATEGORIZED').length;

  return (
    <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm">
      <h2 className="text-xl font-bold text-gray-900 mb-4">🏷️ Category Analysis</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="p-4 bg-blue-50 rounded-lg">
          <div className="text-2xl font-bold text-blue-600">{products.length}</div>
          <div className="text-sm text-blue-800">Total Products</div>
        </div>
        <div className="p-4 bg-green-50 rounded-lg">
          <div className="text-2xl font-bold text-green-600">{categorizedProducts}</div>
          <div className="text-sm text-green-800">Categorized</div>
        </div>
        <div className="p-4 bg-red-50 rounded-lg">
          <div className="text-2xl font-bold text-red-600">{uncategorizedProducts}</div>
          <div className="text-sm text-red-800">Uncategorized</div>
        </div>
      </div>

      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-3">Category Breakdown:</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          {Object.entries(categoryStats).map(([category, count]) => (
            <div key={category} className="p-2 bg-gray-50 rounded text-center">
              <div className="font-semibold text-gray-900">{category.toUpperCase()}</div>
              <div className="text-sm text-gray-600">{count} products</div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-3">Sample Products:</h3>
        <div className="space-y-3">
          {products.slice(0, 5).map(product => (
            <div key={product.id} className="p-3 border border-gray-200 rounded">
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <h4 className="font-medium text-gray-900">{product.name}</h4>
                  <p className="text-sm text-gray-600 mt-1">
                    <strong>Description:</strong> {Array.isArray(product.description) ? product.description.join(', ') : product.description}
                  </p>
                  <p className="text-sm text-gray-500">Price: ${product.price}</p>
                </div>
                <div className={`px-3 py-1 rounded text-sm font-medium ${
                  product.category && product.category !== 'UNCATEGORIZED'
                    ? 'bg-green-100 text-green-800'
                    : 'bg-red-100 text-red-800'
                }`}>
                  {product.category || 'UNCATEGORIZED'}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-4 text-xs text-gray-500">
        ℹ️ Check browser console for detailed logs
      </div>
    </div>
  );
};

export default CategoryTest;
