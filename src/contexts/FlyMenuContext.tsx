import React, { createContext, useContext, useState } from "react";

interface FlyMenuContextProps {
  isFlyMenu: boolean;
  openFlyMenu: () => void;
  closeFlyMenu: () => void;
}

const FlyMenuContext = createContext<FlyMenuContextProps | undefined>(undefined);

export const FlyMenuProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isFlyMenu, setIsFlyMenu] = useState(false);

  const openFlyMenu = () => setIsFlyMenu(true);
  const closeFlyMenu = () => setIsFlyMenu(false);

  return (
    <FlyMenuContext.Provider value={{ isFlyMenu, openFlyMenu, closeFlyMenu }}>
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