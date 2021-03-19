import Nav from "../Components/Nav";
import CourseList from "../Components/Main/CourseList";
import { withRouter } from "react-router-dom";

function main() {
  return (
    <>
      <Nav />
      <CourseList />
    </>
  );
}

export default withRouter(main);
