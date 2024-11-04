import { useEffect } from 'react';
import FormRegister from '../components/modules/FormAuth/FormRegister';

function Register() {
	useEffect(() => {
		document.title = 'Sign-Up';
	}, []);

	return <FormRegister />;
}

export default Register;
