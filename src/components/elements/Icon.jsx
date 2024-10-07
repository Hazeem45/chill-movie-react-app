import PropTypes from 'prop-types';

function Icon({ iconClass, iconStyle, handleClick }) {
	return <i className={`fa ${iconClass}`} style={iconStyle} onClick={handleClick}></i>;
}

Icon.propTypes = {
	iconClass: PropTypes.string.isRequired,
	iconStyle: PropTypes.object,
	handleClick: PropTypes.func,
};

export default Icon;
