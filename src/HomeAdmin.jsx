import { useEffect, useState } from "react";
import axios from "axios";

const HomeAdmin = () => {
  const [members, setMembers] = useState([]);
  const [reload, setReload] = useState(false);

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(
        "https://jsd5-mock-backend.onrender.com/members"
      );
      setMembers(response.data);
    };
    getData();
  }, [reload]);

  const createData = async (name, lastname, position) => {
    const requestData = {
      name: name,
      lastname: lastname,
      position: position,
    };
    const response = await axios.post(
      "https://jsd5-mock-backend.onrender.com/members",
      requestData
    );

    if (response.status === 200) {
      setReload(!reload);
    }

    console.log("created successfully!", response);
  };

  const deleteData = async (id) => {
    const response = await axios.delete(
      `https://jsd5-mock-backend.onrender.com/member/${id}`
    );

    if (response.status === 200) {
      setReload(!reload);
    }

    console.log("deleted successfully!", response);
  };

  return (
    <div>
      <CreateForm createData={createData} />
      <TableDisplay members={members} deleteData={deleteData} />
    </div>
  );
};

const CreateForm = ({ createData }) => {
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [position, setPosition] = useState("");

  const submitHandle = () => {
    createData(name, lastname, position);

    setName("");
    setLastname("");
    setPosition("");
  };

  return (
    <div className="create-container">
      <h2>Create User Here</h2>
      <div>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <input
          type="text"
          id="lastName"
          name="lastName"
          placeholder="Last Name"
          value={lastname}
          onChange={(event) => setLastname(event.target.value)}
        />
        <input
          type="text"
          id="position"
          name="position"
          placeholder="Position"
          value={position}
          onChange={(event) => setPosition(event.target.value)}
        />
        <button className="create-button" onClick={submitHandle}>
          Save
        </button>
      </div>
    </div>
  );
};

const TableDisplay = ({ members, deleteData }) => {
  return (
    <div className="table-container">
      <table id="data-table" className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Last Name</th>
            <th>Position</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {members.map((member) => {
            return (
              <tr key={member.id}>
                <td>{member.name}</td>
                <td>{member.lastname}</td>
                <td>{member.position}</td>
                <td>
                  <button
                    className="delete"
                    onClick={() => deleteData(member.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default HomeAdmin;
