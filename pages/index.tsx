import type { NextPage } from "next";
import Head from "next/head";
import CopyLink from "../src/components/CopyLink";
import TurkeyMap from "../src/components/TurkeyMap";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Turkey Visited Map</title>
        <meta name="description" content="Turkey Visited Map" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="container">
        <CopyLink />
        <TurkeyMap />
      </div>
    </>
  );
};

export default Home;
