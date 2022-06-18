import { BsPlusLg } from "react-icons/bs";
import { FiEdit2, FiTrash2 } from "react-icons/fi";

export default function BankAccount() {
  return (
    <div className="px-[2vw] pt-[1.5vw] pb-1 lg:-mb-9 md:-mb-16 md:pb-0">
      <div className="mb-[1.5vw] flex justify-between">
        <p className="font-bold text-lg">Akun Bank</p>
        <button className="bg-primary text-white text-sm rounded-lg py-[8px] px-[2vw] flex">
          <BsPlusLg className="mr-4 mt-1" size='13'/>
          Tambah Akun Bank
        </button>
      </div>
      <BankAccountItem
        gradient="from-yellow-500 to-slate-500"
        bankName="Bank KB Bukopin"
        info="**** 0876 - Yusron Taufiq"
        currency="IDR"
      />
      <BankAccountItem
        gradient="from-cyan-500 to-blue-500"
        bankName="Citibank, NA"
        info="**** 5525 - Si Tampan"
        currency="USD"
      />
    </div>
  )
}

function BankAccountItem({gradient, bankName, info, currency}) {
  return (
    <div className="flex mb-[1.7vw]">
      <div className={`bg-gradient-to-r ${gradient} rounded-lg w-60 h-[100px] mr-5`}></div>
      <div className="w-full">
        <div className="flex justify-between mb-[1.7vw]">
          <p className="font-bold">{bankName}</p>
          <div className="flex">
            <i className="text-primary cursor-pointer mr-3"><FiEdit2/></i>
            <i className="text-[red] cursor-pointer"><FiTrash2/></i>
          </div>
        </div>
        <div className="text-sm text-gray-500">
          <p className="mb-1">{info}</p>
          <p>{currency}</p>
        </div>
      </div>
    </div>
  )
}