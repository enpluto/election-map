import { createContext } from "react";
import { AreaData, ElectionData } from "../types/types";

export interface SelectionContextType {
  selectedArea: string;
  setSelectedArea: (area: string) => void;
  clearArea: () => void;
  selectedYear: number;
  setSelectedYear: (year: number) => void;
  areaData: AreaData;
  yearlyData: ElectionData;
}

export const SelectionContext = createContext<SelectionContextType | undefined>(
  undefined
);
