// API Testing Script
// Run this with: node test-api.js

import https from 'https';
import http from 'http';

// Test configuration
const BASE_URL = 'https://cipr-api.panhayuthoeun.codes/api';
let authToken = null;

// Helper function to make HTTP requests
function makeRequest(options, data = null) {
  return new Promise((resolve, reject) => {
    const protocol = options.protocol === 'https:' ? https : http;
    
    const req = protocol.request(options, (res) => {
      let body = '';
      res.on('data', (chunk) => {
        body += chunk;
      });
      
      res.on('end', () => {
        try {
          const response = {
            statusCode: res.statusCode,
            headers: res.headers,
            body: body ? JSON.parse(body) : null
          };
          resolve(response);
        } catch (e) {
          resolve({
            statusCode: res.statusCode,
            headers: res.headers,
            body: body
          });
        }
      });
    });
    
    req.on('error', (err) => {
      reject(err);
    });
    
    if (data) {
      req.write(JSON.stringify(data));
    }
    
    req.end();
  });
}

// Test functions
async function testLogin() {
  console.log('\n🔐 Testing Login...');
  
  const options = {
    hostname: 'cipr-api.panhayuthoeun.codes',
    port: 443,
    path: '/api/login',
    method: 'POST',
    protocol: 'https:',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  };
  
  const loginData = {
    email: 'test@example.com',
    password: 'password'
  };
  
  try {
    const response = await makeRequest(options, loginData);
    console.log(`Status: ${response.statusCode}`);
    console.log('Response:', JSON.stringify(response.body, null, 2));
    
    if (response.statusCode === 200 && response.body?.access_token) {
      authToken = response.body.access_token;
      console.log('✅ Login successful! Token saved for further tests.');
    } else {
      console.log('❌ Login failed or no token received');
      console.log('Response body:', response.body);
    }
  } catch (error) {
    console.log('❌ Login request failed:', error.message);
  }
}

async function testRegister() {
  console.log('\n📝 Testing Registration...');
  
  const options = {
    hostname: 'cipr-api.panhayuthoeun.codes',
    port: 443,
    path: '/api/register',
    method: 'POST',
    protocol: 'https:',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  };
  
  const registerData = {
    name: 'Test User',
    email: `test${Date.now()}@example.com`, // Unique email
    age: 25,
    gender: 'male',
    password: 'password123',
    password_confirmation: 'password123'
  };
  
  try {
    const response = await makeRequest(options, registerData);
    console.log(`Status: ${response.statusCode}`);
    console.log('Response:', JSON.stringify(response.body, null, 2));
    
    if (response.statusCode === 200 || response.statusCode === 201) {
      console.log('✅ Registration successful!');
    } else {
      console.log('❌ Registration failed');
    }
  } catch (error) {
    console.log('❌ Registration request failed:', error.message);
  }
}

async function testProducts() {
  console.log('\n📦 Testing Products List (Public)...');
  
  const options = {
    hostname: 'cipr-api.panhayuthoeun.codes',
    port: 443,
    path: '/api/products',
    method: 'GET',
    protocol: 'https:',
    headers: {
      'Accept': 'application/json'
    }
  };
  
  try {
    const response = await makeRequest(options);
    console.log(`Status: ${response.statusCode}`);
    
    if (response.body) {
      console.log('Response structure:');
      if (response.body.latest_products) {
        console.log(`- Latest products: ${response.body.latest_products.length} items`);
      }
      if (response.body.best_selling_products) {
        console.log(`- Best selling products: ${response.body.best_selling_products.length} items`);
      }
      if (response.body.recommended_products) {
        console.log(`- Recommended products: ${response.body.recommended_products.length} items`);
      }
      if (response.body.products) {
        console.log(`- Products array: ${response.body.products.length} items`);
      }
      
      // Show first product if available
      const allProducts = [
        ...(response.body.latest_products || []),
        ...(response.body.best_selling_products || []),
        ...(response.body.recommended_products || []),
        ...(response.body.products || [])
      ];
      
      if (allProducts.length > 0) {
        console.log('\nFirst product sample:');
        console.log(JSON.stringify(allProducts[0], null, 2));
        console.log('✅ Products fetched successfully!');
      } else {
        console.log('❌ No products found in response');
      }
    } else {
      console.log('❌ Empty response body');
    }
  } catch (error) {
    console.log('❌ Products request failed:', error.message);
  }
}

