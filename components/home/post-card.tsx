import { Card, CardContent, Divider, Stack, Typography } from '@mui/material';
import { format } from 'date-fns';
import { Post } from 'models';

export interface PostCardProps {
  post: Post;
}

export function PostCard({ post }: PostCardProps) {
  if (!post) return null;

  return (
    <Card>
      <CardContent>
        <Typography variant="h5" fontWeight="bold">
          {post.title}
        </Typography>

        <Stack direction="row" my={2}>
          <Typography variant="body1">{post.tagList.join(', ')}</Typography>

          <Divider orientation="vertical" sx={{ mx: 2 }} flexItem />

          <Typography>{format(Number(post.publishDate), 'dd MMM yyyy')}</Typography>
        </Stack>

        <Typography variant="body2">{post.description}</Typography>
      </CardContent>
    </Card>
  );
}
