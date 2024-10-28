import PropTypes from 'prop-types';
import Card from '../Card/Card';
import './WatchContents.css';
import { Link, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

function WatchContents({ title, cardContents }) {
	const locationPath = useLocation().pathname;

	useEffect(() => {
		window.scrollTo({
			top: 0,
			behavior: 'instant',
		});
	}, []);

	return (
		<section className='watch-content'>
			<div className='title-list'>
				<h2>{title}</h2>
				{locationPath === '/profile' && <Link to={'/my-list'}>See More</Link>}
			</div>
			{cardContents.length > 0 ? (
				<div className='card-grid'>
					{locationPath !== '/profile'
						? cardContents.map((film, index) => <Card key={index} {...film} length={cardContents.length} />)
						: cardContents.slice(0, 6).map((film, index) => <Card key={index} {...film} length={cardContents.length} />)}
				</div>
			) : (
				<h3 style={{ textAlign: 'center', margin: '50px 0 200px' }}>You don&apos;t have any list</h3>
			)}
		</section>
	);
}

WatchContents.propTypes = {
	title: PropTypes.string.isRequired,
	cardContents: PropTypes.array,
};

export default WatchContents;
