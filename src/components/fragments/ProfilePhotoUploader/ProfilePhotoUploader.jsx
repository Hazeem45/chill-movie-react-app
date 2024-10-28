import Image from '../../elements/Image';
import Button from '../../elements/Button';
import Icon from '../../elements/Icon';
import './ProfilePhotoUploader.css';
import PropTypes from 'prop-types';

function ProfilePhotoUploader({ src, alt, handleUpload }) {
	return (
		<div className='profile-photo-uploader'>
			<Image source={src} alt={alt} width={'140'} />
			<div>
				<Button handleClick={handleUpload}>change photo</Button>
				<span>
					<Icon iconClass='fa-upload' />
					<p>Maximum 2MB</p>
				</span>
			</div>
		</div>
	);
}

ProfilePhotoUploader.propTypes = {
	src: PropTypes.string,
	alt: PropTypes.string,
	handleUpload: PropTypes.func,
};

export default ProfilePhotoUploader;
