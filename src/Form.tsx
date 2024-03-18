import React, { useContext } from "react";
import {
  AreaContext,
  JobContext,
  JobListContext,
  SearchInputContext,
} from "./App.tsx";

export default function Form() {
  const { setSearchInput } = useContext(SearchInputContext);
  const { area, setArea } = useContext(AreaContext);
  const { setJob } = useContext(JobContext);
  const { jobList } = useContext(JobListContext);

  return (
    <form className=" max-w-md my-8 mx-auto">
      <label className="input input-bordered flex items-center gap-2">
        <input
          type="text"
          className="grow"
          placeholder="Search"
          onInput={(e) => {
            setSearchInput(e.currentTarget.value);
          }}
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="w-4 h-4 opacity-70"
        >
          <path
            fillRule="evenodd"
            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
            clipRule="evenodd"
          />
        </svg>
      </label>
      <div className="flex justify-center">
        <label className="label cursor-pointer">
          <span className="label-text mr-1">Nord</span>
          <input
            type="checkbox"
            defaultChecked
            className="checkbox"
            value={"Nord"}
            onChange={(e) => {
              if (e.currentTarget.checked) {
                setArea([...area, e.currentTarget.value]);
              } else {
                setArea(
                  area.filter((element) => element !== e.currentTarget.value)
                );
              }
            }}
          />
        </label>
        <label className="label cursor-pointer">
          <span className="label-text mr-1">Sud</span>
          <input
            type="checkbox"
            defaultChecked
            className="checkbox"
            value={"Sud"}
            onChange={(e) => {
              if (e.currentTarget.checked) {
                setArea([...area, e.currentTarget.value]);
              } else {
                setArea(
                  area.filter((element) => element !== e.currentTarget.value)
                );
              }
            }}
          />
        </label>
        <label className="label cursor-pointer">
          <span className="label-text mr-1">Est</span>
          <input
            type="checkbox"
            defaultChecked
            className="checkbox"
            value={"Est"}
            onChange={(e) => {
              if (e.currentTarget.checked) {
                setArea([...area, e.currentTarget.value]);
              } else {
                setArea(
                  area.filter((element) => element !== e.currentTarget.value)
                );
              }
            }}
          />
        </label>
        <label className="label cursor-pointer">
          <span className="label-text mr-1">Ouest</span>
          <input
            type="checkbox"
            defaultChecked
            className="checkbox"
            value={"Ouest"}
            onChange={(e) => {
              if (e.currentTarget.checked) {
                setArea([...area, e.currentTarget.value]);
              } else {
                setArea(
                  area.filter((element) => element !== e.currentTarget.value)
                );
              }
            }}
          />
        </label>
      </div>
      <div className=" flex justify-center">
        <select
          className="select select-info w-full max-w-xs"
          onChange={(e) => {
            setJob(e.currentTarget.value);
          }}
        >
          <option selected>Tout</option>
          {jobList.map((element) => {
            return <option value={element.name}>{element.name}</option>;
          })}
        </select>
      </div>
    </form>
  );
}
