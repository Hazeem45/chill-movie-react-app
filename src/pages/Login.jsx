import { useEffect } from 'react';
import FormLogin from '../components/modules/FormAuth/FormLogin';

function Login() {
	useEffect(() => {
		document.title = 'Sign-In';
	}, []);

	return <FormLogin />;
}

export default Login;
