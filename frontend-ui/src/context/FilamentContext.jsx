import { createContext, useState } from "react";

export const FilamentContext = createContext({});

export const FilamentContextProvider = ({ children }) => {
  // These are temporary values, will be changed later
  const [filament, setFilament] = useState({
    filamentRemaining: "100g",
    filamentTotal: "1000g",
  });

  const [originalFilament, setOriginalFilament] = useState({
    filamentRemaining: "100g",
    filamentTotal: "1000g",
  });

  return (
    <FilamentContext.Provider
      value={{ originalFilament, filament, setFilament }}
    >
      {children}
    </FilamentContext.Provider>
  );
};
