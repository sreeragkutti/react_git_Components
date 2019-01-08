import React from 'react'

class PanelHeading extends React.Component<any, any>{

    render(){
        return(
            <div className="panel-heading">
                <div className="panel-title text-center">
                    <h1 className="title">{this.props.heading}</h1>
                </div>
            </div>
        )
    }
}


export default PanelHeading;