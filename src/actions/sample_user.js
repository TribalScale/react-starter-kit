import asyncAction from '../utils/async_action';
import { REQUEST_USER, RECEIVE_USER } from '../constants/action_types';

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

export default function fetchSampleUser(context) {
  const params = {
    request_action: requestSampleUser,
    receive_action: receiveSampleUser,
    endpoint: 'https://api.randomuser.me/?results=15',
    reducer: 'user',
    context
  };
  return asyncAction(params);
}
