import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter as Router } from "react-router-dom";
import StoreContext from "./hooks/useStore.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <StoreContext>
      <Router>
        <App />
      </Router>
    </StoreContext>
  </React.StrictMode>
);
