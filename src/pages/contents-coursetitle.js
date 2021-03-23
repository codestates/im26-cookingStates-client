import MenuList from "../Components/Course/MenuList";
import { withRouter } from "react-router-dom";
import API from "../api";

function CourseTitle(props) {
  return (
    <>
      <MenuList />
    </>
  );
}

export default withRouter(CourseTitle);
