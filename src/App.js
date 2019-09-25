import React, { useState } from 'react';
import MainContainer from './containers/mainContainer';
import Login from './containers/login';
import { Route, Switch } from 'react-router-dom';
import './App.css';

function App() {
  const [user, setUser] = useState({});
  console.log('User is',user)
  return (
    <div className="App">
      <Switch>
        <Route exact path = '/login' render = { () =>
          <Login />
        } />
        <Route exact path = '/app' render = { () =>
          <MainContainer />
          } />
      </Switch>
    </div>
  );
}

export default App;
