import { useEffect, useState } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

import { AppProps } from 'next/app';
import Head from 'next/head';
import Router from 'next/router';
import { RecoilRoot } from 'recoil';
import { ThemeProvider } from 'styled-components';

import { LoadingScreen } from '~/components';
import { useLoadingState } from '~/context/loadingAtom';
import { GlobalStyle, theme } from '~/styles';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnMount: false,
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
});

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  const [loading, setLoading] = useState(false);

  const handleRouteChangeStart = () => {
    setLoading(true);
  };

  const handleRouteChangeComplete = () => {
    setLoading(false);
  };

  useEffect(() => {
    Router.events.on('routeChangeStart', handleRouteChangeStart);
    Router.events.on('routeChangeComplete', handleRouteChangeComplete);
    return () => {
      Router.events.off('routeChangeStart', handleRouteChangeStart);
      Router.events.off('routeChangeStart', handleRouteChangeComplete);
    };
  }, []);

  return (
    <>
      <Head>
        <title>Get in</title>
      </Head>
      <QueryClientProvider client={queryClient}>
        <RecoilRoot>
          <ThemeProvider theme={theme}>
            <LoadingScreen loading={loading} />
            <Component {...pageProps} />
            <GlobalStyle />
          </ThemeProvider>
        </RecoilRoot>
      </QueryClientProvider>
    </>
  );
};

export default MyApp;
