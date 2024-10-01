import Button from '../elements/Button';
import { Link, useNavigate } from 'react-router-dom';
import InputForm from '../fragments/InputForm';
import { useState } from 'react';

function RegisterForm() {
	const navigate = useNavigate();
	const [values, setValues] = useState({
		username: '',
		password: '',
		confirmPassword: '',
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
		{
			id: 3,
			name: 'confirmPassword',
			inputType: undefined,
			placeholder: 'Masukkan Ulang Password',
		},
	];

	function handleChangeInputForm(e) {
		setValues({ ...values, [e.target.id]: e.target.value });
	}

	return (
		<form
			onSubmit={e => {
				if (values.password !== values.confirmPassword) {
					alert('Password do not Match!');
					e.preventDefault();
				} else {
					navigate('/login');
				}
			}}
		>
			<div className='form-box'>
				{inputs.map(data => (
					<InputForm key={data.id} {...data} handleChange={handleChangeInputForm} />
				))}
			</div>
			<div className='option-auth'>
				<div>
					<p>Sudah punya akun?</p>
					<Link to={'/login'}>Masuk</Link>
				</div>
			</div>
			<Button classBtn='submit-auth'>Daftar</Button>
		</form>
	);
}

export default RegisterForm;
