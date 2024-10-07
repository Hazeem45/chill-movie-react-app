import { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { collectionTitles, updatedCollection } from '../utils/collection';

export const CollectionContext = createContext();

function CollectionProvider({ children }) {
	const [collection, setCollection] = useState([]);
	const apiKey = import.meta.env.VITE_TMDB_API_KEY;
	const baseImageUrl = 'https://image.tmdb.org/t/p/original';

	// set the video manually bcs in tmdb it isn't available or i just want to customize the video
	const setVideo = (title, data) => {
		if (title === 'The K2') {
			return 'zL2aiveekEM';
		} else if (title === 'Cars') {
			return 'v3xSv-E1QsU';
		} else if (title === 'Top Gun: Maverick') {
			return 'qSqVVswa420';
		} else if (title === 'Naruto Shippūden') {
			return '97dkzVU4p-M';
		} else if (title === 'Your Name.') {
			return 'a2GujJZfXpg';
		} else if (title === 'Spider-Man: Across the Spider-Verse') {
			return '_A6FaFPfynE';
		} else if (title === 'Avengers: Endgame') {
			return 'TcMBFSGVi1c';
		} else if (title === 'The Dark Knight') {
			return 'kmJLuwP3MbY';
		} else if (title === 'Deadpool') {
			return 'ONHBaC-pfsk';
		} else if (title === 'Doctor Strange in the Multiverse of Madness') {
			return 'aWzlQ2N6qqg';
		} else if (title === 'That Time I Got Reincarnated as a Slime') {
			return 'IikTjpZoM6Y';
		} else if (title === 'Cars 2') {
			return 'lg5hj2c5Nkk';
		} else if (title === 'Alya Sometimes Hides Her Feelings in Russian') {
			return 'ZBOXufdpin0';
		} else if (title === 'Spider-Man: Into the Spider-Verse') {
			return 'g4Hbz2jLxvQ';
		} else if (title === 'Interstellar') {
			return 'zSWdZVtXT7E';
		} else if (title === 'The Batman') {
			return 'mqqft2x_Aa4';
		} else if (title === 'Joker') {
			return 'zAGVQLHvwOY';
		} else if (title === 'Inside Out 2') {
			return 'LEjhY15eCx0';
		} else if (title === 'Parasite') {
			return '5xH0HfJHsaY';
		} else if (title === 'Despicable Me 4') {
			return 'qQlr9-rF32A';
		} else if (title === 'Kingdom of the Planet of the Apes') {
			return 'XtFI7SNtVpY';
		} else if (title === 'Kung Fu Panda 4') {
			return '_inKs4eeHiI';
		} else if (title === 'Black Clover') {
			return 'MH4pWlX4LqI';
		} else if (title === 'Train to Busan') {
			return 'pyWuHv2-Abk';
		} else {
			return data.videos.results[0]?.key || 'N/A';
		}
	};

	const getDirectorOrCreator = (data, type, result) => {
		if (type === 'movie') {
			const directors = data.credits.crew.filter(person => person.job === 'Director').map(director => director.name);
			if (directors.length > 0) {
				return (result.director = directors.join(', '));
			} else {
				return (result.director = 'N/A');
			}
		} else if (type === 'tv') {
			const creators = data.created_by.map(creator => creator.name);
			if (creators.length > 0) {
				return (result.creator = creators.join(', '));
			} else {
				const originalCreator = data.credits.crew.filter(person => person.job === 'Original Series Creator').map(creator => creator.name);
				if (originalCreator.length > 0) {
					return (result.creator = originalCreator.join(', '));
				} else {
					const comicCreator = data.credits.crew.filter(person => person.job === 'Comic Book').map(creator => creator.name);
					if (comicCreator) {
						return (result.creator = comicCreator.join(', '));
					} else {
						return (result.creator = 'N/A');
					}
				}
			}
		}
	};

	const getDurationOrEpisode = (data, type, result) => {
		if (type === 'movie') {
			const minutes = data.runtime;
			const hours = Math.floor(minutes / 60);
			const mins = minutes % 60;
			const duration = `${hours}Hour ${mins}Min`;
			result.duration = duration;
		} else if (type === 'tv') {
			result.seasons = data.number_of_seasons;
			result.episodes = data.number_of_episodes;
		}
		return result;
	};

	useEffect(() => {
		const fetchCollection = async () => {
			const promises = collectionTitles.map(async title => {
				let query, type;

				try {
					if (title.movie) {
						query = title.movie;
						type = 'movie';
					} else if (title.series) {
						query = title.series;
						type = 'tv';
					}

					const { data } = await axios.get(`https://api.themoviedb.org/3/search/${type}`, {
						params: {
							api_key: apiKey,
							query: query,
						},
					});

					if (data.results.length > 0) {
						const itemData = data.results[0];

						const detailsEndpoint = `https://api.themoviedb.org/3/${type}/${itemData.id}`;

						const itemDetails = await axios.get(detailsEndpoint, {
							params: {
								api_key: apiKey,
								append_to_response: 'credits,videos',
							},
						});

						const baseUrl = `https://www.themoviedb.org/${type}/${itemData.id}`;

						const itemResult = {
							id: itemData.id,
							video: setVideo(type === 'movie' ? itemData.title : itemData.name, itemDetails.data),
							poster: `${baseImageUrl}${itemData.poster_path}`,
							backdrop: `${baseImageUrl}${itemData.backdrop_path}`,
							title: type === 'movie' ? itemData.title : itemData.name,
							rating: `${itemData.vote_average.toFixed(1)}/10`,
							genre: itemDetails.data.genres.map(genre => genre.name),
							cast: itemDetails.data.credits.cast
								.slice(0, 3)
								.map(actor => actor.name)
								.join(', '),
							fullCredit: baseUrl,
							overview: itemData.overview,
							type: type,
						};
						getDirectorOrCreator(itemDetails.data, type, itemResult);
						getDurationOrEpisode(itemDetails.data, type, itemResult);
						const updatedItemResult = updatedCollection(itemResult);
						return updatedItemResult;
					}
				} catch (error) {
					console.error(`Error fetching ${type} ${query}:`, error);
					return null;
				}
			});

			const collectionResults = await Promise.all(promises);
			setCollection(collectionResults.filter(movie => movie !== null));
		};

		fetchCollection();
	}, []);

	return <CollectionContext.Provider value={{ collection }}>{children}</CollectionContext.Provider>;
}

CollectionProvider.propTypes = {
	children: PropTypes.element.isRequired,
};

export default CollectionProvider;
