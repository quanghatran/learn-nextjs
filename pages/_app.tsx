import axiosClient from '@/api-client/axios-client';
import { CacheProvider } from '@emotion/react';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { EmptyLayout } from 'components/layout';
import { AppPropsWithLayout } from 'models';
import { SWRConfig } from 'swr';
import '../styles/globals.css';
import { createEmotionCache, theme } from '../utils';

const clientSideEmotionCache = createEmotionCache();

// Client-side cache, shared for the whole session of the user in the browser.
function MyApp({
  Component,
  pageProps,
  emotionCache = clientSideEmotionCache,
}: AppPropsWithLayout) {
  const Layout = Component.Layout ?? EmptyLayout;

  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <SWRConfig value={{ fetcher: (url) => axiosClient.get(url), shouldRetryOnError: false }}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </SWRConfig>
      </ThemeProvider>
    </CacheProvider>
  );
}

export default MyApp;
