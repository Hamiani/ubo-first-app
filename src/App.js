import React from "react";
import { Switch, BrowserRouter } from "react-router-dom";
import { renderRoutes } from "react-router-config";
import screens from "./screens";

const App = (props) => {
  return (
    <div className="container">
      <BrowserRouter>
        <Switch>{renderRoutes(screens(props))}</Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
