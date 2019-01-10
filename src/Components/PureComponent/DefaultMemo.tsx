import React, { memo, Component } from "react"


const Message = (props:any)=>{
    // state = {
    //     value:1000
    // }

    // componentDidMount(){
    //     setInterval(()=>{
    //         this.setState(()=>{
    //             return {
    //                value: 1000
    //             }
    //         });
    //     },1000);
    // }

    // render(){
        console.log("This is Message component.");
        return(
            <div>
                <h3>This is Message component {props.val}</h3>
                {/* <h3>This is Message component's state alue {this.state.value}</h3> */}
                {/* <Message_2 val={props.val+100}/> */}
            </div>
        )
    // }
} 
    


export default memo(Message);
//export default Message;