import { useEffect, useState } from 'react';
import InputForm from '../../../components/fragments/InputForm/InputForm';
import { getAllUser, createUser, updateUser, deleteUser, getUsername, getUser } from '../../../services/user.service';
import Button from '../../../components/elements/Button';
import { toast } from 'react-toastify';
import { getCustomToastConfig, getDefaultToastConfig } from '../../../utils/toastStyleConfig';
import { useDispatch, useSelector } from 'react-redux';
import { removeAdmin, removeUser, setAllAdmin, setAllUsers } from '../../../redux/slices/adminSlice';
import ConfirmToast from '../../../components/fragments/ConfirmToast/ConfirmToast';

function ManageUsers() {
	const [isLoading, setIsLoading] = useState(false);
	const [isOnEdit, setIsOnEdit] = useState(false);
	const admin = useSelector(state => state.admin.allAdmins);
	const users = useSelector(state => state.admin.allUsers);
	const [usersList, setUsersList] = useState([]);
	const dispatch = useDispatch();

	const toastDefault = getDefaultToastConfig();
	const toastCustom = getCustomToastConfig({
		position: 'top-center',
		autoClose: 5000,
		closeOnClick: false,
		pauseOnHover: true,
	});

	const [values, setValues] = useState({
		id: '',
		username: '',
		password: '',
		role: null,
	});

	const inputs = [
		{
			name: 'username',
			inputType: 'text',
			placeholder: 'Enter Username',
			value: values.username,
		},
		{
			name: 'password',
			inputType: undefined,
			placeholder: 'Enter Password',
			value: values.password,
		},
		{
			id: 'role',
			name: 'make the user an admin?',
			inputType: 'checkbox',
			placeholder: 'Enter Password',
			checked: values.role === 'admin' ? true : false,
			required: false,
		},
	];

	const handleChangeInputForm = e => {
		if (e.target.id === 'username' || e.target.id === 'password') {
			setValues({ ...values, [e.target.id]: e.target.value });
		} else {
			setValues({
				...values,
				[e.target.id]: e.target.checked ? 'admin' : 'user',
			});
		}
	};

	const handleSubmit = async e => {
		e.preventDefault();
		if (!isLoading) {
			setIsLoading(true);
			if (isOnEdit) {
				try {
					const responseUsername = await getUsername(values.username);
					if (responseUsername.status === 200 && responseUsername.data[0].id !== values.id) {
						setValues({
							...values,
							username: '',
						});
						throw new Error('Username is used!');
					} else {
						await updateUser(values.id, values.username, values.password);
						toast.success('Successfully updated data!', toastDefault);
					}
				} catch (error) {
					console.error(error);
					toast.error(error.message ? error.message : 'Failed update data.', toastDefault);
				}
			} else {
				try {
					const responseUsername = await getUsername(values.username);
					if (responseUsername.status === 200) {
						setValues({
							...values,
							username: '',
						});
						throw new Error('Username is used!');
					} else {
						await createUser(values.username, values.password, values.role);
						toast.success('User created successfully!', toastDefault);
						setValues({
							id: '',
							username: '',
							password: '',
							role: null,
						});
					}
				} catch (error) {
					console.error(error);
					toast.error(error.message ? error.message : 'Failed to create user.', toastDefault);
				}
			}

			try {
				const usersData = await getAllUser();
				dispatch(setAllAdmin(usersData.data.filter(data => data.role === 'admin')));
				dispatch(setAllUsers(usersData.data.filter(data => data.role !== 'admin')));
			} catch (error) {
				console.error(error);
			}
			setIsLoading(false);
		} else {
			toast.info('Please Wait', toastDefault);
		}
	};

	useEffect(() => {
		setUsersList(admin.concat(users));
	}, [admin, users]);

	return (
		<div>
			<h2>User Management</h2>
			{isLoading && <h3>Loading...</h3>}
			<form onSubmit={handleSubmit}>
				<div className='form-box form-admin'>
					{inputs.map((data, index) => (
						<InputForm key={index} {...data} handleChange={handleChangeInputForm} />
					))}
				</div>
				{isOnEdit ? (
					<div className='button-wrapper'>
						<Button type='submit' classBtn='form-btn'>
							{isLoading ? 'Loading...' : 'Update User'}
						</Button>
						<Button
							type='reset'
							classBtn='cancel-btn'
							handleClick={() => {
								setIsOnEdit(false);
								setValues({
									id: '',
									username: '',
									password: '',
									role: null,
								});
							}}
						>
							Cancel
						</Button>
					</div>
				) : (
					<Button classBtn='form-btn'>{isLoading ? 'Loading...' : 'Create New User'}</Button>
				)}
			</form>
			<h3>USERS LIST</h3>
			<ul>
				<li>
					<p>ID</p>
					<p>USERNAME</p>
					<div className='button-wrapper'>
						<p>ACTION</p>
					</div>
				</li>
				{!usersList.length && <center>Empty</center>}
				{usersList?.map(user => (
					<li key={user.id}>
						<p>{user.id}</p>
						<p style={{ color: user.role === 'admin' && 'yellow' }}>{user.username}</p>
						{user.role === 'admin' && <p style={{ marginLeft: '10px' }}>(Administrator)</p>}
						<div className='button-wrapper'>
							<Button
								classBtn='edit-btn'
								handleClick={() => {
									setIsOnEdit(true);
									window.scrollTo({
										top: 0,
										behavior: 'instant',
									});
									const fetchUserData = async () => {
										setIsLoading(true);
										try {
											const response = await getUser(user.id);
											setValues({
												id: response.data.id,
												username: response.data.username,
												password: response.data.password,
												role: response.data.role,
											});
										} catch (error) {
											console.error(error);
											toast.error(error.message ? error.message : 'Failed fetch data', toastDefault);
										}
										setIsLoading(false);
									};
									fetchUserData();
								}}
							>
								Edit
							</Button>
							<Button
								classBtn='delete-btn'
								handleClick={() => {
									toast(
										<ConfirmToast
											questionText={isLoading ? 'Loading...' : `Are you sure you want to delete ${user.username}?`}
											handleConfirm={async () => {
												setIsLoading(true);
												try {
													const response = await deleteUser(user.id);
													console.log(response);
													user.role !== 'admin' ? dispatch(removeUser(user.id)) : dispatch(removeAdmin(user.id));
													toast.dismiss();
													toast.info(`Delete user with username : ${user.username}`, toastDefault);
												} catch (error) {
													console.error(error);
													toast.error(error.message ? error.message : 'Failed to delete user.', toastDefault);
												}
												setIsLoading(false);
											}}
										/>,
										toastCustom,
									);
								}}
							>
								Delete
							</Button>
						</div>
					</li>
				))}
			</ul>
		</div>
	);
}

export default ManageUsers;
