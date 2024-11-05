import axios from 'axios';

const APIEndpoint = import.meta.env.VITE_MOCK_API_ENDPOINT;

export const getUsername = async (username) => {
	return await axios.get(APIEndpoint, {
		params: { username },
		validateStatus: (status) => status === 200 || status === 404,
	});
};

export const createUser = async (username, password) => {
	return axios.post(APIEndpoint, { username, password });
};

export const getUser = async (userId) => {
	return axios.get(`${APIEndpoint}/${userId}`);
};

export const updateUser = async (userId, username, password) => {
	return axios.put(`${APIEndpoint}/${userId}`, { username, password });
};

export const deleteUser = async (userId) => {
	return axios.delete(`${APIEndpoint}/${userId}`);
};

