import { RouterProvider } from 'react-router-dom';
import { router } from './routers';
import 'react-toastify/dist/ReactToastify.css';
import './styles/Animation.css';
import './styles/App.css';
import { ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import CollectionProvider from './context/CollectionContext';

function App() {
	return (
		<Provider store={store}>
			<CollectionProvider>
				<RouterProvider router={router} />
			</CollectionProvider>
			<ToastContainer />
		</Provider>
	);
}

export default App;
