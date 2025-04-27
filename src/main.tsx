import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store, { persist } from "./store.ts";
import { PersistGate } from "redux-persist/integration/react";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
     <Provider store={store}>
       <PersistGate loading={null} persistor={persist}>
         <BrowserRouter>
           <App />
          </BrowserRouter>
        </PersistGate>
     </Provider>
  </React.StrictMode>
);
