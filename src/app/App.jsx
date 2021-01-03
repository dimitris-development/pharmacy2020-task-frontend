import React, {Component} from 'react'
import { Route, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom'
import { Login, Home } from './Pages'
import { PrivateRoute } from './BaseComponents/PrivateRoute/PrivateRoute'

class App extends Component {
    render () {
        return (
            <Router>
                <Switch>
                    <PrivateRoute exact path="/" component={Home} />
                    <Route exact path="/login" component={Login} />
                    <Redirect from="*" to="/" />
                </Switch>
            </Router>
        )
    }
}

export default App
