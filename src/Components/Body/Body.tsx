import React from 'react'
import './Body.css';
import Form from '../Other/FormDom/FormDom';


class Body extends React.Component{
    state  =  {
            Name:null,
            Address:null
            }
    onSubmit = ()=>{
        debugger;
        alert(JSON.stringify("Name is :"+this.state.Name+" Address is :"+this.state.Address));
    }

    onNameChange = (e: React.FormEvent<HTMLInputElement>) => {
        const newValue = e.currentTarget.value;
        this.setState({Name:newValue});
    }

    onAddressChange = (e:React.FormEvent<HTMLInputElement>)=>{
        const newValue = e.currentTarget.value;
        this.setState({Address:newValue});
    }
    render(){
        return (
            <React.Fragment>
                <div className="container">
                    <div className="row main">
                         <Form/>
                    </div>
                </div>
                {/* <div classNameName="sample-body">
                    <p>Registration form</p>
                    <Tb text="Name"  onTextChange={this.onNameChange}/>
                    <Tb text="Address"  onTextChange={this.onAddressChange}/>
                    <Btn text="submit" onSubmit={this.onSubmit}/>
                </div> */}
            </React.Fragment>

        )
    }
}

export default Body;