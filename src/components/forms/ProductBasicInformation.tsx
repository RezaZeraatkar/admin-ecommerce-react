import Typography from '@mui/material/Typography';
import CTextField from '../inputs/CTextField';

export default function ProductBasicInformation() {
  return (
    <div className='p-2'>
      <Typography variant='h6' gutterBottom>
        Basic information
      </Typography>
      <div className='flex flex-col gap-4'>
        <div className='flex gap-2 w-full'>
          <CTextField
            label='Product Name'
            id='outlined-size-small'
            defaultValue=''
            size='small'
            className='w-2/3'
            name='productName'
          />
          <CTextField
            label='Price'
            id='outlined-size-small'
            defaultValue=''
            size='small'
            className='w-1/3'
            name='price'
          />
        </div>
        <CTextField
          label='Product description'
          id='outlined-size-small'
          defaultValue=''
          size='small'
          multiline
          rows={4}
          className='w-full'
          name='productDescription'
        />
      </div>
    </div>
  );
}
