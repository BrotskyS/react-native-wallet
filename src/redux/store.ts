import {applyMiddleware, compose, createStore} from 'redux';
import createSagaMiddleware from 'redux-saga';

import {rootReducer} from './rootReducer';
import rootSaga from './saga';

declare global {
  interface Window {
    // eslint-disable-next-line no-undef
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}
// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware)),
);

sagaMiddleware.run(rootSaga);
