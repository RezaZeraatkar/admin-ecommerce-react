import { z } from 'zod';

export const ProductBasicInformationSchema = z.object({
  name: z.string().min(1, { message: 'product name is required!' }),
  price: z
    .string()
    .min(1, { message: 'price is required!' })
    .refine((value) => !!parseInt(value), {
      message: 'It must be a valid number',
    }),
  description: z
    .string()
    .min(1, { message: 'product description is required!' }),
});

const OptionSchema = z.object(
  {
    id: z.number().min(1),
    value: z.string().min(1),
  },
  {
    required_error: 'این فیلد الزامی است!',
    invalid_type_error: 'یک گزینه را انتخاب کنید!',
  }
);

export type OptionType = z.infer<typeof OptionSchema>;

export const ProductAttributesSchema = z.object({
  color: OptionSchema,
  size: OptionSchema,
  sleeves: OptionSchema,
});

export const ProductInventorySchema = z.object({
  notManufactured: z.boolean(),
  stock: z
    .string()
    .min(1, { message: 'Quantity is required!' })
    .refine((value) => typeof Number(value) === 'number', {
      message: 'It must be a valid number',
    }),
});
