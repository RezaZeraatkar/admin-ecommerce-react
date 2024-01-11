import { useCallback, useEffect, useMemo, useState } from 'react';
import {
  DataGrid,
  GridColDef,
  GridRenderCellParams,
  GridToolbar,
} from '@mui/x-data-grid';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import {
  useDeleteProductMutation,
  useGetAllProductsQuery,
} from '@/store/api/api';
import { Link } from 'react-router-dom';
import { Typography } from '@mui/material';
import DialogBox from '../shared/DialogBox';

export default function ProductListDataGrid() {
  const [openDeleteDialog, setDeleteDialog] = useState(false);

  const [removedItemId, setRemovedItemId] = useState(null);
  const {
    data: products,
    isLoading,
    isFetching,
    isSuccess,
    isError,
    error,
  } = useGetAllProductsQuery({});
  const [deleteProduct, { isLoading: productIsLoading }] =
    useDeleteProductMutation();

  const handleDeleteClick = useCallback(async (id) => {
    setDeleteDialog(true);
    setRemovedItemId(id);
  }, []);

  // handling successes here
  useEffect(() => {
    if (isSuccess) {
      console.log(products);
    }
  }, [isSuccess, products]);

  // handline errors here
  useEffect(() => {
    if (isError) {
      console.log(error);
    }
  }, [isError, error]);

  const handleDeleteDialogClose = useCallback(() => {
    setDeleteDialog(false);
  }, []);

  const handleItemDeleteAction = useCallback(async () => {
    const id = removedItemId;
    setDeleteDialog(false);
    try {
      const deletedItem = await deleteProduct(id).unwrap();
      // toast.success(deletedItem.message, { position: 'top-right' });
      console.log(deletedItem);
    } catch (error) {
      console.error(error);
      // handleServerErrors(error);
    }
  }, [deleteProduct, removedItemId]);

  const columns: GridColDef[] = useMemo(
    () => [
      { field: 'name', headerName: 'Product Name', width: 200 },
      { field: 'price', headerName: 'Price', width: 100 },
      { field: 'color', headerName: 'Color', width: 100 },
      { field: 'size', headerName: 'Size', width: 100 },
      { field: 'sleeves', headerName: 'Sleeves', width: 150 },
      { field: 'stock', headerName: 'Stock', width: 200 },
      {
        field: 'actions',
        headerName: 'Actions',
        sortable: false,
        width: 100,
        renderCell: (params: GridRenderCellParams) => {
          return (
            <div>
              <IconButton
                component={Link}
                aria-label='delete'
                size='small'
                to={`/product/edit/${params.row.id}`}
              >
                <EditIcon />
              </IconButton>
              <IconButton
                onClick={() => handleDeleteClick(params.row.id)}
                aria-label='delete'
              >
                <DeleteForeverIcon />
              </IconButton>
            </div>
          );
        },
      },
    ],
    [handleDeleteClick]
  );

  return (
    <>
      <DataGrid
        rows={isSuccess ? products : []}
        columns={columns}
        slots={{ toolbar: GridToolbar }}
        className='p-1'
        slotProps={{
          toolbar: {
            showQuickFilter: true,
          },
        }}
        loading={isLoading || isFetching}
      />
      <DialogBox
        dialogContentTitle={
          <Typography color={'red'}>ِDelete Record</Typography>
        }
        open={openDeleteDialog}
        onCloseHandler={handleDeleteDialogClose}
        onChangeHandler={handleItemDeleteAction}
        dialogContentText={'Are you sure to delete this file?'}
      />
    </>
  );
}
