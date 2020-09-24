import React, { useEffect } from "react";
import { Provider } from "react-redux";
import { getData } from "./actions";
import "./App.css";

export const App: React.FC<{ store: any }> = ({ store = {} }) => {
  useEffect(() => {
    store?.dispatch(getData());
  }, [store]);
  return (
    <Provider store={store}>
      <div className="App">Hello, Typescript!!</div>
    </Provider>
  );
};
