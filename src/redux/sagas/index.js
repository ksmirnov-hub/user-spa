import { all } from 'redux-saga/effects';

import registrationSaga from './registration';
import login from './login';

export default function* rootSaga() {
   yield all([
    registrationSaga(),
    login(),
   ]);
}
