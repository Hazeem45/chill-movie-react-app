import Button from '../../elements/Button';
import { Link, useNavigate } from 'react-router-dom';
import InputForm from '../../fragments/InputForm/InputForm';
import { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import './FormAuth.css';
import { useDispatch } from 'react-redux';
import { setIsLogin, setUserData } from '../../../redux/slices/userSlice';
import { getDefaultToastConfig } from '../../../utils/toastStyleConfig';

function FormLogin() {
	const apiEndpoint = import.meta.env.VITE_MOCK_API_ENDPOINT;
	const [isLoading, setIsLoading] = useState(false);
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const toastStyle = getDefaultToastConfig();

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

	const handleSubmit = async e => {
		e.preventDefault();
		if (!isLoading) {
			setIsLoading(true);
			try {
				const response = await axios.get(apiEndpoint, {
					params: {
						username: values.username,
					},
					validateStatus: status => status === 200 || status === 404,
				});

				if (response.status == 200) {
					if (response.data[0].username === values.username && response.data[0].password === values.password) {
						localStorage.setItem('isLoggedIn', true);
						localStorage.setItem('userData', JSON.stringify(response.data[0]));
						dispatch(setIsLogin(true));
						dispatch(setUserData(response.data[0]));
						toast.success('Login successful!', toastStyle);
						navigate('/');
					} else {
						throw new Error('Username or Password is Incorrect!');
					}
				} else {
					throw new Error('Invalid Credential!');
				}
			} catch (error) {
				console.error(error);
				toast.error(error.message ? error.message : 'Failed to login', toastStyle);
			}
			setIsLoading(false);
		} else {
			toast.info('Please Wait', toastStyle);
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
			<Button classBtn='submit-auth'>{isLoading ? 'Loading...' : 'Login'}</Button>
		</form>
	);
}

export default FormLogin;
