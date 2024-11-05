import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { setVideo, updatedCollection } from '../utils/updateCollection';
import DetailsTemplate from '../components/templates/DetailsTemplate/DetailsTemplate';
import ErrorPage from './ErrorPage';
import { getDirectorOrCreator, getDurationOrEpisode } from '../utils/getSpecificDetails';
import { getContentDetails, getSeasonAndEpisode } from '../services/tmdb.service';

function DetailsPage() {
	const { type, id } = useParams();
	const [data, setData] = useState([]);
	const [seasonsData, setSeasonsData] = useState([]);
	const [recommendationsList, setRecommendationsList] = useState([]);
	const [hasError, setHasError] = useState(false);
	const [errorMessage, setErrorMessage] = useState('');
	const apiKey = import.meta.env.VITE_TMDB_API_KEY;

	useEffect(() => {
		setRecommendationsList([]);
		const params = {
			api_key: apiKey,
			append_to_response: 'credits,videos,recommendations',
		};
		const fetchData = async () => {
			const baseImageUrl = import.meta.env.VITE_BASE_IMG_URL;

			try {
				const response = await getContentDetails(type, id, params);

				const recommendationsResult = response.recommendations.results;
				const detailsInTMDB = `${import.meta.env.VITE_BASE_TMDB_URL}/${type}/${response.id}`;

				const result = {
					id: response.id,
					type: type,
					video: setVideo(type === 'movie' ? response.title : response.name, response),
					poster: `${baseImageUrl}${response.poster_path}`,
					backdrop: `${baseImageUrl}${response.backdrop_path}`,
					year: new Date(type === 'movie' ? response.release_date : response.first_air_date).getFullYear(),
					title: type === 'movie' ? response.title : response.name,
					rating: `${response.vote_average.toFixed(1)}/10`,
					genre: response.genres.map(genre => genre.name),
					cast: response.credits.cast
						.slice(0, 3)
						.map(actor => actor.name)
						.join(', '),
					fullCredit: detailsInTMDB,
					overview: response.overview,
				};
				getDirectorOrCreator(response, type, result);
				getDurationOrEpisode(response, type, result);
				const updatedResult = updatedCollection(result);
				setData([updatedResult]);

				const totalSeason = response.number_of_seasons;
				const fetchedSeasons = [];

				for (let i = 1; i <= totalSeason; i++) {
					const seasonResponse = await getSeasonAndEpisode(type, id, i);
					fetchedSeasons.push(seasonResponse);
				}
				setSeasonsData(fetchedSeasons);

				const recommendsList = [];
				delete params['append_to_response'];

				for (let i = 0; i < 10; i++) {
					const response = await getContentDetails(recommendationsResult[i].media_type, recommendationsResult[i].id, params);
					const recommendation = {
						id: response.id,
						poster: `${baseImageUrl}/original${response.poster_path}`,
						backdrop: `${baseImageUrl}/original${response.backdrop_path}`,
						title: type === 'movie' ? response.title : response.name,
						rating: `${response.vote_average.toFixed(1)}/10`,
						genre: response.genres.map(genre => genre.name),
						type: recommendationsResult[i].media_type,
					};
					getDurationOrEpisode(response, recommendationsResult[i].media_type, recommendation);
					const updatedRecommendation = updatedCollection(recommendation);
					recommendsList.push(updatedRecommendation);
				}
				setRecommendationsList(recommendsList);
			} catch (error) {
				console.error(`Error fetching ${type}:`, error);
				setErrorMessage(error.message);
				setHasError(true);
				return null;
			}
		};

		fetchData();
	}, [apiKey, id, type]);

	useEffect(() => {
		if (data.length > 0) {
			document.title = `Chill | ${data[0].title}`;
		}
	}, [data]);

	if (hasError) {
		return <ErrorPage message={errorMessage} />;
	}

	return <DetailsTemplate contentData={data} recommendationList={recommendationsList} seasonsData={seasonsData} />;
}

export default DetailsPage;
