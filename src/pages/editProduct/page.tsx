import { useGetProductByIdQuery } from '@/store/api/api';
import { useParams } from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';
import { Suspense, lazy, useEffect } from 'react';
import DefaultSkeleton from '@/components/shared/DefaultSkeleton';

const EditProductForm = lazy(
  () => import('@/pages/editProduct/editProductForm')
);

export default function EditProduct() {
  const { id } = useParams();

  const {
    data: product,
    isSuccess: productSuccess,
    isLoading: productLoading,
    isError: ProductIsError,
    error: productError,
    isFetching: productIsFetching,
  } = useGetProductByIdQuery(id);

  useEffect(() => {
    if (ProductIsError) {
      console.log(productError);
      // @ts-expect-error error data structure is unkown
      toast.error(productError?.data?.message || productError?.error, {
        position: 'top-right',
      });
    }
  }, [ProductIsError, productError]);

  if (productLoading || productIsFetching) return <DefaultSkeleton />;

  if (productSuccess)
    return (
      <Suspense fallback={<DefaultSkeleton />}>
        <EditProductForm product={product} />
      </Suspense>
    );
  else <>Sorry! No Product Found</>;
}
