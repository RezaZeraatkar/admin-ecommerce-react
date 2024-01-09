import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

export default function ProductInventory() {
  return (
    <form>
      <div className='p-2'>
        <div className='flex gap-4 items-center'>
          <Typography variant='h6' gutterBottom>
            Inventory
          </Typography>
          <FormControlLabel control={<Checkbox />} label='Not-Manufactured' />
        </div>
        <div className='flex gap-2 w-full'>
          <TextField
            label='Stock quantity'
            id='outlined-size-small'
            defaultValue=''
            size='small'
            className='w-2/3'
          />
        </div>
      </div>
    </form>
  );
}
