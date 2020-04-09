import React from 'react';
import { HashRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import AuthPage from './pages/Auth/AuthPage';

const Routes = () => (
   <Router>
      <Switch>
         <Redirect from="/" exact to="/SignIn" />
         <Route path="/SignIn" component={() => <AuthPage auth="signIn" />} />
         <Route path="/SignUp" component={() => <AuthPage auth="signUp" />} />
      </Switch>
   </Router>
);

export default Routes;