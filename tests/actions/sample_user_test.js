import { testAsyncAction } from '../test_utils';

import { REQUEST_USER, RECEIVE_USER, fetchSampleUser } from '../../src/actions/sample_user';


// INFO: Sample to test async action.
// You can use the following approach if you are using async_action util in the app
const params = {
  testDescribe: 'Sample User Actions',
  actionMethod: fetchSampleUser,
  uri: 'https://api.randomuser.me',
  endpoint: '/?results=15',
  method: 'GET',
  returnsOnRequest: { type: REQUEST_USER, data: undefined },
  returnsOnReceive: { type: RECEIVE_USER, response: { hello: 'world' } }
};

testAsyncAction(params);
