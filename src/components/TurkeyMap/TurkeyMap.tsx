import { useEffect } from "react";
import cx from "classnames";

import cities from "../../data/cities.json";

import City from "../City/City";

import { useAppState } from "../../store/App";
import useLocalStorage from "../../hooks/useLocalStorage";

import styles from "./TurkeyMap.module.scss";

type Props = {
  defaultActiveCities?: Array<string>;
};

const TurkeyMap: React.FC<Props> = ({ defaultActiveCities }) => {
  const { getItem, setItem, removeItem } = useLocalStorage("cities");

  const { activeCities, setActiveCities } = useAppState();

  const handleCityClick = (id: string) => {
    if (!defaultActiveCities) {
      if (activeCities.includes(id)) {
        setActiveCities(activeCities.filter((item) => item !== id));
      } else {
        setActiveCities([...activeCities, id]);
      }
    }
  };

  useEffect(() => {
    if (!defaultActiveCities) {
      const activeCities = getItem();
      if (activeCities) {
        setActiveCities(activeCities);
      }
    } else {
      setActiveCities(defaultActiveCities);
    }
  }, []);

  useEffect(() => {
    if (!defaultActiveCities) {
      if (activeCities.length > 0) {
        setItem(activeCities);
      } else {
        removeItem();
      }
    }
  }, [activeCities]);

  return (
    <div>
      <svg
        viewBox="0 0 1007.478 527.323"
        xmlns="http://www.w3.org/2000/svg"
        className={cx(styles.map, {
          [styles.active]: !defaultActiveCities,
        })}
      >
        <g>
          {cities.map((city) => (
            <City
              {...city}
              key={city.id}
              className={styles.city}
              active={activeCities?.includes(city.id)}
              onClick={() => handleCityClick(city.id)}
            />
          ))}
        </g>
      </svg>

      {/* city count */}
      {/* {activeCities && activeCities.length > 0 && (
        <div className={styles.cityCount}>
          <span>Toplan gezilen il sayısı: {activeCities.length}</span>
        </div>
      )} */}
    </div>
  );
};

export default TurkeyMap;
