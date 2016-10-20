import asyncAction from '../utils/async_action';

export const REQUEST_USER = 'REQUEST_USER';
export const RECEIVE_USER = 'RECEIVE_USER';

function requestSampleUser(context) {
  return {
    type: REQUEST_USER,
    context
  };
}

function receiveSampleUser(context, json) {
  return {
    type: RECEIVE_USER,
    context,
    response: json,
    receivedAt: Date.now()
  };
}

export function fetchSampleUser(context) {
  const params = {
    request_action: requestSampleUser,
    receive_action: receiveSampleUser,
    endpoint: 'https://api.randomuser.me/?results=15',
    reducer: 'user',
    context
  };
  return asyncAction(params);
}
