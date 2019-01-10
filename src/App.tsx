import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import Body from './Components/Body/Body';
import Footer from './Components/Footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import SampleClassComponent from './ClassComponent/testClassComp'
import SampleFunctionalComp2, {SampleFunctionalComp } from './FunctionalComp/SampleFunctionalComponent'
import PureComponentSample from './Components/PureComponent/PureComponent'



class App extends Component {
  
  render() {
    let divStyle = {
       height:window.innerHeight
    }

    return (
      // <div className="App" style={divStyle}>
      //   {/* <SampleClassComponent Age={25} Name="sreeragkkkkkkkkkkkkkkkk" />
      //   <SampleFunctionalComp Text="sreerag" age={25}>Hello</SampleFunctionalComp>
      //   <SampleFunctionalComp2 Name="Sample name" Age={25}/> */}
      //   <Header/>
      //   <Body/>
      //   <Footer/>
      // </div>
      <div className="App" style={divStyle}>
        <PureComponentSample/>
      </div>
    );
  }
}

export default App;
