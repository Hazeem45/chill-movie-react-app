import { useEffect } from 'react';
import AuthTemplate from '../components/templates/AuthTemplate/AuthTemplate';
import FormLogin from '../components/modules/FormAuth/FormLogin';

function Login() {
	useEffect(() => {
		document.title = 'Sign-In';
	}, []);

	return (
		<AuthTemplate title='login'>
			<FormLogin />
		</AuthTemplate>
	);
}

export default Login;
