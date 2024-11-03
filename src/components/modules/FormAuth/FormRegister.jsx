import Button from '../../elements/Button';
import { Link, useNavigate } from 'react-router-dom';
import InputForm from '../../fragments/InputForm/InputForm';
import { useState } from 'react';
import axios from 'axios';
import { Bounce, toast } from 'react-toastify';
import './FormAuth.css';

function FormRegister() {
	const navigate = useNavigate();
	const apiEndpoint = import.meta.env.VITE_MOCK_API_ENDPOINT;
	const [isLoading, setIsLoading] = useState(false);
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

	const toastStyle = {
		position: 'top-right',
		autoClose: 3000,
		hideProgressBar: false,
		closeOnClick: true,
		pauseOnHover: true,
		draggable: true,
		progress: undefined,
		theme: 'dark',
		transition: Bounce,
	};

	const handleChangeInputForm = e => {
		setValues({ ...values, [e.target.id]: e.target.value });
	};

	const handleSubmit = async e => {
		e.preventDefault();
		setIsLoading(true);
		if (values.password !== values.confirmPassword) {
			toast.error('Passwords do not match!', toastStyle);
			return;
		}
		try {
			const response = await axios.get(apiEndpoint, {
				params: {
					username: values.username,
				},
				validateStatus: status => status === 200 || status === 404,
			});

			if (response.status == 200) {
				throw new Error('Username is used!');
			} else {
				await axios.post(apiEndpoint, {
					username: values.username,
					password: values.password,
				});
				toast.success('User registered successfully!', toastStyle);
				navigate('/login');
			}
		} catch (error) {
			console.error(error);
			toast.error(error.message ? error.message : 'Failed to register user.', toastStyle);
		}
		setIsLoading(false);
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
