import PropTypes from 'prop-types';

function Input({ id, type, placeholder, handleChange, isRequired }) {
	return <input id={id} type={type} placeholder={placeholder} onChange={handleChange} required={isRequired} />;
}

Input.propTypes = {
	id: PropTypes.string.isRequired,
	type: PropTypes.string.isRequired,
	placeholder: PropTypes.string.isRequired,
	handleChange: PropTypes.func,
	isRequired: PropTypes.bool,
};

export default Input;
