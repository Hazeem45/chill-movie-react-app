import axios from 'axios';

export const fetchMovieDetails = async (type, id, apiKey, setVideo, getDirectorOrCreator, getDurationOrEpisode, updatedCollection) => {
	const apiEndpoint = import.meta.env.VITE_TMDB_API_ENDPOINT;
	const baseImageUrl = import.meta.env.VITE_BASE_IMG_URL;
  
	const detailsEndpoint = `${apiEndpoint}/${type}/${id}`;
	const response = await axios.get(detailsEndpoint, {
		params: {
			api_key: apiKey,
			append_to_response: 'credits,videos,recommendations',
		},
	});

	const responseData = response.data;
	const recommendationsResult = responseData.recommendations.results;

	const result = {
		id: responseData.id,
		type: type,
		video: setVideo(type === 'movie' ? responseData.title : responseData.name, responseData),
		poster: `${baseImageUrl}${responseData.poster_path}`,
		backdrop: `${baseImageUrl}${responseData.backdrop_path}`,
		year: new Date(type === 'movie' ? responseData.release_date : responseData.first_air_date).getFullYear(),
		title: type === 'movie' ? responseData.title : responseData.name,
		rating: `${responseData.vote_average.toFixed(1)}/10`,
		genre: responseData.genres.map((genre) => genre.name),
		cast: responseData.credits.cast.slice(0, 3).map((actor) => actor.name).join(', '),
		fullCredit: `${import.meta.env.VITE_BASE_TMDB_URL}/${type}/${responseData.id}`,
		overview: responseData.overview,
	};

	getDirectorOrCreator(responseData, type, result);
	getDurationOrEpisode(responseData, type, result);
  
	return updatedCollection(result);
};

export const fetchRecommendations = async (recommendationsResult, apiKey, baseImageUrl, updatedCollection) => {
	const apiEndpoint = import.meta.env.VITE_TMDB_API_ENDPOINT;

	const recommendsList = await Promise.all(
		recommendationsResult.slice(0, 10).map(async (recommendation) => {
			const response = await axios.get(`${apiEndpoint}/${recommendation.media_type}/${recommendation.id}`, {
				params: { api_key: apiKey },
			});
			const data = response.data;
      
			const recommendationData = {
				id: data.id,
				poster: `${baseImageUrl}/original${data.poster_path}`,
				backdrop: `${baseImageUrl}/original${data.backdrop_path}`,
				title: recommendation.media_type === 'movie' ? data.title : data.name,
				rating: `${data.vote_average.toFixed(1)}/10`,
				genre: data.genres.map((genre) => genre.name),
				type: recommendation.media_type,
			};

			return updatedCollection(recommendationData);
		}),
	);

	return recommendsList;
};
