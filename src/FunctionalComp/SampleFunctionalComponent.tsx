import React from 'react'

interface Props {
    Text:string;
    age:number;
    children:string;
}

export const SampleFunctionalComp = (props:Props)=>{
    const {Text, children, age} = props;
    return(
        <React.Fragment>
            <div>{props.Text}</div>
            <div>{props.children}</div>
            <div>Age : {props.age}</div>

            <div>----------------------------------------------</div>
            <div>{Text}</div>
            <div>{children}</div>
            <div>Age : {age}</div>
        </React.Fragment>
    )
}


const SampleFunctionalComp2 = (props:any)=>{

    return(
        <React.Fragment>
            <div>This is functional component</div>
            <div>{props.Name}</div>
            <div>{props.Age}</div>
        </React.Fragment>

    )
}


export default SampleFunctionalComp2;