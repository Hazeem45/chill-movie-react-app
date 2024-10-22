import PropTypes from 'prop-types';
import Footer from '../modules/Footer/Footer';
import NavBar from '../modules/NavBar/NavBar';

function MainTemplate({ children }) {
	return (
		<>
			<NavBar />
			{children}
			<Footer />
		</>
	);
}

MainTemplate.propTypes = {
	children: PropTypes.node.isRequired,
};

export default MainTemplate;
