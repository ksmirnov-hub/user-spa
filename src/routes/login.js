import React, { useEffect, useState, useRef } from 'react';
import { connect } from "react-redux";
import { Input, Form, Button } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone, PlusOutlined } from '@ant-design/icons';
import { checkCredentialsRequest } from "../redux/actions/login";
import { clearError } from "../redux/actions/auth";
import MyInput from "../components/MyInput"
import WithoutRef from "../components/WithoutRef"
function useResize() {
 const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = (event) => {
	
      setWidth(event.target.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
	console.log('width', width)
  return width;
}
function Registration({
	isAuth = false,
	authError = null,
	checkCredentials,
	clearAuthError
}) {
	const width = useResize();
	const onFinish = (values) => {
		checkCredentials(values);
	};
	console.log('width', width);
	const onFinishFailed = (values) => {
		console.log('Имя пользователя или пароль введены не верно');
	};

	const handleChange = () => {
		if(authError) {
			clearAuthError();
		}
	}

	const ref = useRef(null);

	const  handleClick = () => {
		ref.current.focus();
	  }

	return (
		<div className="w-[600px] h-full mx-[30%]">
			<div className="my-[150px] h-auto">
				{isAuth ? (
					<div>Перейти в профиль</div>
				) : (
					<div className="p-[20px] [&>div]:mb-[20px]">
						<div className="font-sans text-xl font-bold text-[15px] text-center">
							Для авторизации введите логин и пароль
						</div>
						<Form
							name="basic"
							labelCol={{ span: 8 }}
							wrapperCol={{ span: 16 }}
							style={{ maxWidth: 600 }}
							onFinish={onFinish}
							onFinishFailed={onFinishFailed}
							autoComplete="off"
						>
							<Form.Item
								name={'login'}
								label="Логин"
							>
								<Input
									onChange={handleChange}
								/>
							</Form.Item>
							<Form.Item
								label="Пароль"
								name="password"
								rules={[{ required: true, message: 'Please input your password!' }]}
							>
								<Input.Password
									iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
									onChange={handleChange}
								/>
							</Form.Item>
							<Form.Item wrapperCol={{ offset: 8, span: 16 }}>
								<Button type="default" htmlType="submit">
									Отправить
								</Button>
							</Form.Item>
						</Form>
						{
							authError ? (
								<div className="text-red text-red-500 font-bold text-[15px] text-center">{authError}</div>
							) : null
							
						}
					</div>
				)}
			</div>
		</div>
	);
}

const mapStateToProps = state => {
	return {
		isAuth: state.auth.isAuth,
		authError: state.auth.error
	};
}

const mapDispatchToProps = dispatch => {
	return {
		checkCredentials: data => dispatch(checkCredentialsRequest(data)),
		clearAuthError: (data) => dispatch(clearError()),
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Registration);