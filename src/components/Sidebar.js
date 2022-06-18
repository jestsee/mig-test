import React, { useState } from "react";
import { Link } from "react-router-dom";
import { SideBarItem } from "./SidebarItem";
import { FaTimes, FaBars } from "react-icons/fa";

export default function Sidebar() {
  const [selectedId, setSelectedId] = useState(
    window.location.pathname === "/" ? 0 : 4 // TODO
  );
  const [barsClicked, setBarsClicked] = useState(false)

  const barsHandler = () => {
    setBarsClicked(!barsClicked)
  }

  return (
    <>
      <div className="md:hidden m-0 p-o fixed h-16 top-0 left-0 w-full bg-primary shadow-lg flex justify-between px-5 py-[1.2rem] rounded-b-sm z-10">
        <h1 className="text-white text-lg font-semibold">Company Name</h1>
        <i className="text-white cursor-pointer" onClick={barsHandler}>
          {barsClicked ? <FaTimes size='28'/> : <FaBars size="28" />}
        </i>
      </div>
      <ul
        className={barsClicked ? "sidebar active" : "sidebar"}
      >
        {SideBarItem.map((item, index) => {
          return (
            <SideBarIcon
              key={index}
              icon={item.icon}
              name={item.name}
              to={item.to}
              onClick={() => setSelectedId(index)}
              className={
                selectedId === index ? "sidebar-icon-selected" : "sidebar-icon"
              }
            />
          );
        })}
      </ul>
    </>
  );
}

const SideBarIcon = ({ icon, to, onClick, className, name }) => {
  return (
    <li className="flex">  
      <Link to={to ?? "#"} className={className} onClick={onClick}>
        <div className="my-5 flex">
          <i className="md:block mr-2">{icon}</i>
          <p className="md:hidden">{name}</p>
        </div>
      </Link>
    </li>
  );
};
