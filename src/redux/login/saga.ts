import {takeLatest} from 'redux-saga/effects';
import * as action from '../interfaces';

function* test(payload: any) {
  console.log(test, payload);
}

export function* coinInfoSaga() {
  yield takeLatest(action.actionTypes.test, test);
}
