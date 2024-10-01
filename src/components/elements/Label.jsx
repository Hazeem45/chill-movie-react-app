import PropTypes from 'prop-types';

function Label({ htmlFor, value }) {
	return <label htmlFor={htmlFor}>{value}</label>;
}

const type = PropTypes.string.isRequired;
Label.propTypes = {
	htmlFor: type,
	value: type,
};

export default Label;
