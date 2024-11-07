import PropTypes from 'prop-types';

function Button({ type, handleClick, classBtn, children }) {
	return (
		<button type={type} className={classBtn} onClick={handleClick}>
			{children}
		</button>
	);
}

Button.propTypes = {
	type: PropTypes.string,
	handleClick: PropTypes.func,
	classBtn: PropTypes.string,
	children: PropTypes.node,
};

export default Button;
