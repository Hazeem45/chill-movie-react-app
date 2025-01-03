import { configureStore } from '@reduxjs/toolkit';
import { userSlice } from './slices/userSlice';
import { adminSlice } from './slices/adminSlice';

export const store = configureStore({
	reducer: {  
		user: userSlice.reducer,
		admin: adminSlice.reducer,
	},
});

store.subscribe(() => {
	console.log('STORE CHANGED : ', store.getState());
});

store.dispatch(userSlice.actions.setIsLogin(localStorage.getItem('isLoggedIn') === 'true'));
store.dispatch(userSlice.actions.setUserData(JSON.parse(localStorage.getItem('userData')) || {}));
