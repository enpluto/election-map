import { ReactNode, useEffect, useMemo, useState } from "react";
import { election2012 } from "../data/election/2012";
import { election2016 } from "../data/election/2016";
import { election2020 } from "../data/election/2020";
import { election2024 } from "../data/election/2024";
import { calculateVotePercentage } from "../helpers/calculateVotePercentage";
import { SelectionContext } from "./SelectionContext";

interface SelectionProviderProps {
  children: ReactNode;
}

export const SelectionProvider = ({ children }: SelectionProviderProps) => {
  const [selectedArea, setSelectedArea] = useState("");
  const [selectedYear, setSelectedYear] = useState(2024);
  const [yearlyData, setYearlyData] = useState(election2024);

  useEffect(() => {
    switch (selectedYear) {
      case 2012:
        setYearlyData(election2012);
        break;
      case 2016:
        setYearlyData(election2016);
        break;
      case 2020:
        setYearlyData(election2020);
        break;
      default:
        setYearlyData(election2024);
        break;
    }
  }, [selectedYear]);

  const areaData = useMemo(() => {
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
        areaData,
        yearlyData,
      }}
    >
      {children}
    </SelectionContext.Provider>
  );
};
