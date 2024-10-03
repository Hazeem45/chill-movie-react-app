import './FooterLogo.css';
import Logo from '../../../assets/svg/Logo.svg';
import Image from '../../elements/Image';

function FooterLogo() {
	const year = new Date().getFullYear();

	return (
		<div className='footer-logo'>
			<Image source={Logo} alt={'chill-logo'} />
			<p>@{year} Chill All Rights Reserved.</p>
		</div>
	);
}

export default FooterLogo;
