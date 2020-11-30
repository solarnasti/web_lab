import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Login from './components/Login';
import SignUp from './components/SignUp';
import Root from './components/Root'

const App = () => {
  return (
      <Router>
        <Switch>
            <Route path='/' exact={true} component={Root} />
            <Route path='/signup' exact={true} component={SignUp} />
            <Route path='/login' exact={true} component={Login} />
        </Switch>
      </Router>
  );
}
export default App;