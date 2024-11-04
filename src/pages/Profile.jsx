import WatchContents from '../components/modules/WatchContents/WatchContents';
import ProfileSection from '../components/modules/ProfileSection/ProfileSection';
import { useSelector } from 'react-redux';
import useFetchWatchList from '../hooks/useFetchWatchList';

function Profile() {
	useFetchWatchList();
	const userData = useSelector(state => state.user.data);
	const watchList = useSelector(state => state.user.watchList);

	return (
		<>
			<ProfileSection userData={userData} />
			<WatchContents title='My List' cardContents={watchList} />
		</>
	);
}

export default Profile;
