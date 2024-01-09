import { v4 as uuidv4 } from 'uuid';

export const flattenProductsData = (products: Product[]) => {
  return products.flatMap((product) =>
    product.variants.map((variant) => ({
      id: uuidv4(), // This is the unique ID for the DataGrid row
      productId: product.id, // This is the product ID
      name: product.name,
      price: product.price,
      color: variant.color.value,
      size: variant.size.value,
      sleeves: variant.sleeves.value,
      stock: variant.stock,
    }))
  );
};
