import { BiBuildingHouse } from "react-icons/bi";
import { FiSettings } from "react-icons/fi";
import { TbBuildingWarehouse } from "react-icons/tb";

export default function Location() {
  return (
    <div className="p-[2vw]">
        <div className="font-bold text-lg mb-[1.5vw]"><p>Lokasi</p></div>
        <div className="inline-grid grid-cols-1 sm:grid-cols-3 w-full gap-4">
          <LocationItem
            icon={<BiBuildingHouse size='60'/>}
            count={20}
            subtitle={"Induk"}
            color= {'bg-primary'}
          />
          <LocationItem
            icon={<FiSettings size='55'/>}
            count={3}
            subtitle={"Sub Lokasi Level 1"}
            color= {'bg-secondary'}
          />
          <LocationItem
            icon={<TbBuildingWarehouse size='60'/>}
            count={1}
            subtitle={"Sub Lokasi Level 2"}
            color= {'bg-paleGreen'}
          />
        </div>
    </div>
  )
}

function LocationItem({icon, count, subtitle, color}) {
  return (
    <div className={`${color} text-white p-5 flex justify-between cursor-pointer`}>
      <i>{icon}</i>
      <div className="text-right">
        <h1 className="font-bold text-3xl">{count}</h1>
        <p className="font-light">{subtitle}</p>
      </div>
    </div>
  )
}