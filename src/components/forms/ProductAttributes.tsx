import { attributes } from '@/data/data';
import { Autocomplete, TextField } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import Typography from '@mui/material/Typography';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';

const icon = <CheckBoxOutlineBlankIcon fontSize='small' />;
const checkedIcon = <CheckBoxIcon fontSize='small' />;

export default function ProductAttributes() {
  return (
    <form className='w-full'>
      <Typography variant='h6' gutterBottom>
        Product attributes
      </Typography>
      <div className='gap-4 flex flex-col w-full'>
        <Autocomplete
          className='w-full'
          multiple
          size='small'
          id='checkboxes-tags-demo'
          options={attributes.colors}
          disableCloseOnSelect
          getOptionLabel={(option) => option.value}
          renderOption={(props, option, { selected }) => (
            <li {...props}>
              <Checkbox
                icon={icon}
                checkedIcon={checkedIcon}
                style={{ marginRight: 8 }}
                checked={selected}
              />
              {option.value}
            </li>
          )}
          renderInput={(params) => (
            <TextField {...params} label='Colors' placeholder='Colors' />
          )}
        />
        <Autocomplete
          className='w-full'
          size='small'
          multiple
          id='checkboxes-tags-demo'
          options={attributes.size}
          disableCloseOnSelect
          getOptionLabel={(option) => option.value}
          renderOption={(props, option, { selected }) => (
            <li {...props}>
              <Checkbox
                icon={icon}
                checkedIcon={checkedIcon}
                style={{ marginRight: 8 }}
                checked={selected}
              />
              {option.value}
            </li>
          )}
          renderInput={(params) => (
            <TextField {...params} label='Size' placeholder='Size' />
          )}
        />
        <Autocomplete
          className='w-full'
          size='small'
          multiple
          id='checkboxes-tags-demo'
          options={attributes.sleeves}
          disableCloseOnSelect
          getOptionLabel={(option) => option.value}
          renderOption={(props, option, { selected }) => (
            <li {...props}>
              <Checkbox
                icon={icon}
                checkedIcon={checkedIcon}
                style={{ marginRight: 8 }}
                checked={selected}
                size='small'
              />
              {option.value}
            </li>
          )}
          renderInput={(params) => (
            <TextField
              {...params}
              label='Sleeves'
              placeholder='Sleeves'
              size='small'
            />
          )}
        />
      </div>
    </form>
  );
}
