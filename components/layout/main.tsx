import { Box, Container, Stack } from '@mui/material';
import { Footer, Header } from 'components/common';
import { LayoutProps } from 'models';
import Link from 'next/link';

export function MainLayout({ children }: LayoutProps) {
  return (
    <Stack minHeight="100vh">
      <Header />

      <Box component="main" flexGrow="1">
        <Container>
          <Link href="/">Home</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/works">Works</Link>

          {children}
        </Container>
      </Box>

      <Footer />
    </Stack>
  );
}
