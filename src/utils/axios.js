import data from '../data/users.json';

export const userExist = ({login, exist = true}) => {
	return new Promise((resolve, reject) => {
		let result = data.find((item) => item.login === login);
		if (result) {
			if (exist) {
				reject('Пользователь с таким логином уже зарегистрирован');
			} else {
				resolve();
			}

		} else {
			if (exist) {
				resolve()
			} else {
				reject('Такого пользователя не существует');
			}

		}
	})
}

export const getData = ({login, password}) => {
    return new Promise((resolve, reject) => {

		let result = data.find((item) => item.login === login && item.password === String(password))

		if (result) {
			resolve(result);
		} else {
			reject('Имя пользователя или пароль введены не верно');
		}
	}).then(
		result => {
			return result;
		}
	);;
}

export const postData = (url, data) => {
    return new Promise((resolve, reject) => {
		resolve("Регистрация прошла успешно");
	}).then(
		result => {
			return result;
		}
	);
}
