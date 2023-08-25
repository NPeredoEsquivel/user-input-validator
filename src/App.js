import React, { useState } from "react";
import logo from "./logo.svg";
import AddUser from "./components/AddUser/AddUser";
import Card from "./UI/Card/Card";
import UserList from "./components/UserList/UserList";
import classes from "./App.module.scss";

function App() {
  const [users, setUsers] = useState([]);

  const onSubmit = (inputUser) => {
    setUsers((prevState) => {
      return [...prevState, inputUser];
    });
  };

  return (
    <Card className={classes["user-form-container"]}>
      <AddUser addUserHandler={onSubmit} />
      <UserList users={users} />
    </Card>
  );
}

export default App;
