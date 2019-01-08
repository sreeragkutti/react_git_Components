import React from 'react'

class SubmitBtn extends React.Component<any, any>{

    render(){
        return(
            <div className="form-group ">
                <button type="button" onClick={this.props.SubmitForm} className="btn btn-primary btn-lg btn-block login-button">{this.props.btnLabel}</button>
            </div>
        )
    }
}

export default SubmitBtn;