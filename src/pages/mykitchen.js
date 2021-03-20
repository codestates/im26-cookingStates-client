import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
function Mykitchen() {
  return (
    <>
      <h1> mykitchen</h1>
      <Link to="/myinfo">내 정보</Link>
    </>
  );
}

export default withRouter(Mykitchen);
