import PropTypes from 'prop-types';

function Image({ source, width }) {
	return <img src={source} width={width} />;
}

Image.propTypes = {
	source: PropTypes.string.isRequired,
	width: PropTypes.string,
};

export default Image;
