import { RiErrorWarningLine } from "react-icons/ri";

export default function UserDelete({closeModal, name, deleteHandler}) {
  return (
  // nanti pas size small dibikin pake vw?
  <div className="text-center mx-12 my-6"> 
    <RiErrorWarningLine className="block mx-auto mb-3" color="red" size='96'/>
    <div className="mb-4">
      <h3 className="font-semibold text-xl">
        Delete this user?
      </h3>
      <div className="text-[grey]">
        <p>
          Are you sure you want to delete <strong>{name}</strong>?
        </p>
        <p>
          Please note the action can't be undone.
        </p>
      </div>
    </div>
    <div className="mb-3">
      <button
        className="bg-[red] text-white active:bg-[#da0909] font-semibold uppercase text-sm px-4 py-2 rounded-2xl shadow hover:shadow-lg outline-none focus:outline-none mr-4 ease-linear transition-all duration-150" type="button" onClick={deleteHandler}
        >
        Yes, I'm sure
      </button>
      <button
        className="bg-emerald-500 text-white active:bg-emerald-600 font-semibold uppercase text-sm px-4 py-2 rounded-2xl shadow hover:shadow-lg outline-none focus:outline-none mr-4 ease-linear transition-all duration-150"
        type="button" onClick={closeModal}
        >
        No, Cancel
      </button>
    </div>
  </div>)
}