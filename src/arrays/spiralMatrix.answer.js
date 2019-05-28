const spiral = (arr) => {
  const output = [];
  
  output.push(...arr.shift());
  console.log(`-- matrix after shift() --`);
  console.log(output);
  console.log(arr);
  console.log('\n');

  output.push(...arr.map( ele => ele.pop()) );
  console.log(`-- matrix after pop() --`);
  console.log(output);
  console.log(arr);
  console.log('\n');

  output.push(...arr.pop().reverse());
  console.log(`-- matrix after pop().reverse() --`);
  console.log(output);
  console.log(arr);
  console.log('\n');

  output.push(...arr.map( ele => ele.shift()).reverse() );
  console.log(`-- matrix after shift().reverse() --`);
  console.log(output);
  console.log(arr);
  console.log('\n');

  return output;
}

module.exports = spiral;