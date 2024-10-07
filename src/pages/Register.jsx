import { useEffect } from 'react';
import AuthTemplate from '../components/templates/AuthTemplate/AuthTemplate';
import FormRegister from '../components/modules/FormAuth/FormRegister';

function Register() {
	useEffect(() => {
		document.title = 'Sign-Up';
	}, []);

	return (
		<AuthTemplate title='register'>
			<FormRegister />
		</AuthTemplate>
	);
}

export default Register;
