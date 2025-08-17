import React, { createContext, useState } from "react";

export interface FlyMenuContextProps {
  isFlyMenu: boolean;
  openFlyMenu: () => void;
  closeFlyMenu: () => void;
  active: number;
  setActive: React.Dispatch<React.SetStateAction<number>>;
  id: number;
  setId: React.Dispatch<React.SetStateAction<number>>;
}

export const FlyMenuContext = createContext<FlyMenuContextProps | undefined>(undefined);

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

// Remove useFlyMenu from this file and move it to a new file named useFlyMenu.ts