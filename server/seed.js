import Attribute from './models/attributes.js';
import Product from './models/products.js';

async function seed() {
  // Attributes data
  const attributes = [
    { type: 'size', title: 's' },
    { type: 'size', title: 'm' },
    { type: 'size', title: 'l' },
    { type: 'size', title: 'xl' },
    { type: 'color', title: 'red' },
    { type: 'color', title: 'green' },
    { type: 'sleeves', title: 'long' },
    { type: 'sleeves', title: 'short' },
  ];

  // Create attributes
  for (const attribute of attributes) {
    await Attribute.create(attribute);
  }

  // Products data
  const products = [
    {
      name: 'T-Shirt',
      price: '20$',
      description: 'lorem ipsum ...',
      color: 5,
      size: 1,
      sleeves: 7,
      stock: 15,
    },
    {
      name: 'Hoodie',
      price: '50$',
      description: 'lorem ipsum ...',
      color: 6,
      size: 2,
      sleeves: 7,
      stock: -1,
    },
    {
      name: 'T-Shirt',
      description: 'A cool t-shirt',
      price: 19.99,
      color: 5,
      size: 3,
      sleeves: 8,
      stock: 100,
    },
  ];

  // Create products
  for (const product of products) {
    await Product.create(product);
  }
}

// Call the seed function
seed().catch((err) => console.error(err));
