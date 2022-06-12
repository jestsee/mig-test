import React from 'react';
import { HiOutlineTicket } from "react-icons/hi";
import { BiHomeCircle, BiTask } from "react-icons/bi";
import { IoTrashBinOutline } from "react-icons/io5";
import { BsBuilding } from "react-icons/bs";

export default function Sidebar() {
  return (
    <div className='fixed top-0 left-0 h-screen w-16 m-0 
        flex flex-col 
        bg-white text-[grey] shadow-xl'>
        <SideBarIcon icon={<BiHomeCircle size='22'/>}/>
        <SideBarIcon icon={<HiOutlineTicket size='22'/>}/>
        <SideBarIcon icon={<BiTask size='22'/>}/>
        <SideBarIcon icon={<IoTrashBinOutline size='22'/>}/>
        <SideBarIcon icon={<BsBuilding size='22'/>}/>
    </div>
  );
}

const SideBarIcon = ({icon}) => {
  return(
    <div className='sidebar-icon'>
      {icon}
    </div>
  )
}