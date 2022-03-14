import { createContext, useState } from "react";

export const SearchContext = createContext();

export function SearchProvider({ children }) {
  const [inputSearch, setInputSearch] = useState("");

  return (
    <>
      <SearchContext.Provider value={{ inputSearch, setInputSearch }}>
        {children}
      </SearchContext.Provider>
    </>
  );
}