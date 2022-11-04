import React from "react";

export default function UserTable() {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Username</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Name data</td>
            <td>Username data</td>
            <td>
              <button className="button muted-button">Edit</button>
              <button className="button muted-button">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>

      
    </div>
  );
}
