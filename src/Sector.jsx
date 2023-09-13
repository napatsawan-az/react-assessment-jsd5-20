import { Link } from "react-router-dom";

const Sector = () => {
  return (
    <div className="button-container">
    <Link to="/homeuser">
      <button className="button">User Home Sector</button>
    </Link>
    <Link to="/homeadmin">
      <button className="button">Admin Home Sector</button>
    </Link>
  </div>
  )
}

export default Sector