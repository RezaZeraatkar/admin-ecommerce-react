import { z } from 'zod';

export const ProductBasicInformationSchema = z.object({
  productName: z.string().min(1, { message: 'product name is required!' }),
  price: z
    .string()
    .min(1, { message: 'price is required!' })
    .refine((value) => !!parseInt(value), {
      message: 'It must be a valid number',
    }),
  productDescription: z
    .string()
    .min(1, { message: 'product description is required!' }),
});

const OptionSchema = z
  .object(
    {
      id: z.number().min(1),
      value: z.string().min(1),
    },
    {
      required_error: 'این فیلد الزامی است!',
      invalid_type_error: 'یک گزینه را انتخاب کنید!',
    }
  )
  .array();

export type OptionType = z.infer<typeof OptionSchema>;

export const ProductAttributesSchema = z.object({
  colors: OptionSchema,
  Size: OptionSchema,
  Sleeves: OptionSchema,
});

export const ProductInventorySchema = z.object({
  notManufactured: z.boolean(),
  stockQuantity: z
    .string()
    .min(1, { message: 'price is required!' })
    .refine((value) => !!parseInt(value), {
      message: 'It must be a valid number',
    }),
});
