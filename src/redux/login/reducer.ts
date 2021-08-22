import {actionTypes, IState} from '../interfaces';

export const initialState: IState = {
  login_loading: false,
  error_message: '',
};
const loginReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case actionTypes.LOGIN_REQUEST:
      return {
        ...state,
        login_loading: true,
      };

    case actionTypes.REGISTER_REQUEST:
      return {
        ...state,
        login_loading: true,
      };
    case actionTypes.REGISTER_SUCCESS:
      return {
        ...state,
        login_loading: false,
        error_message: '',
        // error_message: action.
      };
    case actionTypes.REGISTER_FAIL:
      return {
        ...state,
        error_message: action.message,
        login_loading: false,
      };
    default:
      return state;
  }
};

export default loginReducer;
