import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SideBarItem } from './SidebarItem';


export default function Sidebar() {
  const [currentPath, setCurrentPath] = useState('')
  const [selectedId, setSelectedId] = useState(
    window.location.pathname === '/' ? 0 : 4 // TODO
  )
  
  return (
    <div className='fixed top-0 left-0 h-screen w-16 m-0 
        flex flex-col 
        bg-white text-[grey] shadow-xl'>
        {
          SideBarItem.map((item, index) => {
            return <SideBarIcon key={index} icon={item.icon} to={item.to} onClick={() => setSelectedId(index)} className={
              selectedId === index ? 'sidebar-icon-selected' : 'sidebar-icon'
            }/>
          })
        }
    </div>
  );
}

const SideBarIcon = ({icon, to, onClick, className}) => {
  return(
    <Link to={to ?? '#'} className={className} onClick={onClick}>
      {icon}
    </Link>
  )
}