import Typography from '@mui/material/Typography';
import CTextField from '@/components/inputs/CTextField';
import CCheckbox from '../inputs/CCheckBox';

export default function ProductInventory({
  stock = 0,
}: {
  stock?: Product['stock'];
}) {
  return (
    <div className='p-2'>
      <div className='flex gap-10 items-center'>
        <Typography variant='h6' gutterBottom>
          Inventory
        </Typography>
        <CCheckbox
          defaultChecked={
            (typeof stock === 'number' && stock < 0) ||
            stock === 'Not-Manufactured'
          }
          name='notManufactured'
          label='Not-Manufactured'
        />
      </div>
      <div className='flex gap-2 w-full'>
        <CTextField
          name='stock'
          label='Stock quantity'
          id='outlined-size-small'
          defaultValue={''}
          size='small'
          className='w-2/3'
        />
      </div>
    </div>
  );
}
