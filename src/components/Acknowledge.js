import { BsFillCheckCircleFill } from "react-icons/bs";

export default function Acknowledge() {
  return (
  <div className="text-center mx-12 my-6">
    <BsFillCheckCircleFill className="block mx-auto my-3 text-emerald-500" size='96'/>
    <div className="mb-4">
      <h3 className="font-semibold text-xl">
        User Deleted
      </h3>
      <div className="text-[grey]">
        <p>User deleted successfully!</p>
        <p>Press the button below to reload the page.</p>
      </div>
    </div>
      <button
        className="bg-emerald-500 text-white active:bg-emerald-600 font-semibold uppercase text-sm px-4 py-2 rounded-2xl shadow hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150 w-5/6 mb-3"
        type="button" onClick={() => window.location.reload()}
        >
        Ok
      </button>
  </div>)
}