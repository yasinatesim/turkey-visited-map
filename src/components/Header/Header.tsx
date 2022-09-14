import React from 'react';

import CopyLink from '@/components/CopyLink';
import DownloadImage from '@/components/DownloadImage';

import styles from './Header.module.scss';

type Props = {
  handleClickDownload: () => void;
};

const Header: React.FC<Props> = ({ handleClickDownload }) => {
  return (
    <div className={styles.container}>
      <CopyLink />
      <DownloadImage onClick={handleClickDownload} />
    </div>
  );
};

export default Header;
