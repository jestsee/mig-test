import { RiErrorWarningLine } from "react-icons/ri";

export default function UserDelete({name, children}) {
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
          Please note that the action can't be undone.
        </p>
      </div>
    </div>
    {children}
  </div>)
}