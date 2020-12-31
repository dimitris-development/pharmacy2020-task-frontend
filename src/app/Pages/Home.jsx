import React, {Component} from "react"
import {withAuth} from "../withAuth";

class Home extends Component {
    render () {
        return (
            <h1>
                Welcome {this.props.first_name} {this.props.last_name}
            </h1>
        )
    }
}

export default withAuth(Home, "/home");