import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Main from "./pages/main";
import CourseTitle from "./pages/contents-coursetitle";
import Menutitle from "./pages/contents-menutitle";
import Myinfo from "./pages/myinfo";
import Mykitchen from "./pages/mykitchen";
import Unregister from "./pages/unregister";
import UnregisterYes from "./pages/unregister_yes";
import Login from "./Components/Login/Login";
import Nav from "./Components/Nav/Nav";
import Menu from "./pages/Menu";
import Welcome from "./pages/welcome";
import Signup from "./pages/Signup";
import Test from "./pages/Test";
import CustomRecipe from "./pages/CustomRecipe";

function App() {
  const [AccessToken, setAccessToken] = useState("");
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
          <Login
            getAccessToken={getAccessToken}
            IsLogin={IsLogin}
            loginHandler={loginHandler}
          />
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
          <UnregisterYes />
        </Route>
        <Route path="/welcome">
          <Welcome />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
        <Route path="/test">
          <Test />
        </Route>
        <Route path="/customRecipe">
          <CustomRecipe />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
