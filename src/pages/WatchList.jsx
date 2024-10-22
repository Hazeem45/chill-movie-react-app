import { useEffect, useState } from 'react';
import MainTemplate from '../components/templates/MainTemplate';
import axios from 'axios';
import { getDurationOrEpisode, updatedCollection } from '../utils/updateCollection';
import WatchContents from '../components/modules/WatchContents/WatchContents';

function WatchList() {
	const [watchList, setWatchList] = useState([]);
	const storedItems = JSON.parse(localStorage.getItem('checkedItems'));
	const baseImageUrl = 'https://image.tmdb.org/t/p/original';
	const apiKey = import.meta.env.VITE_TMDB_API_KEY;

	useEffect(() => {
		const fetchDataWatchList = async () => {
			try {
				const resultList = await Promise.all(
					storedItems.map(async item => {
						const response = await axios.get(`https://api.themoviedb.org/3/${item.type}/${item.id}`, {
							params: {
								api_key: apiKey,
							},
						});

						const result = {
							id: response.data.id,
							poster: `${baseImageUrl}${response.data.poster_path}`,
							backdrop: `${baseImageUrl}${response.data.backdrop_path}`,
							title: item.type === 'movie' ? response.data.title : response.data.name,
							rating: `${response.data.vote_average.toFixed(1)}/10`,
							genre: response.data.genres.map(genre => genre.name),
							type: item.type,
						};

						getDurationOrEpisode(response.data, item.type, result);
						return updatedCollection(result);
					}),
				);
				setWatchList(resultList);
			} catch (error) {
				console.error('Error fetching watchlist:', error);
			}
		};
		fetchDataWatchList();
	}, [apiKey, storedItems]);

	return (
		<MainTemplate>
			<WatchContents title='My List' cardContents={watchList} />
		</MainTemplate>
	);
}

export default WatchList;
