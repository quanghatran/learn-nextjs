import { Box, Button, IconButton, InputAdornment } from '@mui/material';
import { useForm } from 'react-hook-form';
import { InputField } from '../form';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { MouseEvent, useState } from 'react';

export function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const { control, handleSubmit } = useForm({
    defaultValues: {
      username: '',
      password: '',
    },
  });

  const handleLoginSubmit = (values: any) => {
    console.log(values);
  };

  return (
    <Box component="form" onSubmit={handleSubmit(handleLoginSubmit)}>
      <InputField name="username" control={control} label="label" />
      <InputField
        type={showPassword ? 'text' : 'password'}
        name="password"
        control={control}
        label="label"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={() => setShowPassword((x) => !x)}
                edge="end"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />

      <Button type="submit">Submit</Button>
    </Box>
  );
}
