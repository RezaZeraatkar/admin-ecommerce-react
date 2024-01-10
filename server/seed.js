import Attribute from './models/attributes.js';
import Product from './models/products.js';
import Variant from './models/variants.js';

async function seed() {
  // Products data
  const products = [
    {
      name: 'T-Shirt',
      price: '20$',
      description: 'lorem ipsum ...',
      variants: [
        {
          colorId: 1,
          sizeId: 1,
          sleevesId: 1,
          stock: 15,
        },
        {
          colorId: 2,
          sizeId: 2,
          sleevesId: 2,
          stock: 10,
        },
      ],
    },
    {
      name: 'Hoodie',
      price: '50$',
      description: 'lorem ipsum ...',
      variants: [
        {
          colorId: 1,
          sizeId: 3,
          sleevesId: 1,
          stock: 20,
        },
        {
          colorId: 2,
          sizeId: 4,
          sleevesId: 1,
          stock: 5,
        },
      ],
    },
  ];

  // Create products
  for (const product of products) {
    await Product.create(product, { include: Variant });
  }

  // Attributes data
  const attributes = [
    { type: 'size', value: 's' },
    { type: 'size', value: 'm' },
    { type: 'size', value: 'l' },
    { type: 'size', value: 'xl' },
    { type: 'colors', value: 'red' },
    { type: 'colors', value: 'green' },
    { type: 'sleeves', value: 'long' },
    { type: 'sleeves', value: 'short' },
  ];

  // Create attributes
  for (const attribute of attributes) {
    await Attribute.create(attribute);
  }
}

// Call the seed function
seed().catch((err) => console.error(err));
