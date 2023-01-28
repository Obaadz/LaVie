import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { User } from "../../types/users/User";

export interface UserState extends Partial<User> {}

const initialState: UserState = {};

export const userSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    updateUser: (state, action: PayloadAction<Partial<User>>) => {
      const user = action.payload;

      state = { ...state, ...user };
    },
  },
});

export const { updateUser } = userSlice.actions;

export default userSlice.reducer;
