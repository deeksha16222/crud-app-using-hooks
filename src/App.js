import React, { useState } from "react";
import "./App.css";
import UserTable from "./tables/UserTable";

function App() {
  const usersData = [
    { id: "1", name: "Deeksha", email: "db@gmail.com" },
    { id: "2", name: "Vineet", email: "vt@gmail.com" },
    { id: "3", name: "Krishna", email: "krish@gmail.com" },
  ];
  const [data, setData] = useState(usersData);
  return (
    <div className="container">
      <h1>CRUD App with Hooks</h1>
      <div className="flex-row">
        <div className="flex-large">
          <h2>Add user</h2>
        </div>
        <div className="flex-large">
          <h2>View users</h2>
          <UserTable users={data} />
        </div>
      </div>
    </div>
  );
}

export default App;
