export enum actionTypes {
  'LOGIN_REQUEST' = 'LOGIN_REQUEST',
  'LOGIN_SUCCESS' = 'LOGIN_SUCCESS',
  'LOGIN_FAIL' = 'LOGIN_FAIL',

  'REGISTER_REQUEST' = 'REGISTER_REQUEST',
  'REGISTER_SUCCESS' = 'REGISTER_SUCCESS',
  'REGISTER_FAIL' = 'REGISTER_FAIL',
}
export interface IState {
  login_loading: boolean;
  error_message: string
}

export interface ILoginRequest {
  type: actionTypes.LOGIN_REQUEST;
  email: string;
  password: string;
}
export interface ILoginSuccess {
  type: actionTypes.LOGIN_SUCCESS;
}
export interface ILoginFail {
  type: actionTypes.LOGIN_FAIL;
}

export interface IRegisterRequest {
  type: actionTypes.REGISTER_REQUEST;
  name: string;
  email: string;
  password: string;
}
export interface IRegisterSuccess {
  type: actionTypes.REGISTER_SUCCESS;
}
export interface IRegisterFail {
  type: actionTypes.REGISTER_FAIL;
  message: string;
}
