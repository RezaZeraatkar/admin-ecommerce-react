import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

export default function ProductBasicInformation() {
  return (
    <div className='p-2'>
      <Typography variant='h6' gutterBottom>
        Basic information
      </Typography>
      <div className='flex flex-col gap-4'>
        <div className='flex gap-2 w-full'>
          <TextField
            label='Product Name'
            id='outlined-size-small'
            defaultValue=''
            size='small'
            className='w-2/3'
          />
          <TextField
            label='Price'
            id='outlined-size-small'
            defaultValue=''
            size='small'
            className='w-1/3'
          />
        </div>
        <TextField
          label='Product description'
          id='outlined-size-small'
          defaultValue=''
          size='small'
          multiline
          rows={4}
          className='w-full'
        />
      </div>
    </div>
  );
}
