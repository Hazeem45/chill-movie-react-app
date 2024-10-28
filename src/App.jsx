import { Navigate, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Homepage from './pages/Homepage';
import './styles/Animation.css';
import './styles/App.css';
import DetailsPage from './pages/DetailsPage';
import WatchList from './pages/WatchList';
import CollectionProvider from './context/CollectionContext';
import Profile from './pages/Profile';

function App() {
	return (
		<Routes>
			<Route path='/login' element={<Login />} />
			<Route path='/register' element={<Register />} />
			<Route
				path='/home'
				element={
					<CollectionProvider>
						<Homepage />
					</CollectionProvider>
				}
			/>
			<Route path='/profile' element={<Profile />} />
			<Route path='/' element={<Navigate to={'/home'} replace />} />
			<Route path='/:type/:id' element={<DetailsPage />} />
			<Route path='/my-list' element={<WatchList />} />
		</Routes>
	);
}

export default App;
