import * as action from '../interfaces';

export const loginRequest = ({
  email,
  password,
}: {
  name: string;
  email: string;
  password: string;
}): action.ILoginRequest => {
  return {type: action.actionTypes.LOGIN_REQUEST, email, password};
};

export const loginSuccess = (): action.ILoginSuccess => {
  return {type: action.actionTypes.LOGIN_SUCCESS};
};
export const loginFail = (): action.ILoginFail => {
  return {type: action.actionTypes.LOGIN_FAIL};
};

export const registerRequest = ({
  email,
  password,
  name,
}: {
  name: string;
  email: string;
  password: string;
}): action.IRegisterRequest => {
  return {type: action.actionTypes.REGISTER_REQUEST, name, email, password};
};

export const registerSuccess = (): action.IRegisterSuccess => {
  return {type: action.actionTypes.REGISTER_SUCCESS};
};
export const registerFail = (message: string): action.IRegisterFail => {
  return {type: action.actionTypes.REGISTER_FAIL, message};
};
