import Label from '../../elements/Label';
import Input from '../../elements/Input';
import PropTypes from 'prop-types';
import { useState } from 'react';
import './InputForm.css';
import Icon from '../../elements/Icon';

function InputForm({ name, inputType, placeholder, handleChange }) {
	const [isPasswordVisible, setIsPasswordVisible] = useState(false);
	const [inputPassword, setInputPassword] = useState('password');

	function handleClickIconPassword() {
		setIsPasswordVisible(state => !state);
		if (!isPasswordVisible) {
			setInputPassword('text');
		} else {
			setInputPassword('password');
		}
	}

	return (
		<div className='input-form'>
			<Label htmlFor={name} value={name === 'confirmPassword' ? 'confirm password' : name} />
			<Input id={name} type={inputType ? inputType : inputPassword} placeholder={placeholder} handleChange={handleChange} isRequired={true} />
			{!inputType && (
				<span className='password-toggle-icon' onClick={handleClickIconPassword}>
					<Icon iconClass={isPasswordVisible ? 'fa-eye' : 'fa-eye-slash'} />
				</span>
			)}
		</div>
	);
}

const type = PropTypes.string.isRequired;
InputForm.propTypes = {
	name: type,
	inputType: PropTypes.string,
	placeholder: type,
	handleChange: PropTypes.func,
};

export default InputForm;
