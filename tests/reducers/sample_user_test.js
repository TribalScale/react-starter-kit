import reducer from  '../../src/reducers/sample_user.js'
import expect from 'unexpected';

import { REQUEST_USER, RECEIVE_USER } from '../../src/constants/action_types';

describe('Sample User Reducers', () => {

  it('should hande REQUEST_USER', () => {
    const expectedResult = {
      isFetching: true
    };
    expect(
      reducer({}, {
        type: REQUEST_USER
      }),
      'to equal',
      expectedResult
    );
  });

  it('should hande RECEIVE_USER', () => {
    const actionDate = Date.now();
    const result = {
      name: {
        first: "carter",
        last: "burns"
      },
      id: {
        name: "PPS",
        value: "1673499T"
      }
    };
    const expectedResult = {
      isFetching: false,
      lastUpdated: actionDate,
      list: [{
        id: encodeURIComponent(`${result.id.name}-${result.id.value}`.replace(/\./g, '')),
        name: `${result.name.first} ${result.name.last}`
      }]
    };

    expect(
      reducer({}, {
        type: RECEIVE_USER,
        receivedAt: actionDate,
        response: {
          results: [result]
        }
      }),
      'to equal',
      expectedResult
    );
  });
});
