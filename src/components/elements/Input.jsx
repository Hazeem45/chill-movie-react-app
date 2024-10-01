import PropTypes from 'prop-types';

function Input({ id, type, placeholder, handleChange, isRequired }) {
	return <input id={id} type={type} placeholder={placeholder} onChange={handleChange} required={isRequired} />;
}

const type = PropTypes.string.isRequired;
Input.propTypes = {
	id: type,
	type: type,
	placeholder: type,
	handleChange: PropTypes.func,
	isRequired: PropTypes.bool,
};

export default Input;
