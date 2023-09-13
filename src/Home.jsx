import Sector from "./Sector";

const mockEmployees = [
  {
    id: 0,
    name: "mock",
    lastname: "mocklastname",
    position: "Manager",
  },
  {
    id: 1,
    name: "employee 1",
    lastname: "em",
    position: "Engineer",
  },
  {
    id: 2,
    name: "employee 2",
    lastname: "lord",
    position: "Designer",
  },
];

const Home = () => {
  return (
    <div className="home">
      <h1>
        Generatiom Thailand <br />
        React - Assessment
      </h1>
      <Sector />
    </div>
  );
};

export default Home;
