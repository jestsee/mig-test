import { RiQuestionFill } from "react-icons/ri";

export default function UserAddConfirmation({title, sub1, sub2, children}) {
  return (
  // nanti pas size small dibikin pake vw?
  <div className="text-center mx-12 my-6"> 
    <RiQuestionFill className="block mx-auto mb-3" color="rgb(16 185 129)" size='96'/>
    <div className="mb-4">
      <h3 className="font-semibold text-xl">
        {title}
      </h3>
      <div className="text-[grey]">
        <p>
          {sub1}
        </p>
        <p>
          {sub2}
        </p>
      </div>
    </div>
    {children}
  </div>)
}