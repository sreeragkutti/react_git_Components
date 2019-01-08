import React, { ReactPropTypes } from 'react'
import { prototype } from 'stream';

interface Iinput{
    inputType:string;
    title:string;
    name:string;
    controlFunc:Function;
    content:ReactPropTypes

}

// interface Iinput{
//     inputType: React.PropTypes.oneOf(['text', 'number']).isRequired;
//     title:React.ProtoTypes.String.isRequired;
//     name:React.PropTypes.string.isRequired;
//     controlFunc: React.PropTypes.func.isRequired;
//     content: React.PropTypes.oneOfType([
//         React.PropTypes.string,
//         React.PropTypes.number,
//     ]).isRequired;
//     placeholder: React.PropTypes.string;
// }

class Input extends React.Component<any,any>{

    render(){
        return(
            <input 
                className="form-input"
                name={this.props.name}
                type={this.props.inputType}
                value={this.props.content}
                onChange={this.props.controlFunc}
                placeholder={this.props.placeholder}
            />

        )
    }
}
