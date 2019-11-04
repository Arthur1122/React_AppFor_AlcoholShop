import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

import Home from "./Components/Home";

function App() {
  return (
    <div className="container">
      <h3 className="m-3 d-flex justify-content-center">Alcohol Shop</h3>
      <Home />
    </div>
  );
}
export default App;
