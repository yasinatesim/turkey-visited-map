import type { NextPage } from "next";
import Head from "next/head";

import TurkeyMap from "../../src/components/TurkeyMap";

type Props = {
  cityIdList: string[];
};

const CollectionDetail: React.FC<Props> = ({ cityIdList }) => {
  return (
    <>
      <Head>
        <title>Collection - Turkey Visited Map</title>
        <meta name="description" content="Turkey Visited Map" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="container">
        <TurkeyMap defaultActiveCities={cityIdList} />
      </div>
    </>
  );
};

export const getServerSideProps = ({ params }: {
  params: { cityIds: string };
}) => {
  return { props: { cityIdList: params.cityIds.split(",") } };
};

export default CollectionDetail;
