import React from 'react'
import Min from './Min'
import Sec from './Sec'
import Hrs from './Hrs'

class Clock extends React.PureComponent{
    state = {
        min:0,
        sec:0, 
        hrs:0,
        day:"sun"
    }
    componentDidMount(){
        setInterval(()=>{
           let _sec = this.state.sec;
           let _min = this.state.min;
           let _hrs = this.state.hrs;
           if((_sec+1) > 5){
               _sec = 0;
               if((_min+1) >5){
                    _min = 0;
                    if((_hrs+1) >5){
                        _hrs = 0;
                    }
                    else{
                        _hrs = _hrs+1;
                    }
                }
                else{
                    _min = _min+1;
                }
           }
           else{
            _sec = _sec+1;
            
           }

           
            this.setState(()=>{
                return {
                    sec:_sec,
                    min:_min,
                    hrs:_hrs
                    // day:"mon"
                    
                }
            });
        },1000);
    }


    render(){
        console.log("Time");
        return(
            <React.Fragment>
                    <h2>Pure Component Sample</h2>
                    <Hrs hrs={this.state.hrs}/>
                    <Min min={this.state.min}/>
                    <Sec sec={this.state.sec}/>
            </React.Fragment>
        )
    }
}

export default Clock;