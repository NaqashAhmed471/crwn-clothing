import { createStore, applyMiddleware } from "redux";

import logger from "redux-logger";

// import thunk from "redux-thunk";

import createSagaMiddleware from "redux-saga";

import { persistStore } from "redux-persist";

import rootReducer from "./rootReducer";

import { rootSagas } from "./rootSagas";

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}

const store = createStore(rootReducer, applyMiddleware(...middlewares));

sagaMiddleware.run(rootSagas);

export const persistor = persistStore(store);

export default store;
