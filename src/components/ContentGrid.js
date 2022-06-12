import Activity from "./Activity";
import BankAccount from "./BankAccount";
import Location from "./Location";
import MitramasInfo from "./MitramasInfo";
import Relation from "./Relation";

export default function ContentGrid() {
  return (
    <div className="ml-[6rem] mt-[2.5rem] pb-[2.5rem] mr-7">
      <div className="grid overflow-hidden grid-cols-[auto] grid-rows-[auto] gap-9">
        <div className="box row-span-6"><MitramasInfo/></div>
        <div className="box col-start-2 col-span-2"><Location/></div>
        <div className="box row-span-0 col-start-2 col-span-1"><BankAccount/></div>
        <div className="box row-span-5 col-span-1"><Activity/></div>
        <div className="box row-span-4"><Relation/></div>
      </div>
    </div>
  )
}