import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { User } from "../../types/users/User";

export interface UserState {
  isLoading: boolean;
  user: Partial<User>;
}

const initialState: UserState = {
  isLoading: true,
  user: {},
};

export const userSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    updateUser: (state, action: PayloadAction<Partial<User>>) => {
      const user = action.payload;

      state = {
        isLoading: false,
        user: {
          ...state.user,
          ...user,
        },
      };

      return state;
    },
  },
});

export const { updateUser } = userSlice.actions;

export default userSlice.reducer;
