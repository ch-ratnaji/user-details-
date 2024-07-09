import { useDispatch, useSelector } from "react-redux";
import { fetchUserList, deleteUser } from "../store/user-actions";
import { useEffect, useState } from "react";
import { userActions } from "../store/userSlice";
import "./UserTable.css";
import PopUp from "./PopUp";
import NewUser from "./NewUser";
import EditUser from "./EditUser";
import ConfirmDelete from "./ConfirmDelete";

const UserTable = () => {
  const dispatch = useDispatch();
  const userList = useSelector((state) => state.user.userList);
  const selectedUser = useSelector((state) => state.user.selectedUser);
  // const newUserState = useSelector((state) => state.user.newUserState);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isEditPopupOpen, setIsEditPopupOpen] = useState(false);
  const [editUserId, setEditUserId] = useState(null);
  const [isConfirmDeleteOpen, setIsConfirmDeleteOpen] = useState(false);
  const [deleteUserId, setDeleteUserId] = useState(null);

  useEffect(() => {
    dispatch(fetchUserList());
  }, [dispatch]);

  const openPopup = () => {
    setIsPopupOpen(true);
    dispatch(userActions.setNewUserState(true));
  };
  const closePopup = () => {
    setIsPopupOpen(false);
  };

  // function newUserHandler() {
  //   dispatch(userActions.setNewUserState(true));
  // }
  const openEditPopup = (userId) => {
    setEditUserId(userId);
    setIsEditPopupOpen(true);
  };

  const closeEditPopup = () => {
    setIsEditPopupOpen(false);
  };

  const openConfirmDelete = (userId) => {
    setDeleteUserId(userId);
    setIsConfirmDeleteOpen(true);
  };

  const closeConfirmDelete = () => {
    setIsConfirmDeleteOpen(false);
  };

  const handleConfirmDelete = () => {
    dispatch(deleteUser(deleteUserId));
    closeConfirmDelete();
  };

  return (
    <div>
      <div>
        <button className="newUserButton" onClick={openPopup}>
          NewUser
        </button>
        {isPopupOpen && (
          <PopUp
            onClose={closePopup}
            popUpHeading="Create New User"
            component={<NewUser />}
          />
        )}
        {isEditPopupOpen && (
          <PopUp
            onClose={closeEditPopup}
            popUpHeading="Edit User"
            component={
              <EditUser userId={editUserId} onClose={closeEditPopup} />
            }
          />
        )}
        {isConfirmDeleteOpen && (
          <ConfirmDelete
            onConfirm={handleConfirmDelete}
            onCancel={closeConfirmDelete}
          />
        )}
      </div>

      {/* <div className="user-table">
        <div className="user-details table-header">
          <div className="table-cell">Name</div>
          <div className="table-cell">Email</div>
          <div className="table-cell">Age</div>
          <div className="table-cell">City</div>
          <div className="table-cell">Pincode</div>
          <div className="table-cell">Edit / Delete</div>
        </div>
        <div className="user-list">
          {userList.map((user) => (
            <div key={user.id} className="user-details">
              <div
                className="table-cell"
                onClick={() => dispatch(userActions.setSelectedUser(user.id))}
              >
                {user.name}
              </div>

              <div className="table-cell">{user.username}</div>
              <div className="table-cell">{user.email}</div>
              <div className="table-cell">{user.company.name}</div>
              <div className="table-cell">{user.address.zipcode}</div>
              <div className="table-cell"> */}
      {/* <button
                  className="edit-btn"
                  onClick={() => openEditPopup(user.id)}
                >
                  Edit
                </button>
                <button
                  className="delete-btn"
                  onClick={() => openConfirmDelete(user.id)}
                >
                  Delete
                </button> */}
      {/* </div>
            </div>
          ))}
        </div>
      </div> */}

      <div className="user-table">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Username</th>
              <th>Email</th>
              <th>Company</th>
              <th>Pincode</th>
              <th>Edit / Delete</th>
            </tr>
          </thead>
          <tbody>
            {userList.map((user) => (
              <tr key={user.id}>
                <td
                  onClick={() => dispatch(userActions.setSelectedUser(user.id))}
                >
                  {user.name}
                </td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.company.name}</td>
                <td>{user.address.zipcode}</td>
                <td>
                  <button
                    className="edit-btn"
                    onClick={() => openEditPopup(user.id)}
                  >
                    Edit
                  </button>
                  <button
                    className="delete-btn"
                    onClick={() => openConfirmDelete(user.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="selected-user">
        {selectedUser && (
          <div className="user-details">
            <h2>Selected User</h2>
            <p>
              <span className="label">Name:</span> {selectedUser.name}
            </p>
            <p>
              <span className="label">UserName:</span> {selectedUser.username}
            </p>
            <p>
              <span className="label">Email:</span> {selectedUser.email}
            </p>
            <p>
              <span className="label">PIN:</span> {selectedUser.address.zipcode}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserTable;
