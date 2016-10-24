import { REQUEST_USER, RECEIVE_USER } from '../constants/action_types';

const getUserList = (response) => {
  const userList = [];
  if (response && response.results) {
    response.results.forEach((user) => {
      if (user.id && user.id.name && user.id.value
      && user.name && user.name.first && user.name.last) {
        userList.push({
          id: encodeURIComponent(`${user.id.name}-${user.id.value}`.replace(/\./g, '')),
          name: `${user.name.first} ${user.name.last}`
        });
      }
    });
  }
  return userList;
};

export default (state = {}, action) => {
  switch (action.type) {
    case REQUEST_USER:
      return Object.assign({}, state, {
        isFetching: true
      });
    case RECEIVE_USER:
      return Object.assign({}, state, {
        isFetching: false,
        lastUpdated: action.receivedAt,
        list: getUserList(action.response)
      });
    default:
      return state;
  }
};
