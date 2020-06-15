import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { createBrowserHistory } from 'history';
import routes from './Routes';

const history = createBrowserHistory();

const Routes = () => (
    <Router history={history}>
        <Switch>
            {routes.map((route, i) => {
                return (
                    <Route {...route} key={i}/>
                    )
            })}
        </Switch>
    </Router>
);

export default Routes
