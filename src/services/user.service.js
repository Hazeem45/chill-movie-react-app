import axios from 'axios';

// export const updateUser = async (userId, updatedData) => {
// 	const response = await axios.get(import.meta.env.VITE_MOCK_API_ENDPOINT, {
// 		params: { username: updatedData.username },
// 		validateStatus: (status) => status === 200 || status === 404,
// 	});
  
// 	if (response.status === 200 && response.data[0].id !== userId) {
// 		throw new Error('Username is used!');
// 	}
  
// 	return axios.put(`${import.meta.env.VITE_MOCK_API_ENDPOINT}/${userId}`, updatedData);
// };


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

