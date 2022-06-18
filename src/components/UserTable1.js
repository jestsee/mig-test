import React, { useState, useEffect, useMemo } from "react";
import httpService from "../http-service";
import UserDataService from "../services/service";
import Acknowledge from "./Acknowledge";
import Modal from "./Modal";
import UserAdd from "./UserAdd";
import UserAddConfirmation from "./UserAddConfirmation";
import UserDelete from "./UserDelete";
import { COLUMNS } from "./UserTableColumn";
import Table from "./UserTableContainer";
import UserUpdate from "./UserUpdate";

export default function UserTable1() {
  const [users, setUsers] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);
  const [tokenExpired, setTokenExpired] = useState(false);
  const [tokenGenerated, setTokenGenerated] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const initialValues = {
    name: "",
    address: "",
    country: "",
    phone_number: "",
    job_title: "",
    status: "",
  };
  const [addData, setAddData] = useState(initialValues);
  const [addClicked, setAddClicked] = useState(false);
  const [added, setAdded] = useState(false);
  const [addError, setAddError] = useState(null);
  const [submitClicked, setSubmitClicked] = useState(false);

  const [updateClicked, setUpdateClicked] = useState(false);
  const [updateSubmitClicked, setUpdateSubmitClicked] = useState(false);
  const [updated, setUpdated] = useState(false);
  const [updateError, setUpdateError] = useState(null);

  const [deleteClicked, setDeleteClicked] = useState(false);
  const [deleted, setDeleted] = useState(false);
  const [deleteError, setDeleteError] = useState(null);

  const columns = useMemo(() => COLUMNS, []);

  const showDeleteModal = () => {
    setShowModal(!showModal);
    setDeleteClicked(true);
  };

  const showAddModal = () => {
    setShowModal(!showModal);
    setAddClicked(true);
  };

  const showUpdateModal = () => {
    setShowModal(!showModal);
    setUpdateClicked(true);
  };

  // fetching data using axios
  useEffect(() => {
    UserDataService.getAll()
      .then((res) => {
        setUsers(res.data.data);
        setIsLoaded(true);
        console.log("DATA :", res.data.data);
      })
      .catch((error) => {
        // console.log("status: ", error.response.status);
        if (error.response.status === 401) {
          console.log("STATUS 401");
          setTokenExpired(true);
        } else {
          setIsLoaded(true);
          setError(error.message);
        }
      });
  }, []);

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
    )
      .then((res) => {
        console.log("hasil: ", res);
        setAdded(true);
        setSubmitClicked(false);
      })
      .catch((error) => {
        console.log(error);
        setAddError(error.message);
      });
  };

  // update selected data
  const updateUser = () => {
    UserDataService.update(
      selectedUser.id,
      addData.name,
      addData.address,
      addData.country,
      addData.phone_number,
      addData.job_title,
      addData.status
    )
      .then((res) => {
        console.log("hasil update: ", res);
        setUpdated(true);
        setUpdateSubmitClicked(false);
      })
      .catch((error) => {
        console.log(error);
        setUpdateError(error.message);
      });
  };

  // delete selected data
  const deleteUser = () => {
    console.log("delete user terpanggil");
    UserDataService.delete(selectedUser.id)
      .then((res) => {
        setDeleted(true);
        setDeleteClicked(!deleteClicked);
        // setSelectedUser(null)
        console.log("hasil delete: ", res);
        // window.location.reload();
      })
      .catch((error) => {
        console.log(error);
        setDeleteError(error.message);
      });
  };

  // handling expired token
  const tokenHandler = async () => {
    console.log(await httpService.generateNewToken())
    
  };

  // close modal
  const closeModal = () => {
    console.log("close modal called");
    setShowModal(false);
    setAddClicked(false);
    setUpdateClicked(false);
    setDeleteClicked(false);
    setSubmitClicked(false);
  };

  const submitAddUser = () => {
    setAddClicked(false);
    setSubmitClicked(true);
  };

  const submitUpdateUser = () => {
    setUpdateClicked(false);
    setUpdateSubmitClicked(true);
  };

  var temp = null;

  if (tokenExpired) {
    temp = <button onClick={tokenHandler}>Generate New Token</button>;
  } else if (error) {
    temp = <div>Error: {error}</div>;
  } else if (!isLoaded) {
    temp = <div>Loading...</div>;
  } else {
    temp = (
      <Table
        columns={columns}
        data={users}
        setSelectedUser={setSelectedUser}
        deleteHandler={deleteUser}
      />
    );
  }

  let deleteUserTemp = (
    <UserDelete name={selectedUser === null ? null : selectedUser.name}>
      <div className="mb-3">
        <button className="red-button" type="button" onClick={deleteUser}>
          {" "}
          Yes, I'm sure
        </button>
        <button className="green-button" type="button" onClick={closeModal}>
          {" "}
          No, Cancel
        </button>
      </div>
    </UserDelete>
  );

  let addUserTemp = (
    <UserAddConfirmation
      title={"Add this user?"}
      sub1={"Are you sure you want to add this new user?"}
      sub2={"Please note that the action can't be undone."}
    >
      <div className="mb-3">
        <button className="red-button" type="button" onClick={addUser}>
          {" "}
          Yes, I'm sure
        </button>
        <button className="green-button" type="button" onClick={closeModal}>
          {" "}
          No, Cancel
        </button>
      </div>
    </UserAddConfirmation>
  );

  let updateUserTemp = (
    <UserAddConfirmation
      title={"Update this user?"}
      sub1={`Are you sure you want to update ${
        selectedUser !== null ? selectedUser.name : null
      }?`}
      sub2={"Please note that the action can't be undone."}
    >
      <div className="mb-3">
        <button className="red-button" type="button" onClick={updateUser}>
          {" "}
          Yes, I'm sure
        </button>
        <button className="green-button" type="button" onClick={closeModal}>
          {" "}
          No, Cancel
        </button>
      </div>
    </UserAddConfirmation>
  );

  const confirmationModal = () => {
    console.log(
      `added:${added} submitclicked:${submitClicked} deleteClicked:${deleteClicked}`
    );
    if (addClicked) {
      console.log("masuk add clicked");
      return (
        <Modal show={showModal} close={closeModal}>
          {/* add new user */}
          <UserAdd submit={setAddData} submitClicked={submitAddUser} />
        </Modal>
      );
    }
    if (submitClicked) {
      console.log("masuk submit clicked");
      return (
        <Modal show={showModal} close={closeModal}>
          {addUserTemp}
        </Modal>
      );
    }
    if (added) {
      console.log("masuk added");
      return (
        <Modal show={showModal} close={closeModal}>
          <Acknowledge
            title={"User Added"}
            subtitle1="New user added!"
            subtitle2="Press the button below to reload the page."
          />
        </Modal>
      );
    }
    if (selectedUser !== null && (deleteClicked || deleted)) {
      console.log("masuk selected clicked");
      return (
        <Modal show={showModal} close={closeModal} closable={false}>
          {/* delete user */}
          {deleteClicked && deleteUserTemp}
          {/* deleted acknowledge */}
          {deleted && (
            <Acknowledge
              title={"User Deleted"}
              subtitle1="User deleted successfully!"
              subtitle2="Press the button below to reload the page."
            />
          )}
        </Modal>
      );
    }
    if (selectedUser !== null && updateClicked) {
      return (
        <Modal show={showModal} close={closeModal}>
          <UserUpdate
            submit={setAddData}
            submitClicked={submitUpdateUser}
            name1={selectedUser.name}
            address1={selectedUser.address}
            phone1={selectedUser.phone_number}
            job1={selectedUser.job_title}
            status1={selectedUser.status}
            country1={selectedUser.country}
          />
        </Modal>
      );
    }
    if (updateSubmitClicked) {
      return (
        <Modal show={showModal} close={closeModal}>
          {updateUserTemp}
        </Modal>
      );
    }
    if (updated) {
      return (
        <Modal show={showModal} close={closeModal}>
          <Acknowledge
            title={"User Updated"}
            subtitle1={`User ${
              selectedUser !== null ? selectedUser.name : null
            } has been updated!`}
            subtitle2="Press the button below to reload the page."
          />
        </Modal>
      );
    }
  };

  return (
    <div>
      {confirmationModal()}
      <div className="flex justify-between">
        <button className="green-button" onClick={showAddModal}>
          Add new user
        </button>
        {selectedUser && (
          <div>
            <button className="green-button" onClick={showUpdateModal}>
              update
            </button>
            <button className="red-button" onClick={showDeleteModal}>
              delete
            </button>
          </div>
        )}
      </div>
      {temp}
    </div>
  );
}
