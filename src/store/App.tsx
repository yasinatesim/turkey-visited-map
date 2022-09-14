import { createContext, ReactNode, useContext, useState } from 'react';

type ContextProps =  any;

const AppStateContext = createContext<ContextProps>({});

type AppProviderProps = {
  children: ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps) => {
  const [activeCities, setActiveCities] = useState<Array<string>>([]);

  const state: any = {
    activeCities,
    setActiveCities,
  };

  return <AppStateContext.Provider value={state}>{children}</AppStateContext.Provider>;
};

export const useAppState = () => useContext(AppStateContext);
