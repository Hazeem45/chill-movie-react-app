import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

function ProtectedRoute({ children }) {
	const isAuthenticated = useSelector(state => state.user.isLogin);

	if (!isAuthenticated) {
		return <Navigate to='/' replace />;
	}

	return children;
}

ProtectedRoute.propTypes = {
	children: PropTypes.node.isRequired,
};

export default ProtectedRoute;
