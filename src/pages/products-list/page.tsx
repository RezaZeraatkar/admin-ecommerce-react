import {
  DataGrid,
  GridColDef,
  GridRenderCellParams,
  GridToolbar,
} from '@mui/x-data-grid';
// import { useMemo } from 'react';
import { products } from '@/data/data';
import { flattenProductsData } from '@/utils/data-transformations';
import Button from '@mui/material/Button';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import Title from '@/components/shared/Title';
import { Link } from 'react-router-dom';

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

export default function ProductsList() {
  const productItems = flattenProductsData(products);
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
      <DataGrid
        rows={productItems}
        columns={columns}
        slots={{ toolbar: GridToolbar }}
        className='p-1'
        slotProps={{
          toolbar: {
            showQuickFilter: true,
          },
        }}
      />
    </div>
  );
}
