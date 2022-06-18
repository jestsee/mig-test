import Activity from "./Activity";
import BankAccount from "./BankAccount";
import Location from "./Location";
import MitramasInfo from "./MitramasInfo";
import Relation from "./Relation";

export default function ContentGrid() {
  return (
    <div>
      <div className="md:grid md:grid-cols-2
      lg:grid-cols-[auto] lg:grid-rows-[auto,auto,1fr]
      gap-7 overflow-hidden">
        <div className="box row-span-6 order-1 min-h-0"><MitramasInfo/></div>
        <div className="box lg:col-start-2 col-span-2 lg:order-[2] md:order-4 md:col-start-1"><Location/></div>
        <div className="box row-span-0 col-start-2 col-span-1 order-3 md:order-2 h-fit"><BankAccount/></div>
        <div className="box row-span-5 col-span-1 order-4 md:order-3 min-h-0"><Activity/></div>
        <div className="box row-span-4 lg:col-span-1 md:col-span-2 order-5 min-h-0"><Relation/></div>
      </div>
    </div>
  )
}