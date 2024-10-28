import Button from '../../elements/Button';
import { Link, useNavigate } from 'react-router-dom';
import InputForm from '../../fragments/InputForm/InputForm';
import { useState } from 'react';
import './FormAuth.css';

function FormRegister() {
	const navigate = useNavigate();
	const [values, setValues] = useState({
		username: '',
		password: '',
		confirmPassword: '',
	});
	const inputs = [
		{
			name: 'username',
			inputType: 'text',
			placeholder: 'Enter Username',
		},
		{
			name: 'password',
			inputType: undefined,
			placeholder: 'Enter Password',
		},
		{
			name: 'confirmPassword',
			inputType: undefined,
			placeholder: 'Re-Enter Password',
		},
	];

	const handleChangeInputForm = e => {
		setValues({ ...values, [e.target.id]: e.target.value });
	};

	return (
		<form
			className='register'
			onSubmit={e => {
				if (values.password !== values.confirmPassword) {
					alert('Password do not Match!');
					e.preventDefault();
				} else {
					navigate('/login');
				}
			}}
		>
			<div className='form-box register-box'>
				{inputs.map((data, index) => (
					<InputForm key={index} {...data} handleChange={handleChangeInputForm} />
				))}
			</div>
			<div className='option-auth'>
				<div>
					<p>Already have an account?</p>
					<Link to={'/login'}>Login</Link>
				</div>
			</div>
			<Button classBtn='submit-auth register'>Register</Button>
		</form>
	);
}

export default FormRegister;
