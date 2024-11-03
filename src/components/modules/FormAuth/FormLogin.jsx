import Button from '../../elements/Button';
import { Link, useNavigate } from 'react-router-dom';
import InputForm from '../../fragments/InputForm/InputForm';
import { useState } from 'react';
import axios from 'axios';
import { Bounce, toast } from 'react-toastify';
import './FormAuth.css';
import { useDispatch } from 'react-redux';
import { addUserData } from '../../../redux/slices/userSlice';

function FormLogin() {
	const apiEndpoint = import.meta.env.VITE_MOCK_API_ENDPOINT;
	const navigate = useNavigate();
	const dispatch = useDispatch();

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
		try {
			const response = await axios.get(apiEndpoint, {
				params: {
					username: values.username,
				},
			});

			if (response.data.length > 0 && response.data[0].password === values.password) {
				toast.success('Login successful!', toastStyle);
				dispatch(addUserData(response.data[0]));
				localStorage.setItem('userData', JSON.stringify(response.data[0]));
				localStorage.setItem('isLoggedIn', true);
				navigate('/');
			} else {
				toast.error('Invalid credentials.', toastStyle);
			}
		} catch (error) {
			console.error(error);
			toast.error('Failed to login.', toastStyle);
		}
	};

	return (
		<form onSubmit={handleSubmit}>
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
