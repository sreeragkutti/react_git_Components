import React from 'react'

const Textbox = (props:any)=>{
    return(
        <div>
            <input type={props.type}  name={props.name}/>
        </div>
    )
}


export default Textbox;