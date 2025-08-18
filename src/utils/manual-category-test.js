// Manual category test
const testProduct = {
  id: "test-1",
  name: "Test Pyjamas",
  description: ["pyjamas", "XS", "M", "green", "kid", "spring", "Morocco"],
  price: "25.99"
};

const validCategories = ['t-shirt', 'dress', 'suit', 'short', 'jacket', 'sportwear', 'shoes', 'coat', 'hat', 'pyjamas', 'undies'];

console.log('🧪 Manual Category Test');
console.log('Test product:', testProduct);
console.log('Description array:', testProduct.description);
console.log('First element:', testProduct.description[0]);
console.log('First element lowercased:', testProduct.description[0]?.toLowerCase());
console.log('Valid categories:', validCategories);
console.log('Category found?', validCategories.includes(testProduct.description[0]?.toLowerCase()));

const categoryFromDescription = testProduct.description[0]?.toLowerCase();
const category = validCategories.includes(categoryFromDescription) 
  ? categoryFromDescription.toUpperCase() 
  : 'UNCATEGORIZED';

console.log('Final category:', category);

export { testProduct, category };
