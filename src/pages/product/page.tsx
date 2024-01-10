import ProductAttributes from '@/components/forms/ProductAttributes';
import ProductBasicInformation from '@/components/forms/ProductBasicInformation';
import ProductInventory from '@/components/forms/ProductInventory';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

export default function Product() {
  return (
    <Box component='form' className='w-full flex flex-col gap-4'>
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
  );
}
