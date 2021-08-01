import { all } from 'redux-saga/effects';
import {coinInfoSaga} from './login/saga'
export default function* rootSaga() {
  yield all([coinInfoSaga()]);
}
