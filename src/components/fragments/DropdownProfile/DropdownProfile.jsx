import { Link, useNavigate } from 'react-router-dom';
import Icon from '../../elements/Icon';
import './DropdownProfile.css';
import { useSelector } from 'react-redux';

function DropdownProfile() {
	const navigate = useNavigate();
	const isLogin = useSelector(state => state.user.isLogin);

	const iconStyle = {
		fontSize: '18px',
		margin: '2px',
	};

	const handleClick = () => {
		if (isLogin) {
			localStorage.setItem('isLoggedIn', false);
			localStorage.removeItem('userData');
			navigate('/login');
			location.reload();
		} else {
			navigate('/login');
		}
	};

	return (
		<div className='dropdown'>
			<ul>
				{isLogin && (
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
							iconClass={isLogin ? 'fa-sign-out' : 'fa-sign-in'}
							iconStyle={{ fontSize: iconStyle.fontSize, marginTop: iconStyle.margin }}
						/>
						<p>{isLogin ? 'logout' : 'login'}</p>
					</Link>
				</li>
			</ul>
		</div>
	);
}

export default DropdownProfile;
