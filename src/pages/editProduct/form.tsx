import { Suspense, lazy, useCallback } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import ProductBasicInformation from '@/components/forms/ProductBasicInformation';
import ProductInventory from '@/components/forms/ProductInventory';
import Title from '@/components/shared/Title';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import {
  ProductBasicInformationSchema,
  ProductAttributesSchema,
  ProductInventorySchema,
} from '@/formSchemas';
import DefaultSkeleton from '@/components/shared/DefaultSkeleton';
import { useCreateProductMutation } from '@/store/api/api';
import CircularProgress from '@mui/material/CircularProgress';

const ProductAttributes = lazy(
  () => import('@/components/forms/ProductAttributes')
);

const schema = z.object({
  ...ProductBasicInformationSchema.shape,
  ...ProductAttributesSchema.shape,
  ...ProductInventorySchema.shape,
});

export default function EditProductForm({ product }: { product: Product }) {
  const methods = useForm<Product>({
    defaultValues: {
      name: product?.name,
      description: product?.description,
      price: product?.price,
      stock: product?.stock,
      color: {
        id: product?.colorId,
        value: product?.colorTitle,
      },
    },
    resolver: zodResolver(schema),
  });

  const [createProduct, { isLoading }] = useCreateProductMutation();

  const onSubmit = useCallback(
    async (data: Product) => {
      const product = {
        ...data,
        color: data.color.id,
        size: data.size.id,
        sleeves: data.sleeves.id,
      };
      try {
        const productRes = await createProduct(product).unwrap();
        console.log(productRes);
      } catch (error) {
        console.error(error);
      }
    },
    [createProduct]
  );

  return (
    <FormProvider {...methods}>
      <Box
        component='form'
        className='w-full flex flex-col gap-4'
        onSubmit={methods.handleSubmit(onSubmit)}
      >
        <div className='flex justify-between items-center'>
          <Title>Edit Product</Title>
          <Button
            disabled={isLoading}
            type='submit'
            variant='contained'
            size='small'
          >
            {isLoading ? <CircularProgress size='small' /> : `Edit product`}
          </Button>
        </div>
        <div className='flex flex-col lg:flex-row gap-4 w-full'>
          <Paper className='p-2 w-full'>
            <ProductBasicInformation />
          </Paper>
          <Paper className='p-2 md:[650px] lg:w-[550px]'>
            <Suspense fallback={<DefaultSkeleton />}>
              <ProductAttributes />
            </Suspense>
          </Paper>
        </div>
        <Paper className='p-2 md:[650px] lg:w-[550px]'>
          <ProductInventory />
        </Paper>
      </Box>
    </FormProvider>
  );
}
