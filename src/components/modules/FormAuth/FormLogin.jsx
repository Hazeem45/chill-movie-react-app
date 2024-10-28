import Button from '../../elements/Button';
import { Link, useNavigate } from 'react-router-dom';
import InputForm from '../../fragments/InputForm/InputForm';
import { useState } from 'react';
import './FormAuth.css';

function FormLogin() {
	const navigate = useNavigate();
	const [values, setValues] = useState({
		username: '',
		password: '',
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
	];

	const handleChangeInputForm = e => {
		setValues({ ...values, [e.target.id]: e.target.value });
	};

	return (
		<form
			onSubmit={() => {
				navigate('/');
			}}
		>
			<div className='form-box'>
				{inputs.map((data, index) => (
					<InputForm key={index} {...data} handleChange={handleChangeInputForm} />
				))}
			</div>
			<div className='option-auth'>
				<div>
					<p>Don&#39;t have an account?</p>
					<Link to={'/register'}>Register</Link>
				</div>
				<Link>Forgot password?</Link>
			</div>
			<Button classBtn='submit-auth'>login</Button>
		</form>
	);
}

export default FormLogin;
