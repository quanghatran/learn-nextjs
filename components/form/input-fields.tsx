import { TextField } from '@mui/material';
import { Control, useController } from 'react-hook-form';

export interface InputFieldProps {
  name: string;
  label: string;
  control: Control<any>;
}
export function InputField({ name, label, control }: InputFieldProps) {
  const {
    field: { onChange, onBlur, value, ref },
    fieldState: { error },
  } = useController({ name, control });

  return <TextField />;
}