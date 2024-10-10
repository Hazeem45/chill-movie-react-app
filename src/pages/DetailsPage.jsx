import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getDirectorOrCreator, getDurationOrEpisode, setVideo, updatedCollection } from '../utils/updateCollection';
import DetailsTemplate from '../components/templates/DetailsTemplate/DetailsTemplate';

function MovieSeriesPage() {
	const { type, id } = useParams();
	const [data, setData] = useState([]);
	const [seasonsData, setSeasonsData] = useState([]);
	const apiKey = import.meta.env.VITE_TMDB_API_KEY;

	useEffect(() => {
		const fetchData = async () => {
			try {
				const detailsEndpoint = `https://api.themoviedb.org/3/${type}/${id}`;

				const response = await axios.get(detailsEndpoint, {
					params: {
						api_key: apiKey,
						append_to_response: 'credits,videos',
					},
				});

				const numberOfSeasons = response.data.number_of_seasons;
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

				const baseImageUrl = 'https://image.tmdb.org/t/p/original';
				const baseUrl = `https://www.themoviedb.org/${type}/${response.data.id}`;

				const result = {
					id: response.data.id,
					type: type,
					video: setVideo(type === 'movie' ? response.data.title : response.data.name, response.data),
					poster: `${baseImageUrl}${response.data.poster_path}`,
					backdrop: `${baseImageUrl}${response.data.backdrop_path}`,
					year: new Date(type === 'movie' ? response.data.release_date : response.data.first_air_date).getFullYear(),
					title: type === 'movie' ? response.data.title : response.data.name,
					rating: `${response.data.vote_average.toFixed(1)}/10`,
					genre: response.data.genres.map(genre => genre.name),
					cast: response.data.credits.cast
						.slice(0, 3)
						.map(actor => actor.name)
						.join(', '),
					fullCredit: baseUrl,
					overview: response.data.overview,
				};
				getDirectorOrCreator(response.data, type, result);
				getDurationOrEpisode(response.data, type, result);
				const updatedResult = updatedCollection(result);
				setData([updatedResult]);
			} catch (error) {
				console.error(`Error fetching ${type}:`, error);
				return null;
			}
		};

		fetchData();
	}, [apiKey, id, type]);

	return <DetailsTemplate contentData={data} seasonsData={seasonsData} />;
}

export default MovieSeriesPage;
