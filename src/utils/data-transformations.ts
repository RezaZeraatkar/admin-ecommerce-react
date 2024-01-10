import { v4 as uuidv4 } from 'uuid';

export const flattenProductsData = (products: Product[]) => {
  return products.flatMap((product) =>
    product.variants.map((variant) => ({
      id: uuidv4(), // This is the unique ID for the DataGrid row
      productId: product.id, // This is the product ID
      name: product.name,
      description: product.description,
      price: product.price,
      color: variant.color.value,
      size: variant.size.value,
      sleeves: variant.sleeves.value,
      stock: variant.stock,
    }))
  );
};

export const flattenAttributesData = (attributes: Attributes) => {
  const rows = Object.keys(attributes)
    .filter((key) => key !== 'models')
    .flatMap((key) =>
      (
        attributes[key as keyof Omit<Attributes, 'models'>] as AttributeValue[]
      ).map((attribute: AttributeValue) => ({
        id: uuidv4(),
        attributeId: attribute.id,
        model: key,
        value: attribute.value,
      }))
    );
  return rows;
};
