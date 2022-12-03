import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Login from "../pages/Login";
import Map from "../pages/Map";
import Profile from "../pages/Profile";
import Registration from "../pages/Registration";
import { pageUrls } from "../components/constants";
import PrivatRoute from "../components/PrivateRoute";

function View() {
  return (
    <Switch>
      <Route path={pageUrls.HOME} component={Registration} exact />
      <Route path={pageUrls.LOGIN} component={Login} />
      <PrivatRoute path={pageUrls.PROFILE} component={Profile} />
      <PrivatRoute path={pageUrls.MAP} component={Map} />
      <Redirect from={pageUrls.REGISTRATION} to={pageUrls.HOME} />
    </Switch>
  );
}
export default View;
