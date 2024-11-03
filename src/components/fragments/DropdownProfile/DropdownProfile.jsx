import { Link, useNavigate } from 'react-router-dom';
import Icon from '../../elements/Icon';
import './DropdownProfile.css';
import { isAuthenticated } from '../../../utils/authUtils';

function DropdownProfile() {
	const navigate = useNavigate();

	const iconStyle = {
		fontSize: '18px',
		margin: '2px',
	};

	const handleClick = () => {
		if (isAuthenticated()) {
			localStorage.setItem('isLoggedIn', false);
			navigate('/login');
		} else {
			navigate('/login');
		}
	};

	return (
		<div className='dropdown'>
			<ul>
				{!isAuthenticated() && (
					<>
						<li>
							<Link to={'/profile'}>
								<Icon iconClass='fa-user' iconStyle={{ fontSize: iconStyle.fontSize, marginRight: iconStyle.margin }} />
								<p>my profile</p>
							</Link>
						</li>
						<li>
							<Link>
								<Icon iconClass='fa-star' iconStyle={{ fontSize: iconStyle.fontSize, marginLeft: `-${iconStyle.margin}`, color: 'gold' }} />
								<p>premium plan</p>
							</Link>
						</li>
					</>
				)}

				<li>
					<Link onClick={handleClick}>
						<Icon
							iconClass={!isAuthenticated() ? 'fa-sign-out' : 'fa-sign-in'}
							iconStyle={{ fontSize: iconStyle.fontSize, marginTop: iconStyle.margin }}
						/>
						<p>{!isAuthenticated() ? 'logout' : 'login'}</p>
					</Link>
				</li>
			</ul>
		</div>
	);
}

export default DropdownProfile;
