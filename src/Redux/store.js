import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './Reducers';
import rootSaga from './Sagas';
import { composeWithDevTools } from 'remote-redux-devtools';

const sagaMiddleware = createSagaMiddleware();

// Wraping all reducer and sagas in a container called store
const store = createStore(
    rootReducer, composeWithDevTools(
        applyMiddleware(sagaMiddleware)
    ));

sagaMiddleware.run(rootSaga);

export default store