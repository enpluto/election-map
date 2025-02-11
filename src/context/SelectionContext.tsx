import { createContext, ReactNode, useContext, useState } from "react";

interface SelectionContextType {
  selectedArea: string;
  selectArea: (area: string) => void;
  clearArea: () => void;
  selectedYear: number;
  setSelectedYear: (year: number) => void;
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
