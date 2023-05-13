import { AdminLayout } from 'components/layout';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';

export interface AboutPageProps {}

const Header = dynamic(() => import('components/header'), { ssr: false });

export default function AboutPage(props: AboutPageProps) {
  const router = useRouter();

  return (
    <div>
      <h1>About page</h1>

      <Header />
    </div>
  );
}

AboutPage.Layout = AdminLayout;

export async function getServerSideProps() {
  return { props: {} };
}
