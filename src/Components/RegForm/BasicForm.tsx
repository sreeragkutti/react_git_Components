import React from 'react'
import Label from './Label'
import Textbox from './Textbox'
import Button from './Button'



const BasicForm = (props:any)=>{

    return(
        <div>
                <h4>Registration form</h4>
                <form onSubmit={props.onSubmit}>
                    <Label text="Name"/>
                    <Textbox val={0} type="text" name="name"/>
                    <Label text="Age"/>
                    <Textbox val={0} type="text" name="age"/>
                    <Label text="Address"/>
                    <Textbox val={0} type="text" name="address"/>
                    <Button text="Register"/>
                </form>
            </div>
    )
}

export default BasicForm;