import React, {Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Provider} from 'react-redux';

import Header from './components/Header';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import store from './store';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = () => (
    <Provider store={store}>
        <Router>
            <Fragment>
                <Header />
                <section className="container my-3">
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route component={NotFound} />
                    </Switch>
                </section>
            </Fragment>
        </Router>
    </Provider>
);

export default App;
