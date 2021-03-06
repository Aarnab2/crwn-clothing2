import { applyMiddleware, createStore } from "redux";
import rootReducer from "./root-reducer";
import logger from "redux-logger";
import { persistStore } from "redux-persist";
//import thunk from "redux-thunk";
import createSagaMiddleware from "@redux-saga/core";
import rootSaga from "./root-saga";

const sagaMiddleware = createSagaMiddleware()
const middlewares = [sagaMiddleware]

if (process.env.NODE_ENV === 'development')
    middlewares.push(logger)

const store = createStore(rootReducer, applyMiddleware(...middlewares))

sagaMiddleware.run(rootSaga)

const persistor = persistStore(store)
export { store, persistor }