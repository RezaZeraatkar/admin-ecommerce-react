import { useGetProductByIdQuery } from '@/store/api/api';
import { useParams } from 'react-router-dom';
import EditProductForm from './form';
import CircularProgress from '@mui/material/CircularProgress';
import { useEffect } from 'react';

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
    if (productSuccess) {
      console.log(product);
    }
  }, [productSuccess, product]);

  useEffect(() => {
    if (ProductIsError) {
      console.log(productError);
    }
  }, [ProductIsError, productError]);

  if (productLoading || productIsFetching) return <CircularProgress />;

  if (productSuccess) return <EditProductForm product={product} />;
  else <>No Product Found</>;
}
