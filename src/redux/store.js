import { configureStore } from '@reduxjs/toolkit';
import { userSlice } from './slices/userSlice';

export const store = configureStore({
	reducer: {  
		user: userSlice.reducer,
	},
});

store.subscribe(() => {
	console.log('STORE CHANGED : ', store.getState());
});