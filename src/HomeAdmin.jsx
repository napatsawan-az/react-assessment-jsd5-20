import Nav from "./Nav";
import Sector from "./Sector";

const HomeAdmin = () => {
  return (
    <div>
      <Nav />
      <div className="home">
        <h1>
          Generatiom Thailand <br />
          Home - Admin Sector
        </h1>
        <Sector />
      </div>
      <div className="create-container">
        <div className="create-title">
          <h4>Create User Here</h4>
        </div>
        <div>
          <input type="text" placeholder="Name" />
          <input type="text" placeholder="Last Name" />
          <input type="text" placeholder="Position" />
          <button className="create-button">Save</button>
        </div>
      </div>
      <div className="table-container">
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Last Name</th>
              <th>Position</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>mock</td>
              <td>mock</td>
              <td>mock</td>
              <td className="delete">Delete</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default HomeAdmin;
