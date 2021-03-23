import CourseList from "../Components/Main/CourseList";
import { withRouter } from "react-router-dom";
import API from "../api";
import { useSelector, useDispatch } from "react-redux";

function main() {
  return (
    <>
      <CourseList />
    </>
  );
}

export default withRouter(main);
