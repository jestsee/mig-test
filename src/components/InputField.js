export default function InputField({placeholder, onChange, label, error=false}) {
  return (
    <div>
      <label>{label}</label>
      <input type="text" onChange={onChange} className="form-control relative flex-auto block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none mb-2" placeholder={placeholder} aria-label="Search" aria-describedby="button-addon2"></input>
      {error && <p className="text-[red] text-sm -mt-1 mb-3">The field can't be empty!</p>}
    </div>
  )
}