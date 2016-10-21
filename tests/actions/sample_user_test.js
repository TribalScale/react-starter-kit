import sinon from 'sinon';
import fetchMock from 'fetch-mock';
import expect from 'unexpected';

import * as asyncAction from '../../src/utils/async_action';
import { fetchSampleUser } from '../../src/actions/sample_user';

describe("Sample User Actions", () => {
  const context = {
    query: 'Random query'
  };
  let argObj;

  before(() => {
    const spy = sinon.spy(asyncAction, "default");

    fetchMock.get('*', {response: 'Sample User details'});
    fetchSampleUser(context);
    fetchMock.restore();

    argObj = spy.args[0][0];

  });

  it("should get an object argument with specific keys", () => {
    expect(argObj, 'to have keys', ['request_action', 'receive_action', 'endpoint', 'reducer', 'context']);
  });

  it("should have a request action property that is a function", () => {
    expect(argObj.request_action, 'to be a', 'function');
  });

  it("should have a receive action property that is a function", () => {
    expect(argObj.receive_action, 'to be a', 'function');
  });

  it("should have a specific endpoint", () => {
    expect(argObj.endpoint, 'to be', 'https://api.randomuser.me/?results=15');
  });

  it("should be associated with the user reducer", () => {
    expect(argObj.reducer, 'to be', 'user');
  });

  it("should have context property matching the argument passed to fetchSampleUser", function() {
    expect(argObj.context, 'to be', context);
  });
});
