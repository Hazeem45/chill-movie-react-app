import Label from '../../elements/Label';
import Input from '../../elements/Input';
import PropTypes from 'prop-types';
import { useState } from 'react';
import './InputForm.css';
import Icon from '../../elements/Icon';

function InputForm({ id, name, inputType, value, checked, placeholder, handleChange, required }) {
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
				id={id ?? name}
				type={inputType ? inputType : inputPassword}
				value={value}
				checked={checked}
				placeholder={placeholder}
				handleChange={handleChange}
				isRequired={required ?? true}
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
	id: PropTypes.string,
	name: PropTypes.string.isRequired,
	inputType: PropTypes.string,
	value: PropTypes.string,
	checked: PropTypes.bool,
	placeholder: PropTypes.string.isRequired,
	handleChange: PropTypes.func,
	required: PropTypes.bool,
};

export default InputForm;
