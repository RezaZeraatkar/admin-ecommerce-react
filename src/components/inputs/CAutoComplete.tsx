import { Controller, useFormContext } from 'react-hook-form';
import { Autocomplete, TextField, AutocompleteProps } from '@mui/material';

interface CAutoCompleteProps<OptionType>
  extends Omit<
    AutocompleteProps<OptionType, boolean, boolean, boolean>,
    'renderInput'
  > {
  name: string;
  label: string;
  defaultValue: OptionType[];
}

const CAutoComplete = <OptionType,>({
  name,
  label,
  defaultValue,
  ...props
}: CAutoCompleteProps<OptionType>) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue}
      render={({ field: { onChange, value }, formState: { errors } }) => {
        return (
          <Autocomplete
            {...props}
            value={value}
            onChange={(_, newValue) => {
              onChange(newValue);
            }}
            renderInput={(params) => (
              <TextField
                {...params}
                label={label}
                error={!!errors[name]}
                helperText={String(errors[name]?.message || '')}
              />
            )}
          />
        );
      }}
    />
  );
};

export default CAutoComplete;
