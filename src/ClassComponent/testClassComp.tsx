import React from 'react'

interface Props{
    Name:string;
    Age:number;
}

interface State {
    Name:string;
    Age:number;
}
class SampleClassComponent extends React.Component<Props, State>{
    state = {
        Name:"",
        Age:0
    }
    constructor(props:Props, state:State){
        super(props, state)
       this.state={
            Name:this.props.Name,
            Age:this.props.Age

       }
    }
    
    render(){
        return(
            <React.Fragment>
                <div>Class component</div>
                <div>{this.state.Name}</div>
                <div>{this.state.Age}</div>
            </React.Fragment>
        )
    }
}

export default SampleClassComponent;