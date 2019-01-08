import React from 'react'

class Btn extends React.Component<any, any>{

    render(){
        return(
            <input type="button" onClick={this.props.onSubmit} value={this.props.text}/>
        )
    }
}

export default Btn;