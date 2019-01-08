import React, { Props } from 'react'


class Tb extends React.Component<any, any>{
   

    render(){
        return(
            <React.Fragment>
                <label>{this.props.text}</label>
                <input type="text" id={this.props.text} onChange={this.props.onTextChange}></input>
            </React.Fragment>
        )
    }
}


export default Tb;