import useCopyToClipboard from "../../hooks/useCopyToClipboard";
import { IconLink } from "../../icons";
import { useAppState } from "../../store/App";

import styles from "./CopyLink.module.scss";

const CopyLink = () => {
  const { activeCities } = useAppState();
  const { copyToClipboard } = useCopyToClipboard();

  const handleCopyClick = () => {
    copyToClipboard(
      `${window.location.href}/collection/${activeCities.join(",")}`
    );
  };

  return (
    <div className={styles.container} onClick={handleCopyClick}>
      <IconLink />
      <div>Linki Kopyala</div>
    </div>
  );
};

export default CopyLink;
