import CourseList from "../Components/Main/CourseList";
import { withRouter } from "react-router-dom";

function main() {
  return (
    <>
      <CourseList />
    </>
  );
}

export default withRouter(main);
