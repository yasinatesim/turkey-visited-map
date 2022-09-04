import { useState } from "react";
import cities from "../data/cities.json";

import City from "./City";

import styles from "./TurkeyMap.module.scss";

const TurkeyMap = () => {
  const [activeCities, setActiveCities] = useState<Array<any>>([]);

  const handleCityClick = (id: string) => {
    if (activeCities.includes(id)) {
      setActiveCities(activeCities.filter((item) => item !== id));
    } else {
      setActiveCities([...activeCities, id]);
    }
  };

  return (
    <div>
      <svg
        viewBox="0 0 1007.478 527.323"
        xmlns="http://www.w3.org/2000/svg"
        className={styles.map}
      >
        <g>
          {cities.map((city) => (
            <City
              key={city.id}
              id={city.id}
              name={city.name}
              x={city.x}
              y={city.y}
              paths={city.paths}
              className={styles.city}
              active={activeCities?.includes(city.id)}
              onClick={() => handleCityClick(city.id)}
            />
          ))}
        </g>
      </svg>

      {/* city count */}
      <div className={styles.cityCount}>
        <span>Toplan gezilen il sayısı: {activeCities.length}</span>
      </div>
    </div>
  );
};

export default TurkeyMap;
