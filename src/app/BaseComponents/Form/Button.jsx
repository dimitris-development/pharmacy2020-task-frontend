import React, {Component} from 'react'

class Button extends Component {
    render () {
        return (
            <button className="mb-6 p-2 mb-6 text-indigo-700 text-center" onClick={this.props.onClick}>{this.props.text}</button>
        )
    }
}

export {Button}