import { Navigate, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Homepage from './pages/Homepage';
import './styles/Animation.css';
import './styles/App.css';

function App() {
	return (
		<Routes>
			<Route path='/login' element={<Login />} />
			<Route path='/register' element={<Register />} />
			<Route path='/home' element={<Homepage />} />
			<Route path='/' element={<Navigate to={'/home'} replace />} />
		</Routes>
	);
}

export default App;
