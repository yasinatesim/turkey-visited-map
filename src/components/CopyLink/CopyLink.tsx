import { IconLink } from "../../icons";
import { useAppState } from "../../store/App";

import styles from "./CopyLink.module.scss";

const TurkeyMap = () => {

  const { activeCities } = useAppState();

  const handleCopyClick = () => {
    navigator.clipboard.writeText(window.location.href + '/collection/' + activeCities.join(","));
  };

  return (
    <div className={styles.container} onClick={handleCopyClick}>
      <IconLink />
      <div>Linki Kopyala</div>
    </div>
  );
};

export default TurkeyMap;
