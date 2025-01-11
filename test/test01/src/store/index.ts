import {configureStore} from '@reduxjs/toolkit';
import userReducer from 'reducers/user';
import characterReducer from 'reducers/character';

export default configureStore({
  reducer: {
    user: userReducer,
    character: characterReducer,
  },
});
