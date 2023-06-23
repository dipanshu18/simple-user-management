import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    value: [],
  },
  reducers: {
    addUser: (state, action) => {
      console.log(action);
      const user = {
        id: action.payload.id,
        name: action.payload.name,
        email: action.payload.email,
        phone: action.payload.phone,
      };
      state.value.push(user);
    },
    editUser: (action) => {
      console.log(action);
    },
    deleteUser: (action) => {
      console.log(action);
    },
  },
});

export const { addUser } = userSlice.actions;

export default userSlice.reducer;
