import { Suspense, lazy, useCallback } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import ProductBasicInformation from '@/components/forms/ProductBasicInformation';
import ProductInventory from '@/components/forms/ProductInventory';
import Title from '@/components/shared/Title';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import {
  ProductBasicInformationSchema,
  ProductAttributesSchema,
  ProductInventorySchema,
} from '@/formSchemas';
import DefaultSkeleton from '@/components/shared/DefaultSkeleton';
import { useUpdateProductMutation } from '@/store/api/api';
import Button from '@mui/material/Button';
import { useNavigate, useParams } from 'react-router';
import { toast } from 'react-toastify';

const ProductAttributes = lazy(
  () => import('@/components/forms/ProductAttributes')
);

const schema = z.object({
  ...ProductBasicInformationSchema.shape,
  ...ProductAttributesSchema.shape,
  ...ProductInventorySchema.shape,
});

export default function EditProductForm({ product }: { product: Product }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const methods = useForm<Product>({
    defaultValues: {
      name: product?.name,
      description: product?.description,
      price: String(product?.price),
      stock: String(product?.stock),
      color: {
        id: product?.colorId,
        value: product?.colorTitle,
      },
    },
    resolver: zodResolver(schema),
  });

  const [updateProduct, { isLoading }] = useUpdateProductMutation();

  const onSubmit = useCallback(
    async (data: Product) => {
      console.log(data);
      const product = {
        ...data,
        id: id,
        color: data.color.id,
        size: data.size.id,
        sleeves: data.sleeves.id,
      };
      try {
        const productRes = await updateProduct(product).unwrap();
        console.log(productRes);
        // navigate to product list page
        navigate('/products');
      } catch (error) {
        console.error(error);
        // @ts-expect-error error data structure is unkown
        toast.error(error?.data?.message || error?.error, {
          position: 'top-right',
        });
      }
    },
    [updateProduct, id, navigate]
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
            size='small'
            variant='contained'
            aria-label='edit product'
            className='disabled:bg-slate-400'
          >
            Edit product
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
