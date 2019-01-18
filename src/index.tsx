import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter ,Route,Link} from 'react-router-dom';

ReactDOM.render(
<BrowserRouter>
    <App />
</BrowserRouter>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();


// Some usefull git commands
// ---------------------------------------------------
// git add --all
// git commit -m "description of your commit" 
// git push origin your_new_branch 

//-----------------------------------------------------
// git push origin MyNewBranch 
// git checkout -b MyNewBranch 
// git add -p 
//  ---------------------------------------------------
// 1. git clone git_repo_url 
// 2. git pull origin master 
// 3. git checkout -b your_new_branch 
// 4. git add --all
// git commit -am "describe your changes" 
// 5. git push origin your_new_branch 
// -----------------------------------------------------


// automation resources
// 1. Install specflow template extention for visual studio
// 2. create a class library
// 3. add the following nuget packages
    // 	a. Specflow
    // 	b. SpecRun.SpecFlow
    // 	c. Selenium Web driver
    // 	d. Selenium Support
    // 	e. Selenium Chrome webdriver
    // 	f. Selenium Firefox webdriver
    // 	g. [.....other browsers if you want....]
    // 	h. NUnit
    // 	i. NUnit Runners