import * as React from 'react';
import { authApi } from '@/api/index';
import { useAuth } from '@/hooks/use-auth';

export default function LoginPage() {
  const { profile, login, logout } = useAuth({
    revalidateOnMount: false,
  });

  async function handleLoginClick() {
    try {
      await login();

      // redirect to dashboard
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

  return (
    <div>
      <h1>Login page</h1>

      <p>Profile: {JSON.stringify(profile || {}, null, 4)}</p>

      <button onClick={handleLoginClick}>Login</button>
      {/* <button onClick={handleGetProfileClick}>Get Profile</button> */}
      <button onClick={handleLogoutClick}>Logout</button>
    </div>
  );
}
