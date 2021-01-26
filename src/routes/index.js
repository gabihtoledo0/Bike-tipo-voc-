import React, { useState } from "react"
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom"
import Landing from "../pages/Landing"
import StationsMap from "../pages/StationsMap"
import CodeStation from "../pages/CodeStation"
import Login from "../pages/Login"
import Register from "../pages/Register"
import { isAuthenticated } from "../services/auth"
import ChangeRegister from "../pages/ChangeRegister"

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: "/", state: { from: props.location } }} />
      )
    }
  />
)

const Routes = () => {
  const [raceStarted, setRaceStarted] = useState(0)

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/meus-dados/:id" exact component={ChangeRegister} />
        <Route path="/preview-map" component={StationsMap} />
        <PrivateRoute path="/map" component={() => <StationsMap isLogged />} />
        <Route
          path="/station/:id"
          component={() => (
            <CodeStation
              raceStarted={raceStarted}
              setRaceStarted={setRaceStarted}
            />
          )}
        />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="*" component={() => <h1>Page not found</h1>} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
