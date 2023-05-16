import { Box } from '@mui/material';
import { useForm } from 'react-hook-form';
import { InputField } from '../form';

export function LoginForm() {
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
      <InputField name="password" control={control} label="label" />
    </Box>
  );
}
