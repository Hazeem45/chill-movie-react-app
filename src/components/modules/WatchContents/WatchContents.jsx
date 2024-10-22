import PropTypes from 'prop-types';
import Card from '../Card/Card';
import './WatchContents.css';

function WatchContents({ title, cardContents }) {
	return (
		<section className='watch-content'>
			<h2>{title}</h2>
			{cardContents.length > 0 ? (
				<div className='card-grid'>
					{cardContents.map((film, index) => (
						<Card key={index} {...film} length={cardContents.length} />
					))}
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
