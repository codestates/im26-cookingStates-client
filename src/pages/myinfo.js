import { withRouter, Link } from 'react-router-dom';

function Myinfo() {
  return (
    <>
      <h1> myinfo</h1>
      <Link to="unregister">회원 탈퇴 버튼</Link>
    </>
  );
}

export default withRouter(Myinfo);
