import Typography from '@mui/material/Typography';
import CTextField from '@/components/inputs/CTextField';
import CCheckbox from '../inputs/CCheckBox';
import { useFormContext } from 'react-hook-form';
import { useCallback } from 'react';

export default function ProductInventory({
  stock = 0,
}: {
  stock?: Product['stock'];
}) {
  const { setValue } = useFormContext();

  const handleCheckboxChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      if (event.target.checked) {
        setValue('stock', '-1');
      } else {
        setValue('stock', '');
      }
    },
    [setValue]
  );

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
          handleCheckboxChange={handleCheckboxChange}
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
