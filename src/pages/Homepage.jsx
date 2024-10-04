import { useEffect } from 'react';
import MainTemplate from '../components/templates/MainTemplate';

function Homepage() {
	useEffect(() => {
		document.title = 'Chill | Home';
	}, []);

	return <MainTemplate />;
}

export default Homepage;
