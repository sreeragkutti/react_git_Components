import React, { memo } from 'react'


const Min = (props:any)=>{
    console.log("Minutes");
    return(
        <p>Min : {props.min}</p>
    )
}

// export default Min;
export default memo(Min);