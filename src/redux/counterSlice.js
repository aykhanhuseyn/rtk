import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
	name: 'counter',
	initialState: {
		count: 0,
		changeTimes: 0,
	},
	reducers: {
		increment: (state) => {
			return {
				...state,
				count: state.count + 1,
				changeTimes: state.changeTimes + 1,
			};
		},
		decrement: (state) => {
			return {
				...state,
				count: state.count - 1,
				changeTimes: state.changeTimes + 1,
			};
		},
		reset: (state) => {
			return {
				...state,
				count: 0,
				changeTimes: state.changeTimes + 1,
			};
		},
		setCount: (state, { payload }) => {
			return {
				...state,
				count: payload,
				changeTimes: state.changeTimes + 1,
			};
		},
	},
});

// SELECTORS
export const countSelector = (state) => state.counter.count;
export const changeTimesSelector = (state) => state.counter.changeTimes;

// ACTIONS
export const { increment, decrement, setCount, reset } = counterSlice.actions;

// REDUCER
export default counterSlice.reducer;
