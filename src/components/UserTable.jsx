import { useDispatch, useSelector } from "react-redux";
import { fetchUserList } from "../store/user-actions";
import { useEffect } from "react";
import { userActions } from "../store/userSlice";
const UserTable = () => {
  const dispatch = useDispatch();
  const userList = useSelector((state) => state.user.userList);
  const selectedUser = useSelector((state) => state.user.selectedUser);

  useEffect(() => {
    dispatch(fetchUserList());
  }, [dispatch]);

  return (
    <div>
      <div>
        {userList.map((user) => (
          <div
            key={user.id}
            onClick={() => dispatch(userActions.setSelectedUser(user.id))}
          >
            {user.name}
          </div>
        ))}
      </div>
      <div>
        {selectedUser && (
          <div>
            <h2>Selected User</h2>
            <p>name: {selectedUser.name}</p>
            <p>userName: {selectedUser.username}</p>
            <p>email: {selectedUser.email}</p>
            <p>PIN: {selectedUser.address.zipcode}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserTable;
