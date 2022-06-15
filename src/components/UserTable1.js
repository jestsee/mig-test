import React, { useState, useEffect, useMemo } from 'react';
import { useTable } from 'react-table';
import httpService from '../http-service';
import UserDataService from '../services/service'
import { COLUMNS } from './UserTableColumn';
import Table from './UserTableContainer';

export default function UserTable1() {
  const [users, setUsers] = useState([])
  const [isLoaded, setIsLoaded] = useState(false)
  const [error, setError] = useState(null)
  const [tokenExpired, setTokenExpired] = useState(false)
  const [selectedUser, setSelectedUser] = useState(null)

  const [updated, setUpdated] = useState(false)
  const [updateError, setUpdateError] = useState(null)

  const [deleted, setDeleted] = useState(false)
  const [deleteError, setDeleteError] = useState(null)

  const columns = useMemo(() => COLUMNS, [])
  // const data = useMemo(() => users, [])

  console.log("SELECTED USER: ", selectedUser);
  
  // fetching data using axios
  useEffect(() => {
    UserDataService.getAll().then(
      ((res) => {
        setUsers(res.data.data)
        setIsLoaded(true)
        console.log("DATA :", res.data.data);
      })
    ).catch((error) => {
      // console.log("status: ", error.response.status);
      if (error.response.status === 401) {
        console.log("STATUS 401");
        setTokenExpired(true)
      } else {
        setIsLoaded(true)
        setError(error.message)
      }
    })
  }, [])

  // update selected data
  const updateUser = () => {
    UserDataService.update(
      selectedUser.id, 
      selectedUser.name,
      selectedUser.address,
      selectedUser.country,
      selectedUser.phone_number,
      selectedUser.job_title,
      selectedUser.status
    ).then(
      ((res) => {
        console.log("hasil update: ", res);
        setUpdated(true)
      })
    ).catch((error) => {
      console.log(error);
      setUpdateError(error.message)
    })
  }

  // delete selected data
  const deleteUser = () => {
    console.log("delete user terpanggil");
    return UserDataService.delete(selectedUser.id).then(
      ((res) => {
        console.log("hasil delete: ", res);
      })
    ).catch((error) => {
      console.log(error);
      setDeleteError(error.message)
    })
  }

  // handling expired token
  const tokenHandler = () => {
    let tokenGenerted = httpService.generateNewToken()
    if (tokenGenerted) {
      console.log("token generated!");
      setTokenExpired(false)
    } else {
      console.log("masuk else token generated");
      setError("Something went wrong : (")
    }
  }

  var temp = null

  if (tokenExpired) {
    temp = <button onClick={tokenHandler}>Generate New Token</button>
  } else if (error) {
    temp = <div>Error: {error}</div>
  } else if (!isLoaded) {
    temp = <div>Loading...</div>
  } else {
    temp = <Table columns={columns} data={users} setSelectedUser={setSelectedUser} deleteHandler={deleteUser}/>
  }

  return (
  <div>
    {temp}
  </div>)
}