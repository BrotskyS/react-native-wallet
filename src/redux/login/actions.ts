import * as action from '../interfaces';
export function test(text: string) {
  return {type: action.actionTypes.test, text};
}
