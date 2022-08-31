import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '../api';

export const getUsers = createAsyncThunk('user/getUsers', () => {
	return api.get('users');
});

export const userSlice = createSlice({
	name: 'user',
	initialState: {
		getUsers: {
			// status: null,
			data: null,
			isSuccess: false,
			isLoading: false,
			isError: false,
			error: null,
		},
		createUser: {
			data: null,
			isSuccess: false,
			isLoading: false,
			isError: false,
			error: null,
		},
	},
	// reducers: {},
	extraReducers: {
		[getUsers.pending]: (state) => {
			return {
				...state,
				getUsers: {
					...state.getUsers,
					isSuccess: false,
					data: null,
					isError: false,
					error: null,
					isLoading: true,
				},
			};
		},
		[getUsers.fulfilled]: (state, { payload }) => {
			return {
				...state,
				getUsers: {
					...state.getUsers,
					isLoading: false,
					isSuccess: true,
					data: payload.data,
				},
			};
		},
		[getUsers.rejected]: (state, { error }) => {
			return {
				...state,
				getUsers: {
					...state.getUsers,
					isLoading: false,
					isError: true,
					error,
				},
			};
		},
	},
});

// SELECTORS
export const usersSelector = (state) => state.user.getUsers;

// ACTIONS
// export const { } = userSlice.actions;

// REDUCER
export default userSlice.reducer;
