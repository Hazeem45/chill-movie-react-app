import Image from '../../elements/Image';
import Logo from '../../../assets/svg/logo.svg';
import PropTypes from 'prop-types';
import './TitleAuth.css';

function TitleAuth({ pathname }) {
	return (
		<div className='title'>
			<Image source={Logo} />
			<h1>{pathname === '/login' ? 'Sign In' : 'Sign Up'}</h1>
			<p>{pathname === '/login' ? 'welcome back' : 'register to access all features'}!</p>
		</div>
	);
}

TitleAuth.propTypes = {
	pathname: PropTypes.string.isRequired,
};

export default TitleAuth;
