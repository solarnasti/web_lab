import React from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';

import Login from './Login';
import RootStyle from './RootStyle'
import SignUp from './SignUp'

function App() {
  return (
      <Router>
        <Switch>
            <Route path='/' component={RootStyle} />
            <Route path='/login' component={Login} />
            <Route path='/signup' component={SignUp} />
          <Redirect to='/' />
        </Switch>
      </Router>
  );
}

export default App;