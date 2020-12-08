import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import Landing from "../pages/Landing"
import StationsMap from "../pages/StationsMap"
import CodeStation from "../pages/CodeStation"
import Login from "../pages/Login"
import Register from "../pages/Register"

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/map" component={StationsMap} />
        <Route path="/station/:id" component={CodeStation} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
