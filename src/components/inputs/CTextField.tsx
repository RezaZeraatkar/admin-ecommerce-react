import { Controller, useFormContext } from 'react-hook-form';
import TextField, { TextFieldProps } from '@mui/material/TextField';
import React from 'react';

type MyTextFieldProps = TextFieldProps & {
  name: string;
  label: string;
  defaultValue?: string;
  ref?: React.ForwardedRef<HTMLInputElement>;
};

const CTextField = React.forwardRef<HTMLInputElement, MyTextFieldProps>(
  ({ name, label, defaultValue = '', ...props }, ref) => {
    const { control } = useFormContext();
    return (
      <Controller
        name={name}
        control={control}
        defaultValue={defaultValue}
        render={({ field, formState: { errors } }) => {
          return (
            <TextField
              {...field}
              {...props}
              label={label}
              error={!!errors[name]}
              helperText={String(errors[name]?.message || '')}
              inputRef={ref}
            />
          );
        }}
      />
    );
  }
);

export default CTextField;
