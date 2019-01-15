import React from 'react'
import axios from 'axios'
import DisplayWeather from './DisplayWeather'

const API_KEY = "f2db2154ba3ddf9a0f455b666d03bf94";


class Weather extends React.Component<any,any>{
    
    state = {
        City:undefined,
        Country:undefined,
        Description:undefined,
        Error:undefined
    }

    getWeather = async (event:any)=>{
        event.preventDefault();
        const country = event.target.country.value;
        const city = event.target.city.value;

        
        if(country && city){
            const api_call = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${API_KEY}`);
            //console.log(api_call);
            const data = await api_call.data;
            this.setState({
                City:data.name,
                Country:data.sys.country,
                Description:data.weather[0].description,
                Error:""
            });
        }
        else{
            this.setState({
                City:undefined,
                Country:undefined,
                Description:undefined,
                Error:"Please enter the value"
            });
        }
        

        console.log("state value",this.state);
    }


    render(){
        const lblRed = {
            color:"red"
        }
        return(
            <div>
                <h2>.......Weather status.......</h2>
                <div>
                    <form onSubmit={this.getWeather}>
                        <div><input type="text" name="country" placeholder="Country..."/></div>
                        <div><input type="text" name="city" placeholder="City..."/></div>
                        <button>Get Weather</button>
                    </form>
                    <div><div style={lblRed}>{this.state.Error}</div></div>
                    <div>
                        <DisplayWeather country={this.state.Country} city={this.state.City} description={this.state.Description}/>
                    </div>
                </div>
            </div>
        )
    }

}


export default Weather;