import React, { createContext, useState } from "react";
import Navbar from "./Navbar.tsx";
import Form from "./Form.tsx";
import CardList from "./CardList.tsx";

export const SearchInputContext = createContext<{
  searchInput: string;
  setSearchInput: (value: string) => void;
}>({ searchInput: "", setSearchInput: () => null });
export const AreaContext = createContext<{
  area: string[];
  setArea: (value: string[]) => void;
}>({ area: [], setArea: () => null });
export const JobContext = createContext<{
  job: string;
  setJob: (value: string) => void;
}>({
  job: "",
  setJob: () => null,
});

export default function MyApp() {
  const [isAuthenticated] = useState(false);
  const [searchInput, setSearchInput] = useState("Coucou");
  const [area, setArea] = useState<string[]>(["Nord", "Sud", "Est", "Ouest"]);
  const [job, setJob] = useState<string>("");
  return (
    <JobContext.Provider value={{ job, setJob }}>
      <AreaContext.Provider value={{ area, setArea }}>
        <SearchInputContext.Provider value={{ searchInput, setSearchInput }}>
          <Navbar isAuthenticated={isAuthenticated} />
          <Form />
          <CardList />
        </SearchInputContext.Provider>
      </AreaContext.Provider>
    </JobContext.Provider>
  );
}
