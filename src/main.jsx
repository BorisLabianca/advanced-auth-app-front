import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import NotificationProvider from "./context/NotificationProvider.jsx";
import { Provider } from "react-redux";
import { store } from "./redux/store.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <NotificationProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </NotificationProvider>
  </React.StrictMode>
);
