import PropTypes from 'prop-types';
import Image from '../../elements/Image';
import LabelNewEpisode from '../../elements/LabelFilm/LabelNewEpisode';
import LabelTrending from '../../elements/LabelFilm/LabelTrending';
import Icon from '../../elements/Icon';
import './MovieCard.css';

function MovieCard({ source, title, rating, poster, topRating, newEpisode }) {
	return (
		<div className={poster ? 'carousel-poster-item' : 'carousel-item'}>
			<Image source={source} alt={title} />
			{topRating && <LabelTrending />}
			{newEpisode && <LabelNewEpisode />}
			{!poster && (
				<>
					<div className='overlay'></div>
					<p>{title}</p>
					<p>
						<Icon iconClass={'fa-star'} iconStyle={{ fontSize: '16px', marginRight: '4px' }} />
						{rating}
					</p>
				</>
			)}
		</div>
	);
}

const stringType = PropTypes.string;
const boolType = PropTypes.bool.isRequired;
MovieCard.propTypes = {
	source: stringType,
	rating: stringType,
	title: stringType,
	poster: boolType,
	topRating: boolType,
	newEpisode: boolType,
};

export default MovieCard;
