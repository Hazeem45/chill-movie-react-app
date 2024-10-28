import { useState } from 'react';
import Icon from '../../elements/Icon';
import Input from '../../elements/Input';
import Label from '../../elements/Label';
import './ProfileField.css';
import PropTypes from 'prop-types';

function ProfileField({ label, value, type, handleChange }) {
	const [activeInput, setActiveInput] = useState(false);

	return (
		<div className='profile-field'>
			<Label value={label} />
			<Input value={type !== 'email' ? value : 'example@email.com'} type={type} handleChange={handleChange} readOnly={!activeInput} />
			{type !== 'email' && (
				<Icon iconClass='fa-pencil edit-field' iconStyle={{ color: activeInput && '#3254ff' }} handleClick={() => setActiveInput(!activeInput)} />
			)}
		</div>
	);
}

ProfileField.propTypes = {
	label: PropTypes.string,
	value: PropTypes.string,
	type: PropTypes.string,
	handleChange: PropTypes.func,
};

export default ProfileField;
