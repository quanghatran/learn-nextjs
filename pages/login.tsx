import { LoginForm } from '@/components/auth';
import { useAuth } from '@/hooks';
import { LoginPayload } from '@/models';
import { Box, Paper, Typography } from '@mui/material';
import { useRouter } from 'next/router';

export default function LoginPage() {
  const router = useRouter();

  const { profile, login, logout } = useAuth({
    revalidateOnMount: false,
  });

  async function handleLoginSubmit(payload: LoginPayload) {
    try {
      await login(payload);

      // redirect to dashboard
      router.push('/');
    } catch (error) {
      console.log('failed to login');
    }
  }

  return (
    <Box>
      <Paper elevation={4} sx={{ mt: 8, mx: 'auto', p: 4, maxWidth: '480px', textAlign: 'center' }}>
        <Typography component="h1" variant="h5" mb={4}>
          Login Page
        </Typography>

        <LoginForm onSubmit={handleLoginSubmit} />
      </Paper>
    </Box>
  );
}
