import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Provider } from "react-redux";
import store, { persist } from "./store.ts";
import { PersistGate } from "redux-persist/integration/react";
import { FlyMenuProvider } from "./contexts/FlyMenuContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persist}>
          <FlyMenuProvider>
            <App />
          </FlyMenuProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
