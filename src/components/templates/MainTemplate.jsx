import Footer from '../modules/Footer/Footer';
import NavBar from '../modules/NavBar/NavBar';
import { Outlet } from 'react-router-dom';

function MainTemplate() {
	return (
		<>
			<NavBar />
			<Outlet />
			<Footer />
		</>
	);
}

export default MainTemplate;
