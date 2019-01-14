import React, { memo } from 'react'

const Hrs = (props:any)=> {
    console.log("Hours");
    return(
        <p>
            Hrs :{props.hrs}
        </p>
    )

}

// export default Hrs;
export default memo(Hrs);