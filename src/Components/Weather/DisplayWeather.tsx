import React from 'react'

const DisplayWeather = (props:any)=>{
    const divStyle = {
        border:"1px solid",
        width:"50%",
        boxShadow:"1px 1px #ccc",
        marginLeft:"25%"
    }
    return(
        <div>
        {props.country && props.city 
        ?   <div style={divStyle}>
                
                {props.country != undefined 
                ?<div><span id="spWeatherDetails">Weather Details</span> <span>Country: {props.country}</span></div>
                : ""}
                <br/>
                {props.city != undefined 
                ? <span>City: {props.city}</span>
                : ""}
                <br/>
                {props.country != undefined 
                ? <span>Description: {props.description}</span>
                : ""}
            </div>
        : undefined}
        </div>
    )
    
}


export default DisplayWeather