import axios from 'axios';

export const fetchWatchList = async (storedItems, getDurationOrEpisode, updatedCollection) => {
	const resultList = await Promise.all(
		storedItems.map(async (item) => {
			const response = await axios.get(`${import.meta.env.VITE_TMDB_API_ENDPOINT}/${item.type}/${item.id}`, {
				params: { api_key: import.meta.env.VITE_TMDB_API_KEY },
			});

			const result = {
				id: response.data.id,
				poster: response.data.poster_path ? `${import.meta.env.VITE_BASE_IMG_URL}/original${response.data.poster_path}` : null,
				backdrop: response.data.backdrop_path ? `${import.meta.env.VITE_BASE_IMG_URL}/original${response.data.backdrop_path}` : null,
				title: item.type === 'movie' ? response.data.title : response.data.name,
				rating: `${response.data.vote_average.toFixed(1)}/10`,
				genre: response.data.genres.map((genre) => genre.name),
				type: item.type,
			};

			getDurationOrEpisode(response.data, item.type, result);
			return updatedCollection(result);
		}),
	);

	return resultList;
};
