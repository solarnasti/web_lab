import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Provider} from 'react-redux';

import Header from './components/Header';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import store from './store';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <Header/>
                    <div className="container">
                        <Switch>
                            <Route exact path="/" component={Home}/>
                            <Route component={NotFound}/>
                        </Switch>
                    </div>
                </Router>
            </Provider>
        )
    }
}

export default App;
