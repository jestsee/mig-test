import { BsFillCheckCircleFill } from "react-icons/bs";

export default function Acknowledge({title, subtitle1, subtitle2}) {
  console.log("acknowledge called");
  return (
  <div className="text-center mx-12 my-6">
    <BsFillCheckCircleFill className="block mx-auto my-3 text-emerald-500" size='96'/>
    <div className="mb-4">
      <h3 className="font-semibold text-xl">
        {title}
      </h3>
      <div className="text-[grey]">
        <p>{subtitle1}</p>
        <p>{subtitle2}</p>
      </div>
    </div>
      <button
        className="green-button-long"
        type="button" onClick={() => window.location.reload()}
        >Ok
      </button>
  </div>)
}