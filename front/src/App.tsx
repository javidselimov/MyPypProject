import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import Coronadash from './components/CoronaDash/CoronaDash';

import { actionCreators } from './state';
import Login from './components/Auth/Login';
import Navigation from './components/Nav';
import './App.css';

import FavoritesMap from './components/Map';

import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Appp from './components/BarCompanents';
import Register from './components/Auth/Register';
import Weather from './components/Weather/index';
import Youtube from './components/Youtube';
import News from './components/News/News';
import Corona from './components/Corona/Corona';

const App: React.FunctionComponent = () => {
	const dispatch = useDispatch();
	const { Getoronasummary } = bindActionCreators(actionCreators, dispatch);

	useEffect(() => {
		Getoronasummary();
	}, []);

	const ProtectedRoute = ({ children, ...rest }: any) => {
		const user = useSelector((state: any) => state.users);

		return localStorage.getItem('token') && user ? <Route {...rest}>{children}</Route> : <Redirect to="/weather" />;
	};

	return (
		<>
			<Router>
				<Navigation />

				<Switch>
					<Route path="/login" exact>
						<Login />
					</Route>
					<Route path="/register" exact>
						<Register />
					</Route>
					<ProtectedRoute path="/map" exact>
						<FavoritesMap />
					</ProtectedRoute>
					<Route path="/weather" exact>
						<Weather />
					</Route>
					<ProtectedRoute path="/youtube" exact>
						<Youtube />
					</ProtectedRoute>
					<ProtectedRoute path="/news" exact>
						<News />
					</ProtectedRoute>

					<ProtectedRoute path="/compare" exact>
						<Appp />
					</ProtectedRoute>
					<ProtectedRoute path="/" exact>
						<Corona />
					</ProtectedRoute>

					<ProtectedRoute path="/table">
						<Coronadash />
					</ProtectedRoute>
				</Switch>
			</Router>
		</>
	);
};

export default App;
