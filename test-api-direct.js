// Test script to check API data directly
const axios = require('axios');

const API_BASE_URL = 'https://cipr-api.panhayuthoeun.codes/api';

const testAPI = async () => {
  try {
    console.log('🧪 Testing API directly...');
    
    // Test direct API call
    const response = await axios.get(`${API_BASE_URL}/products`, {
      timeout: 30000,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    });
    
    console.log('📦 Raw API Response Status:', response.status);
    console.log('📦 Raw API Response Data:', response.data);
    
    if (response.data?.products?.length > 0) {
      console.log('🔍 First 3 raw products from API:');
      response.data.products.slice(0, 3).forEach((product, index) => {
        console.log(`Raw Product ${index + 1}:`, {
          id: product.id,
          name: product.name,
          description: product.description,
          price: product.price,
          descriptionType: typeof product.description,
          isArray: Array.isArray(product.description)
        });
      });
    }
  } catch (error) {
    console.error('❌ API Test Error:', error.message);
    if (error.response) {
      console.error('Response status:', error.response.status);
      console.error('Response data:', error.response.data);
    }
  }
};

testAPI();
