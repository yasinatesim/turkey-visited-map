import "../styles/globals.scss";
import type { AppProps } from "next/app";
import { AppProvider } from "../src/store/App";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppProvider>
      <Component {...pageProps} />
    </AppProvider>
  );
}

export default MyApp;
