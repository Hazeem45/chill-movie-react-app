import GoogleIcon from '../../../assets/img/google-icon.png';
import Button from '../../elements/Button';
import Image from '../../elements/Image';
import './ThirdPartyAuth.css';

function ThirdPartyAuth() {
	return (
		<div>
			<div className='button-separator'>atau</div>
			<Button classBtn='google-auth' handleClick={() => alert('this feature is under development')}>
				<Image source={GoogleIcon} width='18' />
				<p>masuk dengan google</p>
			</Button>
		</div>
	);
}

export default ThirdPartyAuth;
