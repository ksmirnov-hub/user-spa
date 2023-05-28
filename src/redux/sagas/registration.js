import { put, call, takeEvery } from 'redux-saga/effects'
import sha1 from 'sha1';
import * as actions from '../actions/registration';
import * as api from '../../utils/axios';

function* addUserData({ payload }) {
	try {
		const { login, name, password} = payload;
		const configured = {
			name: name,
			login: login,
			password: sha1(password)
		};
		const data = yield call(api.postData, configured);

		if (data) {
			yield put(actions.addUserDataSuccess())
		}
	} catch (error) {
		actions.addUserDataFailure(error.message)
		console.error(error);
	}
}

export default function* root() {
  yield takeEvery(actions.addUserDataRequest, addUserData);
}