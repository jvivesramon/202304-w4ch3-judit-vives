import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App/App";
import "./index.css";
import TelephoneContextProvider from "./store/context/Telephone/TelephoneContextProvider";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <TelephoneContextProvider>
      <App />
    </TelephoneContextProvider>
  </React.StrictMode>
);
