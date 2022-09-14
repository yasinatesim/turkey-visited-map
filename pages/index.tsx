import React, { createRef } from 'react';

import type { NextPage } from 'next';
import Head from 'next/head';

import * as htmlToImage from 'html-to-image';

import Header from '@/components/Header';
import TurkeyMap from '@/components/TurkeyMap';

const Home: NextPage = () => {
  const ref = createRef<HTMLDivElement>();

  const createFileName = ({ extension, prefix }: { extension: string; prefix: string }) => {
    return `${prefix}-${Math.random().toString(36).slice(2)}.${extension}`;
  };

  const takeScreenShot = async (node: any) => {
    const dataURI = await htmlToImage.toJpeg(node);
    return dataURI;
  };

  const handleClickDownload = async () => {
    const image = await takeScreenShot(ref.current);

    const downloadLink = document.createElement('a');
    const fileName = createFileName({ extension: 'jpg', prefix: 'turkeymap' });

    downloadLink.href = image;
    downloadLink.download = fileName;
    downloadLink.click();
  };

  return (
    <>
      <Head>
        <title>Turkey Visited Map</title>
        <meta name="description" content="Turkey Visited Map" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="container">
        <Header handleClickDownload={handleClickDownload} />
        <div>
          <TurkeyMap ref={ref} />
        </div>
      </div>
    </>
  );
};

export default Home;
