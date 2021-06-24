import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import { AboutScreen } from './AboutScreen';
import { HomeScreen } from './HomeScreen';
import { LoginScreen } from './LoginScreen';
import { NavBar } from './NavBar';

export const AppRouter = () => {

    return (
        <Router>
            <div>
                <NavBar />
                <Switch>
                    <Route exact path="/" component={HomeScreen} />
                    <Route exact path="/login" component={LoginScreen} />
                    <Route exact path="/about" component={AboutScreen} />
                    <Redirect to="/" />
                    {/* <Route component={HomeScreen} /> */}
                </Switch>
            </div>
        </Router>
    )
}