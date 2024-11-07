import { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { collectionTitles, setVideo, updatedCollection } from '../utils/updateCollection';
import { getDurationOrEpisode } from '../utils/getSpecificDetails';

export const CollectionContext = createContext();

function CollectionProvider({ children }) {
	const [collection, setCollection] = useState([]);
	const apiKey = import.meta.env.VITE_TMDB_API_KEY;
	const baseImageUrl = import.meta.env.VITE_BASE_IMG_URL;
	const apiEndpoint = import.meta.env.VITE_TMDB_API_ENDPOINT;

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

					const { data } = await axios.get(`${apiEndpoint}/search/${type}`, {
						params: {
							api_key: apiKey,
							query: query,
						},
					});

					if (data.results.length > 0) {
						const itemData = data.results[0];

						const detailsEndpoint = `${apiEndpoint}/${type}/${itemData.id}`;

						const itemDetails = await axios.get(detailsEndpoint, {
							params: {
								api_key: apiKey,
								append_to_response: 'credits,videos',
							},
						});

						const itemResult = {
							id: itemData.id,
							video: setVideo(type === 'movie' ? itemData.title : itemData.name, itemDetails.data),
							poster: `${baseImageUrl}/original${itemData.poster_path}`,
							backdrop: `${baseImageUrl}/original${itemData.backdrop_path}`,
							title: type === 'movie' ? itemData.title : itemData.name,
							overview: itemData.overview,
							rating: `${itemData.vote_average.toFixed(1)}/10`,
							genre: itemDetails.data.genres.map(genre => genre.name),
							type: type,
						};
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
	}, [apiEndpoint, apiKey, baseImageUrl]);

	return <CollectionContext.Provider value={{ collection }}>{children}</CollectionContext.Provider>;
}

CollectionProvider.propTypes = {
	children: PropTypes.element.isRequired,
};

export default CollectionProvider;
