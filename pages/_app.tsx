import "../styles/globals.scss";
import type { AppProps } from "next/app";
import { AppProvider } from "../src/store/App";

import { Toaster } from "react-hot-toast";
import GithubCorner from 'react-github-corner';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppProvider>
      <Component {...pageProps} />

      <Toaster position="top-right" reverseOrder={false} />
      <GithubCorner href="https://github.com/yasinatesim/turkey-visited-map" />

    </AppProvider>
  );
}

export default MyApp;
