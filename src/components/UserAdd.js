import React, { useState } from 'react'
import Dropdown from "./Dropdown";
import InputField from "./InputField";

export default function UserAdd({submit, submitClicked}) {
  const [name, setName] = useState("")
  const [address, setAddress] = useState("")
  const [country, setCountry] = useState("")
  const [phone, setPhone] = useState("")
  const [job, setJob] = useState("")
  const [status, setStatus] = useState("")
  
  const [nameError, setNameError] = useState(false)
  const [addressError, setAddressError] = useState(false)
  const [countryError, setCountryError] = useState(false)
  const [phoneError, setPhoneError] = useState(false)
  const [jobError, setJobError] = useState(false)
  const [statusError, setStatusError] = useState(false)

  // TODO kalo fieldnya udah ga ada yg kosong baru forward ke table-1
  const validate = () => {
    name === "" ? setNameError(true) : setNameError(false)
    address === "" ? setAddressError(true) : setAddressError(false)
    country === "" ? setCountryError(true) : setCountryError(false)
    phone === "" ? setPhoneError(true) : setPhoneError(false)
    job === "" ? setJobError(true) : setJobError(false)
    status === "" ? setStatusError(true) : setStatusError(false)


    if(name !== "" 
      && address !== "" 
      && country !== ""
      && phone !== ""
      && job !== ""
      && status !== ""
    ) {
        console.log("lanjut bro");
        submit(
          {name: name,
          address: address,
          country: country,
          phone_number: phone,
          job_title: job,
          status: status}
        )
        submitClicked(true)
      }
  }

  return (<div className="px-6 my-8 w-[40vw]">
  <p className="font-semibold text-2xl mb-4">Input User Data</p>
  <InputField label="Name" placeholder="Name" onChange={(e) => {setName(e.target.value)}} error={nameError}/>
  <InputField label="Address" placeholder="Address" onChange={(e) => {setAddress(e.target.value)}} error={addressError}/>
  <div className='flex'>
    <div className='w-1/2 mr-2'>
      <InputField label="Country" placeholder="Country" onChange={(e) => {setCountry(e.target.value)}} error={countryError}/>
    </div>
    <div className='w-1/2 ml-2'>
      <InputField label="Phone" placeholder="Phone" onChange={(e) => {setPhone(e.target.value)}} error={phoneError}/>
    </div>
  </div>
  <div className='flex'>
    <div className='w-1/2 mr-2'>
      <InputField label="Job" placeholder="Job" onChange={(e) => {setJob(e.target.value)}} error={jobError}/>
    </div>
    <div className='w-1/2 ml-2 mb-3'>
      <label>Status</label>
      <Dropdown statusHandler={setStatus}/>
      {statusError && <p className="text-[red] text-sm -mt-1 mb-3">The field can't be empty!</p>}
    </div>
  </div>
  <div className="text-center">
    <button className="green-button-long" type="button" onClick={validate}>Add User</button>
  </div>
</div>)
}