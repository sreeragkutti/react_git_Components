import React from 'react';
import {Logo} from './LogoSection/Logo';
import AppName from './AppName/AppName';
import './Header.css'

class Header extends React.Component{
    state={}

    render(){
        return(
            <React.Fragment>
                <div className="sample-header">
                    <Logo/>
                    <AppName/>
                </div>
                
            </React.Fragment>
        )
    }
}

export default Header;