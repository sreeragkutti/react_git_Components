import React from 'react'

class ErrorMsg extends React.Component<any, any>{
    
    
    divHide={
        display:"none"
    }

    divShow={
        display:"block"
    }

    render(){
        return(
            <div className="alert alert-danger" style={!this.props.isValid? this.divShow: this.divHide}>
                <strong>Danger!</strong> {this.props.Message}
            </div>
        )
    }
}

export default ErrorMsg;