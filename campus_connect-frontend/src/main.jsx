import React from "react";
import ReactDOM from "react-dom/client";
import {PersistGate} from "redux-persist/integration/react";
import {persistStore} from "redux-persist";
import "./assets/style/global.css";
import App from "./App.jsx";
import store from "./store/store.jsx";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
const persistor = persistStore(store); 
root.render(
  <React.StrictMode>
    
      <Provider store={store}>
        <PersistGate persistor={persistor}>
        <App />
        </PersistGate>
      </Provider>
    
  </React.StrictMode>
);

