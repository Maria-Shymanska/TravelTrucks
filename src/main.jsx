import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "./redux/store.js";
import { Toaster } from "react-hot-toast";
import "./index.css";
import "./styles.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <StrictMode>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <App />
          <Toaster position="top-right" reverseOrder={false} />
        </PersistGate>
      </Provider>
    </StrictMode>
  </BrowserRouter>
);
