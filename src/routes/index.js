import React from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Landing from "../pages/Landing";
import StationsMap from "../pages/StationsMap";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/map" component={StationsMap} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
