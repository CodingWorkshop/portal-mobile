import test from '@/test.js';

describe('test.js', () => {
  it('adds 1 + 2 to equal 3', () => {
    expect(test(1, 2)).toBe(3);
  });
});
