const spiral = (arr) => {
  const output = [];
  
  while (arr.length) {
    output.push(...arr.shift());
    output.push(...arr.map( ele => ele.pop()) );
    output.push(...arr.pop().reverse());
    output.push(...arr.map( ele => ele.shift()).reverse() );
  }
  return output;
}

module.exports = spiral;