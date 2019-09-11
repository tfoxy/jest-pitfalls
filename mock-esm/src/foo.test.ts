import * as fooModule from './foo';

describe('foo', () => {
  it('should return foo', () => {
    expect(fooModule.foo()).toEqual('foo');
  });
});
