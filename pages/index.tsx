import type { NextPage } from "next";
import Head from "next/head";
import TurkeyMap from "../src/components/TurkeyMap";
import { getProfileData } from "../src/firebase/getProfileData";

const Home: NextPage = ({data}) => {
  console.log("data:", data)
  return (
    <>
      <Head>
        <title>Turkey Visited Map</title>
        <meta name="description" content="Turkey Visited Map" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="container">
        <TurkeyMap />
      </div>
    </>
  );
};

export const getServerSideProps = async () => {
  const profile = await getProfileData('yasin')

  return { props: { data: { profile } } }
}

export default Home;
