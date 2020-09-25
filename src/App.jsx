import React, { useEffect } from "react";
import { Provider } from "react-redux";
import { Layout } from "antd";
import { getData } from "./actions";
import { ActiveHome as Home } from "./pages/index.jsx";
import "./App.css";

export const App = ({ store }) => {
  useEffect(() => {
    store && store.dispatch(getData());
  }, [store]);

  return (
    <Provider store={store}>
      <Layout className="App">
        <Layout.Header>
          <div id="heading">Asset-manager for mutual funds and ETFs</div>
        </Layout.Header>
        <Layout.Content>
          <Home />
        </Layout.Content>
        <Layout.Footer>
          <div id="footer">
            Made with Love by <a href="mailto: harry2office@gmail.com">H S</a>
          </div>
        </Layout.Footer>
      </Layout>
    </Provider>
  );
};
