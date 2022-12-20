import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Map } from '../Map';
import { Auth } from '../Auth';
import { Profile } from '../Profile';
import { getAuth } from '../../modules/auth';
import {shallowEqual, useSelector } from 'react-redux';

export const AppRouter = () => {
  const loginPath = '/login';

  const auth = useSelector(getAuth, shallowEqual);
  
  const PrivateRoute = ({ component: RouteComponent }) => (
    <Route
      render={routeProps =>
        auth.success ? <RouteComponent {...routeProps} /> : <Redirect to={loginPath} />
      }
    />
  );

  return (
    <Switch>
      <Route exact path="/">
        <Redirect to="/login" />
      </Route>
      <Route path={'/login'} component={() => <Auth isAuth={true} />}/>
      <Route path={'/signup'} component={() => <Auth isAuth={false} />}/>
      <PrivateRoute path={'/map'} component={Map}/>
      <PrivateRoute path={'/profile'} component={Profile}/>
      <Redirect to="login" />
    </Switch>
  );
}