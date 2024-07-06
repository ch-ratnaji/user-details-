import { useDispatch, useSelector } from "react-redux";
import { fetchUserList } from "../store/user-actions";
import { useEffect } from "react";
import { userActions } from "../store/userSlice";
import "./UserTable.css";
const UserTable = () => {
  const dispatch = useDispatch();
  const userList = useSelector((state) => state.user.userList);
  const selectedUser = useSelector((state) => state.user.selectedUser);
  const newUserState = useSelector((state) => state.user.newUserState);

  useEffect(() => {
    dispatch(fetchUserList());
  }, [dispatch]);

  function newUserHandler() {
    dispatch(() => userActions.setNewUserState(true));
  }

  return (
    <div>
      <div>
        <button className="newUserButton" onClick={newUserHandler}>
          {!newUserState ? "NewUser" : undefined}
        </button>
      </div>

      <div className="user-table">
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
              <div className="table-cell">
                <button className="edit-btn">Edit</button>
                <button className="delete-btn">Delete</button>
              </div>
            </div>
          ))}
        </div>
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
