import PropTypes from 'prop-types';

function Image({ className, source, alt, id, width }) {
	return <img className={className} src={source} alt={alt} id={id} width={width} />;
}

Image.propTypes = {
	className: PropTypes.string,
	source: PropTypes.string.isRequired,
	alt: PropTypes.string,
	id: PropTypes.string,
	width: PropTypes.string,
};

export default Image;
