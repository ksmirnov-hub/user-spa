import React, { useEffect } from 'react';
import { NavLink, Outlet, useNavigate} from "react-router-dom";

export const MainLayout = ({
	logoutAction,
	isAuth,
}) => {
	let navigate = useNavigate();
	const inactiveStyle = {
		textDecoration: "underline",
	};

	const logout = () => {
		logoutAction(true);
	}

	const checkActive = ({ isActive }) => {
		return isActive ? undefined : inactiveStyle;
	}

	return (
		<>
		<div className="flex flex-row bg-[#413839] ">
			<div
				className="w-[90%] h-[100px] px-[30%] items-center flex flex-row justify-around [&>a]:text-[#F0FFF0] [&>a]:text-[25px]"
			>
				<NavLink to="/" style={checkActive}>Главная</NavLink>
				<NavLink style={checkActive} to="/profile">Профиль</NavLink>
				<NavLink style={checkActive} to="/registration">Регистрация</NavLink>
			</div>
			<div className="w-[10%] [&>a]:text-[25px] [&>a]:text-[#FFDAB9] items-center flex flex-row">
			{
				isAuth && (
					<a onClick={logout} href="#" className="no-underline ">
						Выйти
					</a>
				)
			}
			</div>
		</div>
			<div className="h-full">
				<Outlet />
			</div>
		</>
  );
};
