import { combineReducers, configureStore } from "@reduxjs/toolkit";
import createSagaMiddleWare from "redux-saga";
import { dataSlice } from "./slice";
import { watchForSetData } from "./sagas";

const rootReducer = combineReducers({
  app: dataSlice.reducer,
});

const sagaMw = createSagaMiddleWare();

const store = configureStore({
  reducer: rootReducer,
  middleware: (defaultMw) => [...defaultMw(), sagaMw],
});

sagaMw.run(watchForSetData);

export type AppDispatch = typeof store.dispatch;

export { store };
