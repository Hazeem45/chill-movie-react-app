import { useSelector } from 'react-redux';

function Dashboard() {
	const admin = useSelector(state => state.admin.allAdmins);
	const users = useSelector(state => state.admin.allUsers);

	return (
		<div>
			<h2>Dashboard</h2>
			<div className='card-dashboard-wrap'>
				<div className='card-dashboard'>
					<h3>Total Admin</h3>
					<p>{admin.length}</p>
				</div>
				<div className='card-dashboard'>
					<h3>Total Users</h3>
					<p>{users.length}</p>
				</div>
			</div>
		</div>
	);
}

export default Dashboard;
