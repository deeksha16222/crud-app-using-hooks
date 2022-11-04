import React, { useState } from "react";
import "./App.css";
import UserTable from "./tables/UserTable";
import AddUserForm from "./forms/AddUserForm";
import EditUserForm from "./forms/EditUserForm";
function App() {
  const usersData = [
    { id: "1", name: "Deeksha", email: "db@gmail.com" },
    { id: "2", name: "Vineet", email: "vt@gmail.com" },
    { id: "3", name: "Krishna", email: "krish@gmail.com" },
  ];
  const initialFormState = { id: null, name: "", email: "" };
  const [data, setData] = useState(usersData);
  const [editing, setEditing] = useState(false);
  const [currentUser, setCurrentUser] = useState(initialFormState);
  const addUser = (user) => {
    user.id = data.length + 1;
    setData([...data, user]);
  };
  const deleteUser = (id) => {
    setData(data.filter((user) => user.id !== id));
  };
  const editRow = (user) => {
    setEditing(true);

    setCurrentUser({ id: user.id, name: user.name, email: user.email });
  };
  const updateUser = (id, updatedUser) => {
    setEditing(false);

    setData(data.map((user) => (user.id === id ? updatedUser : user)));
  };
  return (
    <div className="container">
      <h1>CRUD App with Hooks</h1>
      <div className="flex-row">
        <div className="flex-large">
          {editing ? (
            <div>
              <h2>Edit user</h2>
              <EditUserForm
                setEditing={setEditing}
                currentUser={currentUser}
                updateUser={updateUser}
              />
            </div>
          ) : (
            <div>
              <h2>Add user</h2>
              <AddUserForm addUser={addUser}/>
            </div>
          )}
        </div>
        <div className="flex-large">
          <h2>View users</h2>
          <UserTable users={data} editRow={editRow} deleteUser={deleteUser}/>
        </div>
      </div>
    </div>
  );
}

export default App;
