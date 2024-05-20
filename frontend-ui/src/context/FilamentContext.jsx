import { createContext, useEffect, useState } from "react";

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

  useEffect(() => {
    fetch("http://localhost:8080/getFilamentById/3")
      .then((res) => {
        if (!res.ok) {
          throw new Error("ERROR network response: " + res.statusText);
        }
        return res.json();
      })
      .then((data) => {
        setOriginalFilament({
          filamentRemaining: data.filamentRemaining + "g",
          filamentTotal: data.filamentTotal + "g",
        });

        setFilament({
          filamentRemaining: data.filamentRemaining + "g",
          filamentTotal: data.filamentTotal + "g",
        });
      })
      .catch((error) => {
        console.error("ERROR with fetch: ", error);
      });
  }, []);

  return (
    <FilamentContext.Provider
      value={{ originalFilament, setOriginalFilament, filament, setFilament }}
    >
      {children}
    </FilamentContext.Provider>
  );
};
