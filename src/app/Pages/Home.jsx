import React, {Component} from "react"
import {connect} from 'react-redux'
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            first_name: '',
            last_name: ''
        }
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if (JSON.stringify(this.props) === JSON.stringify(prevProps)) return null
        this.setState({
            first_name: this.props.user.first_name,
            last_name: this.props.user.first_name
        })
    }

    render () {
        return (
            <h1>
                Welcome {this.props.first_name} {this.props.last_name}
            </h1>
        )
    }
}
function mapStateToProps(state) {
    const {user} = state.user
    return { user: {...user} }
}

const connectedHome = connect(mapStateToProps)(Home)
export {connectedHome as Home}