async function testProductById(productId = 8001) {
  if (!authToken) {
    console.log(`\n⚠️ Skipping product by ID test - no auth token`);
    return;
  }
  
  console.log(`\n🔍 Testing Product by ID (${productId}) with Authentication...`);
  
  const options = {
    hostname: 'cipr-api.panhayuthoeun.codes',
    port: 443,
    path: `/api/products/${productId}`,
    method: 'GET',
    protocol: 'https:',
    headers: {
      'Accept': 'application/json',
      'Authorization': `Bearer ${authToken}`
    }
  };
  
  try {
    const response = await makeRequest(options);
    console.log(`Status: ${response.statusCode}`);
    console.log('Response:', JSON.stringify(response.body, null, 2));
    
    if (response.statusCode === 200 && response.body) {
      console.log('✅ Product by ID fetched successfully!');
    } else {
      console.log('❌ Product by ID failed or not found');
    }
  } catch (error) {
    console.log('❌ Product by ID request failed:', error.message);
  }
}

async function testProductsWithAuth() {
  if (!authToken) {
    console.log('\n⚠️ Skipping authenticated products test - no auth token');
    return;
  }
  
  console.log('\n🔒 Testing Products with Authentication...');
  
  const options = {
    hostname: 'cipr-api.panhayuthoeun.codes',
    port: 443,
    path: '/api/products',
    method: 'GET',
    protocol: 'https:',
    headers: {
      'Accept': 'application/json',
      'Authorization': `Bearer ${authToken}`
    }
  };
  
  try {
    const response = await makeRequest(options);
    console.log(`Status: ${response.statusCode}`);
    
    if (response.body) {
      console.log('Authenticated response structure:');
      if (response.body.latest_products) {
        console.log(`- Latest products: ${response.body.latest_products.length} items`);
      }
      if (response.body.best_selling_products) {
        console.log(`- Best selling products: ${response.body.best_selling_products.length} items`);
      }
      if (response.body.recommended_products) {
        console.log(`- Recommended products: ${response.body.recommended_products.length} items`);
      }
      
      console.log('✅ Authenticated products fetched successfully!');
    } else {
      console.log('❌ Empty authenticated response');
    }
  } catch (error) {
    console.log('❌ Authenticated products request failed:', error.message);
  }
}

async function testSearchProducts() {
  if (!authToken) {
    console.log('\n⚠️ Skipping search products test - no auth token');
    return;
  }
  
  console.log('\n🔍 Testing Search Products...');
  
  const options = {
    hostname: 'cipr-api.panhayuthoeun.codes',
    port: 443,
    path: '/api/products/search?search=best&limit=5',
    method: 'GET',
    protocol: 'https:',
    headers: {
      'Accept': 'application/json',
      'Authorization': `Bearer ${authToken}`
    }
  };
  
  try {
    const response = await makeRequest(options);
    console.log(`Status: ${response.statusCode}`);
    
    if (response.body) {
      console.log('Search results:');
      if (response.body.products) {
        console.log(`- Found ${response.body.products.length} products matching "best"`);
        if (response.body.products.length > 0) {
          console.log('First result:', JSON.stringify(response.body.products[0], null, 2));
        }
      } else if (Array.isArray(response.body)) {
        console.log(`- Found ${response.body.length} products matching "best"`);
        if (response.body.length > 0) {
          console.log('First result:', JSON.stringify(response.body[0], null, 2));
        }
      }
      
      console.log('✅ Search products successful!');
    } else {
      console.log('❌ Empty search response');
    }
  } catch (error) {
    console.log('❌ Search products request failed:', error.message);
  }
}

async function testUserDetails() {
  if (!authToken) {
    console.log('\n⚠️ Skipping user details test - no auth token');
    return;
  }
  
  console.log('\n👤 Testing User Details...');
  
  const options = {
    hostname: 'cipr-api.panhayuthoeun.codes',
    port: 443,
    path: '/api/user',
    method: 'GET',
    protocol: 'https:',
    headers: {
      'Accept': 'application/json',
      'Authorization': `Bearer ${authToken}`
    }
  };
  
  try {
    const response = await makeRequest(options);
    console.log(`Status: ${response.statusCode}`);
    console.log('Response:', JSON.stringify(response.body, null, 2));
    
    if (response.statusCode === 200) {
      console.log('✅ User details fetched successfully!');
    } else {
      console.log('❌ User details failed');
    }
  } catch (error) {
    console.log('❌ User details request failed:', error.message);
  }
}

// Run all tests
async function runAllTests() {
  console.log('🚀 Starting API Tests for CIPR E-commerce Backend');
  console.log('================================================');
  
  // Test registration first (creates new user)
  await testRegister();
  
  // Test login (gets auth token)
  await testLogin();
  
  // Test public endpoints
  await testProducts();
  
  // Test authenticated endpoints
  await testProductsWithAuth();
  await testProductById(8001); // Use a real product ID from API
  await testSearchProducts();
  await testUserDetails();
  
  console.log('\n🏁 All API tests completed!');
  console.log('================================================');
}

// Run the tests
runAllTests().catch(console.error);
