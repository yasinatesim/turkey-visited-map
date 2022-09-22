import React from 'react';
import { forwardRef, useEffect } from 'react';

import cx from 'classnames';

import { IconGithub } from '@/assets/icons';

import cities from '@/data/cities.json';

import useLocalStorage from '@/hooks/useLocalStorage';

import { useAppState } from '@/store/App';

import City from './components/City/City';

import styles from './TurkeyMap.module.scss';

type Props = {
  defaultActiveCities?: Array<string>;
};

const TurkeyMap: React.ForwardRefExoticComponent<React.PropsWithoutRef<Props> & React.RefAttributes<HTMLDivElement>> =
  forwardRef(({ defaultActiveCities }, ref) => {
    const { getItem, setItem, removeItem } = useLocalStorage('cities');

    const { activeCities, setActiveCities } = useAppState();

    const handleCityClick = (id: string) => {
      if (!defaultActiveCities) {
        if (activeCities.includes(id)) {
          setActiveCities(activeCities.filter((item: string) => item !== id));
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
      <div ref={ref} className={styles.wrapper}>
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

        <div className={styles.footer}>
          {/* city count */}
          {activeCities && activeCities.length > 0 && (
            <div className={styles.cityCount}>
              <span>Toplam gezilen il sayısı: {activeCities.length}</span>
            </div>
          )}

          <div className={styles.info}>
            <span>
              This file was generated with by <IconGithub />
            </span>
            <span>/yasinatesim/turkey-visited-map</span>
            🥸
          </div>
        </div>
      </div>
    );
  });

TurkeyMap.displayName = 'TurkeyMap';

export default TurkeyMap;
