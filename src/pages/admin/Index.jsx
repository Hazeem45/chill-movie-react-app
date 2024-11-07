import { getAllUser } from '../../services/user.service';
import Image from '../../components/elements/Image';
import './Index.css';
import Dashboard from './menu/Dashboard';
import ManageUsers from './menu/ManageUsers';
import { Link, useSearchParams } from 'react-router-dom';
import Logo from '../../assets/svg/logo.svg';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setAllAdmin, setAllUsers } from '../../redux/slices/adminSlice';
import Icon from '../../components/elements/Icon';
import ErrorPage from '../ErrorPage';
import useWindowWidth from '../../hooks/useWindowWidth';

function AdminDashboard() {
	const [searchParams] = useSearchParams();
	const windowWidth = useWindowWidth();
	const dispatch = useDispatch();
	const admin = useSelector(state => state.user.data);
	const tab = searchParams.get('tab') || 'dashboard';

	const renderContent = () => {
		/* eslint-disable indent */
		switch (tab) {
			case 'users':
				return <ManageUsers />;
			default:
				return <Dashboard />;
		}
	};

	useEffect(() => {
		const loadDashboardData = async () => {
			try {
				const usersData = await getAllUser();
				dispatch(setAllAdmin(usersData.data.filter(data => data.role === 'admin')));
				dispatch(setAllUsers(usersData.data.filter(data => data.role !== 'admin')));
			} catch (error) {
				console.error(error);
			}
		};

		loadDashboardData();
	}, []);

	if (admin.role !== 'admin') return <ErrorPage titleMessage={'404 Not Found'} message={'The requested URL was not found'} />;
	if (admin.role === 'admin' && windowWidth < 992) {
		return <ErrorPage titleMessage={'Display issues'} message={'The admin dashboard can only be accessed using the desktop view'} />;
	}
	return (
		<div className='admin-dashboard'>
			<div className='sidebar'>
				<Link to={'/'}>
					<Image source={Logo} className={'logo-text'} />
				</Link>
				<Link to='/profile'>
					<Icon iconClass='fa-user' />
					<p style={{ display: 'inline', marginLeft: '5px' }}>{admin.username}</p>
				</Link>
				<Link to='/admin?tab=dashboard' style={{ backgroundColor: tab === 'dashboard' && 'gray' }}>
					Dashboard
				</Link>
				<Link to='/admin?tab=users' style={{ backgroundColor: tab === 'users' && 'gray' }}>
					Users
				</Link>
			</div>
			<div className='main-content'>{renderContent()}</div>
		</div>
	);
}

export default AdminDashboard;
