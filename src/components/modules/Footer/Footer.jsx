import { useEffect, useState } from 'react';
import FootArrowIcon from '../../fragments/FootArrowIcon/FootArrowIcon';
import FooterLogo from '../../fragments/FooterLogo/FooterLogo';
import './Footer.css';

function Footer() {
	const [isMobile, setIsMobile] = useState(false);
	const [accordionState, setAccordionState] = useState({
		genre: false,
		help: false,
	});

	function handleResize() {
		const mediaQuery = window.matchMedia('(max-width: 576px)');
		setIsMobile(mediaQuery.matches);
	}

	useEffect(() => {
		handleResize();
		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	function toggleAccordion(target) {
		if (!isMobile) return;
		setAccordionState(prevState => ({
			...prevState,
			[target]: !prevState[target],
		}));
	}

	return (
		<footer className='footer'>
			<FooterLogo />
			<div className='footer-content'>
				<div className='footer-column'>
					<div className={`footer-title-list ${accordionState.genre ? 'active' : ''}`} onClick={() => toggleAccordion('genre')}>
						<FootArrowIcon />
						<h3>Genre</h3>
					</div>
					<ul className='footer-list'>
						<li>Aksi</li>
						<li>Anak-anak</li>
						<li>Anime</li>
						<li>Britania</li>
						<li>Drama</li>
						<li>Fantasi Ilmiah</li>
						<li>Kejahatan</li>
						<li>KDrama</li>
						<li>Komedi</li>
						<li>Petualangan</li>
						<li>Perang</li>
						<li>Romantis</li>
						<li>Sains & Alam</li>
						<li>Thriller</li>
					</ul>
				</div>
				<div className='footer-column'>
					<div className={`footer-title-list ${accordionState.help ? 'active' : ''}`} onClick={() => toggleAccordion('help')}>
						<h3>Help</h3>
						<FootArrowIcon />
					</div>
					<ul className='footer-list'>
						<li>FAQ</li>
						<li>Kontak Kami</li>
						<li>Privasi</li>
						<li>Syarat & Ketentuan</li>
					</ul>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
