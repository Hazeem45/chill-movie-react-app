import PropTypes from 'prop-types';
import AuthHeader from '../fragments/AuthHeader';
import AuthThirdParty from '../fragments/AuthThirdParty';

function AuthLayout({ title, children }) {
	return (
		<div className={`container ${title === 'login' ? 'login' : 'register'}`}>
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
