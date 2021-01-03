import React, {Component} from "react"

class Input extends Component {
    render (){
        return (
            <div>
                {this.props.label ? (<label className="block mb-2 text-indigo-500" htmlFor={this.props.label.toLowerCase()}>{this.props.label}</label>) : ''}
                <input onChange={this.props.onChange} value={this.props.value} className="w-full p-2 mb-6 text-indigo-700 border-b-2 border-indigo-500 outline-none focus:bg-gray-300" type={this.props.type}/>
            </div>
        )
    }
}

export {Input}