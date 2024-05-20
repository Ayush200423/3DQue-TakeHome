import { createContext, useState } from "react";

export const FilamentContext = createContext({});

export const FilamentContextProvider = ({ children }) => {
  // Note; originalFilament means the values saved in the H2 Database.
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
