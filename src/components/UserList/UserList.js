import React from "react";
import classes from "./UserList.module.scss";
import Card from "../../UI/Card/Card";

export default function UserList({ users }) {
  return (
    <Card className={classes["user-list"]}>
      <table>
        <thead>
          <tr>
            <th>Username</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => {
            return (
              <tr key={user.userId}>
                <td>{user.username}</td>
                <td>{user.age}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Card>
  );
}
