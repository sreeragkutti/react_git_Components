import React from "react"
import Msg from "./DefaultMemo"

// const Message = (props:any)=>{
//     console.log("This is Message component.")
//     return(
//         <div>
//             <h3>This is Message component {props.val}</h3>
//             <Message_2 val={props.val+100}/>
//         </div>
//     )
// }


const Message_2 =(props:any)=>{
    console.log("This is Message_2");
    return(
        <div>
            <h3>This is message_2 {props.val}</h3>
            
        </div>
    )
}

class PureComponentSample extends React.Component{
    state = {
        val:{
            min:0,
            sec:20
        }
    }
componentDidMount(){
    setInterval(()=>{
       
        this.setState(()=>{
            return {
                val:{min:this.state.val.min+1}
            //    val: _val
            }
        });
    },1000);
}

// shouldComponentUpdate(nextProp:any, nextState:any){
//     console.log("nextState", nextState);
//     console.log("state", this.state);
//     return (
//         this.state.val === nextState.val ? false: true
//     )
// }

    render(){
        console.log("this is PureComponent.");
        return(
            <div>
                <h2>Welcome to pure components.....</h2>
                <h2>{this.state.val.min}</h2>
                <Msg val={this.state.val.sec}/>
                
            </div>
        )
    }
}

export default PureComponentSample