import axios from 'axios';

export const getContentDetails = async (type, id, params) => {
	const response = await axios.get(`${import.meta.env.VITE_TMDB_API_ENDPOINT}/${type}/${id}`, {
		params: params,
	});

	return response.data;
};

export const getSeasonAndEpisode = async (type, id, numberOfSeason) => {
	const response = await axios.get(`${import.meta.env.VITE_TMDB_API_ENDPOINT}/${type}/${id}/season/${numberOfSeason}`, {
		params: {
			api_key: import.meta.env.VITE_TMDB_API_KEY,
			append_to_response: 'episodes',
		},
	});

	return response.data;
};