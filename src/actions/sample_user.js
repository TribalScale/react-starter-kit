import asyncAction from '../utils/async_action';

export const REQUEST_USER = 'REQUEST_USER';
export const RECEIVE_USER = 'RECEIVE_USER';

function requestSampleUser(data) {
  return {
    type: REQUEST_USER,
    data
  };
}

function receiveSampleUser(data, json) {
  return {
    type: RECEIVE_USER,
    data,
    response: json,
    receivedAt: Date.now()
  };
}

export function fetchSampleUser(data) {
  const params = {
    request_action: requestSampleUser,
    receive_action: receiveSampleUser,
    endpoint: 'http://api.randomuser.me/?results=15',
    reducer: 'user',
    data
  };
  return asyncAction(params);
}
