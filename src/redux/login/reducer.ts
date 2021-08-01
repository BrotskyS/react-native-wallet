import {actionTypes} from '../interfaces';

export const initialState = {
  info_loading: false,
};
const loginReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case actionTypes.test:
      return {
        ...state,
        info_loading: true,
      };
    default:
      return state;
  }
};

export default loginReducer;
