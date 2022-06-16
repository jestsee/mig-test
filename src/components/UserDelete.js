import { RiErrorWarningLine } from "react-icons/ri";

export default function UserDelete() {
  return (
  // nanti pas size small dibikin pake vw?
  <div className="text-center mx-12 my-6"> 
    <RiErrorWarningLine className="block mx-auto" color="red" size='64'/>
    <div className="">
      <h3 className="font-semibold text-xl">
        Are you sure you want to delete this user?
      </h3>
      <p className="text-[grey]">
        If you delete this user, the action cannot be undone.
      </p>
    </div>
    <div>
      <button
        className="bg-[red] text-white active:bg-emerald-600 font-semibold uppercase text-sm px-4 py-2 rounded-2xl shadow hover:shadow-lg outline-none focus:outline-none mr-4 ease-linear transition-all duration-150"
        type="button"
        >
        Yes, I'm sure
      </button>
      <button
        className="bg-emerald-500 text-white active:bg-emerald-600 font-semibold uppercase text-sm px-4 py-2 rounded-2xl shadow hover:shadow-lg outline-none focus:outline-none mr-4 ease-linear transition-all duration-150"
        type="button"
        >
        No, Cancel
      </button>
    </div>
  </div>)
}