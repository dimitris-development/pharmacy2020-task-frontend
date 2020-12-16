import React, {Component} from "react"
import {Input, Header} from '../Components/Form/'
// noinspection ES6CheckImport
import {Redirect, Route} from "react-router-dom";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        }
        this.handleChangeUsername = this.handleChangeUsername.bind(this)
        this.handleChangePassword = this.handleChangePassword.bind(this)
    }

    handleChangeUsername(event) {
        this.setState({
            email : event.target.value
        })
    }

    handleChangePassword(event) {
        this.setState({
            password : event.target.value
        })
    }
    //TODO: Add button and implement action dispatch logic
    render () {
        return (
            <div className="container mx-auto h-full flex justify-center items-center">
                <div className="w-1/3">
                    <Header text="Login"/>
                    <div className="border-teal p-8 border-t-12 bg-white mb-6 rounded-lg shadow-lg">
                        <Input label="Email" type="text" onChange={this.handleChangeUsername} />
                        <Input label="Password" type="password" onChange={this.handleChangePassword} />

                    </div>
                </div>
            </div>
        )
    }
}

function withRedirectHome (wrappedComponent) {
    return class HOC extends Component {
        constructor(props) {
            super(props);
            this.isAuthenticated = this.isAuthenticated.bind(this)
        }
        isAuthenticated(){
            //TODO: Implement auth logic
        }
        render () {
            const redirectToHome = (
                <Route>
                    <Redirect to={
                        {
                            pathname: "/",
                            state: { from: "/login" }
                        }}
                    />
                </Route>
            )
            return (
                <div>
                    {this.isAuthenticated === false ? redirectToHome : wrappedComponent }
                </div>
            )
        }
    }
}

export default withRedirectHome(Login)