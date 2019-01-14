import React from 'react'


class One extends React.Component<any,any>{
    state = {
        id : 0
    }
    constructor(props:any){
        super(props);
        this.state.id = props.match.params.id;
    }
    render(){
        return(
            <div>
                <h2>One with id --> {this.state.id}</h2>
            </div>
        )
    }
}

class Two extends React.Component<any,any>{
    state = {
        nextUrl:"/one/1500"
    }
    constructor(props:any){
        super(props);

    }

    onBtnClick = ()=>{
        this.props.history.push(this.state.nextUrl);
    }
    render(){
        return(
            <div>
                <h2>Two</h2>
                <button onClick={this.onBtnClick}>Click to navigate</button>
            </div>
        )
    }
}


class Three extends React.Component{

    render(){
        return(
            <div>
                <h2>Three</h2>
            </div>
        )
    }
}

const RComp = {
    One,Two, Three
}

export default RComp;