import { createContext, ReactNode, useContext, useMemo, useState } from "react";
import { Dataset2012 } from "../data/2012";
import { Dataset2016 } from "../data/2016";
import { Dataset2020 } from "../data/2020";
import { Dataset2024 } from "../data/2024";
import { ElectionDataType, FilteredDataType } from "../types/types";

interface SelectionContextType {
  selectedArea: string;
  selectArea: (area: string) => void;
  clearArea: () => void;
  selectedYear: number;
  setSelectedYear: (year: number) => void;
  filteredData: FilteredDataType;
  yearlyData: ElectionDataType;
}

interface SelectionProviderProps {
  children: ReactNode;
}

const SelectionContext = createContext<SelectionContextType | undefined>(
  undefined
);

export const SelectionProvider = ({ children }: SelectionProviderProps) => {
  const [selectedArea, setSelectedArea] = useState("");
  const [selectedYear, setSelectedYear] = useState(2024);
  const [yearlyData, setYearlyData] = useState(Dataset2024);

  const filteredData = useMemo(() => {
    switch (selectedYear) {
      case 2012:
        setYearlyData(Dataset2012);
        break;
      case 2016:
        setYearlyData(Dataset2016);
        break;
      case 2020:
        setYearlyData(Dataset2020);
        break;
      default:
        setYearlyData(Dataset2024);
        break;
    }

    switch (selectedArea) {
      case "":
        return yearlyData["全國"];
      default:
        return yearlyData[selectedArea];
    }
  }, [selectedYear, selectedArea, yearlyData]);

  const selectArea = (area: string) => {
    setSelectedArea(area);
  };

  const clearArea = () => {
    setSelectedArea("");
  };

  return (
    <SelectionContext.Provider
      value={{
        selectedArea,
        selectArea,
        clearArea,
        selectedYear,
        setSelectedYear,
        filteredData,
        yearlyData,
      }}
    >
      {children}
    </SelectionContext.Provider>
  );
};

export const useSelection = (): SelectionContextType => {
  const context = useContext(SelectionContext);

  if (!context) {
    throw new Error("useArea must be used within an AreaProvider");
  }
  return context;
};
