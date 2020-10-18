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
          <Route path="/login" component={LoginPage}/>
          <Route path="/admin" component={administrator}/>
          <Route component={Programming}/>
          <Route path="/Profile" component={Profile}/>
          <Route path="/Process" component={Process}/>
          <Route path="/Roles" component={Roles}/>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
