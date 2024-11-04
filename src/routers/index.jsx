import { createBrowserRouter, Navigate } from 'react-router-dom';
import AuthTemplate from '../components/templates/AuthTemplate/AuthTemplate';
import MainTemplate from '../components/templates/MainTemplate';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Homepage from '../pages/Homepage';
import DetailsPage from '../pages/DetailsPage';
import WatchList from '../pages/WatchList';
import Profile from '../pages/Profile';
import ErrorPage from '../pages/ErrorPage';
import ProtectedRoute from './ProtectedRoute';

export const router = createBrowserRouter([
	{
		path: '/',
		element: <Navigate to={'/home'} replace />,
		errorElement: <ErrorPage />,
	},
	{
		path: '/',
		element: <MainTemplate />,
		errorElement: <ErrorPage />,
		children: [
			{
				errorElement: <ErrorPage />,
				children: [
					{
						path: 'home',
						element: <Homepage />,
					},
					{
						path: 'my-list',
						element: <WatchList />,
					},
					{
						path: ':type/:id',
						element: <DetailsPage />,
					},
					{
						path: 'profile',
						element: (
							<ProtectedRoute>
								<Profile />
							</ProtectedRoute>
						),
					},
				],
			},
		],
	},
	{
		path: '/',
		element: <AuthTemplate />,
		children: [
			{
				path: 'login',
				element: <Login />,
			},
			{
				path: 'register',
				element: <Register />,
			},
		],
	},
]);
