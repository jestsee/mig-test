import InputField from "./InputField";

export default function UserAdd() {
  return (<div className="px-6 my-8 w-[40vw]">
  <p className="font-semibold text-2xl mb-4">Input User's Data</p>
  <InputField label="Name" placeholder="Name"/>
  <InputField label="Address" placeholder="Address"/>
  <InputField label="Country" placeholder="Country"/>
  <InputField label="Phone" placeholder="Phone"/>
  <InputField label="Jobe" placeholder="Job"/>
  <InputField label="Status" placeholder="Status"/>
  <div className="text-center">
    <button className="green-button-long" type="button">Add User</button>
  </div>
</div>)
}