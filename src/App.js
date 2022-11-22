import React, { useState } from "react";
import "../src/styles/App.css";
import "../src/styles/index.css";
import Header from "../src/pages/Header";
import Login from "../src/pages/Login/Login";
import Map from "../src/pages/Map/Map";
import Profile from "../src/pages/Profile/Profile";
import Registration from "../src/pages/Registation/Registration";

function App() {
  const [page, setPage] = useState("REGISTRATION");
  const onPageChange = (e) => {
    e.preventDefault();

    setPage(e.target.name);
  };

  return (
    <div className="app">
      <Header onPageChange={onPageChange} />
      {
        {
          LOGIN: <Login onPageChange={onPageChange} />,
          REGISTRATION: <Registration onPageChange={onPageChange} />,
          MAP: <Map />,
          PROFILE: <Profile />,
        }[page]
      }
    </div>
  );
}

export default App;
