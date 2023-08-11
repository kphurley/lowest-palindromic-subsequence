const expect = require('expect.js');

const { lps } = require('./lps');

describe('Coins', () => {
  it('returns 5, for an input of "GEEKSFORGEEKS"', () => {
    expect(lps("GEEKSFORGEEKS")).to.equal(5);
  });

  it('returns 7, for an input of "BBABCBCAB"', () => {
    expect(lps("BBABCBCAB")).to.equal(7);
  });
});
