import { BiBuildingHouse } from "react-icons/bi";
import { FiSettings } from "react-icons/fi";
import { TbBuildingWarehouse } from "react-icons/tb";

export default function Location() {
  return (
    <div className="p-[1.7vw]">
        <div className="font-bold text-lg mb-[1.5vw]"><p>Lokasi</p></div>
        <div className="inline-grid grid-cols-3 w-full gap-4">
          <LocationItem
            icon={<BiBuildingHouse size='60'/>}
            count={20}
            subtitle={"Induk"}
            color= {'primary'}
          />
          <LocationItem
            icon={<FiSettings size='55'/>}
            count={3}
            subtitle={"Sub Lokasi Level 1"}
            color= {'secondary'}
          />
          <LocationItem
            icon={<TbBuildingWarehouse size='60'/>}
            count={1}
            subtitle={"Sub Lokasi Level 2"}
            color= {'paleGreen'}
          />
        </div>
    </div>
  )
}

function LocationItem({icon, count, subtitle, color}) {
  return (
    <div className={`bg-${color} text-white p-5 flex justify-between`}>
      <i className="">{icon}</i>
      <div className="text-right">
        <h1 className="font-bold text-3xl">{count}</h1>
        <p className="font-light">{subtitle}</p>
      </div>
    </div>
  )
}