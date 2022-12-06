import * as React from 'react';
import { authApi } from '../api-client';

export default function LoginPage() {
  async function handleLoginClick() {
    try {
      await authApi.login({
        username: 'test123',
        password: 'test123123',
      });
    } catch (error) {
      console.log('failed to login');
    }
  }

  async function handleGetProfileClick() {
    try {
      await authApi.getProfile();
    } catch (error) {
      console.log('failed to get profile');
    }
  }

  async function handleLogoutClick() {
    try {
      await authApi.logout();
    } catch (error) {
      console.log('failed to logout');
    }
  }

  return (
    <div>
      <h1>Login page</h1>

      <button onClick={handleLoginClick}>Login</button>
      <button onClick={handleGetProfileClick}>Get Profile</button>
      <button onClick={handleLogoutClick}>Logout</button>
    </div>
  );
}
