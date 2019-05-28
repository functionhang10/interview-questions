var expect = require('chai').expect;
var spiral = require('./spiralMatrix');

describe('Spiral Matrix', () => {
  it('will print the matrix', () => {
    const arr = [
      [1, 2, 3, 4],
      [5, 6, 7, 8],
      [9, 10, 11, 12],
      [13, 14, 15, 16]
    ];
    const expected = [1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 9, 5, 6, 7, 11, 10];
    const answer = spiral(arr);
    expect(answer).to.eql(expected);
  })
})