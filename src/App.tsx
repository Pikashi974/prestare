import React, { createContext, useEffect, useState } from "react";
import Navbar from "./Navbar.tsx";
import Form from "./Form.tsx";
import CardList from "./CardList.tsx";
import { getJobs } from "./utils/api.ts";
import Job from "./Job.tsx";
import Modal from "./Modal.tsx";
import ToastMesage from "./ToastMesage.tsx";

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
export const ToastMessageContext = createContext<{
  toastMessage: string;
  setToastMessage: (value: string) => void;
}>({
  toastMessage: "",
  setToastMessage: () => null,
});

export const JobListContext = createContext<{
  jobList: Job[];
  setJoblist: (value: Job[]) => void;
}>({
  jobList: [],
  setJoblist: () => null,
});

export default function MyApp() {
  const [isAuthenticated] = useState(false);
  const [searchInput, setSearchInput] = useState("Coucou");
  const [area, setArea] = useState<string[]>(["Nord", "Sud", "Est", "Ouest"]);
  const [job, setJob] = useState<string>("");
  const [jobList, setJoblist] = useState<Job[]>([]);
  const [toastMessage, setToastMessage] = useState<string>("");

  useEffect(() => {
    const fetchJobs = async () => {
      const j = await getJobs();
      setJoblist(j);
    };
    fetchJobs();
  }, []);

  return (
    <JobListContext.Provider value={{ jobList, setJoblist }}>
      <JobContext.Provider value={{ job, setJob }}>
        <ToastMessageContext.Provider value={{ toastMessage, setToastMessage }}>
          <AreaContext.Provider value={{ area, setArea }}>
            <SearchInputContext.Provider
              value={{ searchInput, setSearchInput }}
            >
              <Modal />
              <Navbar isAuthenticated={isAuthenticated} />
              <Form />
              <CardList />
              <ToastMesage />
            </SearchInputContext.Provider>
          </AreaContext.Provider>
        </ToastMessageContext.Provider>
      </JobContext.Provider>
    </JobListContext.Provider>
  );
}
