import { useEffect } from 'react';
import AuthLayout from '../components/templates/AuthLayout';
import LoginForm from '../components/modules/LoginForm';

function Login() {
	useEffect(() => {
		document.title = 'Sign-In';
	}, []);

	return (
		<AuthLayout title='login'>
			<LoginForm />
		</AuthLayout>
	);
}

export default Login;
