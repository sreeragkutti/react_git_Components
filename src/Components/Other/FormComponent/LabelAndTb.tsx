import React from 'react'

class LabelAndTb extends React.Component<any, any>{

    isNotValid = {
        borderColor:"red"
    }

    isValid={
        borderColor:"grey"
    }

    render(){
        return(
            <div className="form-group">
                <label htmlFor={this.props.id} className="cols-sm-2 control-label">{this.props.labelText}</label>
                <div className="cols-sm-10">
                    <div className="input-group">
                        <span className="input-group-addon"><i className={this.props.faIcon} aria-hidden="true"></i></span>
                        <input type="text" 
                            onChange={this.props.onTextChange} 
                            className="form-control" 
                            name={this.props.id} 
                            id={this.props.id}  
                            placeholder={this.props.labelText}
                            style={this.props.isNotValid ? this.isValid: this.isNotValid}
                            value = {this.props.value}
                        />
                    </div>
                </div>
			</div>
        )
    }
}

export default LabelAndTb;