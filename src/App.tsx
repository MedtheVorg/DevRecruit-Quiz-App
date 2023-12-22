import { Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import { Layout } from "./pages/Layout";

function App() {
  return (
    <Fragment>
      <Routes>
        <Route path="/*" element={<Layout />} />
      </Routes>
    </Fragment>
  );
}

export default App;
