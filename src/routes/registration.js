import React, {useState, useEffect} from 'react';
import { connect } from "react-redux";
import { Input, Form, Button } from 'antd';
import { addUserDataRequest } from "../redux/actions/registration";
import { userExist } from '../utils/axios';
import { Link } from "react-router-dom";

const cyrillicPattern = /^[\u0400-\u04FF]+$/;

function Registration({
	sendData,
	userAdded = false
}) {
	const [form] = Form.useForm();

	const onFinish = (values) => {
		console.log('finish');
		sendData(values);
	};

	const onFinishFailed = (values) => {
		console.log(values);
	};

	const validateLogin = (_, value) => {
		return userExist({login: value})
	}
	
	const validatePassword = (_, value) => {
		const test = cyrillicPattern.test(value);
		return new Promise((resolve, reject) => {
			if (test) {
				reject('Не допускается использование киррилических символов');
			} else {
				resolve();
			}
		})
	}

	const validateRepeatPassword = (_, value) => {
		const { getFieldValue } = form;
		const password = getFieldValue('password');

		return new Promise((resolve, reject) => {
			if (password && value === password) {
				resolve()
			} else {
				reject('Введенные пароли не совпадают');
			}
			
		})
	}

	return (
		<div className="w-[500px] h-full mx-[35%]">
			<div className="my-[150px] h-auto">
				{userAdded ? (
					<div className='flex flex-col gap-[20px] text-2xl [&>a]:text-blue-600 [&>div]:text-black-600'>
						<div>Регистрация прошла успешно!</div>
						<Link to="/login">Войдите в профиль</Link>
					</div>
				) : (
					<div className="p-[20px] [&>div]:mb-[20px]">

						<div className="font-sans text-2xl font-bold text-[15px] text-center">Форма регистрации</div>
						<Form
							form={form}
							name="basic"
							labelCol={{ span: 8 }}
							wrapperCol={{ span: 16 }}
							style={{ maxWidth: 600 }}
							onFinish={onFinish}
							onFinishFailed={onFinishFailed}
							autoComplete="off"
						>
							<Form.Item
								label="Имя"
								name="name"
								rules={[{ required: true, message: 'Введите ваше имя!' }]}
							>
								<Input />
							</Form.Item>
							<Form.Item
								name={'email'}
								label="Логин"
								rules={[{ required: true, message: 'Введите логин!' },  { validator: validateLogin }]}
							>
								<Input />
							</Form.Item>
							<Form.Item
								label="Пароль"
								name="password"
								rules={[{ required: true, message: 'Установите пароль!' },  { validator: validatePassword }]}
							>
								<Input.Password />
							</Form.Item>
							<Form.Item
								label="Повторите пароль"
								name="password_repeat"
								type="password"
								rules={[{ required: true, message: 'Повторите введение пароля!' },  { validator: validateRepeatPassword }]}
							>
								<Input.Password />
							</Form.Item>

							<Form.Item wrapperCol={{ offset: 8, span: 16 }}>
								<Button type="default" htmlType="submit">
									Отправить
								</Button>
							</Form.Item>
						</Form>
					</div>
				)}
			</div>
		</div>
	);
}

const mapStateToProps = state => {
	return {
		userAdded: state.registration.userAdded
	};
}

const mapDispatchToProps = dispatch => {
	return {
		sendData: url => dispatch(addUserDataRequest(url))
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Registration);