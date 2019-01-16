import React from 'react'
import Textbox from './Textbox'
import Label from './Label'
import Button from './Button';

class RegForm extends React.Component<any,any>{
    constructor(props:any){
        super(props);
    }

    render(){

        return(
            <div>
                <h4>Registration form</h4>
                <form>
                    <Label text="Name"/>
                    <Textbox val={0} type="text"/>
                    <Label text="Age"/>
                    <Textbox val={0} type="text"/>
                    <Label text="Address"/>
                    <Textbox val={0} type="text"/>
                    <Button text="Register"/>
                </form>
            </div>
        )
    }

}

export default RegForm;