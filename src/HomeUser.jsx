import Nav from "./Nav";
import Sector from "./Sector";

const HomeUser = () => {
  return (
    <div>
      <Nav />
      <div className="home">
        <h1>
          Generatiom Thailand <br />
          Home - User Sector
        </h1>
        <Sector />
      </div>
      <div className="table-container">
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Last Name</th>
              <th>Position</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>mock</td>
              <td>mock</td>
              <td>mock</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default HomeUser;
