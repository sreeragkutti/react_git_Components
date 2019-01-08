import React from 'react';
import LabelAndTb from '../FormComponent/LabelAndTb';
import PanelHeading from '../PanelHeading/PanelHeading';
import SubmitBtn from '../FormComponent/SubmitBtn';
import ErrorMsg  from '../ValidationMsg/ErrorMsg';


class Form extends React.Component<any,any>{
    state = {
        Users:{
            Name:"",
            isNameValid:true,
            Email:"",
            isEmailValid:true,
            UserName:"",
            isUsernameValid:true,
            Password:"",
            ConfirmPassword:"",
            isValid:true,
            isFormValid: true
        },
        isRegisterClick:false
        
        
    }

    SubmitForm = ()=>{
        let User = this.state.Users;
        let registerClick = this.state.isRegisterClick;
        if( User.Password=="" || User.ConfirmPassword==""){
            User.isValid =  false;
        }
        else{
            User.isValid =  true;
        }
        

        if(User.Name=="" || User.Name==undefined){
            User.isNameValid=false;
        }
        else{
            User.isNameValid =  true;
        }

        if(User.Email=="" || User.Email==undefined){
            User.isEmailValid=false;
        }
        else{
            User.isEmailValid =  true;
        }

        if(User.UserName=="" || User.UserName==undefined){
            User.isUsernameValid=false;
        }
        else{
            User.isUsernameValid =  true;
        }

        if(User.Password!=User.ConfirmPassword){
            User.isFormValid = false;
            
        }
        else{
            User.isFormValid = true;
        }
        
        if(User.isNameValid&& User.isEmailValid&& User.isUsernameValid && User.isFormValid){
            registerClick =true;
        }
        else{
            registerClick=false;
        }

        this.setState({
            Users:User,
            isRegisterClick:registerClick 
        });

        
    }

    onClearClick = ()=>{
        let user = this.state.Users;
            user.Name="";
            user.isNameValid = true;
            user.Email = "";
            user.isEmailValid = true;
            user.UserName = "";
            user.isUsernameValid = true;
            user.Password = "";
            user.ConfirmPassword = "";
            user.isValid = true;
            user.isFormValid = true;
        
        
        this.setState({
            Users:user,
            isRegisterClick:false
        });
    }

    onEditClick = ()=>{
        let user = this.state.Users;
            user.Name="Sreerag";
            user.isNameValid = true;
            user.Email = "sreerag801@outlook.com";
            user.isEmailValid = true;
            user.UserName = "sreerag@kannur";
            user.isUsernameValid = true;
            user.Password = "sree@123";
            user.ConfirmPassword = "sree@123.";
            user.isValid = true;
            user.isFormValid = true;
        
        
        this.setState({
            Users:user,
            isRegisterClick:false
        });
    }

    onNameChange = (e:React.FormEvent<HTMLInputElement>)=>{
        let User = this.state.Users;
        User.Name = e.currentTarget.value;
        this.setState({Users:User});
    }

    onEmailChange = (e:React.FormEvent<HTMLInputElement>)=>{
        let User = this.state.Users;
        User.Email = e.currentTarget.value;
        this.setState({Users:User});
    }

    onUsernameChange = (e:React.FormEvent<HTMLInputElement>)=>{
        let User = this.state.Users;
        User.UserName = e.currentTarget.value;
        this.setState({Users:User});
    }

    onPasswordChange = (e:React.FormEvent<HTMLInputElement>)=>{
        let User = this.state.Users;
        User.Password = e.currentTarget.value;
        this.setState({Users:User});
    }

    isPasswordConfirm = (e:React.FormEvent<HTMLInputElement>)=>{
        let User = this.state.Users;
        User.ConfirmPassword = e.currentTarget.value;
        this.setState({Users:User});
    }
    componentDidMount(){
        return(
            <div>hello</div>
        )
        
    }
    render(){
        return(
            <React.Fragment>
                <PanelHeading heading="RM Results"/>
                <div className="main-login main-center">
                    <div className="form-horizontal">
                        {
                            this.state.isRegisterClick ?
                            <SubmitBtn btnLabel="Edit" SubmitForm={this.onEditClick}/> :
                            null
                        }
                        
                        <LabelAndTb labelText="Enter your Name" isNotValid={this.state.Users.isNameValid} id="name" faIcon="fa fa-user fa" onTextChange={this.onNameChange} value={this.state.Users.Name}/>
                        <LabelAndTb labelText="Enter your Email" isNotValid={this.state.Users.isEmailValid} id="email" faIcon="fa fa-envelope fa" onTextChange={this.onEmailChange} value={this.state.Users.Email}/>
                        <LabelAndTb labelText="Enter your Username" isNotValid={this.state.Users.isUsernameValid} id="userName" faIcon="fa fa-users fa" onTextChange={this.onUsernameChange} value={this.state.Users.UserName}/>
                        <LabelAndTb labelText="Password" id="password" isNotValid={this.state.Users.isValid} faIcon="fa fa-lock fa" onTextChange={this.onPasswordChange} value={this.state.Users.Password}/>
                        <LabelAndTb labelText="Confirm password" isNotValid={this.state.Users.isValid} id="ConfirmPassword" faIcon="fa fa-lock fa" onTextChange={this.isPasswordConfirm} value={this.state.Users.ConfirmPassword}/>
                        <SubmitBtn btnLabel="Register" SubmitForm={this.SubmitForm}/>
                        <SubmitBtn btnLabel="Clear Fields" SubmitForm={this.onClearClick}/>
                        {
                            !this.state.Users.isFormValid ?
                            <ErrorMsg Message="Password & confirm password not matching..." isValid={this.state.Users.isFormValid}/> :
                            null
                        }
                        
                        
                        {/* {
                            <ErrorMsg Message="Password & confirm password not matching..." isValid={this.state.Users.isFormValid}/>
                        } */}

                    </div>
                </div>
            </React.Fragment>
        )

    }
}

export default Form ;