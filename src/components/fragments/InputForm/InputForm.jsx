import Label from '../../elements/Label';
import Input from '../../elements/Input';
import PropTypes from 'prop-types';
import { useState } from 'react';
import './InputForm.css';
import Icon from '../../elements/Icon';

function InputForm({ name, inputType, value, placeholder, handleChange }) {
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
			<Input
				id={name}
				type={inputType ? inputType : inputPassword}
				value={value}
				placeholder={placeholder}
				handleChange={handleChange}
				isRequired={true}
			/>
			{!inputType && (
				<span className='password-toggle-icon' onClick={handleClickIconPassword}>
					<Icon iconClass={isPasswordVisible ? 'fa-eye' : 'fa-eye-slash'} />
				</span>
			)}
		</div>
	);
}

InputForm.propTypes = {
	name: PropTypes.string.isRequired,
	inputType: PropTypes.string,
	value: PropTypes.string,
	placeholder: PropTypes.string.isRequired,
	handleChange: PropTypes.func,
};

export default InputForm;
