import { Controller, useFormContext } from 'react-hook-form';
import Checkbox, { CheckboxProps } from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import React from 'react';

type MyCheckboxProps = CheckboxProps & {
  name: string;
  label: string;
  defaultValue?: boolean;
};

const CCheckbox = React.forwardRef<HTMLInputElement, MyCheckboxProps>(
  ({ name, label, defaultValue = false, ...props }, ref) => {
    const { control } = useFormContext();
    return (
      <Controller
        name={name}
        control={control}
        defaultValue={defaultValue}
        render={({ field }) => (
          <FormControlLabel
            control={<Checkbox {...field} {...props} inputRef={ref} />}
            label={label}
          />
        )}
      />
    );
  }
);

export default CCheckbox;
