import { FormProvider, useForm } from 'react-hook-form';
import ProductAttributes from '@/components/forms/ProductAttributes';
import ProductBasicInformation from '@/components/forms/ProductBasicInformation';
import ProductInventory from '@/components/forms/ProductInventory';
import Title from '@/components/shared/Title';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import { useCallback } from 'react';

export default function Product() {
  const methods = useForm();

  const onSubmit = useCallback((data: Record<string, string>) => {
    console.log(data);
  }, []);

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
