import { TextField, TextFieldProps } from '@mui/material';
import { Control, useController } from 'react-hook-form';

export type InputFieldProps = TextFieldProps & {
  name: string;
  control: Control<any>;
};

export function InputField({
  name,
  label,
  control,
  value: externalValue,
  onChange: externalOnChange,
  onBlur: externalOnBlur,
  ref: externalRef,
  ...rest
}: InputFieldProps) {
  const {
    field: { onChange, onBlur, value, ref },
    fieldState: { error },
  } = useController({ name, control });

  return (
    <TextField
      fullWidth
      size="small"
      name={name}
      margin="normal"
      {...rest}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      inputRef={ref}
    />
  );
}
