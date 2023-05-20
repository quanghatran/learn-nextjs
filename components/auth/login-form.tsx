import { LoginPayload } from '@/models';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Box, Button, IconButton, InputAdornment } from '@mui/material';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { InputField } from '../form';

export interface LoginFormProps {
  onSubmit?: (payload: LoginPayload) => void;
}

export function LoginForm({ onSubmit }: LoginFormProps) {
  const [showPassword, setShowPassword] = useState(false);
  const { control, handleSubmit } = useForm<LoginPayload>({
    defaultValues: {
      username: '',
      password: '',
    },
  });

  const handleLoginSubmit = (payload: LoginPayload) => {
    console.log(payload);

    onSubmit?.(payload);
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

      <Button type="submit" variant="contained" fullWidth sx={{ mt: 2 }}>
        Submit
      </Button>
    </Box>
  );
}
