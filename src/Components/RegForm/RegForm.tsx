import React from 'react'
import BasicForm from './BasicForm'

class RegForm extends React.Component<any,any>{
    constructor(props:any){
        super(props);
    }

    submitForm = (event:any)=>{
        event.preventDefault();
        const name = event.target.name.value;
        const age = event.target.age.value;
        const address = event.target.age.value;
        console.log(name,age,address);
    }
    render(){

        return(
            <div>
                <BasicForm onSubmit={this.submitForm} />
            </div>
        )
    }

}

export default RegForm;