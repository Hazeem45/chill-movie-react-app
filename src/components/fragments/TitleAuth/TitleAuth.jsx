import Image from '../../elements/Image';
import Logo from '../../../assets/svg/logo.svg';
import PropTypes from 'prop-types';
import './TitleAuth.css';

function TitleAuth({ title }) {
	return (
		<div className='title'>
			<Image source={Logo} />
			<h1>{title === 'login' ? 'Masuk' : 'Daftar'}</h1>
			<p>selamat datang{title === 'login' && ' Kembali'}!</p>
		</div>
	);
}

TitleAuth.propTypes = {
	title: PropTypes.string.isRequired,
};

export default TitleAuth;
