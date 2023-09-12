import { configureStore } from '@reduxjs/toolkit';
import orderReducer from '../features/orderSlice';
import userReducer from '../features/userSlice';

export const store = configureStore({
  reducer: {
    order: orderReducer,
    user: userReducer,
  },
});
