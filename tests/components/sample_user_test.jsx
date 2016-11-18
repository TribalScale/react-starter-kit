import React from 'react';
import { shallow, mount, render } from 'enzyme';

import unexpected from 'unexpected';
import unexpectedReact from 'unexpected-react';

import SampleUser from '../../src/components/sample_user';

const expect = unexpected.clone().use(unexpectedReact);

describe('Sample User Component', function () {
  const props = {params: {id: 'someRandomId'}};
  it('Should have sample user with test id - someRandomId', function () {
    expect (
      shallow (
        <SampleUser {...props} />
      ).html(),
      'to contain',
      '<h1>Sample user: someRandomId</h1>'
    );
  });

//NOTE: shallow.renderer was not mentioned documentation yet
  it('Should have sample user with test id - someRandomId (in Virtual DOM)', function () {
    expect (
      shallow (
        <SampleUser {...props} />
      ).renderer,
      'to contain',
      (
        <h1>Sample user: someRandomId</h1>
      )
    );
  });
});
