import PropTypes from 'prop-types';

function Icon({ iconClass, iconStyle }) {
	return <i className={`fa ${iconClass}`} style={iconStyle}></i>;
}

Icon.propTypes = {
	iconClass: PropTypes.string.isRequired,
	iconStyle: PropTypes.object,
};

export default Icon;
