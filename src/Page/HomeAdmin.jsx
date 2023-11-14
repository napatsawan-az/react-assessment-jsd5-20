import { useEffect, useState } from "react";
import axios from "axios";

const HomeAdmin = () => {
  const [members, setMembers] = useState([]);
  const [selectMember, setSelectMember] = useState(null);
  const [reload, setReload] = useState(false);

  // Get Data
  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(
        "https://jsd5-mock-backend.onrender.com/members"
      );
      setMembers(response.data);
    };
    getData();
  }, [reload]);

  // CreateData
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
      console.log("created successfully!", response);
    }
  };

  // Update Data
  const updateData = async (id, name, lastname, position) => {
    const requestData = {
      id: id,
      name: name,
      lastname: lastname,
      position: position,
    };
    const response = await axios.put(
      "https://jsd5-mock-backend.onrender.com/members",
      requestData
    );

    if (response.status === 200) {
      setReload(!reload);
      setSelectMember(null);
      console.log("updated successfully!", response);
    }
  };

  // Delete Data
  const deleteData = async (id) => {
    const response = await axios.delete(
      `https://jsd5-mock-backend.onrender.com/member/${id}`
    );

    if (response.status === 200) {
      setReload(!reload);
      console.log("deleted successfully!", response);
    }
  };

  return (
    <div>
      <CreateForm createData={createData} />
      <UpdateForm selectMember={selectMember} updateData={updateData} />
      <TableDisplay
        members={members}
        deleteData={deleteData}
        // updateData={updateData}
        updateData={(id) => {
          const member = members.find((member) => member.id === id);
          setSelectMember(member);
        }}
      />
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

const UpdateForm = ({ selectMember, updateData }) => {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [position, setPosition] = useState("");

  useEffect(() => {
    if (selectMember) {
      setId(selectMember.id);
      setName(selectMember.name);
      setLastname(selectMember.lastname);
      setPosition(selectMember.position);
    }
  }, [selectMember]);

  const submitHandle = () => {
    updateData(id, name, lastname, position);

    setId("");
    setName("");
    setLastname("");
    setPosition("");
  };

  return (
    <div>
      <div className="create-container">
        <h2>Update Data Here</h2>
        <div>
          <input
            type="text"
            id="id"
            name="id"
            placeholder="ID"
            value={id}
            onChange={(event) => setId(event.target.value)}
          />
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
    </div>
  );
};

const TableDisplay = ({ members, deleteData, updateData }) => {
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
                  <button
                    className="update"
                    onClick={() => updateData(member.id)}
                  >
                    Update
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
