import Button from '../elements/Button';
import { Link, useNavigate } from 'react-router-dom';
import InputForm from '../fragments/InputForm';
import { useState } from 'react';

function LoginForm() {
	const navigate = useNavigate();
	const [values, setValues] = useState({
		username: '',
		password: '',
	});
	const inputs = [
		{
			id: 1,
			name: 'username',
			inputType: 'text',
			placeholder: 'Masukkan Username',
		},
		{
			id: 2,
			name: 'password',
			inputType: undefined,
			placeholder: 'Masukkan Password',
		},
	];

	function handleChangeInputForm(e) {
		setValues({ ...values, [e.target.id]: e.target.value });
	}

	return (
		<form
			onSubmit={() => {
				navigate('/');
			}}
		>
			<div className='form-box'>
				{inputs.map(data => (
					<InputForm key={data.id} {...data} handleChange={handleChangeInputForm} />
				))}
			</div>
			<div className='option-auth'>
				<div>
					<p>Belum punya akun?</p>
					<Link to={'/register'}>Daftar</Link>
				</div>
				<Link>Lupa kata sandi?</Link>
			</div>
			<Button classBtn='submit-auth'>masuk</Button>
		</form>
	);
}

export default LoginForm;
