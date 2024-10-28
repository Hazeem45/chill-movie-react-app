import PropTypes from 'prop-types';

function Input({ id, type, value, placeholder, handleChange, isRequired, readOnly }) {
	return <input id={id} type={type} value={value} placeholder={placeholder} onChange={handleChange} required={isRequired} readOnly={readOnly} />;
}

Input.propTypes = {
	id: PropTypes.string,
	type: PropTypes.string.isRequired,
	value: PropTypes.string,
	placeholder: PropTypes.string,
	handleChange: PropTypes.func,
	isRequired: PropTypes.bool,
	readOnly: PropTypes.bool,
};

export default Input;
