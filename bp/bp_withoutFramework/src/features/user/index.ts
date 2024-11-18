import {createSlice} from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    info: {},
  },
  reducers: {
    loadUserInfo: state => {
      state.info = {};
    },
  },
});

export const {loadUserInfo} = userSlice.actions;

export default userSlice.reducer;
