import React from "react";
import { BiSearchAlt } from "react-icons/bi";

export const UserTableFilter = ({ filter, setFilter }) => {
  return (
    <div className="w-[30vw] my-4 rounded-2xl h-9 bg-white">
      <input
        value={filter || ""}
        onChange={(e) => setFilter(e.target.value)}
        className="w-full h-full pt-2 px-5 pb-3 rounded-2xl focus:outline-none"
        placeholder="Search"
      ></input>
      <i className="absolute -translate-x-10 pt-1.5 text-[grey]">
        <BiSearchAlt size="24"/>
      </i>
    </div>
  );
};
