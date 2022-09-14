import GithubCorner from 'react-github-corner';
import { Toaster } from 'react-hot-toast';

import type { AppProps } from 'next/app';

import { AppProvider } from '@/store/App';

import '@/assets/styles/globals.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppProvider>
      <Component {...pageProps} />

      <Toaster position="top-center" reverseOrder={false} />

      <GithubCorner href="https://github.com/yasinatesim/turkey-visited-map" />
    </AppProvider>
  );
}

export default MyApp;
