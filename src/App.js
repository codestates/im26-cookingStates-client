import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  withRouter,
} from "react-router-dom";
import Main from "./pages/main";
import CourseTitle from "./pages/contents-coursetitle";
import Menutitle from "./pages/contents-menutitle";
import Login from "./Components/Login/Login";

function App() {
  return (
    <Router>
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
          <Login />
        </Route>
        <Route path="/signup"></Route>
        <Route path="/myinfo"></Route>
        <Route path="/mykitchen"></Route>
        <Route path="/unregister"></Route>
        {/* <Route path=""></Route>
        <Route path=""></Route> */}
      </Switch>
    </Router>
  );
}

export default App;
