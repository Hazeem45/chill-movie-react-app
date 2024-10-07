import { useContext } from 'react';
import Carousel from '../modules/Carousel/Carousel';
import Footer from '../modules/Footer/Footer';
import HeroSection from '../modules/HeroSection/HeroSection';
import NavBar from '../modules/NavBar/NavBar';
import { CollectionContext } from '../../context/CollectionContext';

function MainTemplate() {
	const { collection } = useContext(CollectionContext);

	const watchedCollection = collection.filter(item => item.isWatched);
	const premiumCollection = collection.filter(item => item.isPremium);
	const todayCollection = collection.filter(item => item.isTodayTrend);
	const trendingCollection = collection.filter(item => item.isTrending);
	const newReleaseCollection = collection.filter(item => item.isNewRelease);
	const otherCollection = collection.filter(item => !item.isPremium && !item.isTodayTrend && !item.isTrending && !item.isNewRelease);

	return (
		<>
			<NavBar />
			<HeroSection heroContent={premiumCollection} />
			<Carousel title={'Continue Watching'} films={watchedCollection} isContinueWatch={true} />
			<Carousel title={'Premium Collection'} films={premiumCollection} />
			<Carousel title={'Movies and Series of the Day'} films={todayCollection} />
			<Carousel title={'Trending Movies'} films={trendingCollection} />
			<Carousel title={'New Release'} films={newReleaseCollection} />
			<Carousel title={'Other Collection'} films={otherCollection} />
			<Footer />
		</>
	);
}

export default MainTemplate;
