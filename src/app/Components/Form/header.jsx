import React, {Component} from 'react'

class Header extends Component {
    render () {
        return (
            <h1 className="mb-6 text-center">{this.props.text}</h1>
        )
    }
}

export default Header