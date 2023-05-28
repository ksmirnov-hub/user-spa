import { put, call, takeEvery } from 'redux-saga/effects'
import sha1 from 'sha1';
import get from 'lodash/get';
import * as actions from '../actions/login';
import * as authActions from '../actions/auth';
import * as api from '../../utils/axios';

function* checkUserData({ payload }) {
	try {
		const { login = '', password = '' } = payload;
		const configured = {
			login: login,
			password: sha1(String(password)),
		};
		const data = yield call(api.getData, configured)

		if (get(data, 'id')) {
			const {name, login, id } = data;
			yield put(actions.checkCredentialsSuccess(data))
			yield put(authActions.userAuthSuccess({ login, name, id }))
		} else {
			yield put(actions.checkCredentialsFailure())
			yield put(authActions.userAuthFailure('Аккаунт не обнаружен'))
		}
	} catch (error) {
		yield put(actions.checkCredentialsFailure(error))
		yield put(authActions.userAuthFailure(error))
		console.error(error);
	}
}

export default function* root() {
  yield takeEvery(actions.checkCredentialsRequest, checkUserData);
}