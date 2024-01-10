import Typography from '@mui/material/Typography';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import CTextField from '@/components/inputs/CTextField';

export default function ProductInventory() {
  return (
    <div className='p-2'>
      <div className='flex gap-4 items-center'>
        <Typography variant='h6' gutterBottom>
          Inventory
        </Typography>
        <FormControlLabel control={<Checkbox />} label='Not-Manufactured' />
      </div>
      <div className='flex gap-2 w-full'>
        <CTextField
          name='stockQuantity'
          label='Stock quantity'
          id='outlined-size-small'
          defaultValue=''
          size='small'
          className='w-2/3'
        />
      </div>
    </div>
  );
}
