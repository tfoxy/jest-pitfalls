import * as barModule from './bar';
import * as fooModule from './foo';

describe('bar', () => {
  it('should return foo', () => {
    expect(barModule.bar()).toEqual('foo');
  });

  describe('with mocked foo', () => {
    let foo: jest.SpyInstance<ReturnType<typeof fooModule.foo>, []>;

    beforeEach(() => {
      foo = jest.spyOn(fooModule, 'foo').mockReturnValue('bar');
    });

    afterEach(() => {
      foo.mockRestore();
    });

    it('should return what foo returns', () => {
      expect(barModule.bar()).toEqual('bar');
    });
  });

  it('should return foo again', () => {
    expect(barModule.bar()).toEqual('foo');
  });
});
