import { expect } from 'chai';
import { noop, partial } from './util';

describe('utility functions', () => {
  describe('noop function', () => {
    it('should return undefined', () => {
      expect(noop()).to.equal(undefined);
    });
  });

  describe('partial function', () => {
    it('should return a function', () => {
      expect(typeof partial(noop)).to.equal('function');
    });
  });
});
