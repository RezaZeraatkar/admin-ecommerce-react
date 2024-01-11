import {
  DataGrid,
  GridColDef,
  GridRenderCellParams,
  GridToolbar,
} from '@mui/x-data-grid';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import EditIcon from '@mui/icons-material/Edit';
import { useGetAllProductsQuery } from '@/store/api/api';
import { useEffect } from 'react';

const columns: GridColDef[] = [
  { field: 'name', headerName: 'Product Name', width: 250 },
  { field: 'price', headerName: 'Price', width: 100 },
  { field: 'color', headerName: 'Color', width: 100 },
  { field: 'size', headerName: 'Size', width: 100 },
  { field: 'sleeves', headerName: 'Sleeves', width: 150 },
  { field: 'stock', headerName: 'Stock', width: 100 },
  {
    field: 'actions',
    headerName: 'Actions',
    sortable: false,
    width: 200,
    renderCell: (params: GridRenderCellParams) => {
      const onClickEdit = () => {
        const id = params.row.productId; // Access the product ID here
        // handle edit action here
        console.log(id);
      };

      const onClickDelete = () => {
        const id = params.row.productId; // Access the product ID here
        // handle delete action here
        console.log(id);
      };

      const onClickView = () => {
        const id = params.row.productId; // Access the product ID here
        // handle view action here
        console.log(id);
      };

      return (
        <div>
          <IconButton onClick={onClickEdit} aria-label='delete'>
            <EditIcon />
          </IconButton>
          <IconButton onClick={onClickDelete} aria-label='delete'>
            <DeleteForeverIcon />
          </IconButton>
          <Button onClick={onClickView}>View</Button>
        </div>
      );
    },
  },
];

export default function ProductListDataGrid() {
  const {
    data: products,
    isLoading,
    isFetching,
    isSuccess,
    isError,
    error,
  } = useGetAllProductsQuery({});

  useEffect(() => {
    if (isSuccess) {
      console.log(products);
    }
  }, [isSuccess, products]);

  useEffect(() => {
    if (isError) {
      console.log(error);
    }
  }, [isError, error]);

  return (
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
  );
}
