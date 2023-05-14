import Button from '@mui/material/Button';
import { Header } from 'components/common';
import { AdminLayout } from 'components/layout';
import { useRouter } from 'next/router';

export interface AboutPageProps {}

// const Header = dynamic(() => import('components/common/header'), { ssr: false });

export default function AboutPage(props: AboutPageProps) {
  const router = useRouter();

  return (
    <div>
      <h1>About page</h1>
      <Button variant="contained">Contained</Button>
      <Header />
    </div>
  );
}

AboutPage.Layout = AdminLayout;

export async function getServerSideProps() {
  return { props: {} };
}
