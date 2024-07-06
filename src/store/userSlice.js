import { createSlice } from "@reduxjs/toolkit";

const userslice = createSlice({
  name: "user",
  initialState: {
    userList: [],
    selectedUser: null,
    newUserState: false,
  },
  reducers: {
    UserListFromBackend(state, action) {
      state.userList = action.payload;
    },
    setSelectedUser(state, action) {
      const id = action.payload;
      const selectedUser = state.userList.find((user) => user.id === id);
      state.selectedUser = selectedUser;
    },
    updatedUserList(state, action) {
      state.userList.push(action.payload);
    },
    setNewUserState(state, action) {
      state.newUserState = action.payload;
    },
  },
});

export const userActions = userslice.actions;
export default userslice;
