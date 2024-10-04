import Image from '../../elements/Image';
import Logo from '../../../assets/svg/logo.svg';
import PropTypes from 'prop-types';
import './TitleAuth.css';

function TitleAuth({ title }) {
	return (
		<div className='title'>
			<Image source={Logo} />
			<h1>{title === 'login' ? 'Sign In' : 'Sign Up'}</h1>
			<p>{title === 'login' ? 'welcome back' : 'register to access all features'}!</p>
		</div>
	);
}

TitleAuth.propTypes = {
	title: PropTypes.string.isRequired,
};

export default TitleAuth;
