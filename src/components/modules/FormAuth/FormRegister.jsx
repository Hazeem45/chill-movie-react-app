import Button from '../../elements/Button';
import { Link, useNavigate } from 'react-router-dom';
import InputForm from '../../fragments/InputForm/InputForm';
import { useState } from 'react';
import { toast } from 'react-toastify';
import './FormAuth.css';
import { getDefaultToastConfig } from '../../../utils/toastStyleConfig';
import { createUser, getUsername } from '../../../services/user.service';

function FormRegister() {
	const navigate = useNavigate();
	const [isLoading, setIsLoading] = useState(false);
	const toastStyle = getDefaultToastConfig();

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

	const handleSubmit = async e => {
		e.preventDefault();
		if (!isLoading) {
			setIsLoading(true);
			if (values.password !== values.confirmPassword) {
				toast.error('Passwords do not match!', toastStyle);
				return;
			}

			try {
				const responseUsername = await getUsername(values.username);
				if (responseUsername.status === 200) {
					throw new Error('Username is used!');
				} else {
					await createUser(values.username, values.password);
					toast.success('User registered successfully!', toastStyle);
					navigate('/login', {
						state: {
							username: values.username,
							password: values.password,
						},
					});
				}
			} catch (error) {
				console.error(error);
				toast.error(error.message ? error.message : 'Failed to register user.', toastStyle);
			}
			setIsLoading(false);
		} else {
			toast.info('Please Wait', toastStyle);
		}
	};

	return (
		<form className='register' onSubmit={handleSubmit}>
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
			<Button classBtn='submit-auth register'>{isLoading ? 'Loading...' : 'Register'}</Button>
		</form>
	);
}

export default FormRegister;
