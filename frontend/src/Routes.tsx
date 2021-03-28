import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Dashboard from './pages/Dashboard';
import CompanyDetails from './pages/CompanyDetails';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          {<Dashboard />}
        </Route>
        <Route path="/company/:id" exact>
          {<CompanyDetails />}
        </Route>
      </Switch>
    </Router>
  );
};

export default Routes;
