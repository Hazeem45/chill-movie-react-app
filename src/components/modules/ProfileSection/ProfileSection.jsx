import Button from '../../elements/Button';
import ProfileField from '../../fragments/ProfileField/ProfileField';
import ProfilePhotoUploader from '../../fragments/ProfilePhotoUploader/ProfilePhotoUploader';
import SubscriptionNotice from '../../fragments/SubscriptionNotice/SubscriptionNotice';
import DefaultProfile from '../../../assets/img/profile-default.png';
import './ProfileSection.css';
import PropTypes from 'prop-types';

function ProfileSection({ userData, handleSave }) {
	const inputForm = [
		{
			label: 'Username',
			value: userData?.username,
			type: 'text',
		},
		{
			label: 'Email',
			value: userData?.email,
			type: 'email',
		},
		{
			label: 'Password',
			value: userData?.password,
			type: 'password',
		},
	];

	return (
		<section className='profile-section'>
			<h2>My Profile</h2>
			<div className='profile-container'>
				<SubscriptionNotice />
				<div className='profile-form'>
					<ProfilePhotoUploader src={userData?.photo || DefaultProfile} alt='User Photo' />
					{inputForm.map((data, index) => (
						<ProfileField key={index} {...data} />
					))}
					<Button onClick={handleSave}>Save</Button>
				</div>
			</div>
		</section>
	);
}

ProfileSection.propTypes = {
	userData: PropTypes.array,
	handleSave: PropTypes.func,
};

export default ProfileSection;
