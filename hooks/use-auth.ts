import useSWR from 'swr';
import { PublicConfiguration } from 'swr/dist/types';
import { authApi } from '@/api/index';

const MILLISECOND_PER_HOUR = 60 * 60 * 1000;

export function useAuth(options?: Partial<PublicConfiguration>) {
  // profile
  const {
    data: profile,
    error,
    mutate,
  } = useSWR('/profile', {
    dedupingInterval: MILLISECOND_PER_HOUR,
    revalidateOnFocus: false,
    ...options,
  });

  const firstLoading = profile === undefined && error === undefined;

  async function login() {
    await authApi.login({
      username: 'QuangHaaa',
      password: 'passworld@1234',
    });

    await mutate();
  }

  async function logout() {
    await authApi.logout();
    await mutate({}, false);
  }

  return {
    profile,
    error,
    login,
    logout,
    firstLoading,
  };
}
