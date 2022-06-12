export default function ContentGrid() {
  return (
    <div className="grid overflow-hidden grid-cols-3 grid-rows-3 gap-2">
      <div className="box row-span-6 bg-red-300">1</div>
      <div className="box col-start-2 col-span-2">2</div>
      <div className="box row-span-0 col-start-2 col-span-1">3</div>
      <div className="box row-span-5 col-span-1">4</div>
      <div className="box row-span-4">5</div>
    </div>
  )
}