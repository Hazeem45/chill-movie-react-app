import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updatedCollection } from '../utils/updateCollection';
import { setWatchList } from '../redux/slices/userSlice';
// import { fetchWatchList } from '../services/watchlist.service';
import { getContentDetails } from '../services/tmdb.service';
import { getDurationOrEpisode } from '../utils/getSpecificDetails';

const useFetchWatchList = () => {
	const dispatch = useDispatch();
	const watchList = useSelector(state => state.user.watchList);
	const localStorageData = JSON.parse(localStorage.getItem('checkedItems'));

	useEffect(() => {
		let storedItems;
		if (localStorageData) {
			storedItems = localStorageData;
		} else {
			storedItems = [];
		}

		const fetchDataWatchList = async () => {
			const params = { api_key: import.meta.env.VITE_TMDB_API_KEY };
			try {
				const resultList = await Promise.all(
					storedItems.map(async item => {
						const response = await getContentDetails(item.type, item.id, params);

						const result = {
							id: response.id,
							poster: response.poster_path ? `${import.meta.env.VITE_BASE_IMG_URL}/original${response.poster_path}` : null,
							backdrop: response.backdrop_path ? `${import.meta.env.VITE_BASE_IMG_URL}/original${response.backdrop_path}` : null,
							title: item.type === 'movie' ? response.title : response.name,
							rating: `${response.vote_average.toFixed(1)}/10`,
							genre: response.genres.map(genre => genre.name),
							type: item.type,
						};

						getDurationOrEpisode(response, item.type, result);
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
	}, [dispatch, localStorageData, watchList]);
};

export default useFetchWatchList;
