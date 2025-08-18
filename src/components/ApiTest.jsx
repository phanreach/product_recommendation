import { useState } from 'react';
import { getProducts } from '../api/services';

function ApiTest() {
  const [status, setStatus] = useState('Ready to test');
  const [loading, setLoading] = useState(false);

  const testApi = async () => {
    setLoading(true);
    setStatus('Testing API...');
    
    try {
      console.log('🧪 Starting API Test...');
      const result = await getProducts();
      console.log('🧪 API Test Result:', result);
      
      if (result?.products?.length > 0) {
        // Show category breakdown
        const categoryCount = {};
        result.products.forEach(product => {
          const cat = product.category || 'UNCATEGORIZED';
          categoryCount[cat] = (categoryCount[cat] || 0) + 1;
        });
        
        console.log('📊 Category Breakdown:', categoryCount);
        console.log('🔍 Sample Product:', result.products[0]);
        
        setStatus(`✅ Success! ${result.products.length} products | Categories: ${Object.keys(categoryCount).length}`);
      } else {
        setStatus('⚠️ API responded but no products found');
      }
    } catch (error) {
      console.error('🧪 API Test Error:', error);
      setStatus(`❌ Error: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 bg-white border rounded-lg shadow-lg p-4 max-w-sm">
      <h3 className="font-semibold text-sm mb-2">API Test</h3>
      <p className="text-xs text-gray-600 mb-3">{status}</p>
      <button
        onClick={testApi}
        disabled={loading}
        className="w-full bg-blue-600 text-white text-xs py-2 px-3 rounded hover:bg-blue-700 disabled:opacity-50"
      >
        {loading ? 'Testing...' : 'Test API Connection'}
      </button>
    </div>
  );
}

export default ApiTest;
