import React,{Component} from "react"
// noinspection ES6CheckImport
import {
    Route,
    Redirect
} from "react-router-dom"

export function withAuth(wrappedComponent, location) {
    return class AuthenticatedComponent extends Component {
        constructor(props) {
            super(props);
            this.isAuthenticated = this.isAuthenticated.bind(this)
        }
        isAuthenticated(){
            //TODO: Implement auth logic
        }
        render(){
            const redirectToLogin = (
                <Route>
                    <Redirect to={
                        {
                            pathname: "/login",
                            state: { from: location }
                        }}
                    />
                </Route>
            )
            return (
                <div>
                    {this.isAuthenticated === true ? redirectToLogin : wrappedComponent}
                </div>
            )
        }
    }
}