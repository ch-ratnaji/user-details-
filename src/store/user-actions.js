import axios from "axios";
import { userActions } from "./userSlice";

export const fetchUserList = () => {
  return async (dispatch) => {
    const fetchUsers = async () => {
      const response = await axios.get("https://localhost:3000/users");
      const userlistArray = response.data;
      return userlistArray;
    };
    const userList = await fetchUsers();

    dispatch(userActions.UserListBackend(userList));
  };
};

export const createNewUser = (newUser) => {
  return async (dispatch) => {
    const createUser = async () => {
      const response = await axios.post(
        "https://localhost:3000/users",
        newUser
      );
      return response.data;
    };
    const newUser = await createUser();
  };
};
