import { createSlice } from '@reduxjs/toolkit';

export const adminSlice = createSlice({
	name: 'admin',
	initialState: {
		allAdmins: [],
		allUsers: [],
	} ,
	reducers: {
		setAllAdmin(state, action) {
			state.allAdmins = action.payload;
		},
		setAllUsers(state, action) {
			state.allUsers = action.payload;
		},
		removeAdmin(state, action) {
			state.allAdmins = state.allAdmins.filter(item => item.id !== action.payload);
		},
		removeUser(state, action) {
			state.allUsers = state.allUsers.filter(item => item.id !== action.payload);
		},
	},
});

export const { setAllAdmin ,setAllUsers, removeAdmin, removeUser } = adminSlice.actions;