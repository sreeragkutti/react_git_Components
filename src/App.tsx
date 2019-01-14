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
import ClockApp from './Components/PureComponent/Time'
import { Route } from 'react-router';
import {Link} from 'react-router-dom';

import RComp from './Components/Routing/RComponents'



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

        {/* <SampleClassComponent Age={25} Name="sreeragkkk" />
        <SampleFunctionalComp Text="sreerag" age={25}>Hello</SampleFunctionalComp>
        <SampleFunctionalComp2 Name="Sample name" Age={25}/> */}
        {/* <Header/>
        <Body/>
        <Footer/>
        <PureComponentSample/> */}


        {/* <PureComponentSample/> */}
        {/* <ClockApp/> */}

        <ul className="ul-nav">
          <li><Link to="/body">Body</Link></li>
          <li><Link to="/header">Header</Link></li>
          <li><Link to="/footer">Footer</Link></li>
          <li><Link to="/purecompsample">PureComponent sample</Link></li>
          <li><Link to="/clockapp">clock app</Link></li>

          <li><Link to="/one/120">One</Link></li>
          <li><Link to="/two">Two</Link></li>
          <li><Link to="/three">Three</Link></li>
        </ul>

        <Route component={Body} path="/body"/>
        <Route component={Header} path="/header"/>
        <Route component={Footer} path="/footer"/>
        <Route component={PureComponentSample} path="/purecompsample"/>
        <Route component={ClockApp} path="/clockapp"/>

        <Route component={RComp.One} path="/one/:id"/>
        <Route component={RComp.Two} path="/two"/>
        <Route component={RComp.Three} path="/three"/>
      </div>
    );
  }
}

export default App;
