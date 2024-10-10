import PropTypes from 'prop-types';
import Image from '../../elements/Image';
import LabelNewEpisode from '../../elements/LabelFilm/LabelNewEpisode';
import LabelTrending from '../../elements/LabelFilm/LabelTrending';
import Icon from '../../elements/Icon';
import './Card.css';
import LabelPremium from '../../elements/LabelFilm/LabelPremium';
import { useEffect, useState } from 'react';
import CardHover from '../../fragments/CardHover/CardHover';
import { useNavigate } from 'react-router-dom';

function Card(props) {
	const [isHovered, setIsHovered] = useState(false);
	const [isDisplayedElement, setIsDisplayedElement] = useState(false);
	const [timeoutId, setTimeoutId] = useState(null);
	const [classHover, setClassHover] = useState('item-hover');
	const [isMobile, setIsMobile] = useState(false);
	const {
		id,
		order,
		length,
		isContinueWatch,
		poster,
		backdrop,
		title,
		rating,
		isPremium,
		isTrending,
		newEpisode,
		ageRating,
		type,
		duration,
		seasons,
		episodes,
		genre,
	} = props;
	const navigate = useNavigate();

	const handleResize = () => {
		const mediaQuery = window.matchMedia('(max-width: 576px)');
		setIsMobile(mediaQuery.matches);
	};

	useEffect(() => {
		handleResize();
		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	const handleMouseEnter = () => {
		setIsHovered(true);
		const id = setTimeout(() => {
			if (order === 1) {
				setClassHover('first-item-hover');
			} else if (order === length) {
				setClassHover('last-item-hover');
			} else {
				setClassHover('item-hover');
			}
			setIsDisplayedElement(true);
		}, 100);

		setTimeoutId(id);
	};

	const handleMouseLeave = () => {
		clearTimeout(timeoutId);
		setIsDisplayedElement(false);
		setIsHovered(false);
	};

	return (
		<div
			className={isContinueWatch ? 'carousel-item' : 'carousel-poster-item'}
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
			onClick={() => isMobile && navigate(`/${type}/${id}`)}
		>
			<Image source={isContinueWatch ? backdrop : poster} alt={title} />
			{isPremium && <LabelPremium />}
			{isTrending && <LabelTrending />}
			{newEpisode && <LabelNewEpisode />}
			{isContinueWatch && (
				<>
					<div className='overlay'></div>
					<p>{title}</p>
					<p>
						<Icon iconClass={'fa-star'} iconStyle={{ fontSize: '16px', marginRight: '4px' }} />
						{rating}
					</p>
				</>
			)}
			{isHovered && !isContinueWatch && !isMobile && (
				<CardHover
					id={id}
					classHover={classHover}
					isDisplayedElement={isDisplayedElement}
					backdrop={backdrop}
					title={title}
					isPremium={isPremium}
					isTrending={isTrending}
					newEpisode={newEpisode}
					ageRating={ageRating}
					type={type}
					duration={duration}
					seasons={seasons}
					episodes={episodes}
					genre={genre}
					rating={rating}
				/>
			)}
		</div>
	);
}

Card.propTypes = {
	id: PropTypes.number,
	poster: PropTypes.string.isRequired,
	backdrop: PropTypes.string.isRequired,
	rating: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	isPremium: PropTypes.bool,
	isWatched: PropTypes.bool,
	isTrending: PropTypes.bool,
	newEpisode: PropTypes.bool,
	isContinueWatch: PropTypes.bool,
	ageRating: PropTypes.string,
	type: PropTypes.string,
	duration: PropTypes.string,
	seasons: PropTypes.number,
	episodes: PropTypes.number,
	genre: PropTypes.array,
	order: PropTypes.number,
	length: PropTypes.number,
};

export default Card;
