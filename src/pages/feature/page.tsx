import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

export default function Feature() {
  return (
    <Box component='form' className='p-2'>
      <div className='flex gap-4 items-center'>
        <Typography variant='h6' gutterBottom>
          Features
        </Typography>
      </div>
      <div className='flex gap-2 w-full'>
        <TextField
          label='Feature Name'
          id='outlined-size-small'
          defaultValue=''
          size='small'
          // className='w-2/3'
        />
      </div>
    </Box>
  );
}
