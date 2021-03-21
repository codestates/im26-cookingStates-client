import { withRouter } from "react-router-dom";
import Menu from "../Components/Course/Menu";
import MenuNav from "../Components/Course/MenuNav";

function Menutitle() {
  return (
    <>
      <MenuNav />
      <Menu />
    </>
  );
}

export default withRouter(Menutitle);
