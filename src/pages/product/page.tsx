import { FormProvider, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import ProductAttributes from '@/components/forms/ProductAttributes';
import ProductBasicInformation from '@/components/forms/ProductBasicInformation';
import ProductInventory from '@/components/forms/ProductInventory';
import Title from '@/components/shared/Title';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import { useCallback } from 'react';
import {
  ProductBasicInformationSchema,
  ProductAttributesSchema,
  ProductInventorySchema,
} from '@/formSchemas';

export default function Product() {
  const schema = z.object({
    ...ProductBasicInformationSchema.shape,
    ...ProductAttributesSchema.shape,
    ...ProductInventorySchema.shape,
  });

  const methods = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = useCallback((data) => {
    console.log(data);
  }, []);

  // console.log(methods.formState.errors);

  return (
    <FormProvider {...methods}>
      <Box
        component='form'
        className='w-full flex flex-col gap-4'
        onSubmit={methods.handleSubmit(onSubmit)}
      >
        <div className='flex justify-between items-center'>
          <Title>Add/Edit Product</Title>
          <Button type='submit' variant='contained' size='small'>
            Add new product
          </Button>
        </div>
        <div className='flex flex-col lg:flex-row gap-4 w-full'>
          <Paper className='p-2 w-full'>
            <ProductBasicInformation />
          </Paper>
          <Paper className='p-2 md:[650px] lg:w-[550px]'>
            <ProductAttributes />
          </Paper>
        </div>
        <Paper className='p-2 md:[650px] lg:w-[550px]'>
          <ProductInventory />
        </Paper>
      </Box>
    </FormProvider>
  );
}
