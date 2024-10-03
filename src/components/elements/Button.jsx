import PropTypes from 'prop-types';

function Button({ handleClick, classBtn, children }) {
	return (
		<button className={classBtn} onClick={handleClick}>
			{children}
		</button>
	);
}

Button.propTypes = {
	handleClick: PropTypes.func,
	classBtn: PropTypes.string,
	children: PropTypes.node,
};

export default Button;
