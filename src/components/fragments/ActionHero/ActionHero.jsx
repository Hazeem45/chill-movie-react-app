import Button from '../../elements/Button';
import Image from '../../elements/Image';
import InfoIcon from '../../../assets/svg/info-icon.svg';
import VolumeOffIcon from '../../../assets/svg/volume-off.svg';
import VolumeOnIcon from '../../../assets/svg/volume-on.svg';
import './ActionHero.css';
import PropTypes from 'prop-types';

function ActionHero({ isVolumeOn, handleClickVolume }) {
	return (
		<div className='action-hero'>
			<Button>start</Button>
			<Button>
				<Image source={InfoIcon} alt={'info-icon'} />
				<span>see more</span>
			</Button>
			<span className='age-rating'>18+</span>
			<span id='volume-icon' className='volume-icon' onClick={handleClickVolume}>
				{isVolumeOn ? <Image source={VolumeOnIcon} alt={'volume'} /> : <Image source={VolumeOffIcon} alt={'volume'} />}
			</span>
		</div>
	);
}

ActionHero.propTypes = {
	isVolumeOn: PropTypes.bool.isRequired,
	handleClickVolume: PropTypes.func.isRequired,
};

export default ActionHero;
