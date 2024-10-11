import NavBar from '../../modules/NavBar/NavBar';
import HeroSection from '../../modules/HeroSection/HeroSection';
import AboutSection from '../../modules/AboutSection/AboutSection';
import Footer from '../../modules/Footer/Footer';
import PropTypes from 'prop-types';
import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import SeasonCard from '../../modules/SeasonCard/SeasonCard';
import BackToTopButton from '../../fragments/BackToTopButton/BackToTopButton';
import './DetailsTemplate.css';
import Carousel from '../../modules/Carousel/Carousel';
import Button from '../../elements/Button';

function DetailsTemplate({ contentData, recommendationList, seasonsData }) {
	const [activeSeason, setActiveSeason] = useState(null);
	const location = useLocation();
	const seasonRefs = useRef([]);

	useEffect(() => {
		if (!seasonsData || seasonsData.length === 0) return;
		const hash = location.hash;
		if (hash) {
			const seasonId = hash.replace('#', '');
			const element = document.getElementById(seasonId);
			if (element) {
				setTimeout(() => {
					element.scrollIntoView({ behavior: 'smooth' });
					const seasonNumber = parseInt(seasonId.split('-')[1], 10);
					setActiveSeason(seasonNumber);
				}, 100);
			}
		}
	}, [location.hash, seasonsData]);

	const scrollToSection = sectionId => {
		const section = document.getElementById(sectionId);
		section.scrollIntoView({ behavior: 'smooth' });
	};

	if (contentData.length < 1) return <h1>Loading...</h1>;

	return (
		<>
			<NavBar />
			<div className='movie-series'>
				<HeroSection heroContent={contentData} />
				<AboutSection details={contentData} />
				{contentData[0].type === 'tv' && (
					<Button classBtn='recommend-nav-btn' handleClick={() => scrollToSection('Recommendations')}>
						See Recommendations
					</Button>
				)}
				{seasonsData.map((season, index) => (
					<SeasonCard key={index} season={season} index={index} seasonRefs={seasonRefs} setActiveSeason={setActiveSeason} />
				))}
				{seasonsData.length > 1 && (
					<div className='menu-season'>
						<span>Seasons :</span>
						{seasonsData.map((season, index) => (
							<a
								href={`#season-${season.season_number}`}
								key={index}
								className={activeSeason === season.season_number ? 'active' : ''}
								onClick={() => setActiveSeason(season.season_number)}
							>
								{season.season_number}
							</a>
						))}
					</div>
				)}
				<Carousel title={'Recommendations'} films={recommendationList} />
			</div>
			<BackToTopButton />
			<Footer />
		</>
	);
}

DetailsTemplate.propTypes = {
	contentData: PropTypes.array,
	recommendationList: PropTypes.array,
	seasonsData: PropTypes.array,
};

export default DetailsTemplate;
