import { Box } from '@mui/material';
import { RecentPosts } from 'components/home';
import { HeroSection } from 'components/home/hero';
import { MainLayout } from 'components/layout';
import { NextPageWithLayout } from 'models';

const Home: NextPageWithLayout = () => {
  // const router = useRouter();

  // function goesToDetailPage() {
  //   router.push({
  //     pathname: '/posts/[postId]',
  //     query: {
  //       postId: 123,
  //       ref: 'social',
  //     },
  //   });
  // }

  return (
    <Box>
      <HeroSection />
      <RecentPosts />
    </Box>
  );
};

Home.Layout = MainLayout;

export default Home;
