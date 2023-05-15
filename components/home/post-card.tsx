import { Card, CardContent, Divider, Typography } from '@mui/material';
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

        <Typography variant="body1" my={2} sx={{ display: 'flex', gap: '10px' }}>
          <span>{format(Number(post.publishDate), 'dd MMM yyyy')}</span>
          <span> | </span>
          <span>{post.tagList.join(', ')}</span>
        </Typography>

        <Typography variant="body2">{post.description}</Typography>
      </CardContent>
    </Card>
  );
}
