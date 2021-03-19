import Nav from "../Components/Nav";
import { withRouter } from "react-router-dom";

function Menutitle() {
  return (
    <>
      <Nav />
      <h1> 레시피 상세 페이지</h1>
    </>
  );
}

export default withRouter(Menutitle);
