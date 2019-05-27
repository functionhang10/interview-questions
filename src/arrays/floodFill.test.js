"use strict";

var expect = require("chai").expect;
var floodFill = require('./floodFill');
// import floodFill from './floodFill';

describe('Flood Fill', function () {
  var image = [];
  beforeEach('', function () {
    image = [
      [2, 1, 1, 1, 1, 2, 1, 1], 
      [1, 1, 2, 2, 1, 1, 1, 1], 
      [1, 1, 2, 2, 1, 1, 1, 1], 
      [1, 1, 2, 2, 1, 1, 1, 1], 
      [2, 2, 2, 2, 2, 2, 1, 1], 
      [2, 2, 1, 1, 2, 2, 1, 1]];
  });

  it('will change the 2s in the middle', function () {
    var expected = [
      [2, 1, 1, 1, 1, 2, 1, 1], 
      [1, 1, 5, 5, 1, 1, 1, 1], 
      [1, 1, 5, 5, 1, 1, 1, 1], 
      [1, 1, 5, 5, 1, 1, 1, 1], 
      [5, 5, 5, 5, 5, 5, 1, 1], 
      [5, 5, 1, 1, 5, 5, 1, 1]];

    const modifiedImage = floodFill(image, 3, 3, 5);
    expect(modifiedImage).to.eql(expected);
  });
  it('will change the 2 by itself', function () {
    var expected = [
      [2, 1, 1, 1, 1, 8, 1, 1], 
      [1, 1, 2, 2, 1, 1, 1, 1], 
      [1, 1, 2, 2, 1, 1, 1, 1], 
      [1, 1, 2, 2, 1, 1, 1, 1], 
      [2, 2, 2, 2, 2, 2, 1, 1], 
      [2, 2, 1, 1, 2, 2, 1, 1]];

    const modifiedImage = floodFill(image, 0, 5, 8);
    expect(modifiedImage).to.eql(expected);
  });
  it('will change the connecting 1s', function () {
    var expected = [
      [2, 4, 4, 4, 4, 2, 4, 4], 
      [4, 4, 2, 2, 4, 4, 4, 4], 
      [4, 4, 2, 2, 4, 4, 4, 4], 
      [4, 4, 2, 2, 4, 4, 4, 4], 
      [2, 2, 2, 2, 2, 2, 4, 4], 
      [2, 2, 1, 1, 2, 2, 4, 4]];

    const modifiedImage = floodFill(image, 0, 2, 4);
    expect(modifiedImage).to.eql(expected);
  });
});