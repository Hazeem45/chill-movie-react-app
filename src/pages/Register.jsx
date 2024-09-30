import { useEffect } from 'react';
import AuthLayout from '../components/templates/AuthLayout';
import RegisterForm from '../components/modules/RegisterForm';

function Register() {
	useEffect(() => {
		document.title = 'Sign-Up';
	}, []);

	return (
		<AuthLayout title='register'>
			<RegisterForm />
		</AuthLayout>
	);
}

export default Register;
