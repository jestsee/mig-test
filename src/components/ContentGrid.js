import MitramasInfo from "./MitramasInfo";

export default function ContentGrid() {
  return (
    <div className="ml-[5.8rem] mt-[2.5rem] mr-5">
      <div className="grid overflow-hidden grid-cols-3 grid-rows-3 gap-7">
        <div className="box row-span-6"><MitramasInfo/></div>
        <div className="box col-start-2 col-span-2">2</div>
        <div className="box row-span-0 col-start-2 col-span-1">3</div>
        <div className="box row-span-5 col-span-1">4</div>
        <div className="box row-span-4">5</div>
      </div>
    </div>
  )
}