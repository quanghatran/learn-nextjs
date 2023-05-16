import { Seo } from '@/components/common';
import { Box } from '@mui/material';
import { FeatureWorks, HeroSection, RecentPosts } from 'components/home';
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
      <Seo
        data={{
          title: 'NextJS tutorials | Quang Haa',
          description: 'Learn NextJS throughout the practice of a project from scratch.',
          url: 'https://learn-nextjs-xi-two.vercel.app/',
          thumbnailUrl: 'https://kanbox.vn/wp-content/uploads/2023/02/nextjs-cover.jpg',
        }}
      />
      <HeroSection />
      <RecentPosts />
      <FeatureWorks />
    </Box>
  );
};

Home.Layout = MainLayout;

export default Home;
