import unexpected from 'unexpected';
import unexpectedReact from 'unexpected-react';
import sinonObj from 'sinon';

export const expect = unexpected.clone().use(unexpectedReact);
export const sinon = sinonObj;
