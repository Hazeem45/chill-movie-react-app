import PropTypes from 'prop-types';
import Image from '../../elements/Image';
import Overview from '../../elements/Overview/Overview';
import { useEffect } from 'react';
import './SeasonCard.css';

function SeasonCard({ season, index, seasonRefs, setActiveSeason }) {
	const seasonNumber = `Season ${season.season_number}`;
	const seasonTitle = season.name;
	const baseImageUrl = import.meta.env.VITE_BASE_IMG_URL;

	useEffect(() => {
		const observer = new IntersectionObserver(
			entries => {
				entries.forEach(entry => {
					if (entry.isIntersecting) {
						const seasonNumber = parseInt(entry.target.getAttribute('data-season-number'), 10);
						setActiveSeason(seasonNumber);
						window.history.replaceState(null, '', `#season-${seasonNumber}`);
					}
				});
			},
			{
				threshold: season.episodes.length > 6 ? 0.1 : 0.5,
			},
		);

		const ref = seasonRefs.current[index];
		if (ref) observer.observe(ref);

		return () => {
			if (ref) observer.unobserve(ref);
		};
	}, [index, season.episodes, seasonRefs, setActiveSeason]);

	return (
		<>
			{season.episodes.length >= 1 && (
				<>
					<h2 className='title-season'>Season {season.season_number}</h2>
					<div
						className='season-container'
						id={`season-${season.season_number}`}
						data-season-number={season.season_number}
						ref={el => (seasonRefs.current[index] = el)}
					>
						<div className='season-header'>
							<Image source={`${baseImageUrl}/w200${season.poster_path}`} alt={season.name} />
							<div className='season-info'>
								<h2>{seasonNumber === seasonTitle ? seasonNumber : `Season ${season.season_number} : ${season.name}`}</h2>
								<p className='air-date'>{season.air_date}</p>
								<Overview>{season.overview}</Overview>
							</div>
						</div>
						<div className='episode-list'>
							{season.episodes.map((episode, index) => (
								<div key={index} className='episode-container'>
									<div className='episode-number'>{episode.episode_number}</div>
									<Image className='episode-image' source={`${baseImageUrl}/w200${episode.still_path}`} alt={episode.name} />
									<div className='episode-details'>
										<div className='episode-title-wrap'>
											<h3 className='episode-title'>{episode.name}</h3>
											<span className='episode-duration'>{episode.runtime}min</span>
										</div>
										<Overview>{episode.overview}</Overview>
										<p className='air-date'>{episode.air_date}</p>
									</div>
								</div>
							))}
						</div>
					</div>
				</>
			)}
		</>
	);
}

SeasonCard.propTypes = {
	season: PropTypes.object.isRequired,
	index: PropTypes.number.isRequired,
	seasonRefs: PropTypes.object.isRequired,
	setActiveSeason: PropTypes.func.isRequired,
};

export default SeasonCard;
