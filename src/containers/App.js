import React, { useEffect, useState } from 'react';
import {
  Routes,
  Route,
  useLocation,
  Navigate,
} from "react-router-dom";

import { connect } from "react-redux";

import { Home, Account, NoMatch, Login, Registration, Portal } from "../routes";
import { MainLayout } from "./MainLayout";
import { checkCredentialsRequest } from "../redux/actions/login";
import { eraseUserAuth, userAuthSuccess } from "../redux/actions/auth";
import './App.css';

function App({
	isAuth = false,
	loginAction,
	logoutAction,
}) {
	let location = useLocation();
	let state = location.state;

	useEffect(() => {
		if (!isAuth) {
			const token = localStorage.getItem('token');
			const data = localStorage.getItem('userData');
			const userData = JSON.parse(data);

			if (token && userData.id) {
				loginAction(userData);
			}
		}
	}, [isAuth]);

	const updeteRoute = (Component) => (isAuth ? <Navigate replace to="/profile" /> : Component);
	const updeteRouteToPortal = (Component) => (isAuth ? Component : <Navigate replace to="/login" />);

	return (
		<div className='app h-full'>
			<Routes location={state?.backgroundLocation || location}>
				<Route path="/" element={<MainLayout logoutAction={logoutAction} isAuth={isAuth} />}>
					<Route index element={<Home />} />
					<Route path="profile" element={updeteRouteToPortal(<Account />)} />
					<Route path="*" element={<NoMatch />} />
					<Route
						path="portal"
						element={updeteRoute(<Portal />)}
					/>
					<Route
						path="registration"
						element={updeteRoute(<Registration />)}
					/>
					<Route
						path="login"
						element={updeteRoute(<Login />)}
					/>
				</Route>
				</Routes>
		</div>
	);
}


const mapStateToProps = state => {
	return {
		isAuth: state.auth.isAuth,
		isLoading: state.login.isLoading
	};
}

const mapDispatchToProps = dispatch => {
	return {
		checkCredentials: data => dispatch(checkCredentialsRequest(data)),
		loginAction: (data) => dispatch(userAuthSuccess(data)),
		logoutAction: (data) => dispatch(eraseUserAuth(data)),
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
