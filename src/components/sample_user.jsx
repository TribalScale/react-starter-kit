import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const SampleUser = ({ params: { id } }) => (
  <div>
    <h1>Sample user: {id}</h1>
    <Link to={'/users'}>Back to Sample User List</Link>
  </div>
);

SampleUser.propTypes = {
  params: PropTypes.shape({
    id: PropTypes.string.isRequired
  }).isRequired
};

export default SampleUser;
