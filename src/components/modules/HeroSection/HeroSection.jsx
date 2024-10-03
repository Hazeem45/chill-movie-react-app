import YouTube from 'react-youtube';
import ActionHero from '../../fragments/ActionHero/ActionHero';
import './HeroSection.css';
import { useEffect, useRef, useState } from 'react';
import Button from '../../elements/Button';
import Icon from '../../elements/Icon';

function HeroSection() {
	const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
	const [isVolumeOn, setIsVolumeOn] = useState(false);
	const [isMuted, setIsMuted] = useState(1);
	const userRef = useRef(null);
	const videoIds = ['g4Hbz2jLxvQ', 'F7nQ0VUAOXg', 'dug56u8NN7g', 'mqqft2x_Aa4', 'HyIyd9joTTc'];

	useEffect(() => {
		if (isMuted) {
			setIsVolumeOn(false);
		} else {
			setIsVolumeOn(true);
		}
	}, [isMuted]);

	function handleClickVolume() {
		if (userRef.current) {
			if (isVolumeOn) {
				userRef.current.mute();
			} else {
				userRef.current.unMute();
			}
			setIsVolumeOn(state => !state);
		}
	}

	function handleVideoEnd() {
		setCurrentVideoIndex(prevIndex => (prevIndex + 1) % videoIds.length);
		if (isVolumeOn) {
			setIsMuted(0);
		} else {
			setIsMuted(1);
		}
	}

	function handleNext() {
		setCurrentVideoIndex(prevIndex => (prevIndex + 1) % videoIds.length);
		if (isVolumeOn) {
			setIsMuted(0);
		} else {
			setIsMuted(1);
		}
	}

	function handlePrev() {
		setCurrentVideoIndex(prevIndex => (prevIndex - 1 + videoIds.length) % videoIds.length);
		if (isVolumeOn) {
			setIsMuted(0);
		} else {
			setIsMuted(1);
		}
	}

	function onReady(event) {
		userRef.current = event.target;
		userRef.current.setVolume(90);
	}

	const opts = {
		height: '100%',
		width: '100%',
		playerVars: {
			autoplay: 1,
			controls: 0,
			loop: 1,
			rel: 0,
			mute: isMuted,
		},
	};

	return (
		<section className='hero' id='hero'>
			<div className='hero-container'>
				<div className='overlay-hero'></div>
				<div className='video-container'>
					<YouTube videoId={videoIds[currentVideoIndex]} opts={opts} onEnd={handleVideoEnd} onReady={onReady} />
					<Button classBtn='prev' handleClick={handlePrev}>
						<Icon iconClass='fa-angle-double-left' iconStyle={{ fontSize: '36px' }} />
					</Button>
					<Button classBtn='next' handleClick={handleNext}>
						<Icon iconClass='fa-angle-double-right' iconStyle={{ fontSize: '36px' }} />
					</Button>
				</div>
				<div className='hero-text'>
					<h1>duty after school</h1>
					<p>
						Sebuah benda tak dikenal mengambil alih dunia. Dalam keputusasaan, Departemen Pertahanan mulai merekrut lebih banyak tentara,
						termasuk siswa sekolah menengah. Mereka pun segera menjadi pejuang garis depan dalam perang.
					</p>
					<ActionHero handleClickVolume={handleClickVolume} isVolumeOn={isVolumeOn} />
				</div>
			</div>
		</section>
	);
}

export default HeroSection;
