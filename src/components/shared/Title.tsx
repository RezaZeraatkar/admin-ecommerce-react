import Typography, { TypographyProps } from '@mui/material/Typography';
import { ReactNode } from 'react';

export default function Title({
  children,
  ...props
}: TypographyProps & { children?: ReactNode }) {
  return (
    <Typography variant='h6' gutterBottom {...props}>
      {children}
    </Typography>
  );
}
