import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";

import App from "./App";
import Favourite from "./Components/Favourite";

const Main = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <App/>
          </Route>
          <Route exact path="/fv" >
            <Favourite />
          </Route>
          <Redirect to="/" />
        </Switch>
      </Router>
    </div>
  );
};

export default Main;
