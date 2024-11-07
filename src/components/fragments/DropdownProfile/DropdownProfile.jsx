import { Link, useNavigate } from 'react-router-dom';
import Icon from '../../elements/Icon';
import './DropdownProfile.css';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

function DropdownProfile() {
	const navigate = useNavigate();
	const isLogin = useSelector(state => state.user.isLogin);
	const userData = useSelector(state => state.user.data);
	const [status, setStatus] = useState('');

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

	useEffect(() => {
		if (isLogin && userData.role !== 'admin') {
			setStatus('loggedInUser');
		} else if (isLogin && userData.role === 'admin') {
			setStatus('loggedInAdmin');
		}
	}, [isLogin, userData]);

	return (
		<div className='dropdown'>
			<ul>
				{status === 'loggedInUser' && (
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
				{status === 'loggedInAdmin' && (
					<li>
						<Link to={'/admin'}>
							<Icon iconClass='fa-tasks' iconStyle={{ fontSize: iconStyle.fontSize, marginRight: iconStyle.margin }} />
							<p>Dashboard</p>
						</Link>
					</li>
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
