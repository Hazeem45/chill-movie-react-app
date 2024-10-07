import { useEffect, useState } from 'react';
import FootArrowIcon from '../../fragments/FootArrowIcon/FootArrowIcon';
import FooterLogo from '../../fragments/FooterLogo/FooterLogo';
import './Footer.css';
import Image from '../../elements/Image';

function Footer() {
	const [isMobile, setIsMobile] = useState(false);
	const [accordionState, setAccordionState] = useState({
		genre: false,
		help: false,
	});

	const handleResize = () => {
		const mediaQuery = window.matchMedia('(max-width: 576px)');
		setIsMobile(mediaQuery.matches);
	};

	useEffect(() => {
		handleResize();
		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	const toggleAccordion = target => {
		if (!isMobile) return;
		setAccordionState(prevState => ({
			...prevState,
			[target]: !prevState[target],
		}));
	};

	return (
		<>
			<footer className='footer'>
				<FooterLogo />
				<div className='footer-content'>
					<div className='footer-column'>
						<div className={`footer-title-list ${accordionState.genre ? 'active' : ''}`} onClick={() => toggleAccordion('genre')}>
							<FootArrowIcon />
							<h3>Genre</h3>
						</div>
						<ul className='footer-list'>
							<li>Action</li>
							<li>Adventure</li>
							<li>Anime</li>
							<li>Children</li>
							<li>Comedi</li>
							<li>Crime</li>
							<li>British</li>
							<li>Drama</li>
							<li>KDrama</li>
							<li>Romatic</li>
							<li>Scientific Fantasy</li>
							<li>Science & Nature</li>
							<li>Thriller</li>
							<li>War</li>
						</ul>
					</div>
					<div className='footer-column'>
						<div className={`footer-title-list ${accordionState.help ? 'active' : ''}`} onClick={() => toggleAccordion('help')}>
							<h3>Help</h3>
							<FootArrowIcon />
						</div>
						<ul className='footer-list'>
							<li>FAQ</li>
							<li>Contact Us</li>
							<li>Privacy</li>
							<li>Terms & Conditions</li>
						</ul>
					</div>
				</div>
			</footer>
			<div className='info' onClick={() => window.open('https://www.themoviedb.org', '_blank')}>
				<p>This webApp uses TMDB and the TMDB APIs but is not endorsed, certified, or otherwise approved by TMDB.</p>
				<Image
					source='https://www.themoviedb.org/assets/2/v4/logos/v2/blue_long_1-8ba2ac31f354005783fab473602c34c3f4fd207150182061e425d366e4f34596.svg'
					alt={'imdb-assets'}
				/>
			</div>
		</>
	);
}

export default Footer;
