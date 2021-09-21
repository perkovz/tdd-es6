import { expect } from 'chai';
import { isAnagram } from './anagrams';

describe('isAnagram - basic functionality', () => {

  // are anagrams
  // ex. 'elbow' 'below'
  it('return true when two known anagrams are passed in', () => {
    const expected = true;
    const actual = isAnagram('listen', 'silent');
    expect(actual).to.equal(expected);
  });

  // not anagrams
  // ex. 'elbows' 'below'
  it('returns false when either of the strings has extra letters', () => {
    const expected = false;
    const actual = isAnagram('elbows', 'below');
    expect(actual).to.equal(expected);

    const actual2 = isAnagram('below', 'elbows');
    expect(actual2).to.equal(expected);
  });

  // not anagrams
  // ex.  'listens' 'silent'
  it('returns false when the strings have the same letters in different quantities', () => {
    const expected = false;
    const actual = isAnagram('listens', 'silent');
    expect(actual).to.equal(expected);
  });
});