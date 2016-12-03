import { expect } from 'chai';
import { main } from './main';

describe('main function', () => {
  it('should return zero', () => {
    expect(main()).to.equal(0);
  });
});
