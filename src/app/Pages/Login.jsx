import React, {Component} from "react"
import {Input, Header, Button} from '../BaseComponents/Form/'
import {authActions} from '../../actions'
import {connect} from 'react-redux'

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
        }
        this.handleChangeUsername = this.handleChangeUsername.bind(this)
        this.handleChangePassword = this.handleChangePassword.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
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

    handleSubmit() {
        const { email, password } = this.state;
        if (email && password) {
            this.props.login({email: email, password: password});
        }
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if (JSON.stringify(this.props) === JSON.stringify(prevProps)) return null
        this.setState({
            email: this.props.auth.email,
            password: this.props.auth.password
        })
    }

    render () {
        const {email, password} = this.state
        return (
            <div className="container mx-auto h-full flex justify-center items-center">
                <div className="w-1/3">
                    <Header text="Login"/>
                    <div className="border-teal p-8 border-t-12 bg-white mb-6 rounded-lg shadow-lg">
                        <Input label="Email" value={email} type="text" onChange={this.handleChangeUsername} />
                        <Input label="Password" value={password} type="password" onChange={this.handleChangePassword} />
                        <Button text="Login" onClick={this.handleSubmit} />
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps (state) {
    const { auth } = state.auth
    return { auth: { ...auth } }
}

const actionCreators = {
    login: authActions.login,
    logout: authActions.logout
};

const connectedLogin = connect(mapStateToProps,actionCreators)(Login)

export {connectedLogin as Login}