import React from "react";
import Nav from "./Component/Nav";
import HomeUser from "./Page/HomeUser";
import HomeAdmin from "./Page/HomeAdmin";
import { useState } from "react";
import "./App.css";

const App = () => {
  const [sector, setSector] = useState();

  const getTitle = () => {
    if (sector === "user") {
      return "Home - User Sector";
    } else if (sector === "admin") {
      return "Home - Admin Sector";
    } else {
      return "React - Assessment";
    }
  };

  const sectorDisplay = () => {
    if (sector === "user") {
      return <HomeUser />;
    } else if (sector === "admin") {
      return <HomeAdmin />;
    } else {
      return <div></div>;
    }
  };

  return (
    <div>
      <Nav />
      <div className="home">
        <h1>
          Generatiom Thailand <br />
          <span>{getTitle()}</span>
        </h1>
        <div className="button-container">
          <button className="button" onClick={() => setSector("user")}>
            User Home Sector
          </button>
          <button className="button" onClick={() => setSector("admin")}>
            Admin Home Sector
          </button>
        </div>
        {sectorDisplay()}
      </div>
    </div>
  );
};

export default App;
