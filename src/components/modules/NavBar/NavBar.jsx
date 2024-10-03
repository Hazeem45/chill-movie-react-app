import NavMenu from '../../fragments/NavMenu/NavMenu';
import DropdownProfile from '../../fragments/DropdownProfile/DropdownProfile';
import Image from '../../elements/Image';
import DefaultProfileIcon from '../../../assets/img/profile-default.png';
import NavArrowIcon from '../../fragments/NavArrowIcon/NavArrowIcon';
import './NavBar.css';

function NavBar() {
	return (
		<nav>
			<NavMenu />
			<div className='profile-wrap'>
				<Image source={DefaultProfileIcon} alt={'user-profile'} />
				<NavArrowIcon />
				<div className='dropdown-wrap'>
					<DropdownProfile />
				</div>
			</div>
		</nav>
	);
}

export default NavBar;
