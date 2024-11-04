import AuthHeader from '../../fragments/TitleAuth/TitleAuth';
import AuthThirdParty from '../../fragments/ThirdPartyAuth/ThirdPartyAuth';
import './AuthTemplate.css';
import { Outlet, useLocation } from 'react-router-dom';

function AuthTemplate() {
	const locationPathname = useLocation().pathname;

	return (
		<div className={`container ${locationPathname === '/login' ? 'bg-login' : 'bg-register'}`}>
			<div className={`form-container ${locationPathname === '/register' && 'form-register'}`}>
				<AuthHeader pathname={locationPathname} />
				<Outlet />
				<AuthThirdParty />
			</div>
		</div>
	);
}

export default AuthTemplate;
