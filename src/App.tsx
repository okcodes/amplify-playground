import React from 'react';
import {Redirect, Route, Router, Switch} from 'react-router-dom';
import './App.css';
import {createBrowserHistory} from "history";
import {Example1} from "./pages/example-1/Example1";
import {Example2} from "./pages/example-2/Example2";
import {Amplify} from "aws-amplify";
import awsConfig from './aws-exports';
import {withAuthenticator} from "aws-amplify-react";

Amplify.configure(awsConfig);

const browserHistory = createBrowserHistory();

function App() {
    return (
        <Router history={browserHistory}>
            <Switch>
                <Redirect exact from="/" to="/example-1"/>
                <Route component={Example1} exact path="/example-1"/>
                <Route component={Example2} exact path="/example-2"/>
            </Switch>
        </Router>
    );
}

export default withAuthenticator(App);
