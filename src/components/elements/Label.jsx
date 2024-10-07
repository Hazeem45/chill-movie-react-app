import PropTypes from 'prop-types';

function Label({ htmlFor, value }) {
	return <label htmlFor={htmlFor}>{value}</label>;
}

Label.propTypes = {
	htmlFor: PropTypes.string.isRequired,
	value: PropTypes.string.isRequired,
};

export default Label;
