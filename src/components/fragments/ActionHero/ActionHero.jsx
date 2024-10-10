import Button from '../../elements/Button';
import Image from '../../elements/Image';
import InfoIcon from '../../../assets/svg/info-icon.svg';
import VolumeOffIcon from '../../../assets/svg/volume-off.svg';
import VolumeOnIcon from '../../../assets/svg/volume-on.svg';
import './ActionHero.css';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import AgeRating from '../../elements/AgeRating/AgeRating';
import Check from '../Check/Check';

function ActionHero({ isVolumeOn, ageRating, handleClickVolume, handleClickStart }) {
	const location = useLocation();

	return (
		<div className='action-hero'>
			<Button handleClick={handleClickStart}>start</Button>
			{location.pathname === '/home' ? (
				<>
					<Button>
						<Image source={InfoIcon} alt={'info-icon'} />
						<span>see more</span>
					</Button>
					<AgeRating ageRating={ageRating} />
				</>
			) : (
				<Check />
			)}
			<span id='volume-icon' className='volume-icon' onClick={handleClickVolume}>
				{isVolumeOn ? <Image source={VolumeOnIcon} alt={'volume'} /> : <Image source={VolumeOffIcon} alt={'volume'} />}
			</span>
		</div>
	);
}

ActionHero.propTypes = {
	isVolumeOn: PropTypes.bool.isRequired,
	ageRating: PropTypes.string,
	handleClickVolume: PropTypes.func.isRequired,
	handleClickStart: PropTypes.func,
};

export default ActionHero;
