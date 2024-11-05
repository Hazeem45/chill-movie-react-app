import Button from '../../elements/Button';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import InputForm from '../../fragments/InputForm/InputForm';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { setIsLogin, setUserData } from '../../../redux/slices/userSlice';
import { getDefaultToastConfig } from '../../../utils/toastStyleConfig';
import { getUser, getUsername } from '../../../services/user.service';
import './FormAuth.css';

function FormLogin() {
	const [isLoading, setIsLoading] = useState(false);
	const location = useLocation();
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
			value: values.username,
			placeholder: 'Enter Username',
		},
		{
			name: 'password',
			inputType: undefined,
			value: values.password,
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
				const response = await getUsername(values.username);
				if (response.status === 200) {
					const data = response.data.filter(item => item.username === values.username);
					if (data.length) {
						const userData = await getUser(data[0].id);
						if (userData.data.username === values.username && userData.data.password === values.password) {
							localStorage.setItem('isLoggedIn', true);
							localStorage.setItem('userData', JSON.stringify(userData.data));
							dispatch(setIsLogin(true));
							dispatch(setUserData(userData.data));
							toast.success('Login successful!', toastStyle);
							navigate('/');
						} else {
							throw new Error('Password Incorect!');
						}
					} else {
						throw new Error('Username is not Registered!');
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

	useEffect(() => {
		if (location.state) {
			setValues({
				username: location.state.username,
				password: location.state.password,
			});
		}
	}, [location.state]);

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
