import PropTypes from 'prop-types';
import { useNavigate, useRouteError } from 'react-router-dom';
import Button from '../components/elements/Button';

function ErrorPage({ message }) {
	const navigate = useNavigate();
	const error = useRouteError();
	console.error(error);

	return (
		<div id='error-page'>
			<h1>Oops!</h1>
			<p>Sorry, an unexpected error has occurred.</p>
			<p>
				<i>{error?.statusText || error?.message || message}</i>
			</p>
			<Button
				handleClick={() => {
					navigate('/home');
				}}
			>
				back
			</Button>
		</div>
	);
}

ErrorPage.propTypes = {
	message: PropTypes.string,
};

export default ErrorPage;