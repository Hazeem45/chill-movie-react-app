import { useState, useEffect } from 'react';
import './BackToTopButton.css';
import Button from '../../elements/Button';
import Icon from '../../elements/Icon';

function BackToTopButton() {
	const [isVisible, setIsVisible] = useState(false);

	const handleScroll = () => {
		if (window.scrollY > 300) {
			setIsVisible(true);
		} else {
			setIsVisible(false);
		}
	};

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	};

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<div>
			{isVisible && (
				<Button handleClick={scrollToTop} classBtn='back-to-top-btn'>
					<Icon iconClass='fa-angle-double-up' iconStyle={{ fontSize: '48px' }} />
					<h2>TOP</h2>
				</Button>
			)}
		</div>
	);
}

export default BackToTopButton;
