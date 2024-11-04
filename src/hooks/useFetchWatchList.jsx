import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { getDurationOrEpisode, updatedCollection } from '../utils/updateCollection';
import { setWatchList } from '../redux/slices/userSlice';

const useFetchWatchList = () => {
	const dispatch = useDispatch();
	const storedItems = JSON.parse(localStorage.getItem('checkedItems'));
	const watchList = useSelector(state => state.user.watchList);
	const baseImageUrl = import.meta.env.VITE_BASE_IMG_URL;
	const apiKey = import.meta.env.VITE_TMDB_API_KEY;

	useEffect(() => {
		const fetchDataWatchList = async () => {
			try {
				const resultList = await Promise.all(
					storedItems.map(async item => {
						const response = await axios.get(`${import.meta.env.VITE_TMDB_API_ENDPOINT}/${item.type}/${item.id}`, {
							params: { api_key: apiKey },
						});

						const result = {
							id: response.data.id,
							poster: response.data.poster_path ? `${baseImageUrl}/original${response.data.poster_path}` : null,
							backdrop: response.data.backdrop_path ? `${baseImageUrl}/original${response.data.backdrop_path}` : null,
							title: item.type === 'movie' ? response.data.title : response.data.name,
							rating: `${response.data.vote_average.toFixed(1)}/10`,
							genre: response.data.genres.map(genre => genre.name),
							type: item.type,
						};

						getDurationOrEpisode(response.data, item.type, result);
						return updatedCollection(result);
					}),
				);

				if (watchList.length !== storedItems.length) {
					dispatch(setWatchList(resultList));
				}
			} catch (error) {
				console.error('Error fetching watchlist:', error);
			}
		};

		fetchDataWatchList();
	}, [apiKey, baseImageUrl, dispatch, storedItems, watchList]);
};

export default useFetchWatchList;
