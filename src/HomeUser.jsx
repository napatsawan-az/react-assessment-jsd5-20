import { useEffect, useState } from "react";
import axios from "axios";

const HomeUser = () => {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(
        "https://jsd5-mock-backend.onrender.com/members"
      );
      setMembers(response.data);
    };
    getData();
  }, []);

  return (
    <div>
      <TableDisplay members={members} />
    </div>
  );
};

const TableDisplay = ({ members }) => {
  return (
    <div className="table-container">
      <table id="data-table" className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Last Name</th>
            <th>Position</th>
          </tr>
        </thead>
        <tbody>
          {members.map((member) => {
            return (
              <tr key={member.id}>
                <td>{member.name}</td>
                <td>{member.lastname}</td>
                <td>{member.position}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default HomeUser;
