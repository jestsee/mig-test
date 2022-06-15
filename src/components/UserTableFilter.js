import React from "react";

export const UserTableFilter = ({filter, setFilter}) => {
  return (<span>
    <input value = {filter || ''}
    onChange = {(e) => setFilter(e.target.value)}
    className="rounded-lg w-[30vw] h-9 px-5 pb-1 my-4" placeholder="Search"></input>
  </span>)
}