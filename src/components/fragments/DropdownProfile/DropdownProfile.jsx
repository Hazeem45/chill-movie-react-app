import { Link } from 'react-router-dom';
import Icon from '../../elements/Icon';
import './DropdownProfile.css';

function DropdownProfile() {
	const iconStyle = {
		fontSize: '18px',
		margin: '2px',
	};

	return (
		<div className='dropdown'>
			<ul>
				<li>
					<Link>
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
				<li>
					<Link to={'/login'}>
						<Icon iconClass='fa-sign-out' iconStyle={{ fontSize: iconStyle.fontSize, marginTop: iconStyle.margin }} />
						<p>logout</p>
					</Link>
				</li>
			</ul>
		</div>
	);
}

export default DropdownProfile;
