import React from "react";

const UserTable = (props) => {
  const { no, fName, lName, email, address, role } = props;

  return (
    <tr>
      <td>{no}</td>
      <td>{role}</td>
      <td>{fName}</td>
      <td>{lName}</td>
      <td>{email}</td>
      <td>{address}</td>
    </tr>
  );
};

export default UserTable;
