import { HiOutlineTicket } from "react-icons/hi";
import { BiHomeCircle, BiTask } from "react-icons/bi";
import { IoTrashBinOutline } from "react-icons/io5";
import { BsBuilding } from "react-icons/bs";

export const SideBarItem = [
  {
    icon: <BiHomeCircle size='22'/>,
    name: 'Home',
    to: '/'
  },
  {
    icon: <HiOutlineTicket size='22'/>,
    name: 'Item 2',
  },
  {
    icon: <BiTask size='22'/>,
    name: 'Item 3',
  },
  {
    icon: <IoTrashBinOutline size='22'/>,
    name: 'Item 4',
  },
  {
    icon: <BsBuilding size='22'/>,
    to: '/dashboard',
    name: 'Dashboard',
  },
]