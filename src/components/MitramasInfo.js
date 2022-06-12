import { MitramasInfoItem } from "./MitramasInfoItem";
import { FiMail, FiPhone, FiGlobe, FiEdit2 } from "react-icons/fi";

export default function MitramasInfo() {
  return (
    <div>
      {/* banner & img*/}
      <div className="relative left-1/2 w-[7rem]">
        <img className="absolute top-[4.5rem] -left-1/2 bg-white rounded-full border-2 p-2.5"
        src="https://media-exp2.licdn.com/dms/image/C510BAQGoqPOqFFYp0g/company-logo_200_200/0/1583912202955?e=1663200000&v=beta&t=90pP728B15IJXqXrtAgkP5yi1cUW4aP6k5eCVx012J4"></img>
      </div>
      <div className="bg-primary w-full h-[8rem]">Pic</div>
      
      <div className="p-[2.25vw] mt-16">
        <div className="text-center">
          <div className="font-bold"><p>Mitramas Infosys Global</p></div>
          <div className="grey-title mb-5"><p>Layanan IT</p></div>
          <div className="text-primary font-semibold text-xs">
            <i className="inline-flex mr-2"><FiEdit2/></i>
            <a href="#">Sunting profil</a>
          </div>
        </div>

        <div className="mt-10 mb-16">
          <div className="grey-title"><p>Status Perusahaan</p></div>
          <div className="text-primary text-sm font-bold">
            <p className="inline-flex">Aktif</p>
            <label for="green-toggle" className="inline-flex relative items-center mr-5 cursor-pointer">
              <input type="checkbox" value="" id="green-toggle" className="sr-only peer" checked/>
              <div className="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-green-300 dark:peer-focus:ring-green-800 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600"></div>
            </label>
          </div>
          {
            MitramasInfoItem.map((item, index) => {
              return (
                <div key={index} className={item.cName}>
                  <p>{item.title}</p>
                </div>
              )
            })
          }
          <div className="grey-title"><p>E-mail</p></div>
          <div className="text-sm font-semibold text-primary mb-4">
            <i className="inline-flex mr-2"><FiMail/></i>
            <a className="underline underline-offset-1">mig@mitrasolusi.group</a>
          </div>
          <div className="grey-title"><p>No. Telp</p></div>
          <div className="text-sm font-medium text-primary mb-4">
            <i className="inline-flex mr-2"><FiPhone/></i>
            <a className="">021-5678-1234</a>
          </div>
          <div className="grey-title"><p>Situs Web</p></div>
          <div className="text-sm font-semibold text-primary mb-4">
            <i className="inline-flex mr-2"><FiGlobe/></i>
            <a className="underline underline-offset-1" href="https://www.mitrasolusi.group/" target="_blank">mitramas.com</a>
          </div>
      </div>
      </div>
    </div>
  )
}