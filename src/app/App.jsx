import React, {Component} from 'react'
import Login from './Pages/Login'
import Home from './Pages/Home'
// noinspection ES6CheckImport
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

class App extends Component {
    render () {
        return (
            <Router>
                 <Switch>
                    <Route path="/">
                        <Home />
                    </Route>
                    <Route path="/login">
                        <Login />
                   </Route>
                </Switch>
            </Router>
        )
    }
}

export default App
