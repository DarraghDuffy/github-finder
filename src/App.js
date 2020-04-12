import React from 'react';
import Navbar from './components/layout/Navbar';
import Home from './components/Home';
import NotFound from './components/layout/NotFound';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Alert from './components/layout/Alert';
import About from './components/layout/About';
import GithubState from './context/github/GithubState';
import AlertState from './context/alert/AlertState';

import UserInfo from './components/users/UserInfo';
import './App.css';

const App = () => {
  return (
    <GithubState>
      <Router>
        <div>
          <Navbar></Navbar>
          <div className='container'>
            <AlertState>
              <Alert alert={alert}> </Alert>
              <Switch>
                <Route exact path='/' component={Home}></Route>
                <Route exact path='/About' component={About}></Route>
                <Route exact path='/user/:login' component={UserInfo}></Route>
                <Route component={NotFound}></Route>
              </Switch>
            </AlertState>
          </div>
        </div>
      </Router>
    </GithubState>
  );
};

export default App;
