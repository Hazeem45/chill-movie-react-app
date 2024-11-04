import WatchContents from '../components/modules/WatchContents/WatchContents';
import { useSelector } from 'react-redux';
import useFetchWatchList from '../hooks/useFetchWatchList';

function WatchList() {
	useFetchWatchList();
	const watchList = useSelector(state => state.user.watchList);

	return <WatchContents title='My List' cardContents={watchList} />;
}

export default WatchList;
