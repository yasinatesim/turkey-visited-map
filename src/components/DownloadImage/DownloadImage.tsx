import { IconDownload } from "../../icons";

import styles from "./DownloadImage.module.scss";

type Props = {
  onClick: Function
};

const DownloadImage:React.FC<Props> = ({ onClick }) => {
  return (
    <div className={styles.container} onClick={(value) => onClick(value)}>
      <IconDownload />
      <div>Resmi indir</div>
    </div>
  );
};

export default DownloadImage;
