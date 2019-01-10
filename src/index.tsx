import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();


// Some usefull git commands
// ---------------------------------------------------
// git add 
// git commit -m "description of your commit" 
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