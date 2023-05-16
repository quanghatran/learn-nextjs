import { useAuth } from '@/hooks';
import { Auth } from 'components/common';
import { LayoutProps } from 'models';
import Link from 'next/link';
import { useRouter } from 'next/router';

export function AdminLayout({ children }: LayoutProps) {
  const { profile, logout } = useAuth();
  const router = useRouter();

  async function handleLogoutClick() {
    try {
      await logout();

      // redirect to dashboard
      router.push('/login');
    } catch (error) {
      console.log('failed to login');
    }
  }

  return (
    <Auth>
      <h1>Admin Layout</h1>
      <div>sidebar</div>

      <p>profile: {JSON.stringify(profile)}</p>

      <button onClick={handleLogoutClick}>Logout</button>

      <div>Side bar</div>

      <Link href="/">Home</Link>

      <Link href="/about">About</Link>

      <div>{children}</div>
    </Auth>
  );
}
