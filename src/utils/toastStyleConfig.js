import { Bounce } from 'react-toastify';

export const getDefaultToastConfig = () => ({
	position: 'top-right',
	autoClose: 3000,
	hideProgressBar: false,
	closeOnClick: true,
	pauseOnHover: true,
	draggable: true,
	progress: undefined,
	theme: 'dark',
	transition: Bounce,
});

export const getCustomToastConfig = (overrides = {}) => {
	const defaultConfig = getDefaultToastConfig();
	return { ...defaultConfig, ...overrides };
};