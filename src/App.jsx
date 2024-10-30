import { RouterProvider } from 'react-router-dom';
import { router } from './routers';
import './styles/Animation.css';
import './styles/App.css';

function App() {
	return <RouterProvider router={router} />;
}

export default App;
