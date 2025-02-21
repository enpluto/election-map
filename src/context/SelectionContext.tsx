import { createContext } from "react";
import { ElectionDataType, FilteredDataType } from "../types/types";

export interface SelectionContextType {
  selectedArea: string;
  setSelectedArea: (area: string) => void;
  clearArea: () => void;
  selectedYear: number;
  setSelectedYear: (year: number) => void;
  filteredData: FilteredDataType;
  yearlyData: ElectionDataType;
}

export const SelectionContext = createContext<SelectionContextType | undefined>(
  undefined
);
