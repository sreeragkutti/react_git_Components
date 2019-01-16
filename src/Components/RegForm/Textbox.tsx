import React from 'react'

const Textbox = (props:any)=>{
    return(
        <div>
            <input type={props.type} value={props.val}/>
        </div>
    )
}


export default Textbox;