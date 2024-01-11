// import { useMemo } from 'react';
import { Suspense, lazy } from 'react';
import Button from '@mui/material/Button';
import Title from '@/components/shared/Title';
import { Link } from 'react-router-dom';
import DefaultSkeleton from '@/components/shared/DefaultSkeleton';

const ProductListDataGrid = lazy(
  () => import('@/components/datagrids/ProductList')
);

export default function ProductsList() {
  return (
    <div className='h-[500px] w-full bg-white p-4'>
      <div className='flex justify-between my-4'>
        <Title>Products</Title>
        <Button
          component={Link}
          variant='contained'
          size='small'
          to='/product/add'
        >
          Add new product
        </Button>
      </div>
      <Suspense fallback={<DefaultSkeleton />}>
        <ProductListDataGrid />
      </Suspense>
    </div>
  );
}
