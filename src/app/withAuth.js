import React,{Component} from "react"
import { useSelector } from 'react-redux'

// noinspection ES6CheckImport
import {
    Route,
    Redirect
} from "react-router-dom"

function withAuth(wrappedComponent, location) {
    return class AuthenticatedComponent extends Component {
        render(){
            return (
                <AuthRedirect wrappedComponent={wrappedComponent} location={location} />
            )
        }
    }
}

const AuthRedirect = (props) => {
    const wrappedComponent = props.wrappedComponent
    const location = props.location
    const isAuthenticated = useSelector(state => state.user.loggedIn)
    const redirectToLogin = (
        <Route>
            <Redirect to= {
                {
                    pathname: "/login",
                    state: { from: location }
                }}
            />
        </Route>
    )
    return (
        <div>
            {isAuthenticated === true ? redirectToLogin : wrappedComponent}
        </div>
    )
}