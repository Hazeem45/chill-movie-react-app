import Button from '../../elements/Button';
import ProfileField from '../../fragments/ProfileField/ProfileField';
import ProfilePhotoUploader from '../../fragments/ProfilePhotoUploader/ProfilePhotoUploader';
import SubscriptionNotice from '../../fragments/SubscriptionNotice/SubscriptionNotice';
import DefaultProfile from '../../../assets/img/profile-default.png';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { updateUserData } from '../../../redux/slices/userSlice';
import { getDefaultToastConfig } from '../../../utils/toastStyleConfig';
import { getUsername, updateUser } from '../../../services/user.service';
import './ProfileSection.css';

function ProfileSection({ userData }) {
	const dispatch = useDispatch();
	const [isLoading, setIsLoading] = useState(false);
	const toastStyle = getDefaultToastConfig();

	const [values, setValues] = useState({
		username: userData?.username || '',
		email: userData?.email || '',
		password: userData?.password || '',
	});

	const inputForm = [
		{
			label: 'username',
			value: values.username,
			type: 'text',
		},
		{
			label: 'email',
			value: values.email !== '' ? values.email : 'example@email.com',
			type: 'email',
		},
		{
			label: 'password',
			value: values.password,
			type: 'password',
		},
	];

	const handleChangeInputForm = e => {
		setValues({ ...values, [e.target.id]: e.target.value });
	};

	const handleSave = async () => {
		if (!isLoading) {
			setIsLoading(true);
			try {
				if (userData?.username === values.username && userData?.password === values.password) {
					toast.info('No Data Change.', toastStyle);
				} else {
					const responseUsername = await getUsername(values.username);
					if (responseUsername.status === 200 && responseUsername.data[0].id !== userData?.id) {
						throw new Error('Username is used!');
					} else {
						await updateUser(userData?.id, values.username, values.password);
						dispatch(
							updateUserData({
								username: values.username,
								password: values.password,
							}),
						);
						toast.success('Successfully updated data!', toastStyle);
					}
				}
			} catch (error) {
				console.error(error);
				toast.error(error.message ? error.message : 'Failed update data.', toastStyle);
			}
			setIsLoading(false);
		} else {
			toast.info('Please Wait', toastStyle);
		}
	};

	return (
		<section className='profile-section'>
			<h2>My Profile</h2>
			<div className='profile-container'>
				<SubscriptionNotice />
				<div className='profile-form'>
					<ProfilePhotoUploader src={userData?.photo || DefaultProfile} alt='User Photo' />
					{inputForm.map((data, index) => (
						<ProfileField key={index} {...data} handleChange={handleChangeInputForm} />
					))}
					<Button handleClick={handleSave}>{isLoading ? 'Loading...' : 'Save'}</Button>
				</div>
			</div>
		</section>
	);
}

ProfileSection.propTypes = {
	userData: PropTypes.object,
};

export default ProfileSection;
