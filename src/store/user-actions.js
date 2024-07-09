import axios from "axios";
import { userActions } from "./userSlice";

export const fetchUserList = () => {
  return async (dispatch) => {
    const fetchUsers = async () => {
      const response = await axios.get("http://localhost:3001/users");
      const userlistArray = response.data;
      return userlistArray;
    };
    const userList = await fetchUsers();

    dispatch(userActions.UserListFromBackend(userList));
  };
};

export const createNewUser = (newUser) => {
  return async (dispatch) => {
    // const createUser = async () => {
    debugger;
    const response = await axios.post("http://localhost:3001/users", newUser);
    // return response.data;
    // };
    // const createdUser = await createUser();
    // dispatch(userActions.updatedUserList(createdUser));
    // dispatch(userActions.fetchUserList());
    dispatch(fetchUserList());
  };
};

export const editUser = (updatedUser) => {
  return async (dispatch) => {
    await axios.put(
      `http://localhost:3001/users/${updatedUser.id}`,
      updatedUser
    );
    dispatch(userActions.updateUserInList(updatedUser));
  };
};

export const deleteUser = (userId) => {
  return async (dispatch) => {
    await axios.delete(`http://localhost:3001/users/${userId}`);
    dispatch(userActions.deleteUserFromList(userId));
  };
};
