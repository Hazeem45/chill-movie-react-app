import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getDirectorOrCreator, getDurationOrEpisode, setVideo, updatedCollection } from '../utils/updateCollection';
import DetailsTemplate from '../components/templates/DetailsTemplate/DetailsTemplate';

function MovieSeriesPage() {
	const { type, id } = useParams();
	const [data, setData] = useState([]);
	const [seasonsData, setSeasonsData] = useState([]);
	const [recommendationsList, setRecommendationsList] = useState([]);
	const apiKey = import.meta.env.VITE_TMDB_API_KEY;

	useEffect(() => {
		const fetchData = async () => {
			const baseImageUrl = 'https://image.tmdb.org/t/p/original';
			const apiEndpoint = 'https://api.themoviedb.org/3';

			try {
				// get movie/series details
				const detailsEndpoint = `${apiEndpoint}/${type}/${id}`;
				const response = await axios.get(detailsEndpoint, {
					params: {
						api_key: apiKey,
						append_to_response: 'credits,videos,recommendations',
					},
				});

				const responseData = response.data;
				const recommendationsResult = responseData.recommendations.results;
				const baseUrl = `https://www.themoviedb.org/${type}/${responseData.id}`;

				const result = {
					id: responseData.id,
					type: type,
					video: setVideo(type === 'movie' ? responseData.title : responseData.name, responseData),
					poster: `${baseImageUrl}${responseData.poster_path}`,
					backdrop: `${baseImageUrl}${responseData.backdrop_path}`,
					year: new Date(type === 'movie' ? responseData.release_date : responseData.first_air_date).getFullYear(),
					title: type === 'movie' ? responseData.title : responseData.name,
					rating: `${responseData.vote_average.toFixed(1)}/10`,
					genre: responseData.genres.map(genre => genre.name),
					cast: responseData.credits.cast
						.slice(0, 3)
						.map(actor => actor.name)
						.join(', '),
					fullCredit: baseUrl,
					overview: responseData.overview,
				};
				getDirectorOrCreator(responseData, type, result);
				getDurationOrEpisode(responseData, type, result);
				const updatedResult = updatedCollection(result);
				setData([updatedResult]);

				// get season and episode
				const numberOfSeasons = responseData.number_of_seasons;
				const fetchedSeasons = [];

				for (let i = 1; i <= numberOfSeasons; i++) {
					const seasonResponse = await axios.get(`${detailsEndpoint}/season/${i}`, {
						params: {
							api_key: apiKey,
							append_to_response: 'episodes',
						},
					});
					fetchedSeasons.push(seasonResponse.data);
				}
				setSeasonsData(fetchedSeasons);

				// get recommendation of other movie/series
				const recommendsList = [];

				for (let i = 0; i < 10; i++) {
					const response = await axios.get(`${apiEndpoint}/${recommendationsResult[i].media_type}/${recommendationsResult[i].id}`, {
						params: {
							api_key: apiKey,
						},
					});
					const recommendation = {
						id: response.data.id,
						poster: `${baseImageUrl}${response.data.poster_path}`,
						backdrop: `${baseImageUrl}${response.data.backdrop_path}`,
						title: type === 'movie' ? response.data.title : response.data.name,
						rating: `${response.data.vote_average.toFixed(1)}/10`,
						genre: response.data.genres.map(genre => genre.name),
						type: recommendationsResult[i].media_type,
					};
					getDurationOrEpisode(response.data, recommendationsResult[i].media_type, recommendation);
					const updatedRecommendation = updatedCollection(recommendation);
					recommendsList.push(updatedRecommendation);
				}
				setRecommendationsList(recommendsList);
			} catch (error) {
				console.error(`Error fetching ${type}:`, error);
				return null;
			}
		};

		fetchData();
	}, [apiKey, id, type]);

	return <DetailsTemplate contentData={data} recommendationList={recommendationsList} seasonsData={seasonsData} />;
}

export default MovieSeriesPage;
