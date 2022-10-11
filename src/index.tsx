import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Hello from "./components/Hello";
import reportWebVitals from "./reportWebVitals";
import Page from "./components/ContextSample";
import Counter from "./components/Counter";
import {Parent} from "./components/Parent";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
    <Hello />
    <Page />
    <Counter initialValue={0} />
    <Parent />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
