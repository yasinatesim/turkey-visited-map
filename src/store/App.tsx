import { useContext, createContext, ReactNode, useState } from "react";

type ContextProps = {
  activeCities: string[];
  setActiveCities: (cities: string[]) => void;
};

const AppStateContext = createContext<ContextProps>({
  activeCities: [],
  setActiveCities: () => {},
});

type AppProviderProps = {
  children: ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps) => {
  const [activeCities, setActiveCities] = useState<Array<string>>([]);

  const state = {
    activeCities,
    setActiveCities,
  };

  return (
    <AppStateContext.Provider value={state}>
      {children}
    </AppStateContext.Provider>
  );
};

export const useAppState = () => useContext(AppStateContext);
