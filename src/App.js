import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Main from './pages/main';
import CourseTitle from './pages/contents-coursetitle';
import Menutitle from './pages/contents-menutitle';
import Myinfo from './pages/myinfo';
import Mykitchen from './pages/mykitchen';
import Unregister from './pages/unregister';
import Unregister_yes from './pages/unregister_yes';
import Login from './Components/Login/Login';
import Nav from './Components/Nav/Nav';

function App() {
  const [AccessToken, setAccessToken] = useState('');
  const [IsLogin, setIsLogin] = useState(false);

  const getAccessToken = (token) => {
    setAccessToken(token);
    // console.log(AccessToken);
  };

  const loginHandler = (boolean) => {
    setIsLogin(boolean);
    // console.log(IsLogin);
  };

  return (
    <Router>
      <Nav IsLogin={IsLogin} loginHandler={loginHandler} />
      <Switch>
        <Route exact={true} path="/">
          <Main />
        </Route>
        <Route path="/course">
          <CourseTitle />
        </Route>
        <Route path="/recipe">
          <Menutitle />
        </Route>
        <Route path="/login">
          <Login getAccessToken={getAccessToken} loginHandler={loginHandler} />
        </Route>
        <Route path="/myinfo">
          <Myinfo />
        </Route>
        <Route path="/mykitchen">
          <Mykitchen />
        </Route>
        <Route path="/unregister">
          <Unregister />
        </Route>
        <Route path="/unregister_yes">
          <Unregister_yes />
        </Route>
        <Route path="/signup"></Route>
        {/* <Route path=""></Route>
        <Route path=""></Route> */}
      </Switch>
    </Router>
  );
}

export default App;
