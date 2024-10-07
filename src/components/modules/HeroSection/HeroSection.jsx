import YouTube from 'react-youtube';
import ActionHero from '../../fragments/ActionHero/ActionHero';
import './HeroSection.css';
import { useEffect, useRef, useState } from 'react';
import Button from '../../elements/Button';
import Icon from '../../elements/Icon';
import PropTypes from 'prop-types';

function HeroSection({ heroContent }) {
	const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
	const [isOverviewClicked, setIsOverviewClicked] = useState(false);
	const [isVolumeOn, setIsVolumeOn] = useState(false);
	const [isMuted, setIsMuted] = useState(1);
	const userRef = useRef(null);

	useEffect(() => {
		if (isMuted) {
			setIsVolumeOn(false);
		} else {
			setIsVolumeOn(true);
		}
	}, [isMuted]);

	const handleClickVolume = () => {
		if (userRef.current) {
			if (isVolumeOn) {
				userRef.current.mute();
			} else {
				userRef.current.unMute();
			}
			setIsVolumeOn(state => !state);
		}
	};

	const handleVideoEnd = () => {
		setCurrentVideoIndex(prevIndex => (prevIndex + 1) % heroContent.length);
		setIsOverviewClicked(false);
		if (isVolumeOn) {
			setIsMuted(0);
		} else {
			setIsMuted(1);
		}
	};

	const handleNext = () => {
		setCurrentVideoIndex(prevIndex => (prevIndex + 1) % heroContent.length);
		setIsOverviewClicked(false);
		if (isVolumeOn) {
			setIsMuted(0);
		} else {
			setIsMuted(1);
		}
	};

	const handlePrev = () => {
		setCurrentVideoIndex(prevIndex => (prevIndex - 1 + heroContent.length) % heroContent.length);
		setIsOverviewClicked(false);
		if (isVolumeOn) {
			setIsMuted(0);
		} else {
			setIsMuted(1);
		}
	};

	const onReady = event => {
		userRef.current = event.target;
		userRef.current.setVolume(90);
	};

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
					<YouTube
						videoId={heroContent.length > 0 ? heroContent[currentVideoIndex].video : ''}
						opts={opts}
						onEnd={handleVideoEnd}
						onReady={onReady}
					/>
					<Button classBtn='prev' handleClick={handlePrev}>
						<Icon iconClass='fa-angle-double-left' iconStyle={{ fontSize: '36px' }} />
					</Button>
					<Button classBtn='next' handleClick={handleNext}>
						<Icon iconClass='fa-angle-double-right' iconStyle={{ fontSize: '36px' }} />
					</Button>
				</div>
				<div className='hero-text'>
					<h1>{heroContent.length > 0 ? heroContent[currentVideoIndex].title : 'Loading...'}</h1>
					<p className={isOverviewClicked ? 'active' : undefined} onClick={() => setIsOverviewClicked(prevState => !prevState)}>
						{heroContent.length > 0 ? heroContent[currentVideoIndex].overview : 'Plase Wait a Second...'}
					</p>
					<ActionHero
						handleClickVolume={handleClickVolume}
						isVolumeOn={isVolumeOn}
						ageRating={heroContent.length > 0 ? heroContent[currentVideoIndex].ageRating : '---'}
					/>
				</div>
			</div>
		</section>
	);
}

HeroSection.propTypes = {
	heroContent: PropTypes.array.isRequired,
};

export default HeroSection;
