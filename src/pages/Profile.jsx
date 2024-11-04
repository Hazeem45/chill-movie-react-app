import { useEffect, useState } from 'react';
import WatchContents from '../components/modules/WatchContents/WatchContents';
import axios from 'axios';
import { getDurationOrEpisode, updatedCollection } from '../utils/updateCollection';
import ProfileSection from '../components/modules/ProfileSection/ProfileSection';
import { useSelector } from 'react-redux';

function Profile() {
	const [watchList, setWatchList] = useState([]);
	const storedItems = JSON.parse(localStorage.getItem('checkedItems'));
	const baseImageUrl = import.meta.env.VITE_BASE_IMG_URL;
	const apiKey = import.meta.env.VITE_TMDB_API_KEY;
	const userData = useSelector(state => state.user.data);

	useEffect(() => {
		const fetchDataWatchList = async () => {
			try {
				const resultList = await Promise.all(
					storedItems.map(async item => {
						const response = await axios.get(`${import.meta.env.VITE_TMDB_API_ENDPOINT}/${item.type}/${item.id}`, {
							params: {
								api_key: apiKey,
							},
						});

						const result = {
							id: response.data.id,
							poster: `${baseImageUrl}/original${response.data.poster_path}`,
							backdrop: `${baseImageUrl}/original${response.data.backdrop_path}`,
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
	}, [apiKey, baseImageUrl, storedItems]);

	return (
		<>
			<ProfileSection userData={userData} />
			<WatchContents title='My List' cardContents={watchList} />
		</>
	);
}

export default Profile;
