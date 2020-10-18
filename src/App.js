import React from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import administrator from './pages/administrator';
import LoginPage from './pages/LoginPage'
import Programming from './pages/Programming';
import Profile from './pages/Profile';
import Process from './pages/Process';
import Roles from './pages/Roles';


function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={LoginPage}/>
          <Route exact path="/login" component={LoginPage}/>
          <Route exact path="/admin" component={administrator}/>
          <Route exact path="/Programming" component={Programming}/>
          <Route exact path="/Profile" component={Profile}/>
          <Route exact path="/Process" component={Process}/>
          <Route exact path="/Roles" component={Roles}/>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
