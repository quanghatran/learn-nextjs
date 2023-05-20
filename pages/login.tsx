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

  async function handleLoginClick() {
    try {
      await login({
        username: 'QuangHaaa',
        password: 'passworld@1234',
      });

      // redirect to dashboard
      router.push('/about');
    } catch (error) {
      console.log('failed to login');
    }
  }

  async function handleLogoutClick() {
    try {
      await logout();

      // redirect to login page
    } catch (error) {
      console.log('failed to get profile');
    }
  }

  // async function handleLogoutClick() {
  //   try {
  //     await authApi.logout();
  //   } catch (error) {
  //     console.log('failed to logout');
  //   }
  // }

  async function handleLoginSubmit(payload: LoginPayload) {
    try {
      await login(payload);

      // redirect to dashboard
      router.push('/about');
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
