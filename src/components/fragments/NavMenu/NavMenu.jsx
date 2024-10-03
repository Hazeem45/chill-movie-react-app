import { Link } from 'react-router-dom';
import Image from '../../elements/Image';
import Logo from '../../../assets/svg/logo.svg';
import Icon from '../../../assets/svg/icon.svg';
import './NavMenu.css';

function NavMenu() {
	return (
		<div className='nav-menu'>
			<Link>
				<Image source={Logo} className={'logo-text'} />
				<Image source={Icon} className={'logo-without-text'} />
			</Link>
			<Link>series</Link>
			<Link>film</Link>
			<Link>daftar saya</Link>
		</div>
	);
}

export default NavMenu;
