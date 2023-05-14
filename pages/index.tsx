import { Box } from '@mui/material';
import { MainLayout } from 'components/layout';
import { NextPageWithLayout } from 'models';
import { useRouter } from 'next/router';

const Home: NextPageWithLayout = () => {
  const router = useRouter();

  function goesToDetailPage() {
    router.push({
      pathname: '/posts/[postId]',
      query: {
        postId: 123,
        ref: 'social',
      },
    });
  }

  return <Box>Home page</Box>;
};

Home.Layout = MainLayout;

export default Home;
