var expect = require('chai').expect;

var sumInArray = require('./sumInArray');
var sum3InArray = require('./sum3InArray');

describe('Sums in Array', () => {
  it('will return multiple sums', () => {
    const arr = [7, 0, -4, 5, 2, 3];
    const expected = [[0, 5], [2, 3]];

    const answer = sumInArray(arr, 5);
    expect(answer).to.eql(expected);
  });

  it('will return 3 numbers that sum to 0', () => {
    const arr = [12, 3, 1, 2, -6, 5, -8, 6];
    const expected = [ [-8, 2, 6], [-8, 3, 5], [ -6, 1, 5] ];

    const answer = sum3InArray(arr, 0); 
    expect(answer).to.eql(expected);
  })
});