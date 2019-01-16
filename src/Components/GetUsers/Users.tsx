import React from 'react'
import axios from 'axios';

class Users extends React.Component<any,any>{
    constructor(props:any){
        super(props);
        this.state = {
            users:[]
        }
    }
    
    async componentDidMount(){
        const api_call = await axios.get("http://localhost:5000/api/values").then(users=>{
            this.setState({
                users:users.data
            });
        });
        //console.log(this.state.users);

    }

    render(){
        const users = this.state.users.length > 0 
        ? this.state.users.map((user:any,key:number)=>{
            return(
                <div key={key}>
                    <div>{user.id}</div>
                    <div>{user.name}</div>
                </div>
            )
        })
        : <div>No user available...</div>
    

        return(
            <div>
                <h4>Users</h4>
                {users}
            </div>
        )
    }
}


export default Users;