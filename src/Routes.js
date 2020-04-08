import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import AuthPage from './pages/Auth/AuthPage';

const Routes = () => (
   <BrowserRouter>
      <Switch>
         <Route path="/SingIn" exact component={() => <AuthPage auth="singIn" />} />
         <Route path="/SingUp" component={() => <AuthPage auth="singUp" />} />
      </Switch>
   </ BrowserRouter>
);

export default Routes;