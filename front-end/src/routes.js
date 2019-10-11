import React, { lazy } from 'react';

import { isAuthenticated } from "./providers/auth";

// import WaitingComponent from './components/spin'

// import PrivateRoute from './actions/authenticate/route.action'

import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Login from './pages/login';
import forgot from './pages/forgot';
import forgotPasswod from './pages/forgotPasswod';


// const DashBoard = lazy(() => import("./components/dashboard/dashboardPage"));

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" render={props =>
        isAuthenticated() ?
          (
            <Redirect to={{ pathname: "/dashboard", state: { from: props.location } }} />
          )
          : (<Login {...props} />)} />
      <Route exact path="/forgot" component={forgot} />
      <Route exact path="/forgot/:token" component={forgotPasswod} />
      {/* <PrivateRoute exect path="/dashboard" component={WaitingComponent(DashBoard)} /> */}
    </Switch>
  </BrowserRouter>
)


export default Routes
