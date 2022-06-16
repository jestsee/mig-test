import React, { useState } from 'react'
import { IoMdArrowDropdownCircle, IoMdArrowDropupCircle } from "react-icons/io";

export default function Dropdown() {
  const [isActive, setIsActive] = useState(false) 
  const [status, setStatus] = useState(null)


  const itemClickHandler = (item) => {
    setStatus(item.value)
    setIsActive(!isActive)
  }

  return ( 
    <div className="relative w-full">
      <div className="px-3 py-2  font-semibold flex items-center justify-between border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none mb-2" onClick={() => setIsActive(!isActive)}>
        <div>{status === null ? "Choose One" : status}</div>
        <span className='text-emerald-600'>{isActive ? <IoMdArrowDropupCircle/> : <IoMdArrowDropdownCircle/>}</span>
      </div>
      {isActive &&
        <div className="absolute top-[110%] p-[15px] bg-white shadow-lg w-full transition-all">
          { DropdownItem.map((item, index) => {
            return <div key={index} className="p-[10px] hover:bg-gray-100 cursor-pointer" onClick={() => itemClickHandler(item)}>{item.value}</div>
          })}
        </div>
      }
    </div>
  )
}

const DropdownItem = [
  {
    value: "Active",
  },
  {
    value: "Inactive",
  },
]