import {combineReducers} from 'redux';
import loginReducer from './login/reducer';
// import {ICoinInfo, IDataCurrency} from './interfaces';

// export interface IRootReducer {
//   coinInfo: ICoinInfo;
//   dataCurrencies: IDataCurrency;
// }
export const rootReducer = combineReducers({
  login: loginReducer,
});
