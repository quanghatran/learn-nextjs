import { useAuth } from '@/hooks/use-auth';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export interface AuthProps {
  children: any;
}

export function Auth({ children }: AuthProps) {
  const router = useRouter();

  const { profile, firstLoading } = useAuth();

  useEffect(() => {
    if (!firstLoading && !profile) router.push('/login');
  }, [router, profile, firstLoading]);

  if (!profile) return <p>Loading...</p>;

  return <div>{children}</div>;
}
