import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
	name: 'user',
	initialState: {
		data: {},
		watchList: [],
		isLogin: false,
	} ,
	reducers: {
		setIsLogin(state, action) {
			state.isLogin = action.payload;
		},
		setUserData(state, action) {
			state.data = action.payload;
		},
		updateUserData(state, action) {
			state.data = {
				...state.data,
				...action.payload,
			};
			localStorage.setItem('userData', JSON.stringify(state.data));
		},
		setWatchList(state, action) {
			state.watchList = action.payload;
		},
		removeItemWatchList(state, action) {
			state.watchList = state.watchList.filter(item => item.id !== action.payload);
		},
	},
});

export const { setUserData, updateUserData, setIsLogin, setWatchList, removeItemWatchList } = userSlice.actions;