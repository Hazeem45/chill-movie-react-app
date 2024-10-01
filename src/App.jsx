import { Route, Routes } from 'react-router-dom';
import './styles/App.css';
import './styles/AuthPage.css';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
	return (
		<Routes>
			<Route path='/login' element={<Login />} />
			<Route path='/register' element={<Register />} />
		</Routes>
	);
}

export default App;
