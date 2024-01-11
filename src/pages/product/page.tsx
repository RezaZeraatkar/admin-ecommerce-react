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
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const ProductAttributes = lazy(
  () => import('@/components/forms/ProductAttributes')
);

const schema = z.object({
  ...ProductBasicInformationSchema.shape,
  ...ProductAttributesSchema.shape,
  ...ProductInventorySchema.shape,
});

export default function Product() {
  const { pid } = useParams();

  const methods = useForm<Product>({
    defaultValues: {
      name: '',
      description: '',
      price: '',
      // @ts-expect-error stock type needs to be changed
      stock: '',
      color: {
        id: 1,
        value: '',
      },
      size: {
        id: 1,
        value: '',
      },
      sleeves: {
        id: 1,
        value: '',
      },
      notManufactured: false,
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
        await createProduct(product).unwrap();
        methods.reset();
      } catch (error) {
        console.error(error);
        // @ts-expect-error error data structure is unkown
        toast.error(error?.data?.message || error?.error, {
          position: 'top-right',
        });
      }
    },
    [createProduct, methods]
  );

  return (
    <FormProvider {...methods}>
      <Box
        component='form'
        className='w-full flex flex-col gap-4'
        onSubmit={methods.handleSubmit(onSubmit)}
      >
        <div className='flex justify-between items-center'>
          <Title>{pid ? 'Edit' : 'Add'} Product</Title>
          <Button
            disabled={!methods.formState.isDirty || isLoading}
            type='submit'
            size='small'
            variant='contained'
            aria-label='edit product'
            className='disabled:bg-slate-400'
          >
            Add product
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
