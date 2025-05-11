import React, { createContext, useContext, useState } from "react";

interface FlyMenuContextProps {
  isFlyMenu: boolean;
  openFlyMenu: () => void;
  closeFlyMenu: () => void;
  active: number;
  setActive: React.Dispatch<React.SetStateAction<any>>;
  id: number;
  setId: React.Dispatch<React.SetStateAction<number>>;
}

const FlyMenuContext = createContext<FlyMenuContextProps | undefined>(undefined);

export const FlyMenuProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isFlyMenu, setIsFlyMenu] = useState(false);
  const [active, setActive] = useState(1);
  const [id, setId] = useState(1);

  const openFlyMenu = () => setIsFlyMenu(true);
  const closeFlyMenu = () => setIsFlyMenu(false);

  return (
    <FlyMenuContext.Provider value={{ isFlyMenu, openFlyMenu, closeFlyMenu, active, setActive, id, setId }}>
      {children}
    </FlyMenuContext.Provider>
  );
};

export const useFlyMenu = (): FlyMenuContextProps => {
  const context = useContext(FlyMenuContext);
  if (!context) {
    throw new Error("useFlyMenu must be used within a FlyMenuProvider");
  }
  return context;
};