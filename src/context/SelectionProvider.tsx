import { ReactNode, useEffect, useMemo, useState } from "react";
import { Dataset2012 } from "../data/election/2012";
import { Dataset2016 } from "../data/election/2016";
import { Dataset2020 } from "../data/election/2020";
import { Dataset2024 } from "../data/election/2024";
import { calculateVotePercentage } from "../helpers/calculateVotePercentage";
import { SelectionContext } from "./SelectionContext";

interface SelectionProviderProps {
  children: ReactNode;
}

export const SelectionProvider = ({ children }: SelectionProviderProps) => {
  const [selectedArea, setSelectedArea] = useState("");
  const [selectedYear, setSelectedYear] = useState(2024);
  const [yearlyData, setYearlyData] = useState(Dataset2024);

  useEffect(() => {
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
  }, [selectedYear]);

  const filteredData = useMemo(() => {
    return selectedArea === ""
      ? calculateVotePercentage(yearlyData["全國"])
      : calculateVotePercentage(yearlyData[selectedArea]);
  }, [selectedArea, yearlyData]);

  const clearArea = () => {
    setSelectedArea("");
  };

  return (
    <SelectionContext.Provider
      value={{
        selectedArea,
        setSelectedArea,
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
