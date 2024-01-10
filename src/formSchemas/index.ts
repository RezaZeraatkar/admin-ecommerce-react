import { z } from 'zod';

export const ProductBasicInformationSchema = z.object({
  productName: z.string(),
  price: z.number(),
  productDescription: z.string(),
});

export const ProductAttributesSchema = z.object({
  colors: z.array(
    z.object({
      id: z.number(),
      value: z.string(),
    })
  ),
  Size: z.array(
    z.object({
      id: z.number(),
      value: z.string(),
    })
  ),
  Sleeves: z.array(
    z.object({
      id: z.number(),
      value: z.string(),
    })
  ),
});

export const ProductInventorySchema = z.object({
  notManufactured: z.boolean(),
  stockQuantity: z.number(),
});
