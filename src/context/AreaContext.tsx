import { createContext, ReactNode, useContext, useState } from "react";

interface AreaContextType {
  selectedArea: string;
  selectArea: (area: string) => void;
  clearArea: () => void;
}

interface AreaProviderProps {
  children: ReactNode;
}

const AreaContext = createContext<AreaContextType | undefined>(undefined);

export const AreaProvider = ({ children }: AreaProviderProps) => {
  const [selectedArea, setSelectedArea] = useState("");

  const selectArea = (area: string) => {
    setSelectedArea(area);
  };

  const clearArea = () => {
    setSelectedArea("");
  };

  return (
    <AreaContext.Provider value={{ selectedArea, selectArea, clearArea }}>
      {children}
    </AreaContext.Provider>
  );
};

export const useArea = (): AreaContextType => {
  const context = useContext(AreaContext);

  if (!context) {
    throw new Error("useArea must be used within an AreaProvider");
  }
  return context;
};
