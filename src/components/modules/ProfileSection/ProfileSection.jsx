import Button from '../../elements/Button';
import ProfileField from '../../fragments/ProfileField/ProfileField';
import ProfilePhotoUploader from '../../fragments/ProfilePhotoUploader/ProfilePhotoUploader';
import SubscriptionNotice from '../../fragments/SubscriptionNotice/SubscriptionNotice';
import DefaultProfile from '../../../assets/img/profile-default.png';
import './ProfileSection.css';
import PropTypes from 'prop-types';
import { useState } from 'react';
import axios from 'axios';
import { Bounce, toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { updateUserData } from '../../../redux/slices/userSlice';

function ProfileSection({ userData }) {
	const apiEndpoint = import.meta.env.VITE_MOCK_API_ENDPOINT;
	const dispatch = useDispatch();
	const [isLoading, setIsLoading] = useState(false);

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

	const toastStyle = {
		position: 'top-right',
		autoClose: 3000,
		hideProgressBar: false,
		closeOnClick: true,
		pauseOnHover: true,
		draggable: true,
		progress: undefined,
		theme: 'dark',
		transition: Bounce,
	};

	const handleChangeInputForm = e => {
		setValues({ ...values, [e.target.id]: e.target.value });
	};

	const handleSave = async () => {
		setIsLoading(true);
		try {
			const response = await axios.get(apiEndpoint, {
				params: {
					username: values.username,
				},
				validateStatus: status => status === 200 || status === 404,
			});

			if (response.status == 200 && response.data[0].id !== userData?.id) {
				throw new Error('Username is used!');
			} else {
				if (userData?.username === values.username && userData?.password === values.password) {
					toast.info('No Data Change.', toastStyle);
				} else {
					const updatedUser = {
						username: values.username,
						password: values.password,
					};

					await axios.put(`${apiEndpoint}/${userData?.id}`, updatedUser);
					dispatch(updateUserData({ id: userData?.id, ...updatedUser }));
					toast.success('Successfully updated data!', toastStyle);
				}
			}
		} catch (error) {
			console.error(error);
			toast.error(error.message ? error.message : 'Failed update data.', toastStyle);
		}
		setIsLoading(false);
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
