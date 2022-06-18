import { FiShare2 } from "react-icons/fi";

export default function Relation() {
  return (
    <div className="p-[2vw]">
      <div className="flex justify-between">
        <div className="font-bold text-lg mb-[1.4vw]"><p>Relasi</p></div>
        <a className="text-primary" href="#">Lihat semua</a>
      </div>
      <RelationItem count={20} subtitle="Memiliki"/>
      <RelationItem count={108} subtitle="Menggunakan"/>
      <RelationItem count={67} subtitle="Meminjam"/>
    </div>
  )
}

function RelationItem({count, subtitle}) {
  return (
    <div className="text-grey-500 flex cursor-pointer my-6">
      <i className="mr-4 mt-4"><FiShare2 size='30'/></i>
      <div className="text-left">
        <h1 className="font-bold text-3xl">{count}</h1>
        <p className="font-light">{subtitle}</p>
      </div>
    </div>
  )
}