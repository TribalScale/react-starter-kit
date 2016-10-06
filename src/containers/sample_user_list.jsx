import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  sampleUserList: (state && state.user && state.user.list) ? state.user.list : []
});

const SampleUserListContent = ({ sampleUserList }) => {
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

SampleUserListContent.propTypes = {
  sampleUserList: PropTypes.array.isRequired
};

const SampleUserList = connect(
  mapStateToProps
)(SampleUserListContent);


export default SampleUserList;
