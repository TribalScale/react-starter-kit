import unexpected from 'unexpected';
import unexpectedReact from 'unexpected-react';
import fetchMockObj from 'fetch-mock';

export const expect = unexpected.clone().use(unexpectedReact);
export const fetchMock = fetchMockObj;

export const testAsyncAction = ({ testDescribe, actionMethod, uri, endpoint, method, returnsOnRequest, returnsOnReceive }) => {

  describe (testDescribe, function () {
    var responses = {};

    before((done) => {
      let isDone = false;
      setTimeout(() => {if(!isDone) {isDone=true; done()}}, 1900);
      const getState = () => ({users: 'foo'});

      //TODO: introduce support for other HTTP methods
      if(!method || method.toUpperCase() == 'GET') {
        fetchMock.get(`${uri}${endpoint}`, returnsOnReceive);
      }
      fetchMock.get('*', {response: 'Invalid Response'});

      actionMethod(returnsOnRequest.context)(
        (nextAction) => nextAction(actionResponse => {
          switch (actionResponse.type) {
            case returnsOnRequest.type:
              responses.onRequest = actionResponse;
              break;
            case returnsOnReceive.type:
              responses.onReceive = actionResponse;
              if(!isDone) {isDone=true; done();}
              break;
            default:
          }
        }),
        getState);
    });

    it('Should return a matching object on request action', function () {
      expect(responses.onRequest, 'to have properties', returnsOnRequest);
    });

    it('Should return a matching response on receive action', function () {
      expect(responses.onReceive.response, 'to have properties', returnsOnReceive);
    });

  });
}
