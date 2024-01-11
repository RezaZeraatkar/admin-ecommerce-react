import { Controller, useFormContext } from 'react-hook-form';
import Checkbox, { CheckboxProps } from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormHelperText from '@mui/material/FormHelperText';
import React from 'react';

type MyCheckboxProps = CheckboxProps & {
  name: string;
  label: string;
  handleCheckboxChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  defaultValue?: boolean;
};

const CCheckbox = React.forwardRef<HTMLInputElement, MyCheckboxProps>(
  (
    { name, label, defaultValue = false, handleCheckboxChange, ...props },
    ref
  ) => {
    const {
      control,
      formState: { errors },
    } = useFormContext();
    const errorMessage = String(errors[name]?.message || '');

    return (
      <div>
        <Controller
          name={name}
          control={control}
          defaultValue={defaultValue}
          render={({ field: { onChange } }) => (
            <FormControlLabel
              control={
                <Checkbox
                  onChange={(e) => {
                    handleCheckboxChange && handleCheckboxChange(e);
                    onChange(e.target.checked);
                  }}
                  // {...field}
                  {...props}
                  inputRef={ref}
                />
              }
              label={label}
            />
          )}
        />
        {errorMessage && <FormHelperText error>{errorMessage}</FormHelperText>}
      </div>
    );
  }
);

export default CCheckbox;
