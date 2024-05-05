import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./styles/index.css";
import { Provider } from "react-redux";
import { persistor, store } from "./redux/store.js";
import { PersistGate } from "redux-persist/integration/react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter basename="/campers-rent">
        <App />
      </BrowserRouter>
    </PersistGate>
  </Provider>

  // <React.StrictMode>
  //   <Provider store={store}>
  //     <PersistGate loading={null} persistor={persistor}>
  //       <BrowserRouter basename="/campers-rent">
  //         <App />
  //       </BrowserRouter>
  //     </PersistGate>
  //   </Provider>
  // </React.StrictMode>
);
