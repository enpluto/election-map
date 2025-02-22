import { useContext } from "react";
import { SelectionContext, SelectionContextType } from "./SelectionContext";

export const useSelection = (): SelectionContextType => {
  const context = useContext(SelectionContext);
  if (!context) {
    throw new Error("useSelection must be used within a SelectionProvider");
  }
  return context;
};
