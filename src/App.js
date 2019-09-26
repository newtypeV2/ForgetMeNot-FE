import React, { useState } from 'react';
import MainContainer from './containers/mainContainer';
import Login from './containers/login';
import { Route, Switch, Redirect } from 'react-router-dom';
import './App.css';

function App() {
  const [user, setUser] = useState({});

  // const userSetter = (user) => {
  //   setUser
  // }
  console.log('User is',user)
  return (
    <div className="App">
      <Switch>
        <Route exact path = '/login' render = { () =>
          <Login 
            setUser = {setUser}
          />
        } />
        <Route exact path = '/app' render = { () =>
          user.id ?
          <MainContainer
            user = {user}
          />
          :
          <Redirect to = '/login' />
          } />
      </Switch>
    </div>
  );
}

export default App;
