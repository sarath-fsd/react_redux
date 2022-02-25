import React, { useState } from "react";
import { useDispatch } from "react-redux";

export default function UserForm() {
  const dispatch = useDispatch();

  const [userName, setUserName] = useState();
  const [role, setRole] = useState();

  const handleSave = (user) => {
    dispatch({
      type: "addUser",
      payload: {
        userName,
        role
      }
    });
  };

  return (
    <div className="pageContainer">
      <div>
        <label>User Name</label>
        <input
          type="text"
          onChange={(e) => setUserName(e.target.value)}
        ></input>
      </div>
      <div>
        <label>Role</label>
        <input type="text" onChange={(e) => setRole(e.target.value)}></input>
      </div>

      <div className="actions">
        <input type="button" value="Submit" onClick={handleSave}></input>
      </div>
    </div>
  );
}
