import test from '../../src/domains/test';

describe('test.ts', () => {
  it('adds 1 + 2 to equal 3', () => {
    expect(test(1, 2)).toBe(3);
  });
});
