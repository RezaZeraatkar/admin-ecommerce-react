// import { attributes } from '@/data/data';
import Checkbox from '@mui/material/Checkbox';
import Typography from '@mui/material/Typography';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CAutoComplete from '@/components/inputs/CAutoComplete';
import { useGetAllAttributesQuery } from '@/store/api/api';
import { useEffect } from 'react';

const icon = <CheckBoxOutlineBlankIcon fontSize='small' />;
const checkedIcon = <CheckBoxIcon fontSize='small' />;

export default function ProductAttributes() {
  const {
    data: attributes,
    // isLoading,
    // isFetching,
    isSuccess,
    isError,
    error,
  } = useGetAllAttributesQuery({});

  useEffect(() => {
    if (isSuccess) {
      console.log(attributes);
    }
  }, [isSuccess, attributes]);

  useEffect(() => {
    if (isError) {
      console.log(error);
    }
  }, [isError, error]);

  return (
    <div className='w-full p-2'>
      <Typography variant='h6' gutterBottom>
        Product attributes
      </Typography>
      <div className='gap-4 flex flex-col w-full'>
        <CAutoComplete
          defaultValue={[]}
          className='w-full'
          multiple
          size='small'
          id='checkboxes-tags-demo'
          options={attributes?.colors || []}
          disableCloseOnSelect
          isOptionEqualToValue={(option, value) => option.value === value.value}
          getOptionLabel={(option) =>
            typeof option === 'string' ? option : option.value
          }
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
          name='colors'
          label='Colors'
        />
        <CAutoComplete
          defaultValue={[]}
          className='w-full'
          size='small'
          multiple
          id='checkboxes-tags-demo'
          options={attributes?.size || []}
          isOptionEqualToValue={(option, value) => option.value === value.value}
          disableCloseOnSelect
          getOptionLabel={(option) =>
            typeof option === 'string' ? option : option.value
          }
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
          name='Size'
          label='Size'
        />
        <CAutoComplete
          defaultValue={[]}
          className='w-full'
          size='small'
          multiple
          id='checkboxes-tags-demo'
          options={attributes?.sleeves || []}
          disableCloseOnSelect
          isOptionEqualToValue={(option, value) => option.value === value.value}
          getOptionLabel={(option) =>
            typeof option === 'string' ? option : option.value
          }
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
          name='Sleeves'
          label='Sleeves'
        />
      </div>
    </div>
  );
}
