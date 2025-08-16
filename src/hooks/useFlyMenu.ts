import { FlyMenuContext, FlyMenuContextProps } from "@contexts/FlyMenuContext";
import { useContext } from "react";

export const useFlyMenu = (): FlyMenuContextProps => {
  const context = useContext(FlyMenuContext);
  if (!context) {
    throw new Error("useFlyMenu must be used within a FlyMenuProvider");
  }
  return context;
};