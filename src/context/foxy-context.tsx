import { createContext, useContext } from "react";

export interface FoxyContextInterface {
  trigger: () => void;
}

export const FoxyContext = createContext<FoxyContextInterface | undefined>(
  undefined,
);

export const useFoxyContext = () => {
  const context = useContext(FoxyContext);
  if (context === undefined) {
    throw new Error("useFoxyContext must be used within a FoxyProvider");
  }
  return context;
};
