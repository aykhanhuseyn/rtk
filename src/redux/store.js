import { configureStore } from '@reduxjs/toolkit';
import counter from './counterSlice';
import user from './userSlice';

export const store = configureStore({
	reducer: {
		counter,
		user,
	},
	devTools: true,
});
