import PropTypes from 'prop-types';
import AuthHeader from '../../fragments/TitleAuth/TitleAuth';
import AuthThirdParty from '../../fragments/ThirdPartyAuth/ThirdPartyAuth';
import './AuthTemplate.css';

function AuthLayout({ title, children }) {
	return (
		<div className={`container ${title === 'login' ? 'bg-login' : 'bg-register'}`}>
			<div className={`form-container ${title === 'register' && 'form-register'}`}>
				<AuthHeader title={title} />
				{children}
				<AuthThirdParty />
			</div>
		</div>
	);
}

AuthLayout.propTypes = {
	title: PropTypes.string.isRequired,
	children: PropTypes.element.isRequired,
};

export default AuthLayout;
