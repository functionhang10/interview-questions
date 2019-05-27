var expect = require('chai').expect;
var bubble = require('./bubbleSort');
var selection = require('./selectionSort');
var quick = require('./quickSort');

const unsorted = [ 3, 9, 1, 100, 22, 8, 31, 23 ];

describe('Sorting Algorithms', () => {
  let unsorted = [];
  const expected = [ -5, 0, 1, 3, 8, 9, 22, 23, 31, 100]

  beforeEach('', () => {
    unsorted = [ 3, 9, 0, 1, 100, 22, -5, 8, 31, 23 ];
  });

  it('will sort by Bubble Sort', () => {
    const answer = bubble(unsorted);
    expect(answer).to.eql(expected);
  })

  it('will sort by Selection Sort', () => {
    const answer = selection(unsorted);
    expect(answer).to.eql(expected);
  })
  
  it('will sort by Quick Sort', () => {
    const answer = quick(unsorted);
    expect(answer).to.eql(expected);
  })
})