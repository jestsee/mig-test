import { RiQuestionFill } from "react-icons/ri";

export default function UserAddConfirmation({children}) {
  return (
  // nanti pas size small dibikin pake vw?
  <div className="text-center mx-12 my-6"> 
    <RiQuestionFill className="block mx-auto mb-3" color="rgb(16 185 129)" size='96'/>
    <div className="mb-4">
      <h3 className="font-semibold text-xl">
        Add this user?
      </h3>
      <div className="text-[grey]">
        <p>
          Are you sure you want to add this new user?
        </p>
        <p>
          Please note that the action can't be undone.
        </p>
      </div>
    </div>
    {children}
  </div>)
}