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

const columns: GridColDef[] = [
  { field: 'name', headerName: 'Product Name', width: 150 },
  { field: 'price', headerName: 'Price', width: 100 },
  { field: 'color', headerName: 'Color', width: 100 },
  { field: 'size', headerName: 'Size', width: 100 },
  { field: 'sleeves', headerName: 'Sleeves', width: 100 },
  { field: 'stock', headerName: 'Stock', width: 100 },
  {
    field: 'actions',
    headerName: 'Actions',
    sortable: false,
    width: 150,
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
      <DataGrid
        rows={productItems}
        columns={columns}
        slots={{ toolbar: GridToolbar }}
        slotProps={{
          toolbar: {
            showQuickFilter: true,
          },
        }}
      />
    </div>
  );
}
