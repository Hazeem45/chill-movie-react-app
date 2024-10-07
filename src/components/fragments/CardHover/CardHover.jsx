import LabelPremium from '../../elements/LabelFilm/LabelPremium';
import LabelTrending from '../../elements/LabelFilm/LabelTrending';
import LabelNewEpisode from '../../elements/LabelFilm/LabelNewEpisode';
import Icon from '../../elements/Icon';
import Image from '../../elements/Image';
import './CardHover.css';
import PropTypes from 'prop-types';

function CardHover(props) {
	const {
		classHover,
		isDisplayedElement,
		backdrop,
		title,
		isPremium,
		isTrending,
		newEpisode,
		isChecked,
		ageRating,
		type,
		duration,
		seasons,
		episodes,
		genre,
		rating,
		handleClick,
	} = props;

	return (
		<div className={`carousel-item-hover ${classHover}`} style={{ display: !isDisplayedElement && 'none' }}>
			<Image source={backdrop} alt={title} />
			{isPremium && <LabelPremium />}
			{isTrending && <LabelTrending />}
			{newEpisode && <LabelNewEpisode />}
			<div className='hover-backdrop-info'>
				<div className='overlay'></div>
				<p className='title'>{title}</p>
				<p className='rating'>
					<Icon iconClass={'fa-star'} iconStyle={{ fontSize: '16px', marginRight: '4px' }} />
					{rating}
				</p>
			</div>
			<div className='action-hover'>
				<div className='button-action'>
					<Icon iconClass='fa-play-circle' iconStyle={{ fontSize: '48px' }} />
					<Icon
						iconClass={isChecked ? 'fa-check' : 'fa-plus'}
						iconStyle={{
							border: '2px solid white',
							borderRadius: '100%',
							width: '37px',
							height: '37px',
							display: 'grid',
							placeItems: 'center',
						}}
						handleClick={handleClick}
					/>
				</div>
				<div className='description-hover'>
					<div>{ageRating}</div>
					<p>{type === 'movie' ? duration : `${seasons} Season ${episodes} Episode `}</p>
				</div>
				<div className='genre-item'>
					<p>{genre[0].split('&')[0]}</p>
					<div>&#8226;</div>
					<p>{genre[1].split('&')[0]}</p>
					{genre.length > 2 && (
						<>
							<div>&#8226;</div>
							<p>{genre[2].split('&')[0]}</p>
						</>
					)}
				</div>
			</div>
		</div>
	);
}

CardHover.propTypes = {
	classHover: PropTypes.string,
	isDisplayedElement: PropTypes.bool,
	backdrop: PropTypes.string,
	title: PropTypes.string,
	isPremium: PropTypes.bool,
	isTrending: PropTypes.bool,
	newEpisode: PropTypes.bool,
	isChecked: PropTypes.bool,
	ageRating: PropTypes.string,
	type: PropTypes.string,
	duration: PropTypes.string,
	seasons: PropTypes.number,
	episodes: PropTypes.number,
	genre: PropTypes.array,
	rating: PropTypes.string,
	handleClick: PropTypes.func,
};

export default CardHover;