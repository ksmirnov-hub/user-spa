import React from 'react';
import { Link } from 'react-router-dom';

export default function Portal() {

	return (
		<div className="w-[500px] h-full  mx-[30%]">
			<div className="my-[150px] h-auto">
					<div className="p-[20px] [&>div]:mb-[20px]">
						<div className="font-sans font-bold text-[24px]">Вы не авторизованы</div>
						<div className="flex flex-row [&>a]:text-blue-600 justify-between text-2xl">
							<Link to="/login">Войдите</Link>
							<div>или</div>
							<Link to="/registration">Зарегистрируйтесь</Link>
						</div>
					</div>
			</div>
		</div>
	);
}
