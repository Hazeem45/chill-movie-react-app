import { useRef } from 'react';
import Card from '../Card/Card';
import PropTypes from 'prop-types';
import ArrowIcon from '../../../assets/svg/arrow.svg';
import Image from '../../elements/Image';
import Button from '../../elements/Button';
import './Carousel.css';

function Carousel({ title, films, isContinueWatch }) {
	const carouselRef = useRef(null);

	const scrollNext = () => {
		const containerWidth = carouselRef.current.getBoundingClientRect().width;
		const cardWidth = carouselRef.current.firstChild.getBoundingClientRect().width;
		const visibleItems = Math.floor(containerWidth / cardWidth);
		carouselRef.current.scrollBy({ left: visibleItems * cardWidth, behavior: 'smooth' });
	};

	const scrollPrev = () => {
		const containerWidth = carouselRef.current.getBoundingClientRect().width;
		const cardWidth = carouselRef.current.firstChild.getBoundingClientRect().width;
		const visibleItems = Math.floor(containerWidth / cardWidth);
		carouselRef.current.scrollBy({ left: -visibleItems * cardWidth, behavior: 'smooth' });
	};

	const handleWheel = event => {
		carouselRef.current.scrollLeft += event.deltaY;
	};

	return (
		<section>
			<div className='carousel-container'>
				<h2>{title}</h2>
				<Button classBtn={`prev ${!isContinueWatch && 'scroll-poster'}`} handleClick={scrollPrev}>
					<Image source={ArrowIcon} alt={'PrevIcon'} />
				</Button>
				<div className={'carousel'} ref={carouselRef} onWheel={handleWheel}>
					{films.map((film, index) => (
						<Card key={index} {...film} isContinueWatch={isContinueWatch} order={index + 1} length={films.length} />
					))}
				</div>
				<Button classBtn={`next ${!isContinueWatch && 'scroll-poster'}`} handleClick={scrollNext}>
					<Image source={ArrowIcon} alt={'NextIcon'} />
				</Button>
			</div>
		</section>
	);
}

Carousel.propTypes = {
	title: PropTypes.string.isRequired,
	films: PropTypes.array.isRequired,
	isContinueWatch: PropTypes.bool,
};

export default Carousel;
