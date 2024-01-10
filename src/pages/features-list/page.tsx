import {
  DataGrid,
  GridColDef,
  GridRenderCellParams,
  GridToolbar,
} from '@mui/x-data-grid';
// import { useMemo } from 'react';
import { attributes, products } from '@/data/data';
import {
  flattenAttributesData,
  flattenProductsData,
} from '@/utils/data-transformations';
import Button from '@mui/material/Button';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';

const columns: GridColDef[] = [
  { field: 'model', headerName: 'Model', width: 150 },
  { field: 'value', headerName: 'Value', width: 100 },
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

export default function FeaturesList() {
  const attributeItems = flattenAttributesData(attributes);
  return (
    <div className='h-[500px] w-full bg-white p-4'>
      <DataGrid
        rows={attributeItems}
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
