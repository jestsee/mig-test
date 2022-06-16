import React, { useState } from 'react'
import Dropdown from "./Dropdown";
import InputField from "./InputField";

export default function UserAdd() {
  const [name, setName] = useState("")
  const [address, setAddress] = useState("")
  const [country, setCountry] = useState("")
  const [phone, setPhone] = useState("")
  const [job, setJob] = useState("")
  const [status, setStatus] = useState(null)

  // TODO kalo fieldnya udah ga ada yg kosong baru forward ke table-1

  return (<div className="px-6 my-8 w-[40vw]">
  <p className="font-semibold text-2xl mb-4">Input User Data</p>
  <InputField label="Name" placeholder="Name" onChange={(e) => {setName(e.target.value)}}/>
  <InputField label="Address" placeholder="Address" onChange={(e) => {setAddress(e.target.value)}}/>
  <InputField label="Country" placeholder="Country" onChange={(e) => {setCountry(e.target.value)}}/>
  <InputField label="Phone" placeholder="Phone" onChange={(e) => {setPhone(e.target.value)}}/>
  <InputField label="Job" placeholder="Job" onChange={(e) => {setJob(e.target.value)}}/>
  <InputField label="Status" placeholder="Status" onChange={(e) => {setStatus(e.target.value)}}/>
  <div className="text-center">
    <button className="green-button-long" type="button">Add User</button>
  </div>
</div>)
}

const InputFieldItem = [
  {
    value: "Name",
  },
  {
    value: "Address",
  },
  {
    value: "Country",
  },
  {
    value: "Phone",
  },
  {
    value: "Job",
  },
]