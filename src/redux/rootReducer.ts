import {combineReducers} from 'redux';
import loginReducer from './login/reducer';
import {IState} from './interfaces';

export interface IRootReducer {
  login: IState;
}
export const rootReducer = combineReducers({
  login: loginReducer,
});
