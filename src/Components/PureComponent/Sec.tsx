import React, { memo } from 'react'

const Sec = (props:any)=>{
    console.log("Second");
    return(
        <p>
            Sec : {props.sec}
        </p>
    )
}

// export default Sec;
export default memo(Sec);