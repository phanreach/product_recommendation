import { addToCart, getCart } from '../src/api/services.js';

// Test script to verify cart functionality
async function testCart() {
  try {
    console.log('Testing add to cart...');
    await addToCart(1, 1);
    console.log('Added product 1 to cart');
    
    console.log('Fetching cart...');
    const cart = await getCart();
    console.log('Cart data:', cart);
    
  } catch (error) {
    console.error('Test failed:', error);
  }
}

testCart();
