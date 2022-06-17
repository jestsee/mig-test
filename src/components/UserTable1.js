import React, { useState, useEffect, useMemo } from 'react';
import { useTable } from 'react-table';
import httpService from '../http-service';
import UserDataService from '../services/service'
import Acknowledge from './Acknowledge';
import Modal from './Modal';
import UserAdd from './UserAdd';
import UserAddConfirmation from './UserAddConfirmation';
import UserDelete from './UserDelete';
import { COLUMNS } from './UserTableColumn';
import Table from './UserTableContainer';

export default function UserTable1() {
  const [users, setUsers] = useState([])
  const [isLoaded, setIsLoaded] = useState(false)
  const [error, setError] = useState(null)
  const [tokenExpired, setTokenExpired] = useState(false)
  const [selectedUser, setSelectedUser] = useState(null)
  const [showModal, setShowModal] = useState(false)

  const initialValues = {
    name: '',
    address: '',
    country: '',
    phone_number: '',
    job_title: '',
    status: '',
  }
  const [addData, setAddData] = useState(initialValues)
  const [addClicked, setAddClicked] = useState(false)
  const [added, setAdded] = useState(false)
  const [addError, setAddError] = useState(null)
  const [submitClicked, setSubmitClicked] = useState(false)

  const [updateClicked, setUpdateClicked] = useState(false)
  const [updated, setUpdated] = useState(false)
  const [updateError, setUpdateError] = useState(null)
  
  const [deleteClicked, setDeleteClicked] = useState(false)
  const [deleted, setDeleted] = useState(false)
  const [deleteError, setDeleteError] = useState(null)

  const columns = useMemo(() => COLUMNS, [])

  const showDeleteModal = () => {
    setShowModal(!showModal)
    setDeleteClicked(true)
  }

  const showAddModal = () => {
    setShowModal(!showModal)
    setAddClicked(true)
  }
  
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

  // add new data
  const addUser = () => {
    console.log("add user terpanggil");
    console.log(addData);
    UserDataService.create(
      addData.name,
      addData.address,
      addData.country,
      addData.phone_number,
      addData.job_title,
      addData.status
    ).then((res) => {
      console.log("hasil: ", res);
      setAdded(true)
      setSubmitClicked(false)
    }).catch((error) => {
      console.log(error);
      setAddError(error.message)
    })
  }

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
    UserDataService.delete(selectedUser.id).then(
      ((res) => {
        setDeleted(true)
        setDeleteClicked(!deleteClicked)
        // setSelectedUser(null)
        console.log("hasil delete: ", res);
        // window.location.reload();
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

  // close modal
  const closeModal = () => {
    console.log("close modal called");
    setShowModal(false)
    setAddClicked(false)
    setUpdateClicked(false)
    setDeleteClicked(false)
    setSubmitClicked(false)
  }

  const submitAddUser = () => {
    setAddClicked(false)
    setSubmitClicked(true)
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

  let deleteUserTemp = <UserDelete name={selectedUser === null ? null : selectedUser.name}>
    <div className="mb-3">
      <button
        className="red-button" type="button" onClick={deleteUser}
        > Yes, I'm sure
      </button>
      <button
        className="green-button"
        type="button" onClick={showDeleteModal}
        > No, Cancel
      </button>
    </div>
  </UserDelete>

  let addUserTemp = <UserAddConfirmation>
    <div className="mb-3">
      <button
        className="red-button" type="button" onClick={addUser}
        > Yes, I'm sure
      </button>
      <button
        className="green-button"
        type="button" onClick={closeModal}
        > No, Cancel
      </button>
    </div>
  </UserAddConfirmation>

  const confirmationModal = () => {
    console.log(`added:${added} submitclicked:${submitClicked} deleteClicked:${deleteClicked}`);
    if (addClicked) {
      console.log("masuk add clicked");
      return <Modal show={showModal} close={closeModal}>
        {/* add new user */}
        <UserAdd submit={setAddData} submitClicked={submitAddUser}/>
      </Modal>
    }
    if (submitClicked) {
      console.log("masuk submit clicked");
      return <Modal show={showModal} close={closeModal}>
        {addUserTemp}
      </Modal>
    }
    if (added) {
      console.log('masuk added');
      return <Modal show={showModal} close={closeModal}>
        <Acknowledge 
        title={"User Added"}
        subtitle1="New user added!"
        subtitle2="Press the button below to reload the page."/>
      </Modal>
    }
    if (selectedUser !== null && (deleteClicked || deleted)) {
      console.log("masuk selected clicked");
      return <Modal show={showModal} close={closeModal} closable={false}>
        {/* delete user */}
        {deleteClicked && deleteUserTemp}
        {/* deleted acknowledge */}
        {deleted && <Acknowledge 
        title={"User Deleted"}
        subtitle1="User deleted successfully!"
        subtitle2="Press the button below to reload the page."/>}
      </Modal>
    }
  }

  return (
  <div>
    {/* {submitClicked ? addUser() : null} */}
    {confirmationModal()}

    <div className='flex justify-between'>
      <button className='green-button' onClick={showAddModal}>Add new user</button>
      {selectedUser && <div>
        <button className='green-button'>edit</button>
        <button className='red-button' onClick={showDeleteModal}>delete</button>
      </div>}
    </div>
    {temp}
  </div>)
}