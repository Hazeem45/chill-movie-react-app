import { useRef } from 'react';
import MovieCard from '../../fragments/MovieCard/MovieCard';
import PropTypes from 'prop-types';
import ArrowIcon from '../../../assets/svg/arrow.svg';
import Image from '../../elements/Image';
import Button from '../../elements/Button';
import './Carousel.css';

function Carousel({ title, films }) {
	const carouselRef = useRef(null);

	const scrollNext = () => {
		carouselRef.current.scrollBy({ left: 300, behavior: 'smooth' });
	};

	const scrollPrev = () => {
		carouselRef.current.scrollBy({ left: -300, behavior: 'smooth' });
	};

	const handleWheel = event => {
		carouselRef.current.scrollLeft += event.deltaY;
	};

	return (
		<section>
			<div className='carousel-container'>
				<h2>{title}</h2>
				<Button classBtn={`prev ${films[0].poster && 'scroll-poster'}`} handleClick={scrollPrev}>
					<Image source={ArrowIcon} alt={'PrevIcon'} />
				</Button>
				<div className={`carousel ${films[0].poster && 'poster'}`} ref={carouselRef} onWheel={handleWheel}>
					{films.map((film, index) => (
						<MovieCard key={index} {...film} />
					))}
				</div>
				<Button classBtn={`next ${films[0].poster && 'scroll-poster'}`} handleClick={scrollNext}>
					<Image source={ArrowIcon} alt={'NextIcon'} />
				</Button>
			</div>
		</section>
	);
}

Carousel.propTypes = {
	title: PropTypes.string.isRequired,
	films: PropTypes.array.isRequired,
};

export default Carousel;
