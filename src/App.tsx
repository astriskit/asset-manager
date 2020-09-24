import React from "react";
import "./App.css";

export const App: React.FC<{ store: any }> = ({ store = {} }) => {
  return <div className="App">Hello, Typescript!!</div>;
};
