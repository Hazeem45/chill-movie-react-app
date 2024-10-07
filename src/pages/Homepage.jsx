import { useEffect } from 'react';
import MainTemplate from '../components/templates/MainTemplate';
import CollectionProvider from '../context/CollectionContext';

function Homepage() {
	useEffect(() => {
		document.title = 'Chill | Home';
	}, []);

	return (
		<CollectionProvider>
			<MainTemplate />
		</CollectionProvider>
	);
}

export default Homepage;
