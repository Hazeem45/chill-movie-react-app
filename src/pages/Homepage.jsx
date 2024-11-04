import { useEffect, useContext } from 'react';
import { CollectionContext } from '../context/CollectionContext';
import Carousel from '../components/modules/Carousel/Carousel';
import HeroSection from '../components/modules/HeroSection/HeroSection';

function Homepage() {
	const { collection } = useContext(CollectionContext);

	const watchedCollection = collection.filter(item => item.isWatched);
	const premiumCollection = collection.filter(item => item.isPremium);
	const todayCollection = collection.filter(item => item.isTodayTrend);
	const trendingCollection = collection.filter(item => item.isTrending);
	const newReleaseCollection = collection.filter(item => item.isNewRelease);
	const otherCollection = collection.filter(item => !item.isPremium && !item.isTodayTrend && !item.isTrending && !item.isNewRelease);

	useEffect(() => {
		document.title = 'Chill | Home';
	}, []);

	if (collection.length < 10) return null;

	const carouselData = [
		{ title: 'Continue Watching', films: watchedCollection, isContinueWatch: true },
		{ title: 'Premium Collection', films: premiumCollection },
		{ title: 'Movies and Series of the Day', films: todayCollection },
		{ title: 'Trending Movies', films: trendingCollection },
		{ title: 'New Release', films: newReleaseCollection },
		{ title: 'Other Collection', films: otherCollection },
	];

	return (
		<>
			<HeroSection heroContent={premiumCollection} />
			{carouselData.map((carousel, index) => (
				<Carousel key={index} title={carousel.title} films={carousel.films} isContinueWatch={carousel.isContinueWatch || false} />
			))}
		</>
	);
}

export default Homepage;
