import {createStore,applyMiddleware} from 'redux';
import createSagaMiddleware from "redux-saga";
import {rootreducer} from './reducers/index';
import {sagas} from './sagas/sagas'

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootreducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(sagas);

export {store};