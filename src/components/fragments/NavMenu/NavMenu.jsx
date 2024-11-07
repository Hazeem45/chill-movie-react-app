import { Link } from 'react-router-dom';
import Image from '../../elements/Image';
import Logo from '../../../assets/svg/logo.svg';
import Icon from '../../../assets/svg/icon.svg';
import './NavMenu.css';

function NavMenu() {
	const handleClick = () => {
		window.scrollTo({
			top: 0,
			behavior: 'instant',
		});
	};

	return (
		<div className='nav-menu'>
			<Link to={'/'}>
				<Image source={Logo} className={'logo-text'} />
				<Image source={Icon} className={'logo-without-text'} />
			</Link>
			<Link onClick={() => alert('this feature is under development')}>series</Link>
			<Link onClick={() => alert('this feature is under development')}>movies</Link>
			<Link to={'/favorite'} onClick={handleClick}>
				my list
			</Link>
		</div>
	);
}

export default NavMenu;
