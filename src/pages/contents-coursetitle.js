import Nav from "../Components/Nav";
//import '/CSS/content-coursetitle';
import MenuList from "../Components/Course/MenuList";
import { withRouter } from "react-router-dom";

function CourseTitle() {
  return (
    <>
      <Nav />
      <MenuList />
    </>
  );
}

export default withRouter(CourseTitle);
