import React, {Component} from 'react'
import { useSelector } from 'react-redux'
import Login from './Pages/Login'
import Home from './Pages/Home'
// noinspection ES6CheckImport
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

const HomePage = () => {
    const {first_name, last_name} = useSelector(state => state.user)
    return <Home first_name={first_name} last_name={last_name}/>
}

const LoginPage = () => {
    const {first_name, last_name, ...rest} = useSelector(state => state.user)
    return <Login />
}
class App extends Component {
    render () {
        return (
            <Router>
                 <Switch>
                    <Route path="/">
                        <HomePage />
                    </Route>
                    <Route path="/login">
                        <LoginPage />
                   </Route>
                </Switch>
            </Router>
        )
    }
}

export default App
