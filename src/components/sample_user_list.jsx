import React from 'react';
import { Link } from 'react-router';

const sampleUserList = [
  { id: 'ADKJ12423', name: 'Sample User ADKJ' },
  { id: 'FWQW44524', name: 'Sample User FWQW' }
];

const SampleUserList = () => {
  const userList = [];

  if (sampleUserList.length > 0) {
    userList.push(sampleUserList.map(user => (
      <tr>
        <td><Link to={`/user/${user.id}`}>{user.id}</Link></td>
        <td>{user.name}</td>
      </tr>
    )));
  }

  return (
    <div>
      <h1>Sample Component - User List</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {userList}
        </tbody>
      </table>
    </div>
  );
};

export default SampleUserList;
