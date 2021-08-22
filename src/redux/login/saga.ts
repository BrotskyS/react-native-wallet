import {put} from 'redux-saga/effects';
import {takeLatest} from 'redux-saga/effects';
import * as action from '../interfaces';
import {registerSuccess, registerFail} from './actions';
import {navigate} from '../../navigation/RootNavigator';
const url = 'http://192.168.0.102:7000';

function* login(payload: any) {}

function* register({name, email, password}: action.IRegisterRequest) {
  try {
    const body = JSON.stringify({name, email, password});
    console.log('body', body);
    const res = yield fetch(url + '/auth/registration', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: body,
    });
    const parseRes = yield res.json();
    const isOk = yield res.ok;
    if (isOk) {
      yield put(registerSuccess());
      navigate('PinCode');
    } else {
      yield put(registerFail(parseRes.message));
    }

    console.log('parseRes', parseRes);
  } catch (e) {
    yield put(registerFail('Something went wrong'));
  }
}

export function* coinInfoSaga() {
  yield takeLatest(action.actionTypes.LOGIN_REQUEST, login);
  yield takeLatest(action.actionTypes.REGISTER_REQUEST, register);
}
