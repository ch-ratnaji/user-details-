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
    const createUser = async () => {
      const response = await axios.post("http://localhost:3001/users", newUser);
      return response.data;
    };
    const newUser = await createUser();
    dispatch(userActions.updatedUserList(newUser));
  };
};
