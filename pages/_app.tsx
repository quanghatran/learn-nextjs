import axiosClient from '@/api/axios-client';
import { EmptyLayout, MainLayout } from 'components/layout';
import { AppPropsWithLayout } from 'models';
import { SWRConfig } from 'swr';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  console.log('app re-render');

  const Layout = Component.Layout ?? EmptyLayout;

  return (
    <SWRConfig value={{ fetcher: (url) => axiosClient.get(url), shouldRetryOnError: false }}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SWRConfig>
  );
}

export default MyApp;
