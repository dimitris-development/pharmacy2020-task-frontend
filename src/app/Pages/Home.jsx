import React, {Component} from "react"
import {withAuth} from "../withAuth";

class Home extends Component {
    //TODO: Implement connector to the store
    render () {
        return (
            <h1>
                Welcome {this.state.firstName} {this.state.lastName}
            </h1>
        )
    }
}

export default withAuth(Home, "/home");