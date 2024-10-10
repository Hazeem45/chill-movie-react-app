import PropTypes from 'prop-types';
import './AgeRating.css';

function AgeRating({ ageRating }) {
	return <span className='age-rating'>{ageRating ? ageRating : 'N/A'}</span>;
}

AgeRating.propTypes = {
	ageRating: PropTypes.string,
};

export default AgeRating;
