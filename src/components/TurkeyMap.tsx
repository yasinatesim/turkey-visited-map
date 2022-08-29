import React, { useEffect } from "react";

import styles from "./TurkeyMap.module.scss";

import cities from "../data/cities.json";

import City from "./City";

const TurkeyMap = () => {
  return (
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
          />
        ))}
      </g>
    </svg>
  );
};

export default TurkeyMap;
