import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="nav">
    <Link to="/">
      <p>Home</p>
    </Link>
    <Link to="/owner">
      <p>Owner</p>
    </Link>
      {/* <a href={"/"}>Home</a>
      <a href={"/owner"}>Owner</a> */}
    </div>
  )
}

export default Nav