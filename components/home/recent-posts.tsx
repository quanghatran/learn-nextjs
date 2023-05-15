import { Box, Container, Link as MuiLink, Stack, Typography } from '@mui/material';
import Link from 'next/link';
import { PostCard } from './post-card';
import { Post } from 'models';

export function RecentPosts() {
  // call api to get posts data
  const postList: Post[] = [
    {
      id: '1',
      title: 'Making a design system from scratch',
      publishDate: '1648363391671',
      tagList: ['Design', 'Pattern'],
      description:
        'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
    },
    {
      id: '2',
      title: 'Creating pixel perfect icons in Figma',
      publishDate: '1648363391671',
      tagList: ['Figma', 'Icon Design'],
      description:
        'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
    },
  ];

  return (
    <Box component="section" bgcolor="secondary.light" pt={2} pb={4}>
      <Container>
        <Stack
          direction="row"
          mb={2}
          justifyContent={{
            sx: 'center',
            md: 'space-between',
          }}
          alignItems="center"
        >
          <Typography variant="h5">Recent Posts</Typography>

          <Link href="/blog" passHref legacyBehavior>
            <MuiLink
              sx={{
                display: {
                  xs: 'none',
                  md: 'inline-block',
                },
              }}
            >
              View All
            </MuiLink>
          </Link>
        </Stack>

        <Stack
          direction={{
            xs: 'column',
            md: 'row',
          }}
          spacing={3}
          sx={{
            '& >div': {
              width: {
                xs: '100%',
                md: '50%',
              },
            },
          }}
        >
          {postList.map((post) => (
            <Box key={post.id}>
              <PostCard post={post} />
            </Box>
          ))}
        </Stack>
      </Container>
    </Box>
  );
}
