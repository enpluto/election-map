import { createContext, ReactNode, useContext, useMemo, useState } from "react";
import { Dataset2012 } from "../data/2012";
import { Dataset2016 } from "../data/2016";
import { Dataset2020 } from "../data/2020";
import { Dataset2024 } from "../data/2024";
import { FilteredDataType } from "../types/types";

interface SelectionContextType {
  selectedArea: string;
  selectArea: (area: string) => void;
  clearArea: () => void;
  selectedYear: number;
  setSelectedYear: (year: number) => void;
  filteredData: FilteredDataType;
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

  const filteredData = useMemo(() => {
    let electionYear;

    switch (selectedYear) {
      case 2012:
        electionYear = Dataset2012;
        break;
      case 2016:
        electionYear = Dataset2016;
        break;
      case 2020:
        electionYear = Dataset2020;
        break;
      default:
        electionYear = Dataset2024;
        break;
    }
    switch (selectedArea) {
      case "":
        return electionYear["全國"];
      default:
        return electionYear[selectedArea];
    }
  }, [selectedYear, selectedArea]);

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
