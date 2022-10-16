import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import store from "./store";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <Provider store={store}>
//     <App />
//   </Provider>
// );

ReactDOM.createRoot(document.getElementById("root")).render(
    <Provider store={store}>
        <App/>
    </Provider>
);
// const root =  ReactDOM.createRoot(document.getElementById('root'))
// store.subscribe(() => RouterProvider.render(<App />))
// function rednerUi() {
//     root.render(<App />)
// }
// rednerUi()
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
