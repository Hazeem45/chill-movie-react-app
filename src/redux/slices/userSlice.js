import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
	name: 'user',
	initialState: {
		data: JSON.parse(localStorage.getItem('userData')) || [],
	} ,
	reducers: {
		addUserData(state, action) {
			state.data.push(action.payload);
		},
		updateUserData(state, action) {
			const index = state.data.findIndex(user => user.id === action.payload.id);
			if (index !== -1) {
			  state.data[index] = { ...state.data[index], ...action.payload };
			}
		 },
	},
});

export const { addUserData, updateUserData } = userSlice.actions;