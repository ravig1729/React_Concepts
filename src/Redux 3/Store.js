import { applyMiddleware, createStore } from "redux";
import rootReducer from "./Reducer/rootReducer";
import createSagaMiddleWare from 'redux-saga'
import { watchAgeUp } from "./Sagas/Saga";

const sagaMiddleware = createSagaMiddleWare()

const store = createStore ( rootReducer ,applyMiddleware (sagaMiddleware))

sagaMiddleware.run(watchAgeUp)

export default store

//dev tool implementation::window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()     ....in store what we have.